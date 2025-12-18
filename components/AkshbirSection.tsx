
import React from 'react';

export const AkshbirSection: React.FC = () => {
  return (
    <div className="max-w-6xl mx-auto px-8 py-20 animate-fadeIn">
      <div className="grid lg:grid-cols-2 gap-16 items-center mb-32">
        <div className="space-y-10">
          <div className="inline-block px-4 py-1.5 rounded-full bg-slate-50 border border-slate-100 text-[9px] font-black text-slate-400 uppercase tracking-[0.4em]">
            Lead Engineering
          </div>
          <h1 className="text-7xl font-black text-slate-900 leading-[0.95] tracking-tighter">
            Akshbir Singh <br/> <span className="text-slate-300">Seehra.</span>
          </h1>
          <p className="text-xl text-slate-400 leading-relaxed font-medium max-w-lg">
            A developer focused on creating highly functional, aesthetically pleasing digital environments for data science professionals.
          </p>
          <div className="flex gap-4">
            <button className="bg-slate-900 text-white px-10 py-5 rounded-2xl font-black text-xs uppercase tracking-[0.2em] shadow-xl hover:bg-blue-600 transition-all active:scale-95">
              Portfolio
            </button>
            <button className="bg-white border-2 border-slate-50 text-slate-400 px-10 py-5 rounded-2xl font-black text-xs uppercase tracking-[0.2em] hover:border-slate-100 hover:text-slate-600 transition-all">
              Connect
            </button>
          </div>
        </div>
        
        <div className="bg-slate-50 rounded-[4rem] p-16 relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-80 h-80 bg-white rounded-full -mr-40 -mt-40 shadow-inner group-hover:scale-110 transition-transform duration-1000"></div>
          <div className="relative z-10 space-y-8">
            <h3 className="text-[10px] font-black uppercase tracking-[0.5em] text-slate-300">Architecture Specs</h3>
            <div className="space-y-6">
              {[
                { label: "AI Backend", value: "Gemini 3 Flash" },
                { label: "Frontend", value: "React 19 + Tailwind" },
                { label: "Deployment", value: "Capacitor Mobile" }
              ].map(spec => (
                <div key={spec.label} className="flex items-center justify-between border-b border-slate-100 pb-4">
                  <span className="font-bold text-slate-400 text-sm">{spec.label}</span>
                  <span className="font-black text-slate-900 text-sm uppercase tracking-widest">{spec.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-10">
        {[
          { title: "Pure Aesthetics", desc: "Forcing a white-only UI to reduce cognitive load and prioritize clarity of data." },
          { title: "Flash Intelligence", desc: "Optimizing for speed using 'Nano-style' flash models for instant academic help." },
          { title: "Universal Bridge", desc: "Designed with a structure that easily syncs to Android via Capacitor CLI." }
        ].map((item, i) => (
          <div key={i} className="p-12 bg-white rounded-[3rem] border border-slate-50 shadow-sm hover:shadow-xl transition-all duration-500">
            <h4 className="font-black text-xl mb-6 text-slate-900 tracking-tight">{item.title}</h4>
            <p className="text-slate-400 text-base leading-relaxed font-medium">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
