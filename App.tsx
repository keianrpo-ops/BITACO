
import React, { useState } from 'react';
import { PROPERTY_DATA, ICONS } from './constants';
import ChatWidget from './components/ChatWidget';

const App: React.FC = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [dossierRequested, setDossierRequested] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => setFormSubmitted(false), 5000);
  };

  const handleDossierRequest = () => {
    setDossierRequested(true);
    alert("Dossier Técnico preparado. Iniciando descarga simulada...");
    setTimeout(() => setDossierRequested(false), 3000);
  };

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed w-full z-40 glass-morphism border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold text-emerald-900 tracking-tight flex items-center gap-2">
            <ICONS.Factory className="text-emerald-600" />
            <span>HACIENDA <span className="text-emerald-600">BITACO</span></span>
          </div>
          <div className="hidden md:flex space-x-8 text-sm font-semibold text-slate-600 uppercase tracking-widest items-center">
            <a href="#inicio" className="hover:text-emerald-600 transition-colors">Inicio</a>
            <a href="#infraestructura" className="hover:text-emerald-600 transition-colors">Infraestructura</a>
            <a href="#galeria" className="hover:text-emerald-600 transition-colors">Galería</a>
            <a href="#contacto" className="bg-emerald-800 text-white px-6 py-2 rounded-full hover:bg-emerald-700 transition-all shadow-lg hover:shadow-emerald-900/20">Contactar</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="inicio" className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={PROPERTY_DATA.images.hero} 
            alt="Finca Bitaco Landscape" 
            className="w-full h-full object-cover scale-105 animate-[pulse_10s_infinite]"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-slate-50"></div>
        </div>
        
        <div className="relative z-10 text-center text-white px-6 max-w-5xl">
          <div className="inline-block px-4 py-1 border border-emerald-400/50 rounded-full text-emerald-300 text-sm font-bold tracking-[0.2em] mb-6 uppercase bg-emerald-900/30 backdrop-blur-sm">
            Propiedad Exclusiva • La Cumbre, Valle
          </div>
          <h1 className="text-6xl md:text-9xl mb-8 font-bold leading-none tracking-tighter drop-shadow-2xl">
            ELITE <br/><span className="text-emerald-400">AGRO-INDUSTRIAL</span>
          </h1>
          <p className="text-xl md:text-2xl mb-12 text-slate-100 font-light max-w-2xl mx-auto leading-relaxed">
            Eficiencia técnica y entorno privilegiado en 14 cuadras dedicadas a la cría de alto rendimiento.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a href="#infraestructura" className="bg-emerald-600 hover:bg-emerald-500 text-white px-12 py-5 rounded-full text-lg font-bold transition-all transform hover:-translate-y-1 shadow-2xl flex items-center justify-center gap-2">
              Ver Detalles Técnicos
            </a>
            <button 
              onClick={handleDossierRequest}
              className="bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/30 px-12 py-5 rounded-full text-lg font-bold transition-all flex items-center justify-center gap-2 group"
            >
              <ICONS.Download className="group-hover:translate-y-1 transition-transform" />
              Solicitar Dossier PDF
            </button>
          </div>
        </div>
        
        <div className="absolute bottom-12 left-0 right-0 flex justify-center text-emerald-900/50">
          <a href="#stats" className="animate-bounce">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m7 13 5 5 5-5"/><path d="m7 6 5 5 5-5"/></svg>
          </a>
        </div>
      </section>

      {/* Stats Quick Grid */}
      <section id="stats" className="bg-emerald-900 text-white py-20 relative overflow-hidden">
        <div className="absolute top-0 right-0 opacity-10 pointer-events-none">
          <ICONS.Factory style={{ width: '400px', height: '400px' }} />
        </div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
            <div className="border-r border-emerald-800 last:border-0">
              <div className="text-5xl md:text-7xl font-bold mb-3 tracking-tighter">14</div>
              <div className="text-emerald-400 uppercase tracking-[0.2em] text-xs font-bold">Cuadras Totales</div>
            </div>
            <div className="border-r border-emerald-800 last:border-0">
              <div className="text-5xl md:text-7xl font-bold mb-3 tracking-tighter">170</div>
              <div className="text-emerald-400 uppercase tracking-[0.2em] text-xs font-bold">Madres (Capacidad)</div>
            </div>
            <div className="border-r border-emerald-800 last:border-0">
              <div className="text-5xl md:text-7xl font-bold mb-3 tracking-tighter">800</div>
              <div className="text-emerald-400 uppercase tracking-[0.2em] text-xs font-bold">Lechones Precebo</div>
            </div>
            <div className="last:border-0">
              <div className="text-5xl md:text-7xl font-bold mb-3 tracking-tighter">30</div>
              <div className="text-emerald-400 uppercase tracking-[0.2em] text-xs font-bold">Jaulas Lactancia</div>
            </div>
          </div>
        </div>
      </section>

      {/* Details & Description */}
      <section id="infraestructura" className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-24 items-center">
            <div className="order-2 lg:order-1">
              <div className="flex items-center gap-4 mb-6">
                <span className="h-px w-12 bg-emerald-600"></span>
                <span className="text-emerald-600 font-bold tracking-widest uppercase text-sm">Ingeniería Agropecuaria</span>
              </div>
              <h2 className="text-5xl md:text-7xl text-emerald-950 mb-10 leading-[1.1] font-bold">Estructuras para el Éxito Operativo</h2>
              <p className="text-slate-600 text-xl mb-12 leading-relaxed">
                {PROPERTY_DATA.description}
              </p>
              
              <div className="grid sm:grid-cols-1 gap-6 mb-12">
                {PROPERTY_DATA.specs.map((spec, idx) => (
                  <div key={idx} className="flex items-start gap-5 group p-2 rounded-xl transition-colors hover:bg-slate-50">
                    <div className="mt-1 bg-emerald-100 p-2 rounded-lg text-emerald-700 group-hover:bg-emerald-600 group-hover:text-white transition-all">
                      <ICONS.Check className="w-5 h-5" />
                    </div>
                    <span className="text-slate-800 font-semibold text-lg">{spec}</span>
                  </div>
                ))}
              </div>

              <div className="p-8 bg-emerald-50 rounded-3xl border border-emerald-100">
                <p className="text-emerald-900 font-medium italic">
                  "Una oportunidad única en el Valle del Cauca, lista para producción inmediata con certificaciones de bioseguridad proyectables."
                </p>
              </div>
            </div>
            
            <div className="order-1 lg:order-2 grid grid-cols-2 gap-6">
              <div className="space-y-6">
                <div className="h-80 rounded-[3rem] overflow-hidden shadow-2xl transform hover:scale-[1.02] transition-transform">
                   <img src={PROPERTY_DATA.images.infrastructure1} className="w-full h-full object-cover" alt="Detalle Industrial" />
                </div>
                <div className="h-96 rounded-[3rem] overflow-hidden shadow-2xl transform translate-x-6 hover:scale-[1.02] transition-transform">
                   <img src={PROPERTY_DATA.images.landscape} className="w-full h-full object-cover" alt="Vistas de Bitaco" />
                </div>
              </div>
              <div className="space-y-6 pt-12">
                <div className="h-96 rounded-[3rem] overflow-hidden shadow-2xl transform -translate-x-6 hover:scale-[1.02] transition-transform">
                   <img src={PROPERTY_DATA.images.infrastructure2} className="w-full h-full object-cover" alt="Gestión Técnica" />
                </div>
                <div className="h-80 rounded-[3rem] overflow-hidden shadow-2xl hover:scale-[1.02] transition-transform">
                   <img src={PROPERTY_DATA.images.house} className="w-full h-full object-cover" alt="Casa Principal" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Highlight Cards */}
      <section className="py-32 bg-slate-50 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-emerald-200 to-transparent"></div>
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-12">
            {[
              {
                icon: <ICONS.Shield />,
                title: "Bio-Seguridad Total",
                text: "Protocolos estrictos con sala de descontaminación, vestieres y gestión controlada de residuos."
              },
              {
                icon: <ICONS.Location />,
                title: "Zona Estratégica",
                text: "Bitaco ofrece un microclima excepcional para la salud animal y cercanía a los principales centros de consumo."
              },
              {
                icon: <ICONS.Home />,
                title: "Habitabilidad",
                text: "Vivienda completa de 3 habitaciones para el administrador, permitiendo monitoreo 24/7 de la producción."
              }
            ].map((f, i) => (
              <div key={i} className="bg-white p-12 rounded-[2.5rem] shadow-sm border border-slate-100 hover:shadow-2xl transition-all group relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-50 rounded-full translate-x-16 -translate-y-16 group-hover:bg-emerald-600 transition-colors"></div>
                <div className="w-20 h-20 bg-emerald-50 text-emerald-600 rounded-2xl flex items-center justify-center mb-10 group-hover:bg-white group-hover:text-emerald-700 transition-all relative z-10">
                  <span className="scale-125">{f.icon}</span>
                </div>
                <h3 className="text-3xl mb-6 text-emerald-950 font-bold relative z-10">{f.title}</h3>
                <p className="text-slate-600 text-lg leading-relaxed relative z-10">
                  {f.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="galeria" className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="max-w-2xl">
              <h2 className="text-5xl md:text-6xl text-emerald-950 mb-6 font-bold tracking-tight">Recorrido Visual</h2>
              <p className="text-slate-500 text-xl leading-relaxed">Infraestructura diseñada para la eficiencia masiva y la calidad superior en cada etapa del proceso.</p>
            </div>
            <button className="text-emerald-700 font-bold border-b-2 border-emerald-700 pb-1 uppercase tracking-widest hover:text-emerald-500 hover:border-emerald-500 transition-all">Ver Álbum Completo</button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 h-[800px]">
            <div className="md:col-span-8 rounded-[3rem] overflow-hidden group cursor-pointer relative shadow-xl">
              <img src="https://images.unsplash.com/photo-1545464150-137a1b328148?q=80&w=1200&auto=format&fit=crop" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" alt="Galpones" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all p-12 flex items-end">
                <span className="text-white text-2xl font-bold tracking-widest uppercase">Estructura de Galpones Centrales</span>
              </div>
            </div>
            <div className="md:col-span-4 rounded-[3rem] overflow-hidden group cursor-pointer relative shadow-xl">
              <img src="https://images.unsplash.com/photo-1605000797499-95a51c5269ae?q=80&w=800&auto=format&fit=crop" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" alt="Suelo" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all p-12 flex items-end">
                <span className="text-white text-xl font-bold tracking-widest uppercase">Entorno Rural Valle</span>
              </div>
            </div>
            <div className="md:col-span-4 rounded-[3rem] overflow-hidden group cursor-pointer relative shadow-xl">
              <img src="https://images.unsplash.com/photo-1599818817366-068d30e38a2e?q=80&w=800&auto=format&fit=crop" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" alt="Cuidado" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all p-12 flex items-end">
                <span className="text-white text-xl font-bold tracking-widest uppercase">Zona de Maternidad</span>
              </div>
            </div>
            <div className="md:col-span-8 rounded-[3rem] overflow-hidden group cursor-pointer relative shadow-xl">
              <img src="https://images.unsplash.com/photo-1589923188900-85dae523342b?q=80&w=1200&auto=format&fit=crop" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" alt="Vista aérea" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all p-12 flex items-end">
                <span className="text-white text-2xl font-bold tracking-widest uppercase">Panorámica 14 Cuadras</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contacto" className="py-32 bg-emerald-950 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-emerald-500 via-transparent to-transparent"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-24">
            <div>
              <div className="inline-block px-4 py-1 bg-emerald-800 rounded-full text-emerald-400 text-xs font-bold tracking-widest uppercase mb-8">
                Inversión Real Estate
              </div>
              <h2 className="text-5xl md:text-7xl mb-10 leading-[1.1] font-bold">Inicie una Conversación de Negocios</h2>
              <p className="text-slate-300 text-xl mb-12 leading-relaxed">
                Esta es una propiedad de alta demanda técnica. Para recibir el portafolio financiero completo o agendar una inspección privada, complete el formulario.
              </p>
              
              <div className="space-y-8">
                <div className="flex items-center gap-6 group cursor-pointer">
                  <div className="w-16 h-16 bg-emerald-900 rounded-2xl flex items-center justify-center border border-emerald-800 group-hover:bg-emerald-600 transition-all">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                  </div>
                  <div>
                    <div className="text-emerald-500 text-sm font-bold uppercase tracking-widest mb-1">Director de Ventas</div>
                    <div className="text-2xl font-bold">+57 312 456 7890</div>
                  </div>
                </div>
                <div className="flex items-center gap-6 group cursor-pointer">
                  <div className="w-16 h-16 bg-emerald-900 rounded-2xl flex items-center justify-center border border-emerald-800 group-hover:bg-emerald-600 transition-all">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
                  </div>
                  <div>
                    <div className="text-emerald-500 text-sm font-bold uppercase tracking-widest mb-1">Canal Corporativo</div>
                    <div className="text-2xl font-bold">inversiones@haciendabitaco.com</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-[3rem] p-10 md:p-16 text-slate-950 shadow-2xl relative">
              {formSubmitted ? (
                <div className="h-full flex flex-col items-center justify-center text-center animate-in fade-in duration-500">
                  <div className="w-24 h-24 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mb-8">
                    <ICONS.Check style={{ width: '40px', height: '40px' }} />
                  </div>
                  <h3 className="text-3xl font-bold text-emerald-950 mb-4">¡Solicitud Enviada!</h3>
                  <p className="text-slate-600 text-lg">Un consultor especializado le contactará en menos de 24 horas.</p>
                  <button onClick={() => setFormSubmitted(false)} className="mt-8 text-emerald-600 font-bold underline">Enviar otro mensaje</button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-8">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-bold text-slate-400 uppercase tracking-[0.2em] mb-3">Nombre</label>
                      <input required type="text" className="w-full bg-slate-50 border border-slate-100 rounded-2xl px-6 py-5 focus:ring-2 focus:ring-emerald-500 outline-none transition-all placeholder-slate-300" placeholder="Su nombre" />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-400 uppercase tracking-[0.2em] mb-3">Empresa / Inversionista</label>
                      <input type="text" className="w-full bg-slate-50 border border-slate-100 rounded-2xl px-6 py-5 focus:ring-2 focus:ring-emerald-500 outline-none transition-all placeholder-slate-300" placeholder="Opcional" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-400 uppercase tracking-[0.2em] mb-3">Email Corporativo</label>
                    <input required type="email" className="w-full bg-slate-50 border border-slate-100 rounded-2xl px-6 py-5 focus:ring-2 focus:ring-emerald-500 outline-none transition-all placeholder-slate-300" placeholder="contacto@empresa.com" />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-400 uppercase tracking-[0.2em] mb-3">Mensaje de Interés</label>
                    <textarea required className="w-full bg-slate-50 border border-slate-100 rounded-2xl px-6 py-5 focus:ring-2 focus:ring-emerald-500 outline-none transition-all h-32 placeholder-slate-300" placeholder="¿Desea agendar visita o solicitar datos financieros?"></textarea>
                  </div>
                  <button className="w-full bg-emerald-700 hover:bg-emerald-600 text-white font-bold py-6 rounded-2xl transition-all shadow-xl hover:shadow-emerald-700/20 uppercase tracking-[0.3em] text-sm">
                    Solicitar Información Privada
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 text-slate-500 py-16 border-t border-slate-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-12 mb-16">
            <div className="text-3xl font-bold text-white tracking-tighter">HACIENDA <span className="text-emerald-600">BITACO</span></div>
            <div className="flex gap-10 text-sm font-bold uppercase tracking-widest text-slate-400">
              <a href="#inicio" className="hover:text-white transition-colors">Inicio</a>
              <a href="#infraestructura" className="hover:text-white transition-colors">Detalles</a>
              <a href="#galeria" className="hover:text-white transition-colors">Portafolio</a>
              <a href="#contacto" className="hover:text-white transition-colors">Contacto</a>
            </div>
          </div>
          <div className="pt-12 border-t border-slate-900 flex flex-col md:flex-row justify-between items-center gap-6 text-xs uppercase tracking-widest">
            <div className="text-slate-600">© 2024 Hacienda Bitaco Elite Porcina. Vereda Bitaco, Valle del Cauca.</div>
            <div className="flex gap-6">
               <span className="hover:text-white cursor-pointer transition-colors">Aviso Legal</span>
               <span className="hover:text-white cursor-pointer transition-colors">Privacidad</span>
               <span className="hover:text-white cursor-pointer transition-colors">Cookies</span>
            </div>
          </div>
        </div>
      </footer>

      {/* AI Assistant Button */}
      <ChatWidget />
    </div>
  );
};

export default App;
