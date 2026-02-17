
import React, { useState, useRef, useEffect } from 'react';
import { getGeminiResponse } from '../services/geminiService.ts';
import { Message } from '../types.ts';

const ChatWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: 'model', text: 'Hola, soy el asistente de Hacienda Bitaco. ¿En qué puedo ayudarte hoy?' }
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
  }, [messages, loading]);

  const handleSend = async () => {
    if (!input.trim() || loading) return;
    const userMsg = input;
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setLoading(true);
    const aiMsg = await getGeminiResponse(userMsg);
    setMessages(prev => [...prev, { role: 'model', text: aiMsg }]);
    setLoading(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {isOpen ? (
        <div className="bg-white w-80 md:w-96 h-[500px] rounded-3xl shadow-2xl flex flex-col border border-slate-200 overflow-hidden">
          <div className="bg-emerald-900 text-white p-4 flex justify-between items-center">
            <span className="font-bold">Asistente Bitaco</span>
            <button onClick={() => setIsOpen(false)} className="text-white">✕</button>
          </div>
          <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-50">
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[80%] p-3 rounded-2xl text-sm ${m.role === 'user' ? 'bg-emerald-600 text-white' : 'bg-white border text-slate-800'}`}>
                  {m.text}
                </div>
              </div>
            ))}
            {loading && <div className="text-xs text-slate-400 animate-pulse">Escribiendo...</div>}
          </div>
          <div className="p-4 border-t flex gap-2">
            <input value={input} onChange={e => setInput(e.target.value)} onKeyPress={e => e.key === 'Enter' && handleSend()} placeholder="Pregunta algo..." className="flex-1 text-sm border p-2 rounded-lg outline-none" />
            <button onClick={handleSend} className="bg-emerald-700 text-white px-4 py-2 rounded-lg">Ir</button>
          </div>
        </div>
      ) : (
        <button onClick={() => setIsOpen(true)} className="bg-emerald-900 text-white p-4 rounded-full shadow-2xl hover:scale-105 transition-transform">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m3 21 1.9-5.7a8.5 8.5 0 1 1 3.8 3.8z"/></svg>
        </button>
      )}
    </div>
  );
};

export default ChatWidget;
