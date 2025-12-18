
import React from 'react';

export const DeploymentGuide: React.FC = () => {
  const requirements = [
    { name: "Node.js", desc: "Download the 'LTS' version from nodejs.org. This runs your code tools.", icon: "🌐" },
    { name: "Android Studio", desc: "Download from developer.android.com. This builds the final .apk file.", icon: "🤖" },
    { name: "VS Code", desc: "Your code editor where you type the commands.", icon: "💻" }
  ];

  const babySteps = [
    {
      title: "1. Install the Bridge",
      desc: "Open your project folder in VS Code. Open the 'Terminal' at the bottom and paste this command to install Capacitor:",
      cmd: "npm install @capacitor/core @capacitor/cli @capacitor/android"
    },
    {
      title: "2. Prepare Your App",
      desc: "Run the build command to create a folder called 'dist'. This is what the phone will display.",
      cmd: "npm run build"
    },
    {
      title: "3. Create Android Folders",
      desc: "This command creates the actual Android project structure for you automatically.",
      cmd: "npx cap add android"
    },
    {
      title: "4. Sync & Open Studio",
      desc: "This command copies your latest code and launches Android Studio for you.",
      cmd: "npx cap copy && npx cap open android"
    }
  ];

  return (
    <div className="max-w-4xl mx-auto px-8 py-20 animate-fadeIn">
      <header className="mb-24">
        <span className="text-[10px] font-black text-blue-600 uppercase tracking-[0.5em] mb-4 block">Deployment Protocol</span>
        <h1 className="text-6xl font-black text-slate-900 tracking-tighter mb-8 leading-[0.95]">Mobile APK <br/> <span className="text-slate-300">Simplified.</span></h1>
        <p className="text-slate-400 text-xl font-medium leading-relaxed max-w-2xl">
          Follow these absolute baby steps to convert this web portal into a functional Android application.
        </p>
      </header>

      <section className="mb-24">
        <h3 className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-200 mb-10">Software Needed First</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {requirements.map(req => (
            <div key={req.name} className="p-10 bg-slate-50 rounded-[2.5rem] border border-transparent hover:border-slate-100 transition-all">
              <span className="text-3xl mb-6 block">{req.icon}</span>
              <h4 className="font-black text-slate-900 mb-2">{req.name}</h4>
              <p className="text-slate-400 text-sm font-medium leading-relaxed">{req.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="space-y-12">
        <h3 className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-200 mb-10">Step-by-Step Instructions</h3>
        {babySteps.map((step, i) => (
          <div key={i} className="flex gap-10 items-start group">
            <div className="w-12 h-12 bg-slate-900 text-white rounded-[1.2rem] flex items-center justify-center font-black shrink-0 text-sm shadow-xl group-hover:bg-blue-600 transition-colors">
              {i + 1}
            </div>
            <div className="space-y-6 pt-2">
              <h4 className="text-2xl font-black text-slate-900 tracking-tight">{step.title}</h4>
              <p className="text-slate-400 font-medium leading-relaxed text-lg">{step.desc}</p>
              <div className="bg-slate-950 p-6 rounded-2xl border border-slate-900 relative">
                <code className="text-sm font-mono text-blue-400 font-bold block overflow-x-auto whitespace-pre">{step.cmd}</code>
                <button className="absolute top-4 right-4 text-slate-600 hover:text-white transition-colors">
                   <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><rect width="14" height="14" x="8" y="8" rx="2" ry="2"/><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/></svg>
                </button>
              </div>
            </div>
          </div>
        ))}
      </section>

      <section className="mt-32 p-16 bg-slate-900 rounded-[4rem] text-white shadow-3xl relative overflow-hidden">
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-blue-600/10 rounded-full blur-[80px] -mr-40 -mb-40"></div>
        <div className="relative z-10">
          <h3 className="text-4xl font-black mb-8 tracking-tighter">The Finish Line</h3>
          <p className="text-slate-300 text-lg font-medium leading-relaxed mb-12">
            In **Android Studio**, look at the top menu bar. Click these options in order:
          </p>
          <div className="flex flex-wrap items-center gap-6 font-black text-[10px] tracking-[0.2em] uppercase">
            <span className="bg-white/5 px-5 py-3 rounded-xl border border-white/10">Build</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
            <span className="bg-white/5 px-5 py-3 rounded-xl border border-white/10">Build Bundle / APK</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
            <span className="bg-white text-slate-900 px-5 py-3 rounded-xl shadow-xl shadow-white/10">Build APK(s)</span>
          </div>
          <div className="mt-16 p-8 bg-white/5 rounded-3xl border border-white/5">
             <p className="text-sm text-slate-400 italic">
               Wait for the notification at the bottom right of Android Studio. Click **'Locate'** and your .apk file is ready to be shared and installed on any phone!
             </p>
          </div>
        </div>
      </section>
    </div>
  );
};
