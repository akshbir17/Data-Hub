
import React, { useState, useRef, useEffect } from 'react';
import { getAuroraResponse } from '../services/geminiService';
import { ChatMessage } from '../types';

export const AuroraBot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: "Hello! I'm Aurora. Ask me anything about Math, DSA, OS, R, or DDCO." }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isLoading]);

  const handleSend = async (textToSend?: string) => {
    const text = textToSend || input.trim();
    if (!text || isLoading) return;

    setInput('');
    setMessages(prev => [...prev, { role: 'user', text }]);
    setIsLoading(true);

    const aiMsg = await getAuroraResponse(text, messages);
    setMessages(prev => [...prev, { role: 'model', text: aiMsg }]);
    setIsLoading(false);
  };

  return (
    <div className="fixed bottom-8 right-8 z-50">
      {isOpen ? (
        <div className="w-[380px] h-[550px] bg-white rounded-[2.5rem] shadow-[0_40px_80px_rgba(0,0,0,0.1)] flex flex-col overflow-hidden border border-slate-100 animate-in slide-in-from-bottom-4 duration-300">
          <div className="bg-slate-900 p-6 text-white flex justify-between items-center">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center font-black text-xs">A</div>
              <span className="font-black text-sm uppercase tracking-widest">Aurora AI</span>
            </div>
            <button onClick={() => setIsOpen(false)} className="opacity-50 hover:opacity-100 transition-opacity">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
            </button>
          </div>

          <div ref={scrollRef} className="flex-1 p-6 overflow-y-auto space-y-6 bg-white">
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] p-4 rounded-2xl text-sm font-medium leading-relaxed ${
                  msg.role === 'user' 
                    ? 'bg-blue-600 text-white shadow-lg shadow-blue-100' 
                    : 'bg-slate-50 text-slate-600'
                }`}>
                  {msg.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-slate-50 p-4 rounded-2xl flex items-center gap-2">
                   <div className="flex gap-1">
                    <div className="w-1 h-1 bg-blue-500 rounded-full animate-bounce"></div>
                    <div className="w-1 h-1 bg-blue-500 rounded-full animate-bounce [animation-delay:0.2s]"></div>
                    <div className="w-1 h-1 bg-blue-500 rounded-full animate-bounce [animation-delay:0.4s]"></div>
                   </div>
                </div>
              </div>
            )}
          </div>

          <div className="p-4 border-t border-slate-50">
            <div className="flex gap-2 bg-slate-50 p-2 rounded-2xl">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Ask me anything..."
                className="flex-1 bg-transparent px-3 py-2 text-xs outline-none font-medium"
              />
              <button 
                onClick={() => handleSend()}
                disabled={isLoading || !input.trim()}
                className="p-2 bg-slate-900 text-white rounded-xl disabled:opacity-30"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="m22 2-7 20-4-9-9-4Z"/><path d="M22 2 11 13"/></svg>
              </button>
            </div>
          </div>
        </div>
      ) : (
        <button 
          onClick={() => setIsOpen(true)}
          className="w-16 h-16 bg-slate-900 text-white rounded-full shadow-2xl flex items-center justify-center hover:scale-110 active:scale-95 transition-all group"
        >
          <svg className="group-hover:rotate-12 transition-transform" xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 8V4H8"/><rect width="16" height="12" x="4" y="8" rx="2"/><path d="M2 14h2"/><path d="M20 14h2"/><path d="M15 13v2"/><path d="M9 13v2"/></svg>
        </button>
      )}
    </div>
  );
};
