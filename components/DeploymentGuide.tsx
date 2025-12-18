
import React from 'react';

export const DeploymentGuide: React.FC = () => {
  const netlifySteps = [
    {
      title: "1. Upload to GitHub",
      desc: "Create a new repository and upload your project files. This allows Netlify to see your code."
    },
    {
      title: "2. Connect to Netlify",
      desc: "Log into Netlify.com, click 'Add new site' > 'Import from existing project' and choose your GitHub repo.",
    },
    {
      title: "3. Instant Launch",
      desc: "Netlify will automatically detect the settings. Just click 'Deploy site'. No API keys are needed for this version!",
    }
  ];

  return (
    <div className="max-w-4xl mx-auto px-8 py-20 animate-fadeIn">
      <header className="mb-24 text-center lg:text-left">
        <span className="text-[10px] font-black text-blue-600 uppercase tracking-[0.5em] mb-4 block">Zero Configuration Hosting</span>
        <h1 className="text-6xl font-black text-slate-900 tracking-tighter mb-8 leading-[0.95]">Deploy to <br/> <span className="text-slate-300">Netlify.</span></h1>
        <p className="text-slate-400 text-xl font-medium leading-relaxed max-w-2xl">
          This portal is now fully local. You can host it on any static web provider without setting up environment variables.
        </p>
      </header>

      <section className="space-y-16 mb-32">
        {netlifySteps.map((step, i) => (
          <div key={i} className="flex gap-10 items-start group">
            <div className="w-12 h-12 bg-slate-900 text-white rounded-[1.2rem] flex items-center justify-center font-black shrink-0 text-sm shadow-xl">
              {i + 1}
            </div>
            <div className="space-y-4 pt-2">
              <h4 className="text-2xl font-black text-slate-900 tracking-tight">{step.title}</h4>
              <p className="text-slate-400 font-medium leading-relaxed text-lg">{step.desc}</p>
            </div>
          </div>
        ))}
      </section>

      <section className="p-12 bg-blue-600 rounded-[3rem] text-white shadow-3xl text-center">
        <h3 className="text-3xl font-black mb-4 tracking-tighter">Ready for Production</h3>
        <p className="text-blue-100 font-medium mb-8">No API keys required. Your local knowledge engine handles everything.</p>
        <div className="inline-block px-6 py-3 bg-white/10 rounded-xl font-mono text-xs font-bold uppercase tracking-widest border border-white/20">
          Build Command: npm run build
        </div>
      </section>
    </div>
  );
};
