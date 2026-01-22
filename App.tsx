
import React, { useState, useEffect, useRef } from 'react';
import { 
  ArrowUpRight, 
  BarChart3, 
  Layers, 
  Users, 
  Target, 
  Cpu, 
  ChevronRight, 
  MessageSquare, 
  Linkedin, 
  Mail,
  Zap,
  Globe,
  PieChart,
  Framer,
  Sparkles,
  Search,
  ExternalLink,
  Code
} from 'lucide-react';
import { GoogleGenAI } from "@google/genai";

// Advanced Navbar
const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${scrolled ? 'py-4' : 'py-8'}`}>
      <div className={`max-w-7xl mx-auto px-6 flex items-center justify-between transition-all duration-500 ${scrolled ? 'glass h-16 rounded-full mx-6' : 'h-20'}`}>
        <div className="text-2xl font-black tracking-tighter flex items-center gap-2">
          <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center text-sm">R</div>
          <span className="hidden sm:block">RAHUL<span className="text-indigo-500">PACHBHAVE</span></span>
        </div>
        <div className="hidden lg:flex gap-10 text-[13px] font-bold tracking-widest uppercase text-zinc-500">
          <a href="#strategy" className="hover:text-indigo-400 transition-colors">Strategy</a>
          <a href="#experience" className="hover:text-indigo-400 transition-colors">Experience</a>
          <a href="#intelligence" className="hover:text-indigo-400 transition-colors">AI Insights</a>
          <a href="#contact" className="hover:text-indigo-400 transition-colors">Contact</a>
        </div>
        <button className="bg-white text-black px-6 py-2.5 rounded-full text-[13px] font-bold hover:scale-105 active:scale-95 transition-all shadow-xl shadow-white/5">
          Work with me
        </button>
      </div>
    </nav>
  );
};

// Immersive Hero
const Hero = () => (
  <section className="relative min-h-screen flex flex-col justify-center items-center px-6 pt-20 overflow-hidden">
    {/* Decorative Elements */}
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] bg-indigo-600/5 rounded-full blur-[160px] -z-10 animate-pulse"></div>
    <div className="absolute top-[20%] right-[10%] w-64 h-64 bg-blue-500/10 rounded-full blur-[120px] -z-10 animate-float"></div>
    
    <div className="max-w-5xl mx-auto text-center relative">
      <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-dark border border-indigo-500/20 text-[11px] font-bold tracking-[0.2em] uppercase text-indigo-400 mb-12 animate-bounce">
        <Sparkles size={14} /> Creative Performance Strategist
      </div>
      
      <h1 className="text-6xl md:text-9xl font-black tracking-tight mb-8 text-gradient leading-[0.9]">
        CREATIVE <br /> THAT <span className="text-indigo-500">SCALES.</span>
      </h1>
      
      <p className="text-xl md:text-2xl text-zinc-400 max-w-2xl mx-auto mb-12 leading-relaxed font-light">
        Engineering high-conversion systems for brands that refuse to settle. <br className="hidden md:block"/> 
        Where <span className="text-white font-semibold">Visual Storytelling</span> meets <span className="text-white font-semibold">Performance Data.</span>
      </p>

      <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
        <a href="#experience" className="group relative w-full sm:w-auto px-10 py-5 bg-indigo-600 rounded-2xl font-bold transition-all overflow-hidden">
          <span className="relative z-10 flex items-center gap-2">Explore Portfolio <ArrowUpRight size={20} /></span>
          <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
        </a>
        <a href="#contact" className="w-full sm:w-auto px-10 py-5 glass hover:bg-white/5 rounded-2xl font-bold transition-all flex items-center justify-center gap-2">
          LinkedIn Protocol <ExternalLink size={18} />
        </a>
      </div>
    </div>

    {/* Scroll Indicator */}
    <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3">
      <span className="text-[10px] font-bold tracking-widest uppercase text-zinc-600">Scroll to Explore</span>
      <div className="w-[1px] h-12 bg-gradient-to-b from-indigo-500 to-transparent"></div>
    </div>
  </section>
);

// Bento Experience Grid
const ExperienceBento = () => {
  const items = [
    {
      size: "md:col-span-2",
      icon: <BarChart3 className="text-indigo-400" />,
      title: "Meta Ads Architect",
      metric: "4.2x ROAS",
      desc: "Scaling brand-first performance campaigns. We don't just spend budget; we architect leverage.",
      color: "from-indigo-500/20 to-transparent"
    },
    {
      size: "md:col-span-1",
      icon: <Layers className="text-blue-400" />,
      title: "Design Systems",
      metric: "Pixel Perfect",
      desc: "Unified visual languages for multi-channel growth.",
      color: "from-blue-500/20 to-transparent"
    },
    {
      size: "md:col-span-1",
      icon: <Target className="text-emerald-400" />,
      title: "UGC Direction",
      metric: "65% VTR",
      desc: "Directing creators to speak the language of conversion.",
      color: "from-emerald-500/20 to-transparent"
    },
    {
      size: "md:col-span-2",
      icon: <Users className="text-violet-400" />,
      title: "Growth Partnerships",
      metric: "12M+ Reach",
      desc: "Bridging the gap between influencer creative and performance marketing funnels.",
      color: "from-violet-500/20 to-transparent"
    }
  ];

  return (
    <section id="experience" className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div>
            <h2 className="text-5xl font-black mb-4">Strategic Artifacts.</h2>
            <p className="text-zinc-500 text-lg">A selection of impact-driven focuses.</p>
          </div>
          <div className="flex items-center gap-8 text-sm font-bold tracking-widest uppercase text-zinc-400">
            <div>20+ CLIENTS</div>
            <div className="w-1 h-1 bg-zinc-800 rounded-full"></div>
            <div>$3M SPEND MNGD</div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {items.map((item, idx) => (
            <div key={idx} className={`${item.size} glass p-10 rounded-[2.5rem] relative group overflow-hidden glow-hover transition-all duration-700`}>
              <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-100 transition-opacity duration-700`}></div>
              <div className="relative z-10">
                <div className="mb-10 p-4 w-fit rounded-2xl glass border border-white/10 group-hover:scale-110 transition-transform duration-500">
                  {item.icon}
                </div>
                <div className="flex items-baseline gap-3 mb-2">
                  <h3 className="text-2xl font-bold">{item.title}</h3>
                  <span className="text-indigo-400 text-sm font-bold">{item.metric}</span>
                </div>
                <p className="text-zinc-500 leading-relaxed max-w-sm">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// AI Intelligence Service (Enhanced)
const AIIntelligence = () => {
  const [query, setQuery] = useState("");
  const [responses, setResponses] = useState<{q: string, a: string}[]>([]);
  const [loading, setLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [responses]);

  const askRahulAI = async (e?: React.FormEvent) => {
    e?.preventDefault();
    if (!query || loading) return;
    
    setLoading(true);
    const currentQuery = query;
    setQuery("");
    
    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
      const result = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: `Persona: You are Rahul Pachbhave's Professional Digital Twin. 
        Expertise: Meta Ads, Growth Strategy, Creative Direction, Personal Branding.
        Tone: Sharp, confident, data-backed, visionary. 
        Question: ${currentQuery}`,
        config: { temperature: 0.8 }
      });
      setResponses(prev => [...prev, { q: currentQuery, a: result.text }]);
    } catch (err) {
      setResponses(prev => [...prev, { q: currentQuery, a: "I'm optimizing my logic gates right now. Let's connect on LinkedIn for a real-time strategy session!" }]);
    }
    setLoading(false);
  };

  return (
    <section id="intelligence" className="py-32 px-6 bg-[#080808]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        <div>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-[10px] font-bold tracking-widest uppercase text-indigo-400 mb-8">
            <Cpu size={14} /> Neural Portfolio Node
          </div>
          <h2 className="text-5xl font-black mb-8 leading-tight">Consult My <br /><span className="text-indigo-500">Digital Twin.</span></h2>
          <p className="text-zinc-400 text-lg mb-12 leading-relaxed max-w-lg">
            I've trained an AI model on my strategic philosophy and past performance data. 
            Ask it about my scaling frameworks, creative direction, or how I handle volatility.
          </p>
          
          <div className="grid grid-cols-2 gap-4">
            <button onClick={() => setQuery("What's your framework for scaling Meta Ads?")} className="p-4 glass text-xs font-bold rounded-2xl text-zinc-500 hover:text-white hover:border-indigo-500/50 transition-all text-left">
              Scaling Frameworks
            </button>
            <button onClick={() => setQuery("How do you balance creative and data?")} className="p-4 glass text-xs font-bold rounded-2xl text-zinc-500 hover:text-white hover:border-indigo-500/50 transition-all text-left">
              Creative Balance
            </button>
          </div>
        </div>

        <div className="glass h-[500px] rounded-[3rem] border-white/5 flex flex-col overflow-hidden shadow-2xl shadow-indigo-500/5">
          <div className="p-6 border-b border-white/5 flex items-center justify-between bg-white/2">
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-[10px] font-bold tracking-widest uppercase text-zinc-400">RP-Core v1.0.4</span>
            </div>
            <Sparkles size={16} className="text-indigo-400" />
          </div>

          <div ref={scrollRef} className="flex-grow overflow-y-auto p-8 space-y-6 scroll-smooth">
            {responses.length === 0 && (
              <div className="h-full flex flex-col items-center justify-center text-center opacity-30">
                <MessageSquare size={48} className="mb-4" />
                <p className="text-sm">Initiate tactical query...</p>
              </div>
            )}
            {responses.map((chat, i) => (
              <div key={i} className="space-y-4">
                <div className="flex justify-end">
                  <div className="bg-indigo-600/20 border border-indigo-500/30 p-4 rounded-2xl rounded-tr-none text-sm max-w-[80%]">
                    {chat.q}
                  </div>
                </div>
                <div className="flex justify-start">
                  <div className="glass p-5 rounded-2xl rounded-tl-none text-sm max-w-[90%] text-zinc-300 leading-relaxed border-l-2 border-indigo-500">
                    {chat.a}
                  </div>
                </div>
              </div>
            ))}
            {loading && (
              <div className="flex justify-start">
                <div className="glass p-5 rounded-2xl rounded-tl-none animate-pulse flex gap-2">
                  <div className="w-1.5 h-1.5 bg-zinc-600 rounded-full animate-bounce"></div>
                  <div className="w-1.5 h-1.5 bg-zinc-600 rounded-full animate-bounce delay-100"></div>
                  <div className="w-1.5 h-1.5 bg-zinc-600 rounded-full animate-bounce delay-200"></div>
                </div>
              </div>
            )}
          </div>

          <form onSubmit={askRahulAI} className="p-6 border-t border-white/5 bg-white/2">
            <div className="relative">
              <input 
                type="text" 
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Ask about strategy..."
                className="w-full bg-black/50 border border-white/10 rounded-2xl py-4 pl-6 pr-14 focus:outline-none focus:border-indigo-500 transition-all text-sm"
              />
              <button className="absolute right-2 top-2 w-10 h-10 bg-indigo-600 text-white rounded-xl flex items-center justify-center hover:bg-indigo-500 transition-all">
                <ChevronRight size={20} />
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

// Marquee Tools
const ToolsMarquee = () => {
  const tools = ['META', 'FIGMA', 'ADOBE CC', 'SHOPIFY', 'GA4', 'KLAVIYO', 'ZAPIER', 'NOTION', 'PYTHON', 'MIDJOURNEY', 'WEBFLOW', 'LINEAR'];
  return (
    <div className="py-20 bg-black border-y border-white/5 overflow-hidden">
      <div className="marquee">
        <div className="marquee-content">
          {tools.map((tool, i) => (
            <span key={i} className="text-4xl md:text-6xl font-black text-zinc-900 flex items-center gap-10 hover:text-indigo-600/20 transition-colors cursor-default">
              {tool} <span className="w-2 h-2 bg-indigo-600 rounded-full"></span>
            </span>
          ))}
        </div>
        <div className="marquee-content" aria-hidden="true">
          {tools.map((tool, i) => (
            <span key={i+100} className="text-4xl md:text-6xl font-black text-zinc-900 flex items-center gap-10 hover:text-indigo-600/20 transition-colors cursor-default">
              {tool} <span className="w-2 h-2 bg-indigo-600 rounded-full"></span>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

// Tactical Footer
const Footer = () => (
  <footer id="contact" className="py-32 px-6 relative overflow-hidden">
    <div className="absolute bottom-0 right-0 w-[50vw] h-[50vw] bg-indigo-600/10 rounded-full blur-[160px] -z-10 translate-x-1/2 translate-y-1/2"></div>
    
    <div className="max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 mb-24">
        <div>
          <h2 className="text-6xl font-black mb-8 leading-none tracking-tighter">LET'S <br /> BUILD THE <br /> <span className="text-indigo-500">FUTURE.</span></h2>
          <p className="text-zinc-500 text-xl max-w-sm">Ready to deploy high-performance creative for your brand?</p>
        </div>
        
        <div className="space-y-8">
          <div className="flex flex-col gap-6">
            <a href="mailto:rahul@pachbhave.com" className="group flex items-center justify-between p-10 glass rounded-[2.5rem] hover:bg-white/5 transition-all">
              <div>
                <span className="text-xs font-bold tracking-widest uppercase text-indigo-500 mb-2 block">Direct Signal</span>
                <span className="text-2xl font-bold">rahul@pachbhave.com</span>
              </div>
              <div className="p-4 rounded-2xl bg-indigo-600 group-hover:scale-110 transition-transform">
                <Mail size={24} />
              </div>
            </a>
            
            <a href="#" className="group flex items-center justify-between p-10 glass rounded-[2.5rem] hover:bg-white/5 transition-all">
              <div>
                <span className="text-xs font-bold tracking-widest uppercase text-zinc-500 mb-2 block">Network Node</span>
                <span className="text-2xl font-bold">LinkedIn Profile</span>
              </div>
              <div className="p-4 rounded-2xl bg-zinc-900 border border-zinc-800 group-hover:bg-indigo-600 transition-colors">
                <Linkedin size={24} />
              </div>
            </a>
          </div>
        </div>
      </div>

      <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8 text-[11px] font-bold tracking-widest uppercase text-zinc-600">
        <div>© RAHUL PACHBHAVE 2025. ALL RIGHTS RESERVED.</div>
        <div className="flex gap-10">
          <a href="#" className="hover:text-white transition-colors flex items-center gap-1"><Code size={12} /> Source</a>
          <a href="#" className="hover:text-white transition-colors">Resume</a>
          <a href="#" className="hover:text-white transition-colors">Brand Book</a>
        </div>
      </div>
    </div>
  </footer>
);

export default function App() {
  return (
    <div className="selection:bg-indigo-600 selection:text-white">
      <Navbar />
      <Hero />
      
      {/* Metric Tape */}
      <div className="px-6 relative -mt-10 z-10">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { label: "ROAS AVG", value: "3.4x", icon: <Target size={14} /> },
            { label: "CREATIVES", value: "800+", icon: <Zap size={14} /> },
            { label: "SPEND MNGD", value: "$3M+", icon: <BarChart3 size={14} /> },
            { label: "REACH", value: "25M", icon: <Users size={14} /> }
          ].map((m, i) => (
            <div key={i} className="glass p-6 rounded-3xl flex flex-col items-center justify-center text-center gap-1 group hover:border-indigo-500/50 transition-all">
              <div className="text-indigo-500 mb-2 p-2 rounded-lg bg-indigo-500/5 group-hover:scale-110 transition-transform">{m.icon}</div>
              <div className="text-2xl font-black">{m.value}</div>
              <div className="text-[10px] tracking-widest uppercase text-zinc-500 font-bold">{m.label}</div>
            </div>
          ))}
        </div>
      </div>

      <ExperienceBento />
      <ToolsMarquee />
      <AIIntelligence />
      <Footer />
    </div>
  );
}
