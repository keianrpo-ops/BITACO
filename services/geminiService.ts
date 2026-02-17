
import { GoogleGenAI } from "@google/genai";
import { PROPERTY_DATA } from "../constants";

const SYSTEM_INSTRUCTION = `
Eres un asistente experto en bienes raíces de lujo para la venta de la "${PROPERTY_DATA.name}".
Tu objetivo es vender esta propiedad ubicada en ${PROPERTY_DATA.location}.
Detalles clave:
- Tamaño: ${PROPERTY_DATA.size}.
- Capacidad de cría: 170 madres.
- Precebo: 3 galpones, 800 lechones.
- Maternidad: 1 galpón con 30 jaulas de lactancia.
- Gestación: 1 galpón con 160 jaulas.
- Cuarentena: 1 galpón para 80 animales grandes.
- Infraestructura: Oficina, sala de descontaminación, 2 baños, 2 vestieres.
- Vivienda: Casa con 3 habitaciones, 2 baños y cocina.

Responde de manera profesional, amable y persuasiva. Si no sabes algo, invita al usuario a contactar directamente al agente.
`;

export const getGeminiResponse = async (userMessage: string) => {
  try {
    // Inicializamos la instancia justo antes de usarla para asegurar que el entorno esté listo
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
    
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: userMessage,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.7,
      },
    });
    
    return response.text || "Lo siento, no pude procesar tu solicitud.";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "En este momento no puedo responder, por favor intenta contactarnos por el formulario.";
  }
};
