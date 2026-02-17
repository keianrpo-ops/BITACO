
import { GoogleGenAI } from "@google/genai";
import { PROPERTY_DATA } from "../constants.tsx";

const SYSTEM_INSTRUCTION = `
Eres el Asistente Experto de Hacienda Bitaco. Tu objetivo es proporcionar información técnica precisa y persuasiva sobre esta propiedad porcina de 14 cuadras.

ESPECIFICACIONES CLAVE (Úsalas para convencer):
1. PRODUCCIÓN TÉCNICA:
   - Capacidad: 170 madres.
   - Precebo: 3 galpones independientes (800 lechones en total).
   - Maternidad: 30 jaulas de lactancia especializadas.
   - Gestación: 160 jaulas técnicas.
   - Cuarentena: Galpón aislado para 80 animales grandes.

2. BIOSEGURIDAD Y ADMIN:
   - Oficina administrativa ejecutiva.
   - Sala de descontaminación de personal (vital para normas ICA).
   - 2 Baños y 2 Vestidores independientes para garantizar el flujo sanitario.

3. RESIDENCIA:
   - Casa principal con 3 amplias habitaciones, 2 baños modernos y cocina integral equipada. Calidad de vida en el campo.

4. UBICACIÓN:
   - Vereda Bitaco, La Cumbre, Valle. Clima ideal para la salud porcina.

REGLAS DE RESPUESTA:
- Sé profesional, técnico y persuasivo.
- Resalta la rentabilidad de tener infraestructura lista para operar.
- Si preguntan por visitas o precios, dirige al WhatsApp +57 311 349 2439.
- Nunca inventes datos que no estén aquí.
`;

export const getGeminiResponse = async (userMessage: string) => {
  const apiKey = process.env.API_KEY;
  
  if (!apiKey || apiKey === "undefined" || apiKey === "") {
    return "Hola. Soy el asistente técnico de Hacienda Bitaco. Contamos con 14 cuadras e infraestructura para 170 madres, incluyendo 3 galpones de precebo para 800 lechones. ¿Desea conocer detalles sobre el área de bioseguridad o la casa principal?";
  }

  try {
    const ai = new GoogleGenAI({ apiKey });
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: userMessage,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.5,
      },
    });
    return response.text || "Lo siento, ¿podría repetir su consulta sobre la infraestructura?";
  } catch (error) {
    return "Hacienda Bitaco cuenta con 14 cuadras y capacidad técnica de 170 madres. Para una asesoría personalizada sobre los 3 galpones de precebo o la zona administrativa, contáctenos al 311 349 2439.";
  }
};
