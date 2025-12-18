
import React from 'react';

export const DeploymentGuide: React.FC = () => {
  const netlifySteps = [
    {
      title: "1. Upload to GitHub",
      desc: "Create a new repository and upload ALL files including the new package.json and vite.config.ts."
    },
    {
      title: "2. Connect to Netlify",
      desc: "Log into Netlify.com, click 'Add new site' > 'Import from existing project' and choose your GitHub repo.",
    },
    {
      title: "3. Build Settings (Crucial)",
      desc: "Ensure these exact settings are in the Netlify build form:",
      code: "Build command: npm run build\nPublish directory: dist"
    },
    {
      title: "4. Why was it black?",
      desc: "Browsers can't read .tsx files directly. The 'Build' command converts your code into standard JavaScript that Netlify serves from the 'dist' folder.",
    }
  ];

  return (
    <div className="max-w-4xl mx-auto px-8 py-20 animate-fadeIn">
      <header className="mb-24 text-center lg:text-left">
        <span className="text-[10px] font-black text-blue-600 uppercase tracking-[0.5em] mb-4 block">Fixing the Blank Page</span>
        <h1 className="text-6xl font-black text-slate-900 tracking-tighter mb-8 leading-[0.95]">Netlify <br/> <span className="text-slate-300">Build Guide.</span></h1>
        <p className="text-slate-400 text-xl font-medium leading-relaxed max-w-2xl">
          Follow these steps to transform your raw code into a live, functional website.
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
              {step.code && (
                <div className="bg-slate-900 p-6 rounded-2xl border border-slate-800 mt-4">
                  <pre className="text-blue-400 font-mono text-sm">{step.code}</pre>
                </div>
              )}
            </div>
          </div>
        ))}
      </section>

      <section className="p-12 bg-blue-600 rounded-[3rem] text-white shadow-3xl text-center">
        <h3 className="text-3xl font-black mb-4 tracking-tighter">Ready for Production</h3>
        <p className="text-blue-100 font-medium mb-8">Once you set 'npm run build' and 'dist', your site will come to life.</p>
        <div className="inline-block px-6 py-3 bg-white/10 rounded-xl font-mono text-xs font-bold uppercase tracking-widest border border-white/20">
          No API keys required
        </div>
      </section>
    </div>
  );
};
