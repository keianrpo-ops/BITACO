
import React from 'react';

export const PROPERTY_DATA = {
  name: "Hacienda Bitaco - Activo Agroindustrial de Alta Rentabilidad",
  location: "Vereda Bitaco, Municipio de La Cumbre, Valle del Cauca",
  whatsapp: "573113492439",
  summary: "Infraestructura técnica de vanguardia sobre 14 cuadras fértiles con capacidad para 170 madres.",
  description: "Una oportunidad de inversión estratégica en el corazón del Valle. Hacienda Bitaco combina ingeniería de procesos porcinos con un microclima excepcional, garantizando tasas de conversión superiores y estándares de bioseguridad de clase mundial.",
  
  // Detalle Exhaustivo de Galpones - Enfoque Negocio
  sheds: [
    {
      id: "precebo",
      title: "Centro de Precebo de Alta Densidad",
      desc: "3 naves industriales diseñadas para el levante técnico. Equipadas para optimizar el crecimiento acelerado y la sanidad animal, reduciendo drásticamente la mortalidad.",
      capacity: "800 Lechones",
      detail: "Sistemas de alimentación eficiente",
      image: "https://images.unsplash.com/photo-1594498653385-d5172c532c00?q=80&w=800&auto=format&fit=crop"
    },
    {
      id: "maternidad",
      title: "Maternidad de Precisión",
      desc: "El núcleo genético de la granja. Jaulas de lactancia de última generación que garantizan el bienestar de la madre y el vigor de la camada.",
      capacity: "30 Jaulas de Lactancia",
      detail: "Climatización y control neonatal",
      image: "https://images.unsplash.com/photo-1516467508483-a7212febe31a?q=80&w=800&auto=format&fit=crop"
    },
    {
      id: "gestacion",
      title: "Unidad de Gestación Escalable",
      desc: "Infraestructura robusta para el manejo individualizado. Permite un monitoreo metabólico preciso, fundamental para la rentabilidad del ciclo reproductivo.",
      capacity: "160 Jaulas Técnicas",
      detail: "Flujo operativo optimizado",
      image: "https://images.unsplash.com/photo-1597526012678-ec2f072797e5?q=80&w=800&auto=format&fit=crop"
    },
    {
      id: "cuarentena",
      title: "Protocolo de Cuarentena y Sanidad",
      desc: "Blindaje sanitario absoluto. Área independiente para el ingreso seguro de genética, protegiendo el estatus sanitario de toda la operación.",
      capacity: "80 Animales Grandes",
      detail: "Aislamiento biológico total",
      image: "https://images.unsplash.com/photo-1444858291040-58f756a3bdd6?q=80&w=800&auto=format&fit=crop"
    }
  ],

  // Administrativo y Bioseguridad
  biosecurity: {
    title: "Hub Administrativo y Filtro Sanitario",
    desc: "Diseñado bajo normativas internacionales. La bioseguridad no es una opción, es el activo que protege su inversión.",
    features: [
      { name: "Oficina Ejecutiva", detail: "Centro de control documental y gerencial.", image: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=800&auto=format&fit=crop" },
      { name: "Sala de Descontaminación", detail: "Filtro obligatorio para personal y visitas.", image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=800&auto=format&fit=crop" },
      { name: "Área de Vestieres", detail: "2 Unidades independientes para cambio de ropa técnica.", image: "https://images.unsplash.com/photo-1621605815971-fbc98d665033?q=80&w=800&auto=format&fit=crop" },
      { name: "Batería Sanitaria", detail: "2 Baños integrados al flujo de bioseguridad.", image: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?q=80&w=800&auto=format&fit=crop" }
    ]
  },

  // Residencia de Alto Estándar (3 Habitaciones, 2 Baños, 1 Cocina)
  residence: {
    title: "Residencia Campestre de Lujo",
    desc: "Complemento perfecto para el inversor o administrador de alto nivel. Una propiedad que combina productividad con calidad de vida.",
    items: [
      { name: "Máster Suite", detail: "Amplia habitación principal con acabados en madera y vista panorámica.", image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=800&auto=format&fit=crop" },
      { name: "Habitación Junior 1", detail: "Diseño fresco y espacioso, ideal para huéspedes o familia.", image: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?q=80&w=800&auto=format&fit=crop" },
      { name: "Habitación Junior 2", detail: "Ambiente versátil con iluminación natural y techos altos.", image: "https://images.unsplash.com/photo-1560185007-cde436f6a4d0?q=80&w=800&auto=format&fit=crop" },
      { name: "Baño de Lujo Principal", detail: "Acabados premium, grifería moderna y diseño minimalista.", image: "https://images.unsplash.com/photo-1584622781564-1d9876a1df8d?q=80&w=800&auto=format&fit=crop" },
      { name: "Baño Social Equipado", detail: "Funcionalidad y elegancia para el área común de la casa.", image: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?q=80&w=800&auto=format&fit=crop" },
      { name: "Cocina Gourmet Integral", detail: "Equipada con lo último en carpintería y electrodomésticos, integrada al área social.", image: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?q=80&w=800&auto=format&fit=crop" }
    ]
  },

  images: {
    hero: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=2000&auto=format&fit=crop"
  }
};

export const ICONS = {
  MapPin: (props: any) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>,
  TrendingUp: (props: any) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg>,
  Home: (props: any) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>,
  Shield: (props: any) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"/></svg>,
  CheckCircle: (props: any) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>,
  MessageCircle: (props: any) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"/></svg>,
  ArrowRight: (props: any) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>,
  Briefcase: (props: any) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><rect width="20" height="14" x="2" y="7" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>
};
