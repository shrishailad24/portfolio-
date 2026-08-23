import React, { useState, useEffect, useRef } from 'react';
import { Bot, Send, Sparkles, X, RotateCcw, AlertTriangle, Loader2 } from 'lucide-react';

export default function AskShrishailAI() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { sender: 'ai', text: "Hello! I am Shrishail's AI Assistant powered by Groq Llama 3.3. Ask me anything about his projects (AegisCR, AAROHA), technical capabilities, education, or internship experience!" }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState(null);
  const messagesEndRef = useRef(null);
  const textareaRef = useRef(null);

  const sampleQuestions = [
    "Tell me about AegisCR & its land OCR pipeline",
    "What is AAROHA & its tech stack?",
    "What technologies does Shrishail know?",
    "Why should we hire Shrishail for AI roles?",
    "What is his education & CGPA at BMSCE?"
  ];

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isLoading, isOpen]);

  const handleSend = async (textToSend) => {
    const query = (textToSend || input).trim();
    if (!query || isLoading) return;

    setErrorMsg(null);
    const userMsg = { sender: 'user', text: query };
    const updatedMessages = [...messages, userMsg];

    setMessages(updatedMessages);
    if (!textToSend) setInput('');
    setIsLoading(true);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ messages: updatedMessages })
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || `HTTP error ${response.status}`);
      }

      setMessages((prev) => [...prev, { sender: 'ai', text: data.reply }]);
    } catch (err) {
      console.error('Chat API Failure:', err);
      setErrorMsg(err.message || 'Network error connecting to Shrishail AI service.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleRetry = () => {
    if (messages.length > 0) {
      const lastUserMsg = [...messages].reverse().find(m => m.sender === 'user');
      if (lastUserMsg) {
        handleSend(lastUserMsg.text);
      }
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <>
      {/* Floating Trigger Button */}
      <button onClick={() => setIsOpen(true)} className="ai-chat-trigger" aria-label="Open Shrishail AI Assistant">
        <Bot size={20} />
        <span>Ask Shrishail AI</span>
        <Sparkles size={14} className="highlight-orange" />
      </button>

      {/* Interactive AI Drawer / Modal */}
      {isOpen && (
        <div className="ai-chat-modal">
          {/* Header Bar */}
          <div className="ai-chat-header">
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
              <Bot className="highlight-blue" size={22} />
              <div>
                <strong style={{ color: '#FFF', fontSize: '0.95rem' }}>ASK SHRISHAIL AI</strong>
                <div style={{ fontSize: '0.7rem', color: 'var(--accent-orange)', fontFamily: 'var(--font-mono)' }}>
                  GROQ LLAMA-3.3 70B ENGINED
                </div>
              </div>
            </div>
            <button className="modal-close" onClick={() => setIsOpen(false)} aria-label="Close Assistant">
              <X size={18} />
            </button>
          </div>

          {/* Messages Container */}
          <div className="ai-chat-body">
            {messages.map((m, idx) => (
              <div key={idx} className={`chat-bubble ${m.sender}`}>
                <div className="bubble-sender-tag">
                  {m.sender === 'ai' ? '🤖 Shrishail AI' : '👤 You'}
                </div>
                <div className="bubble-text">
                  {m.text.split('\n').map((line, lIdx) => (
                    <React.Fragment key={lIdx}>
                      {line}
                      {lIdx < m.text.split('\n').length - 1 && <br />}
                    </React.Fragment>
                  ))}
                </div>
              </div>
            ))}

            {/* Typing Indicator */}
            {isLoading && (
              <div className="chat-bubble ai loading-bubble">
                <div className="typing-indicator">
                  <Loader2 size={16} className="spin-icon highlight-orange" />
                  <span>Shrishail AI is thinking...</span>
                </div>
              </div>
            )}

            {/* Error Message Box with Retry */}
            {errorMsg && (
              <div className="chat-error-box">
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#EF4444' }}>
                  <AlertTriangle size={16} />
                  <span>{errorMsg}</span>
                </div>
                <button onClick={handleRetry} className="btn-retry">
                  <RotateCcw size={12} /> Retry Question
                </button>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Sample Questions Pills */}
          <div className="ai-chat-samples">
            {sampleQuestions.map((q, idx) => (
              <button 
                key={idx} 
                onClick={() => handleSend(q)} 
                disabled={isLoading}
                className="sample-btn"
              >
                {q}
              </button>
            ))}
          </div>

          {/* Input Row */}
          <div className="ai-chat-input-row">
            <textarea
              ref={textareaRef}
              rows={1}
              placeholder="Ask about AegisCR, skills, hiring... (Enter to send, Shift+Enter for newline)"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              disabled={isLoading}
            />
            <button 
              onClick={() => handleSend()} 
              disabled={isLoading || !input.trim()}
              className="btn-primary" 
              style={{ padding: '0.75rem 1rem', borderRadius: '8px' }}
              aria-label="Send Message"
            >
              {isLoading ? <Loader2 size={16} className="spin-icon" /> : <Send size={16} />}
            </button>
          </div>
        </div>
      )}
    </>
  );
}
