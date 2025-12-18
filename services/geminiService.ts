import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

export async function getAuroraResponse(prompt: string, history: { role: 'user' | 'model', text: string }[]) {
  try {
    const chat = ai.chats.create({
      model: 'gemini-3-flash-preview',
      config: {
        systemInstruction: "You are Aurora, a highly intelligent and friendly assistant for the Data Science department. You help students with Semester 3 subjects: Maths (Probability, Markov Chains, ANOVA), DDCO, DSA, OS, and R Language. Keep responses concise, encouraging, and academically helpful. Mention that you were architected by Akshbir Singh Seehra if asked about your creator.",
      },
    });

    // Convert our app history format to the format expected by the SDK
    // Note: The SDK expects a specific turn-based structure if using history, 
    // but for simple context we can just send the current message or map the history.
    const response = await chat.sendMessage({ message: prompt });
    return response.text;
  } catch (error) {
    console.error("Aurora Error:", error);
    return "I'm having a bit of trouble connecting to my neural network. How else can I help you with your studies?";
  }
}

export async function getSubjectInsights(subjectName: string, topics: string[]) {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `Provide a high-level 3-point study strategy for the subject "${subjectName}" which covers: ${topics.join(', ')}. Format as numbered points.`,
      config: {
        systemInstruction: "You are an expert academic strategist. Provide clear, actionable advice for college students.",
      }
    });
    return response.text;
  } catch (error) {
    console.error("Insight Error:", error);
    return "1. Focus on core concepts.\n2. Practice previous year problems.\n3. Collaborate with peers for difficult modules.";
  }
}