import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import https from 'https';

const systemPrompt = `You are Shrishail AI, a professional AI portfolio assistant for Shrishail Mallappa Hebballi.
Your job is to answer questions from recruiters, hiring managers, and portfolio visitors about Shrishail's background, education, projects, technical skills, internships, resume, and contact information.

FACTUAL CONTEXT ABOUT SHRISHAIL MALLAPPA HEBBALLI:
- Name: Shrishail Mallappa Hebballi
- Role: AI & Data Science Undergraduate / Engineer
- College: B.M.S. College of Engineering, Bengaluru (B.E. in Artificial Intelligence & Data Science, Class of 2028, CGPA: 8.28 / 10)
- Pre-University (Class XII): Prerana PU College, Hubballi (93.00% | 2024)
- High School (Class X): S G Shintri English Medium School (95.68% | 2022)
- Location: Bengaluru, Karnataka, India

FLAGSHIP PROJECT #1: AegisCR — AI Credit Underwriting & Collateral Intelligence Platform
- Description: End-to-end AI credit underwriting platform converting borrower documents and Karnataka land records into explainable lending decisions using OCR, collateral valuation, fraud detection, ML risk scoring, and automated reporting.
- Key Capabilities: Sourced ~250 Karnataka government land-record PDFs (Bhoomi RTC/Pahani & Kaveri e-Registration), Google Cloud Vision OCR for multi-document extraction, land guidance rate retrieval, cross-document fuzzy identity matching & fraud graph scoring, XGBoost credit default prediction ensemble, SHAP explainable AI risk factor waterfalls, deterministic compliance overrides, automated PDF sanction generation, live Gold Pricing API integration, Vehicle RTO APIs, and Groq LLM underwriting copilot.
- Supported Loan Products: 6 Loan Products (Home, Agriculture, Commercial, Gold, Farm Equipment, Vehicle Loans).
- Interfaces: 3 Role-Based Interfaces (Customer Portal, Employee Portal, Loan Officer Dashboard).
- Live Demo: https://aegiscr-5.onrender.com
- GitHub: https://github.com/shrishailad24/AegisCR

FLAGSHIP PROJECT #2: AAROHA — Human Operating System
- Description: Centralized personal AI decision platform unifying career progress, education tracking, personal finance optimization, health, and life decision analytics.
- Tech Stack: Flutter & Dart cross-platform mobile application (30+ Dart screens across 5 Portals) backed by a FastAPI AI decision server running on port 8002.
- GitHub: https://github.com/shrishailad24/AAROHA-HUMAN-0S

SECONDARY PROJECTS & EXPERIMENTS:
- Business KPI Analytics Dashboards: Interactive Tableau & SQL dashboards for customer churn, sales funnel KPIs, and commercial financial insights (https://github.com/shrishailad24/FUTURE_DS_03).
- Movie Preference Vector Engine: Content-based recommendation model using TF-IDF vectorization & Cosine Similarity over metadata descriptors.
- Age & Gender Face Classifier: Real-time face detection & multi-task classification using OpenCV camera streams & pre-trained deep Caffe neural networks.
- Tesseract OCR Text Extraction: OpenCV preprocessed image OCR pipeline evaluating financial documents (95%+ average OCR field confidence score).
- Credit Risk Scoring Engine: Tabular machine learning model evaluated on an 80/20 train-test split achieving 88.5% test accuracy.

INDUSTRY EXPERIENCE:
1. FlyRank AI — AI/ML Internship Trainee (July 2026 – Present)
   - Built machine-learning models and evaluation pipelines through industry project-centric engineering paradigms.
   - Applied Python, Scikit-learn, and data preprocessing techniques across predictive modeling and real-world ML workflows.
2. Future Interns — Data Science & Analytics Intern (June – July 2026)
   - Executed Exploratory Data Analysis (EDA) pipelines on commercial datasets to extract actionable business insights.
   - Developed interactive Tableau dashboards featuring KPI tracking, customer churn analysis, and sales funnel metrics.

TECHNICAL CAPABILITIES:
- Languages: Python, SQL, JavaScript, Dart, HTML/CSS
- Machine Learning & AI: Scikit-learn, XGBoost, OpenCV, Caffe DNN, NLP, Generative AI / LLMs (Groq, OpenAI)
- Backend & Frameworks: FastAPI, Flutter, REST APIs, React.js, Streamlit, Firebase
- Data & Analytics: Pandas, NumPy, MySQL, MongoDB, Tableau
- Document AI: Google Cloud Vision OCR, PDF processing, Vector Search
- Developer Tools: Git, GitHub, VS Code, Render

CONTACT & RESUME:
- Email: shrishailmhebballi@gmail.com
- LinkedIn: https://www.linkedin.com/in/shrishail-mallappa-hebballi-b33b19375
- GitHub: https://github.com/shrishailad24
- Resume PDF: Available directly on the portfolio website for download.

BEHAVIORAL DIRECTIVES:
1. Be polite, concise, professional, and enthusiastic about Shrishail's work.
2. Rely strictly on factual information provided above. NEVER invent achievements, companies, metrics, accuracy claims, or experience not mentioned.
3. If asked an off-topic or unrelated question (e.g., weather, general trivia, politics), give a brief polite response and naturally guide the user back to Shrishail's AI engineering portfolio, projects like AegisCR or AAROHA, or hiring information.
4. Format your responses with clean Markdown (bullet points, bold text, code tags) for easy reading.`;

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');

  return {
    plugins: [
      react(),
      {
        name: 'groq-chat-api',
        configureServer(server) {
          server.middlewares.use('/api/chat', async (req, res) => {
            if (req.method !== 'POST') {
              res.statusCode = 405;
              res.end(JSON.stringify({ error: 'Method not allowed' }));
              return;
            }

            let body = '';
            req.on('data', chunk => { body += chunk; });
            req.on('end', async () => {
              try {
                const { messages } = JSON.parse(body || '{}');
                const rawKey = env.GROQ_API_KEY || process.env.GROQ_API_KEY || env.GROQ_KEY || process.env.GROQ_KEY;
                const apiKey = rawKey ? rawKey.trim().replace(/^["']|["']$/g, '') : null;

                if (!apiKey) {
                  res.statusCode = 500;
                  res.setHeader('Content-Type', 'application/json');
                  res.end(JSON.stringify({ error: 'GROQ_API_KEY is not configured on the server.' }));
                  return;
                }

                const recentMessages = Array.isArray(messages) ? messages.slice(-6) : [];
                const formattedMessages = [
                  { role: 'system', content: systemPrompt },
                  ...recentMessages.map(m => ({
                    role: m.sender === 'user' ? 'user' : 'assistant',
                    content: m.text
                  }))
                ];

                const primaryModel = (env.GROQ_MODEL || process.env.GROQ_MODEL || 'qwen/qwen3.8-27b').trim().replace(/^["']|["']$/g, '');
                const candidateModels = Array.from(new Set([
                  primaryModel,
                  'qwen/qwen3.8-27b',
                  'groq/compound',
                  'allam-2-7b',
                  'openai/gpt-oss-20b'
                ]));

                let lastStatus = 500;
                let lastErrorMessage = '';
                let responseData = null;

                for (const modelCandidate of candidateModels) {
                  for (let attempt = 0; attempt < 2; attempt++) {
                    try {
                      const groqPayload = JSON.stringify({
                        model: modelCandidate,
                        messages: formattedMessages,
                        temperature: 0.5,
                        max_tokens: 768
                      });

                      const fetchRes = await fetch('https://api.groq.com/openai/v1/chat/completions', {
                        method: 'POST',
                        headers: {
                          'Authorization': `Bearer ${apiKey}`,
                          'Content-Type': 'application/json'
                        },
                        body: groqPayload
                      });

                      lastStatus = fetchRes.status;
                      const data = await fetchRes.json().catch(() => ({}));

                      if (fetchRes.ok && data.choices?.[0]?.message?.content) {
                        responseData = data;
                        break;
                      }

                      if (fetchRes.status === 429) {
                        lastErrorMessage = data.error?.message || 'Rate limit reached on Groq';
                        if (attempt === 0) {
                          await new Promise(r => setTimeout(r, 750));
                          continue;
                        }
                        break;
                      }

                      lastErrorMessage = data.error?.message || `Groq error (${fetchRes.status})`;
                      break;
                    } catch (err) {
                      lastErrorMessage = err?.message || 'Network error';
                      break;
                    }
                  }
                  if (responseData) break;
                }

                res.setHeader('Content-Type', 'application/json');

                if (responseData) {
                  const reply = responseData.choices?.[0]?.message?.content || "I'm sorry, I couldn't generate a response.";
                  res.statusCode = 200;
                  res.end(JSON.stringify({ reply }));
                  return;
                }

                if (lastStatus === 429) {
                  res.statusCode = 429;
                  res.end(JSON.stringify({
                    error: 'Shrishail AI is currently handling high visitor volume. Please wait a moment and click Retry.',
                    isRateLimit: true,
                    retryAfter: 5
                  }));
                  return;
                }

                res.statusCode = lastStatus || 500;
                res.end(JSON.stringify({ error: lastErrorMessage || 'AI service error.' }));

              } catch (err) {
                res.statusCode = 400;
                res.setHeader('Content-Type', 'application/json');
                res.end(JSON.stringify({ error: 'Invalid JSON request payload.' }));
              }
            });
          });
        }
      }
    ]
  };
});
