
import React from 'react';

export const PROPERTY_DATA = {
  name: "Granja Porcina Elite Bitaco",
  location: "Vereda Bitaco, Municipio de La Cumbre (Valle del Cauca)",
  size: "14 Cuadras",
  description: "Una infraestructura de vanguardia diseñada para la máxima eficiencia en la cría porcina. Ubicada en la privilegiada zona de Bitaco, esta finca combina un clima ideal con instalaciones industriales de primer nivel. El entorno ofrece condiciones sanitarias óptimas y excelente conectividad vial.",
  specs: [
    "Capacidad instalada para 170 madres",
    "3 galpones de precebo (cap. 800 lechones)",
    "Galpón de maternidad con 30 jaulas de lactancia",
    "Galpón de gestación con 160 jaulas técnicas",
    "Galpón de cuarentena para 80 animales grandes",
    "Oficina administrativa y sala de bio-seguridad",
    "Casa principal con 3 habitaciones y acabados tradicionales"
  ],
  images: {
    hero: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=2000&auto=format&fit=crop",
    infrastructure1: "https://images.unsplash.com/photo-1516467508483-a7212febe31a?q=80&w=800&auto=format&fit=crop",
    infrastructure2: "https://images.unsplash.com/photo-1594498653385-d5172c532c00?q=80&w=800&auto=format&fit=crop",
    landscape: "https://images.unsplash.com/photo-1444858291040-58f756a3bdd6?q=80&w=800&auto=format&fit=crop",
    house: "https://images.unsplash.com/photo-1464226184884-fa280b87c399?q=80&w=800&auto=format&fit=crop"
  }
};

export const ICONS = {
  Location: (props: any) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
  ),
  Factory: (props: any) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M2 20a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8l-7 5V8l-7 5V4a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z"/><path d="M17 18h1"/><path d="M12 18h1"/><path d="M7 18h1"/></svg>
  ),
  Home: (props: any) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
  ),
  Shield: (props: any) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/></svg>
  ),
  Check: (props: any) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" {...props}><polyline points="20 6 9 17 4 12"/></svg>
  ),
  Download: (props: any) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" x2="12" y1="3" y2="15"/></svg>
  )
};
