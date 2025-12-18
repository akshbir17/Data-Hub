
/**
 * LOCAL KNOWLEDGE ENGINE
 * This replaces the Gemini AI to ensure the app works 
 * offline and without any API keys.
 */

const KNOWLEDGE_BASE: Record<string, string> = {
  "math": "Mathematics for DS focuses on Probability Theory, Markov Chains, and ANOVA. Module 1-5 PDFs are available in the subject section.",
  "probability": "Probability Theory is the heart of Data Science. Focus on Random Variables and Joint Probability Distributions in Module 1 and 2.",
  "dsa": "Data Structures and Algorithms is essential. Master Sorting, Searching, and Dynamic Programming for your technical rounds.",
  "os": "Operating Systems covers Process Management, Memory, and File Systems. Focus on CPU Scheduling algorithms for exams.",
  "r language": "R is powerful for statistical computing. Ensure you understand Tidyverse and ggplot2 for data visualization.",
  "ddco": "Digital Design & Computer Org deals with the hardware layer. Pay attention to Logic Gates and ISA.",
  "akshbir": "Akshbir Singh Seehra is the lead engineer who architected this Data Science Hub.",
  "help": "I can help you with subject roadmaps, exam tips, or finding specific module notes. Just ask about a subject!",
  "exam": "For exams: Review the 'Key Challenges' in the subject insights and solve the problems in the provided Module PDFs.",
  "sem": "Semester 3 is critical for foundations. Focus on DSA and Mathematics as they form the base for Machine Learning later."
};

export async function getAuroraResponse(prompt: string, history: { role: 'user' | 'model', text: string }[]) {
  // Simulate network delay for "realism"
  await new Promise(resolve => setTimeout(resolve, 600));
  
  const query = prompt.toLowerCase();
  
  // Find matching keyword
  for (const key in KNOWLEDGE_BASE) {
    if (query.includes(key)) {
      return KNOWLEDGE_BASE[key];
    }
  }

  return "I'm a specialized assistant for the DS Department. I can tell you about Maths, DDCO, DSA, OS, or R programming. Which subject are you studying today?";
}

export async function getSubjectInsights(subjectName: string, topics: string[]) {
  await new Promise(resolve => setTimeout(resolve, 800));
  
  const roadmaps: Record<string, string> = {
    "maths": "1. Big Picture: Master distributions.\n2. Key Challenge: Understanding Markov transitions.\n3. Pro Tip: Use Module 4 to practice Z-table values.",
    "ddco": "1. Big Picture: Logic to Architecture.\n2. Key Challenge: Writing Verilog code correctly.\n3. Pro Tip: Sketch circuit diagrams before implementing.",
    "dsa": "1. Big Picture: Complexity management.\n2. Key Challenge: Dynamic Programming logic.\n3. Pro Tip: Trace your algorithms on paper first.",
    "os": "1. Big Picture: Resource coordination.\n2. Key Challenge: Deadlock prevention logic.\n3. Pro Tip: Module 2's scheduling algorithms are high-scoring.",
    "r-lang": "1. Big Picture: Statistical storytelling.\n2. Key Challenge: Data cleaning workflows.\n3. Pro Tip: Use 'Cheat Sheets' for ggplot2 syntax."
  };

  // Normalize ID for lookup
  const id = subjectName.toLowerCase().includes('math') ? 'maths' : 
             subjectName.toLowerCase().includes('digital') ? 'ddco' :
             subjectName.toLowerCase().includes('data structure') ? 'dsa' :
             subjectName.toLowerCase().includes('operating') ? 'os' : 'r-lang';

  return roadmaps[id] || "1. Big Picture: Foundation building.\n2. Key Challenge: Consistent practice.\n3. Pro Tip: Study with your peers using the Hub resources.";
}
