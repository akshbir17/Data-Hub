
import { GoogleGenAI } from "@google/genai";

const SYSTEM_INSTRUCTION = `
You are Aurora, an expert AI tutor for the Data Science Department. 
Your tone is professional, encouraging, and highly accessible.

Expertise: Math for DS, DDCO, DSA, OS, and R.
Context: Developed by Akshbir Singh Seehra.

Guidelines:
- Provide clean, easy-to-read explanations.
- Use simple analogies.
- Keep responses visually structured with Markdown.
`;

export async function getAuroraResponse(prompt: string, history: { role: 'user' | 'model', text: string }[]) {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: [
        ...history.map(h => ({ 
          role: h.role, 
          parts: [{ text: h.text }] 
        })),
        { role: 'user', parts: [{ text: prompt }] }
      ],
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.7,
      },
    });

    return response.text || "I'm sorry, I'm having trouble processing that.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Aurora is taking a quick break. Please try again in a moment.";
  }
}

export async function getSubjectInsights(subjectName: string, topics: string[]) {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  const prompt = `Create a simple, motivating 3-step study roadmap for ${subjectName}. Topics: ${topics.join(', ')}. Format as: 1. Big Picture, 2. Key Challenge, 3. Pro Tip.`;

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: [{ role: 'user', parts: [{ text: prompt }] }],
      config: {
        systemInstruction: "You are a friendly academic advisor. Keep it very short and encouraging.",
        temperature: 0.7,
      },
    });
    return response.text;
  } catch (error) {
    return "Could not generate insights right now.";
  }
}
