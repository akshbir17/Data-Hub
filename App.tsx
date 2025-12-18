import React, { useState, useEffect } from 'react';
import { User, AppView, Subject } from './types';
import { SUBJECTS } from './constants';
import { AuroraBot } from './components/AuroraBot';
import { AkshbirSection } from './components/AkshbirSection';
import { DeploymentGuide } from './components/DeploymentGuide';
import { getSubjectInsights } from './services/geminiService';

const App: React.FC = () => {
  const [view, setView] = useState<AppView>(AppView.LOGIN);
  const [user, setUser] = useState<User | null>(null);
  const [usnInput, setUsnInput] = useState('');
  const [selectedSubject, setSelectedSubject] = useState<Subject | null>(null);
  const [subjectInsight, setSubjectInsight] = useState<string | null>(null);
  const [isGeneratingInsight, setIsGeneratingInsight] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (usnInput.length >= 5) {
      setUser({ usn: usnInput.toUpperCase() });
      setView(AppView.DASHBOARD);
    } else {
      alert("Please enter a valid USN.");
    }
  };

  const handleSubjectClick = (sub: Subject) => {
    setSelectedSubject(sub);
    setSubjectInsight(null);
    setView(AppView.SUBJECT_DETAIL);
  };

  const generateAIInsight = async () => {
    if (!selectedSubject) return;
    setIsGeneratingInsight(true);
    const insight = await getSubjectInsights(selectedSubject.name, selectedSubject.topics);
    setSubjectInsight(insight || "Unable to generate roadmap.");
    setIsGeneratingInsight(false);
  };

  const logout = () => {
    setUser(null);
    setUsnInput('');
    setView(AppView.LOGIN);
  };

  if (view === AppView.LOGIN) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white p-6 relative">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-50/40 rounded-full blur-[120px] -mr-40 -mt-40"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-slate-50/50 rounded-full blur-[100px] -ml-20 -mb-20"></div>
        
        <div className="max-w-md w-full bg-white p-12 rounded-[3.5rem] shadow-[0_32px_64px_rgba(0,0,0,0.06)] border border-slate-100 relative z-10">
          <div className="flex flex-col items-center mb-12">
            <div className="w-20 h-20 bg-slate-900 rounded-[2rem] flex items-center justify-center mb-8 shadow-2xl shadow-slate-200">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>
            </div>
            <h1 className="text-4xl font-black text-slate-900 tracking-tighter mb-2">DS HUB</h1>
            <p className="text-slate-400 font-bold text-[10px] uppercase tracking-[0.3em]">Data Science Department</p>
          </div>
          
          <form onSubmit={handleLogin} className="space-y-6">
            <div className="space-y-2">
              <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-4">Identification (USN)</label>
              <input 
                type="text" 
                value={usnInput}
                onChange={(e) => setUsnInput(e.target.value)}
                placeholder="ENTER USN"
                className="w-full px-8 py-5 rounded-2xl bg-slate-50 border-2 border-transparent focus:bg-white focus:border-slate-900/10 transition-all outline-none font-mono uppercase text-center text-slate-900 text-lg font-bold"
                required
              />
            </div>
            <button 
              type="submit"
              className="w-full bg-slate-900 text-white font-black py-5 rounded-2xl shadow-xl hover:bg-blue-600 transition-all active:scale-[0.98] uppercase text-xs tracking-widest"
            >
              Enter Portal
            </button>
          </form>
          
          <div className="mt-12 text-center">
            <span className="text-[10px] text-slate-300 font-black uppercase tracking-[0.4em]">Designed by Akshbir</span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white flex flex-col font-sans selection:bg-slate-900 selection:text-white">
      <nav className="sticky top-0 z-40 bg-white/80 backdrop-blur-xl border-b border-slate-50 px-8 py-8">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4 cursor-pointer group" onClick={() => setView(AppView.DASHBOARD)}>
            <div className="w-10 h-10 bg-slate-900 rounded-xl flex items-center justify-center text-white font-black text-xs">DS</div>
            <span className="font-black text-2xl tracking-tighter text-slate-900">Hub.</span>
          </div>

          <div className="flex items-center gap-12 text-xs">
            {[
              { id: AppView.DASHBOARD, label: "Home" },
              { id: AppView.AKSHBIR_SECTION, label: "Innovation" },
              { id: AppView.DEPLOYMENT_GUIDE, label: "Hosting" }
            ].map(link => (
              <button 
                key={link.id}
                onClick={() => setView(link.id)} 
                className={`uppercase tracking-[0.3em] font-black transition-all ${view === link.id ? 'text-slate-900' : 'text-slate-300 hover:text-slate-500'}`}
              >
                {link.label}
              </button>
            ))}
            <button onClick={logout} className="text-slate-300 hover:text-red-500 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" x2="9" y1="12" y2="12"/></svg>
            </button>
          </div>
        </div>
      </nav>

      <main className="flex-1 overflow-auto">
        {view === AppView.DASHBOARD && (
          <div className="animate-fadeIn max-w-7xl mx-auto px-8 py-20">
            <header className="mb-24 max-w-3xl">
              <div className="inline-block px-4 py-1.5 rounded-full bg-slate-50 border border-slate-100 text-[9px] font-black text-slate-400 uppercase tracking-[0.4em] mb-8">
                Official Department Gateway
              </div>
              <h1 className="text-7xl font-black text-slate-900 leading-[0.95] tracking-tighter mb-10">
                Data Science <br/>
                <span className="text-slate-300">Curriculum.</span>
              </h1>
              <p className="text-slate-400 text-xl font-medium leading-relaxed">
                Experience a refined learning platform designed for the 3rd Semester. Unified resources, AI-powered strategy, and seamless accessibility.
              </p>
            </header>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              {SUBJECTS.map((sub) => (
                <div 
                  key={sub.id}
                  onClick={() => handleSubjectClick(sub)}
                  className="group bg-white p-12 rounded-[3.5rem] border border-slate-50 shadow-[0_10px_30px_rgba(0,0,0,0.02)] hover:shadow-[0_40px_80px_rgba(0,0,0,0.06)] hover:border-slate-100 transition-all duration-700 cursor-pointer overflow-hidden relative"
                >
                  <div className={`w-14 h-14 ${sub.color} rounded-2xl mb-12 flex items-center justify-center text-white shadow-2xl shadow-slate-100 group-hover:scale-110 transition-transform duration-500`}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1-2.5-2.5Z"/><path d="M6 5v11"/><path d="M10 5v11"/><path d="M14 5v11"/><path d="M18 5v11"/></svg>
                  </div>
                  <span className="text-[10px] font-black text-slate-200 uppercase tracking-[0.3em] mb-3 block">{sub.code}</span>
                  <h3 className="text-3xl font-black text-slate-900 mb-6 group-hover:text-blue-600 transition-colors leading-tight">{sub.name}</h3>
                  <p className="text-slate-400 text-base leading-relaxed font-medium line-clamp-2">{sub.description}</p>
                  
                  <div className="mt-10 pt-8 border-t border-slate-50 flex items-center justify-between">
                    <span className="text-[9px] font-black text-slate-300 uppercase tracking-widest">Explore Subject</span>
                    <div className="w-8 h-8 bg-slate-50 rounded-full flex items-center justify-center group-hover:bg-slate-900 group-hover:text-white transition-all">
                      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {view === AppView.SUBJECT_DETAIL && selectedSubject && (
          <div className="max-w-5xl mx-auto px-8 py-20 animate-fadeIn">
            <button onClick={() => setView(AppView.DASHBOARD)} className="flex items-center gap-3 text-[10px] font-black uppercase tracking-[0.4em] text-slate-300 hover:text-slate-900 transition-all mb-16">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
              Matrix Overview
            </button>

            <div className="bg-white p-16 md:p-24 rounded-[4rem] shadow-[0_40px_100px_rgba(0,0,0,0.04)] border border-slate-50">
              <div className="flex flex-col md:flex-row gap-12 items-start justify-between mb-24">
                <div>
                  <div className={`w-20 h-20 ${selectedSubject.color} rounded-3xl flex items-center justify-center text-white shadow-2xl shadow-slate-100 mb-10`}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v10"/><path d="m16 8-4 4-4-4"/><path d="M12 22v-6"/></svg>
                  </div>
                  <h1 className="text-6xl font-black text-slate-900 tracking-tighter mb-6 leading-[0.9]">{selectedSubject.name}</h1>
                  <p className="text-slate-400 text-xl max-w-2xl font-medium leading-relaxed">{selectedSubject.description}</p>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
                <section>
                  <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-200 mb-10">Syllabus Modules</h4>
                  <div className="space-y-4">
                    {selectedSubject.topics.map((t, i) => (
                      <div key={t} className="p-8 bg-slate-50 rounded-[2rem] border border-transparent hover:border-slate-100 hover:bg-white transition-all group flex items-center gap-6">
                        <span className="text-slate-200 font-black text-2xl group-hover:text-slate-900 transition-colors">{String(i + 1).padStart(2, '0')}</span>
                        <span className="font-bold text-slate-700 text-lg tracking-tight">{t}</span>
                      </div>
                    ))}
                  </div>
                </section>

                <section className="space-y-8">
                   <div className="bg-slate-900 p-12 rounded-[3.5rem] text-white shadow-3xl relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-48 h-48 bg-white/5 rounded-full -mr-16 -mt-16 blur-2xl"></div>
                    
                    <div className="flex items-center gap-4 mb-8">
                      <div className="p-2.5 bg-white/10 rounded-xl">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/></svg>
                      </div>
                      <span className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-400">Intelligence Insight</span>
                    </div>

                    {!subjectInsight ? (
                      <div className="space-y-8">
                        <p className="text-slate-300 font-medium leading-relaxed">Let the AI generate a high-performance study strategy tailored for this module.</p>
                        <button 
                          onClick={generateAIInsight}
                          disabled={isGeneratingInsight}
                          className="w-full bg-white text-slate-900 px-8 py-5 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-slate-50 transition-all disabled:opacity-50 active:scale-95"
                        >
                          {isGeneratingInsight ? "Analyzing Subject..." : "Generate AI Roadmap"}
                        </button>
                      </div>
                    ) : (
                      <div className="prose prose-invert prose-sm">
                        <p className="whitespace-pre-wrap leading-relaxed text-slate-200 font-medium text-base">
                          {subjectInsight}
                        </p>
                        <button onClick={() => setSubjectInsight(null)} className="mt-8 text-[9px] font-black uppercase tracking-widest text-slate-500 hover:text-white transition-colors">Refresh Analysis</button>
                      </div>
                    )}
                  </div>
                  
                  <div className="p-10 bg-slate-50 rounded-[3rem] border border-slate-100">
                    <h5 className="text-[9px] font-black uppercase tracking-[0.4em] text-slate-300 mb-8">Access Resources</h5>
                    <div className="space-y-4">
                      {selectedSubject.resources && selectedSubject.resources.length > 0 ? (
                        selectedSubject.resources.map((res, i) => (
                          <a 
                            key={i} 
                            href={res.url} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="pdf-resource-link w-full bg-white p-6 rounded-2xl flex items-center justify-between group hover:shadow-[0_20px_40px_rgba(59,130,246,0.1)] transition-all border border-slate-50"
                          >
                            <div className="flex items-center gap-4 text-left">
                              <div className="p-2 bg-blue-50 rounded-lg text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>
                              </div>
                              <span className="font-bold text-slate-900 text-sm">{res.title}</span>
                            </div>
                            <svg className="text-slate-300 group-hover:text-blue-600 transition-all duration-300 shrink-0 transform group-hover:translate-x-1" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                          </a>
                        ))
                      ) : (
                        <p className="text-xs text-slate-400 font-medium italic p-4 text-center">Resources being digitized...</p>
                      )}
                    </div>
                  </div>
                </section>
              </div>
            </div>
          </div>
        )}

        {view === AppView.AKSHBIR_SECTION && <AkshbirSection />}
        {view === AppView.DEPLOYMENT_GUIDE && <DeploymentGuide />}
      </main>

      <AuroraBot />
    </div>
  );
};

export default App;