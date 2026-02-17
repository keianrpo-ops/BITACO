
import React from 'react';
import { PROPERTY_DATA, ICONS } from './constants.tsx';
import ChatWidget from './components/ChatWidget.tsx';

const App: React.FC = () => {
  const openWhatsApp = () => {
    window.open(`https://wa.me/${PROPERTY_DATA.whatsapp}?text=Hola,%20solicito%20información%20técnica%20sobre%20Hacienda%20Bitaco.`, '_blank');
  };

  return (
    <div className="min-h-screen bg-[#fafaf9] font-sans text-slate-900 overflow-x-hidden selection:bg-emerald-100">
      {/* Navigation */}
      <nav className="fixed w-full z-[100] bg-white/90 backdrop-blur-xl border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-emerald-950 rounded-2xl flex items-center justify-center text-white font-bold text-lg shadow-xl shadow-emerald-900/20">HB</div>
            <div>
              <span className="block text-base font-bold tracking-tight text-emerald-950 uppercase">Hacienda Bitaco</span>
              <span className="block text-[10px] uppercase tracking-widest text-emerald-600 font-bold">Activo Agroindustrial</span>
            </div>
          </div>
          <div className="hidden lg:flex items-center gap-10">
            {['Inversión', 'Galpones', 'Bioseguridad', 'Residencia'].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="text-[11px] font-bold uppercase tracking-widest text-slate-500 hover:text-emerald-800 transition-colors">
                {item}
              </a>
            ))}
            <button onClick={openWhatsApp} className="bg-emerald-900 text-white px-8 py-3 rounded-full text-[11px] font-bold uppercase tracking-widest hover:bg-emerald-800 transition-all shadow-lg hover:shadow-emerald-900/20">
              Agendar Visita
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section - Business Focus */}
      <section className="relative h-screen flex items-center justify-center text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src={PROPERTY_DATA.images.hero} className="w-full h-full object-cover scale-105 animate-pulse-slow" alt="Hacienda Background" />
          <div className="absolute inset-0 bg-emerald-950/50 backdrop-brightness-75"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/80 via-transparent to-transparent"></div>
        </div>
        
        <div className="relative z-10 text-center px-6 max-w-5xl">
          <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-md border border-white/20 px-6 py-2 rounded-full mb-10">
            <ICONS.TrendingUp className="w-4 h-4 text-emerald-400" />
            <span className="text-[11px] font-bold uppercase tracking-widest">Oportunidad de Inversión Única - 170 Madres</span>
          </div>
          
          <h1 className="text-7xl md:text-9xl font-bold mb-8 tracking-tighter leading-[0.85] italic">
            El Futuro del <span className="text-emerald-400">Negocio</span> Porcino
          </h1>
          
          <p className="text-xl md:text-2xl font-light mb-14 text-slate-100 leading-relaxed max-w-3xl mx-auto opacity-90">
            Infraestructura técnica de nivel superior y bioseguridad blindada en la mejor ubicación estratégica del Valle del Cauca.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button onClick={openWhatsApp} className="bg-emerald-500 hover:bg-emerald-400 text-emerald-950 px-12 py-6 rounded-full font-bold text-lg shadow-3xl hover:scale-105 transition-all flex items-center gap-3">
              Descargar Dossier de Inversión <ICONS.ArrowRight className="w-5 h-5" />
            </button>
            <a href="#galpones" className="text-white font-bold tracking-widest uppercase text-xs border-b-2 border-white/30 pb-1 hover:border-emerald-400 transition-colors">
              Ver Instalaciones Técnicas
            </a>
          </div>
        </div>
      </section>

      {/* Investment Highlights */}
      <section id="inversión" className="py-24 bg-white relative z-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { label: "Área Total", val: "14 Cuadras", sub: "Tierra Fértil", icon: <ICONS.MapPin /> },
              { label: "Capacidad", val: "170 Madres", sub: "Producción Continua", icon: <ICONS.TrendingUp /> },
              { label: "Bioseguridad", val: "Nivel ICA", sub: "Filtro Sanitario", icon: <ICONS.Shield /> },
              { label: "Operación", val: "Ready-to-Go", sub: "Llave en Mano", icon: <ICONS.Briefcase /> }
            ].map((stat, i) => (
              <div key={i} className="bg-emerald-50/50 p-10 rounded-[3rem] border border-emerald-100 text-center hover:bg-emerald-50 transition-colors">
                <div className="text-emerald-600 mb-6 flex justify-center scale-125">{stat.icon}</div>
                <div className="text-3xl font-bold text-emerald-950 mb-2">{stat.val}</div>
                <div className="text-[10px] uppercase tracking-widest text-emerald-700/60 font-black">{stat.label}</div>
                <div className="text-[11px] text-slate-400 mt-2 font-medium">{stat.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INFRAESTRUCTURA TÉCNICA - GALPONES */}
      <section id="galpones" className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row items-end justify-between mb-24 gap-10">
            <div className="max-w-2xl">
              <span className="text-emerald-700 font-black tracking-[0.3em] text-[11px] uppercase mb-4 block">Ingeniería de Procesos</span>
              <h2 className="text-5xl md:text-7xl font-bold text-emerald-950 italic tracking-tighter leading-tight mb-8">
                Instalaciones de <br/>Máximo Rendimiento
              </h2>
              <p className="text-slate-500 text-xl font-light leading-relaxed">
                Cada galpón ha sido diseñado para maximizar el índice de conversión alimenticia y garantizar el bienestar animal, pilares fundamentales de la rentabilidad porcina moderna.
              </p>
            </div>
            <div className="bg-emerald-900 text-white p-10 rounded-[3.5rem] flex items-center gap-6 shadow-2xl">
               <div className="text-5xl font-bold italic text-emerald-400">800</div>
               <div className="text-sm font-bold uppercase tracking-widest leading-tight">Capacidad total <br/>de precebo</div>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-16">
            {PROPERTY_DATA.sheds.map((shed, i) => (
              <div key={i} className="group cursor-pointer">
                <div className="aspect-[16/10] rounded-[4rem] overflow-hidden mb-12 shadow-2xl relative">
                  <img src={shed.image} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" alt={shed.title} />
                  <div className="absolute top-8 left-8">
                    <span className="bg-emerald-500 text-emerald-950 px-6 py-2 rounded-full text-[10px] font-black uppercase tracking-widest shadow-lg">
                      {shed.capacity}
                    </span>
                  </div>
                </div>
                <div className="px-6">
                  <h3 className="text-4xl font-bold text-emerald-950 mb-4 tracking-tight group-hover:text-emerald-700 transition-colors">{shed.title}</h3>
                  <p className="text-slate-500 text-lg font-light leading-relaxed mb-8">{shed.desc}</p>
                  <div className="flex items-center gap-3 text-emerald-700 font-bold text-xs uppercase tracking-widest">
                    <ICONS.CheckCircle className="w-4 h-4" /> {shed.detail}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BIOSEGURIDAD: EL BLINDAJE DEL NEGOCIO */}
      <section id="bioseguridad" className="py-32 bg-emerald-950 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-emerald-500/20 via-transparent to-transparent"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-24">
            <span className="text-emerald-400 font-bold tracking-[0.4em] text-[11px] uppercase mb-6 block">Estatus Sanitario Superior</span>
            <h2 className="text-5xl md:text-8xl font-bold mb-10 italic tracking-tighter">Bioseguridad Inteligente</h2>
            <p className="text-emerald-100/60 max-w-3xl mx-auto text-xl font-light leading-relaxed">
              La protección de su patrimonio genético está garantizada a través de un diseño de flujo de personal y descontaminación que cumple con los más altos estándares internacionales.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {PROPERTY_DATA.biosecurity.features.map((feature, i) => (
              <div key={i} className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-[3rem] overflow-hidden group hover:bg-white/10 transition-all p-4">
                <div className="aspect-square rounded-[2.5rem] overflow-hidden mb-8 shadow-inner">
                  <img src={feature.image} className="w-full h-full object-cover grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700" alt={feature.name} />
                </div>
                <div className="p-4 text-center">
                  <h4 className="text-xl font-bold mb-3">{feature.name}</h4>
                  <p className="text-xs text-emerald-200/50 leading-relaxed font-light">{feature.detail}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-24 p-12 bg-white/5 border border-white/10 rounded-[4rem] flex flex-col md:flex-row items-center gap-12 text-center md:text-left">
            <div className="w-24 h-24 bg-emerald-500/20 rounded-full flex items-center justify-center text-emerald-400 shrink-0">
               <ICONS.Shield className="w-12 h-12" />
            </div>
            <div className="flex-1">
               <h3 className="text-3xl font-bold mb-3 italic">Control Administrativo Integrado</h3>
               <p className="text-emerald-100/50 font-light italic">
                 Incluye oficina de gerencia, 2 baños y 2 vestidores independientes diseñados para un cambio de ropa aséptico y seguro.
               </p>
            </div>
            <button onClick={openWhatsApp} className="bg-emerald-500 text-emerald-950 px-10 py-5 rounded-full font-black text-xs uppercase tracking-widest hover:scale-105 transition-all">
              Consultar Planos Sanitarios
            </button>
          </div>
        </div>
      </section>

      {/* RESIDENCIA: CALIDAD DE VIDA (3 HAB, 2 BAÑOS, 1 COCINA) */}
      <section id="residencia" className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-end justify-between mb-24 gap-10">
            <div className="max-w-2xl">
              <span className="text-emerald-800 font-black tracking-[0.3em] text-[11px] uppercase mb-4 block">Confort del Inversor</span>
              <h2 className="text-5xl md:text-7xl font-bold text-emerald-950 italic tracking-tighter leading-tight mb-8">
                {PROPERTY_DATA.residence.title}
              </h2>
              <p className="text-slate-500 text-xl font-light leading-relaxed">
                Porque el éxito en los negocios también se mide en calidad de vida. Una residencia moderna que ofrece el refugio perfecto tras una jornada productiva.
              </p>
            </div>
            <div className="flex gap-4">
              <div className="p-6 bg-slate-50 rounded-3xl border border-slate-100 text-center min-w-[120px]">
                <div className="text-2xl font-bold text-emerald-900">3</div>
                <div className="text-[9px] uppercase font-bold text-slate-400">Habitaciones</div>
              </div>
              <div className="p-6 bg-slate-50 rounded-3xl border border-slate-100 text-center min-w-[120px]">
                <div className="text-2xl font-bold text-emerald-900">2</div>
                <div className="text-[9px] uppercase font-bold text-slate-400">Baños</div>
              </div>
              <div className="p-6 bg-slate-50 rounded-3xl border border-slate-100 text-center min-w-[120px]">
                <div className="text-2xl font-bold text-emerald-900">1</div>
                <div className="text-[9px] uppercase font-bold text-slate-400">Cocina Int.</div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {PROPERTY_DATA.residence.items.map((item, i) => (
              <div key={i} className="group bg-[#fafaf9] rounded-[3.5rem] p-5 shadow-sm border border-slate-100 hover:shadow-3xl hover:-translate-y-3 transition-all duration-700">
                <div className="aspect-[4/5] rounded-[2.8rem] overflow-hidden mb-10 shadow-lg">
                  <img src={item.image} className="w-full h-full object-cover group-hover:scale-110 transition-all duration-1000 ease-out" alt={item.name} />
                </div>
                <div className="px-6 pb-6 text-center">
                   <h4 className="text-2xl font-bold text-emerald-950 mb-3 tracking-tight">{item.name}</h4>
                   <p className="text-sm text-slate-400 font-light leading-relaxed">{item.detail}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-20 text-center">
             <p className="text-slate-300 font-light italic text-sm">Espacios diseñados para reemplazo con fotografías reales del cliente.</p>
          </div>
        </div>
      </section>

      {/* CTA FINAL - BUSINESS CLOSE */}
      <section className="py-32 bg-[#fafaf9]">
        <div className="max-w-5xl mx-auto px-6">
          <div className="bg-emerald-900 rounded-[5rem] p-16 md:p-32 text-white shadow-4xl text-center relative overflow-hidden group">
             <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
             <div className="relative z-10">
               <h2 className="text-5xl md:text-8xl font-bold mb-10 italic tracking-tighter">Invierta con <span className="text-emerald-400">Visión</span></h2>
               <p className="text-emerald-100/70 text-xl md:text-2xl font-light mb-16 max-w-2xl mx-auto leading-relaxed">
                 Hacienda Bitaco no es solo tierra, es un sistema productivo maduro listo para generar rentabilidad desde el primer día.
               </p>
               <button onClick={openWhatsApp} className="bg-white text-emerald-950 px-16 py-7 rounded-full font-black text-lg hover:scale-105 transition-all shadow-2xl hover:bg-emerald-50">
                 Solicitar Proyecciones Financieras
               </button>
             </div>
          </div>
        </div>
      </section>

      {/* Footer Minimalista */}
      <footer className="py-20 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-12">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 bg-emerald-900 rounded-xl flex items-center justify-center text-white font-bold">HB</div>
              <span className="text-emerald-950 font-bold tracking-widest uppercase text-xs">Bitaco Portfolio 2024</span>
            </div>
            <div className="text-[10px] uppercase font-bold tracking-[0.3em] text-slate-300">
               Estrategia • Ingeniería • Rentabilidad
            </div>
            <div className="flex gap-8 text-[11px] font-bold uppercase tracking-widest text-emerald-900">
               <a href="#" className="hover:opacity-50">Linkedin</a>
               <a href="#" className="hover:opacity-50">Whatsapp</a>
            </div>
          </div>
        </div>
      </footer>

      <ChatWidget />

      {/* Styles */}
      <style>{`
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.8; }
          50% { opacity: 1; }
        }
        .animate-pulse-slow {
          animation: pulse-slow 8s infinite ease-in-out;
        }
        html { scroll-behavior: smooth; }
        .shadow-3xl { box-shadow: 0 35px 60px -15px rgba(6, 78, 59, 0.3); }
        .shadow-4xl { box-shadow: 0 50px 100px -20px rgba(6, 78, 59, 0.5); }
      `}</style>
    </div>
  );
};

export default App;
