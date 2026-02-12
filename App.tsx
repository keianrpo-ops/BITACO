
import React from 'react';
import { PROPERTY_DATA, ICONS } from './constants';
import ChatWidget from './components/ChatWidget';

const App: React.FC = () => {
  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed w-full z-40 glass-morphism border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold text-emerald-900 tracking-tight">HACIENDA <span className="text-emerald-600">BITACO</span></div>
          <div className="hidden md:flex space-x-8 text-sm font-semibold text-slate-600 uppercase tracking-widest">
            <a href="#inicio" className="hover:text-emerald-600 transition-colors">Inicio</a>
            <a href="#infraestructura" className="hover:text-emerald-600 transition-colors">Infraestructura</a>
            <a href="#galeria" className="hover:text-emerald-600 transition-colors">Galería</a>
            <a href="#contacto" className="bg-emerald-800 text-white px-6 py-2 rounded-full hover:bg-emerald-700 transition-all">Contactar Agente</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="inicio" className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=2400&q=80" 
            alt="Finca Bitaco Landscape" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        
        <div className="relative z-10 text-center text-white px-6 max-w-4xl">
          <h1 className="text-5xl md:text-8xl mb-6 font-bold leading-tight">Inversión de Alto Nivel en el Valle</h1>
          <p className="text-xl md:text-2xl mb-10 text-slate-100 font-light max-w-2xl mx-auto">
            Granja de cría porcina con infraestructura completa y capacidad para 170 madres en el corazón de Bitaco.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <a href="#infraestructura" className="bg-emerald-600 hover:bg-emerald-500 text-white px-10 py-4 rounded-full text-lg font-bold transition-all transform hover:-translate-y-1 shadow-xl">Explorar Instalaciones</a>
            <a href="#contacto" className="bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/30 px-10 py-4 rounded-full text-lg font-bold transition-all">Solicitar Dossier</a>
          </div>
        </div>
        
        <div className="absolute bottom-10 left-0 right-0 flex justify-center animate-bounce text-white opacity-60">
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m7 13 5 5 5-5"/><path d="m7 6 5 5 5-5"/></svg>
        </div>
      </section>

      {/* Stats Quick Grid */}
      <section className="bg-emerald-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">14</div>
              <div className="text-emerald-300 uppercase tracking-widest text-xs">Cuadras</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">170</div>
              <div className="text-emerald-300 uppercase tracking-widest text-xs">Madres (Capacidad)</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">800</div>
              <div className="text-emerald-300 uppercase tracking-widest text-xs">Lechones en Precebo</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">30</div>
              <div className="text-emerald-300 uppercase tracking-widest text-xs">Jaulas Lactancia</div>
            </div>
          </div>
        </div>
      </section>

      {/* Details & Description */}
      <section id="infraestructura" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="text-4xl md:text-6xl text-emerald-900 mb-8 leading-tight">Infraestructura Industrial de Élite</h2>
              <p className="text-slate-600 text-lg mb-10 leading-relaxed">
                {PROPERTY_DATA.description}
              </p>
              
              <div className="space-y-6">
                {PROPERTY_DATA.specs.map((spec, idx) => (
                  <div key={idx} className="flex items-start gap-4">
                    <div className="mt-1 bg-emerald-100 p-1 rounded-full text-emerald-600">
                      <ICONS.Check />
                    </div>
                    <span className="text-slate-800 font-medium text-lg">{spec}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="h-64 rounded-2xl bg-slate-100 overflow-hidden shadow-lg transform translate-y-8">
                   <img src="https://images.unsplash.com/photo-1542435503-956c469947f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" className="w-full h-full object-cover" alt="Property detail 1" />
                </div>
                <div className="h-80 rounded-2xl bg-emerald-100 overflow-hidden shadow-lg">
                   <img src="https://images.unsplash.com/photo-1500595046743-cd271d694d30?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" className="w-full h-full object-cover" alt="Property detail 2" />
                </div>
              </div>
              <div className="space-y-4">
                <div className="h-80 rounded-2xl bg-slate-100 overflow-hidden shadow-lg">
                   <img src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" className="w-full h-full object-cover" alt="Property detail 3" />
                </div>
                <div className="h-64 rounded-2xl bg-emerald-800 overflow-hidden shadow-lg transform translate-y-8 flex items-center justify-center p-8">
                   <div className="text-white text-center">
                     <ICONS.Factory className="w-12 h-12 mx-auto mb-4 opacity-50" />
                     <p className="text-sm uppercase tracking-widest font-bold">Diseño Optimizado</p>
                   </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Highlight Cards */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-10">
            <div className="bg-white p-10 rounded-3xl shadow-sm border border-slate-100 hover:shadow-xl transition-all group">
              <div className="w-16 h-16 bg-emerald-50 text-emerald-600 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                <ICONS.Shield className="w-8 h-8" />
              </div>
              <h3 className="text-2xl mb-4 text-emerald-900">Bio-Seguridad</h3>
              <p className="text-slate-600 leading-relaxed">
                Sala de descontaminación completa con vestieres y baños para personal, garantizando los más altos estándares sanitarios.
              </p>
            </div>
            
            <div className="bg-white p-10 rounded-3xl shadow-sm border border-slate-100 hover:shadow-xl transition-all group">
              <div className="w-16 h-16 bg-emerald-50 text-emerald-600 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                <ICONS.Location className="w-8 h-8" />
              </div>
              <h3 className="text-2xl mb-4 text-emerald-900">Ubicación Estratégica</h3>
              <p className="text-slate-600 leading-relaxed">
                Situada en la Vereda Bitaco, municipio de La Cumbre. Una zona de clima templado perfecta para la producción ganadera.
              </p>
            </div>

            <div className="bg-white p-10 rounded-3xl shadow-sm border border-slate-100 hover:shadow-xl transition-all group">
              <div className="w-16 h-16 bg-emerald-50 text-emerald-600 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                <ICONS.Home className="w-8 h-8" />
              </div>
              <h3 className="text-2xl mb-4 text-emerald-900">Vivienda Principal</h3>
              <p className="text-slate-600 leading-relaxed">
                Casa de administrador/propietario con 3 habitaciones, 2 baños y cocina integral. Confort garantizado.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Professional Photo Gallery Placeholder */}
      <section id="galeria" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl text-emerald-900 mb-4">Portafolio Fotográfico</h2>
            <p className="text-slate-500 max-w-xl mx-auto">Vea cada detalle de la infraestructura que hace de esta granja una oportunidad única.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="aspect-video bg-slate-200 rounded-3xl overflow-hidden group cursor-pointer relative shadow-lg">
              <img src="https://picsum.photos/id/1018/800/600" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt="Galpones" />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all flex items-center justify-center opacity-0 group-hover:opacity-100">
                <span className="text-white font-bold tracking-widest uppercase">Ver Galpones</span>
              </div>
            </div>
            <div className="aspect-video bg-slate-200 rounded-3xl overflow-hidden group cursor-pointer relative shadow-lg">
              <img src="https://picsum.photos/id/1019/800/600" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt="Vistas" />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all flex items-center justify-center opacity-0 group-hover:opacity-100">
                <span className="text-white font-bold tracking-widest uppercase">Vistas del Valle</span>
              </div>
            </div>
            <div className="aspect-video bg-slate-200 rounded-3xl overflow-hidden group cursor-pointer relative shadow-lg">
              <img src="https://picsum.photos/id/1020/800/600" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt="Instalaciones" />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all flex items-center justify-center opacity-0 group-hover:opacity-100">
                <span className="text-white font-bold tracking-widest uppercase">Maternidad</span>
              </div>
            </div>
            <div className="aspect-video bg-slate-200 rounded-3xl overflow-hidden group cursor-pointer relative shadow-lg">
              <img src="https://picsum.photos/id/1021/800/600" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt="Infraestructura" />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all flex items-center justify-center opacity-0 group-hover:opacity-100">
                <span className="text-white font-bold tracking-widest uppercase">Oficinas</span>
              </div>
            </div>
            <div className="aspect-video bg-slate-200 rounded-3xl overflow-hidden group cursor-pointer relative shadow-lg">
              <img src="https://picsum.photos/id/1022/800/600" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt="Casa" />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all flex items-center justify-center opacity-0 group-hover:opacity-100">
                <span className="text-white font-bold tracking-widest uppercase">Casa Principal</span>
              </div>
            </div>
            <div className="aspect-video bg-slate-200 rounded-3xl overflow-hidden group cursor-pointer relative shadow-lg flex items-center justify-center bg-emerald-50 text-emerald-900 font-bold border-4 border-dashed border-emerald-200">
              Próximamente Video Drone
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contacto" className="py-24 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-emerald-900 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid md:grid-cols-2 gap-20">
            <div>
              <h2 className="text-4xl md:text-6xl mb-8 leading-tight">Agende su Visita Personalizada</h2>
              <p className="text-slate-400 text-lg mb-10 leading-relaxed">
                Esta es una propiedad de alta demanda. Si busca una inversión segura en el sector porcino con infraestructura lista para operar, contáctenos hoy mismo.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-emerald-800 rounded-xl flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                  </div>
                  <div>
                    <div className="text-emerald-500 text-sm font-bold uppercase">Llámanos</div>
                    <div className="text-xl">+57 300 000 0000</div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-emerald-800 rounded-xl flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
                  </div>
                  <div>
                    <div className="text-emerald-500 text-sm font-bold uppercase">Email</div>
                    <div className="text-xl">ventas@haciendabitaco.com</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-3xl p-8 md:p-12 text-slate-900 shadow-2xl">
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-bold text-slate-500 uppercase mb-2">Nombre Completo</label>
                  <input type="text" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-4 focus:ring-2 focus:ring-emerald-500 outline-none transition-all" placeholder="Juan Perez" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-500 uppercase mb-2">Correo Electrónico</label>
                  <input type="email" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-4 focus:ring-2 focus:ring-emerald-500 outline-none transition-all" placeholder="juan@ejemplo.com" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-500 uppercase mb-2">Mensaje / Interés</label>
                  <textarea className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-4 focus:ring-2 focus:ring-emerald-500 outline-none transition-all h-32" placeholder="Estoy interesado en conocer la capacidad de producción mensual..."></textarea>
                </div>
                <button className="w-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-5 rounded-xl transition-all shadow-lg hover:shadow-emerald-500/20 uppercase tracking-widest">
                  Enviar Solicitud de Información
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 text-slate-500 py-12 border-t border-slate-900">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-lg font-bold text-white tracking-tight">HACIENDA <span className="text-emerald-600">BITACO</span></div>
          <div className="text-sm">© 2024 Hacienda Bitaco. Todos los derechos reservados. Valle del Cauca, Colombia.</div>
          <div className="flex gap-4">
             <div className="w-8 h-8 rounded-full border border-slate-800 flex items-center justify-center hover:bg-emerald-800 hover:text-white transition-all cursor-pointer">
                <span className="text-xs">FB</span>
             </div>
             <div className="w-8 h-8 rounded-full border border-slate-800 flex items-center justify-center hover:bg-emerald-800 hover:text-white transition-all cursor-pointer">
                <span className="text-xs">IG</span>
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
