
import React, { useState, useRef, useEffect } from 'react';
import { getGeminiResponse } from '../services/geminiService';
import { Message } from '../types';

const ChatWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: 'model', text: '¡Bienvenido a Hacienda Bitaco! Soy su consultor virtual. ¿Desea conocer detalles sobre la capacidad de los galpones, la ubicación exacta o agendar una visita?' }
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, loading]);

  const handleSend = async () => {
    if (!input.trim() || loading) return;

    const userMsg = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setLoading(true);

    try {
      const aiMsg = await getGeminiResponse(userMsg);
      setMessages(prev => [...prev, { role: 'model', text: aiMsg }]);
    } catch (e) {
      setMessages(prev => [...prev, { role: 'model', text: "Disculpe, hubo un error de conexión. ¿Podría repetir su consulta?" }]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed bottom-8 right-8 z-50">
      {isOpen ? (
        <div className="bg-white w-[90vw] md:w-96 h-[600px] rounded-[2.5rem] shadow-2xl flex flex-col border border-slate-100 overflow-hidden animate-in zoom-in-95 slide-in-from-bottom-10 duration-500">
          <div className="bg-emerald-900 text-white p-6 flex justify-between items-center">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-emerald-700 rounded-full flex items-center justify-center text-xl font-bold">B</div>
              <div>
                <h3 className="font-bold text-lg">Consultor Bitaco</h3>
                <p className="text-[10px] text-emerald-400 uppercase tracking-widest font-bold">Asistente AI Inteligente</p>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="hover:bg-emerald-800 p-2 rounded-full transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
            </button>
          </div>
          
          <div ref={scrollRef} className="flex-1 overflow-y-auto p-6 space-y-6 bg-slate-50/50">
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'} animate-in fade-in slide-in-from-bottom-2 duration-300`}>
                <div className={`max-w-[85%] p-4 rounded-3xl text-sm leading-relaxed ${
                  m.role === 'user' ? 'bg-emerald-700 text-white rounded-tr-none shadow-lg' : 'bg-white border border-slate-100 text-slate-800 rounded-tl-none shadow-sm'
                }`}>
                  {m.text}
                </div>
              </div>
            ))}
            {loading && (
              <div className="flex justify-start">
                <div className="bg-white border border-slate-100 p-4 rounded-3xl rounded-tl-none animate-pulse flex gap-2 items-center">
                  <div className="w-1 h-1 bg-slate-300 rounded-full animate-bounce"></div>
                  <div className="w-1 h-1 bg-slate-300 rounded-full animate-bounce delay-75"></div>
                  <div className="w-1 h-1 bg-slate-300 rounded-full animate-bounce delay-150"></div>
                </div>
              </div>
            )}
          </div>

          <div className="p-6 border-t border-slate-100 bg-white">
            <div className="flex gap-3">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Escriba su consulta..."
                className="flex-1 text-sm bg-slate-50 border border-slate-100 rounded-2xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all"
              />
              <button 
                onClick={handleSend}
                disabled={loading || !input.trim()}
                className="bg-emerald-900 text-white p-4 rounded-2xl hover:bg-emerald-700 transition-all shadow-lg hover:shadow-emerald-900/20 disabled:opacity-50"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m22 2-7 20-4-9-9-4Z"/><path d="M22 2 11 13"/></svg>
              </button>
            </div>
          </div>
        </div>
      ) : (
        <button 
          onClick={() => setIsOpen(true)}
          className="bg-emerald-900 text-white px-8 py-5 rounded-full shadow-2xl hover:bg-emerald-800 transition-all hover:scale-105 active:scale-95 flex items-center gap-4 group"
        >
          <div className="relative">
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"/></svg>
            <span className="absolute -top-1 -right-1 w-3 h-3 bg-emerald-400 rounded-full border-2 border-emerald-900 animate-pulse"></span>
          </div>
          <span className="font-bold text-sm uppercase tracking-widest hidden md:inline">Consultor AI</span>
        </button>
      )}
    </div>
  );
};

export default ChatWidget;
