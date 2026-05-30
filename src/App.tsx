/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from "react";
import { motion, useScroll, useSpring } from "motion/react";
import { 
  Briefcase, 
  BookOpen, 
  TrendingUp, 
  Mail, 
  Copy, 
  Check, 
  ArrowUpRight, 
  Sparkles, 
  Compass, 
  FileText, 
  Target, 
  ChevronRight,
  Eye,
  Minimize2
} from "lucide-react";
import InteractiveStudyTools from "./components/InteractiveStudyTools";
import AdBreakdownSection from "./components/AdBreakdownSection";

export default function App() {
  const [scanMode, setScanMode] = useState<boolean>(false);
  const [copied, setCopied] = useState<boolean>(false);
  const [scrollProgress, setScrollProgress] = useState<number>(0);
  const [activeSection, setActiveSection] = useState<string>("framing");

  // Handle scroll progress and active section tracking
  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        setScrollProgress((window.pageYOffset / totalScroll) * 100);
      }

      // Check current active section
      const sections = ["framing", "context", "challenge", "thinking", "synthesis", "results", "translation", "bonus"];
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 200 && rect.bottom >= 150) {
            setActiveSection(section);
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const copyEmail = () => {
    navigator.clipboard.writeText("Gabriieellxeu@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  // Helper component to conditionally highlight key strategist logic
  const Highlight = ({ children, bold = false }: { children: React.ReactNode, bold?: boolean }) => {
    if (scanMode) {
      return (
        <span className={`transition-all duration-300 bg-orange-100/70 text-[#C2410C] px-1 rounded font-medium ${bold ? 'font-bold' : ''}`}>
          {children}
        </span>
      );
    }
    return <span className={bold ? "font-bold text-gray-900" : ""}>{children}</span>;
  };

  // Helper system to dim long filler content if in quick scan mode
  const BodyText = ({ children }: { children: React.ReactNode }) => {
    return (
      <p className={`transition-all duration-300 leading-relaxed text-sm md:text-base ${
        scanMode ? "text-gray-400 font-light" : "text-gray-700"
      }`}>
        {children}
      </p>
    );
  };

  return (
    <div className="min-h-screen bg-[#FAF9F5] text-[#1C1A17] font-sans antialiased text-base selection:bg-orange-100 selection:text-[#C2410C]">
      
      {/* Top Floating Reading HUD */}
      <header className="sticky top-0 z-50 bg-[#FAF9F5]/90 backdrop-blur-md border-b border-[#EAE6DF] transition-all duration-300">
        <div className="max-w-6xl mx-auto px-4 md:px-8 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded bg-[#C2410C] flex items-center justify-center text-white font-mono text-xs font-bold shadow-xs">
              GL
            </div>
            <div>
              <span className="font-semibold block text-sm tracking-tight text-gray-900 leading-none">Gabriel Letácio</span>
              <span className="font-mono text-[10px] text-gray-500 uppercase tracking-widest block mt-0.5">Creative Strategist</span>
            </div>
          </div>

          {/* Inline reading navigator (Hidden on Mobile) */}
          <nav className="hidden lg:flex items-center gap-4 text-xs font-mono text-gray-500">
            {[
              { id: "framing", label: "Framing" },
              { id: "context", label: "Context" },
              { id: "thinking", label: "Strategy" },
              { id: "synthesis", label: "Synthesis" },
              { id: "results", label: "Results" },
              { id: "translation", label: "E-com" },
              { id: "bonus", label: "Ad Deep Dive" }
            ].map((sec) => (
              <button
                key={sec.id}
                onClick={() => scrollToSection(sec.id)}
                className={`transition-colors duration-200 hover:text-[#C2410C] relative py-1 ${
                  activeSection === sec.id ? "text-[#C2410C] font-semibold" : ""
                }`}
              >
                {sec.label}
                {activeSection === sec.id && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#C2410C]" />
                )}
              </button>
            ))}
          </nav>

          {/* Scan Mode Toggle and Action Connect */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => setScanMode(!scanMode)}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full border text-xs font-mono tracking-tight transition-all duration-300 ${
                scanMode 
                  ? "bg-[#C2410C] text-white border-[#C2410C]" 
                  : "bg-white text-gray-700 border-[#EAE6DF] hover:border-[#C2410C]"
              }`}
              title="Toggle highlighted key strategic insights for busy hiring managers"
            >
              <Eye size={12} className={scanMode ? "animate-pulse" : ""} />
              <span className="hidden md:inline">{scanMode ? "Scan Mode Active" : "Hiring Manager Scan Mode"}</span>
              <span className="md:hidden">{scanMode ? "Scan ON" : "Scan"}</span>
            </button>
            
            <button
              onClick={copyEmail}
              className="flex items-center gap-1.5 px-3,2.5 md:px-4 py-1.5 bg-[#1C1A17] hover:bg-[#C2410C] text-white rounded text-xs font-mono transition-all duration-300 shadow-sm shrink-0"
            >
              {copied ? <Check size={12} className="text-emerald-300" /> : <Mail size={12} />}
              <span className="hidden sm:inline">{copied ? "Copied Email" : "Connect"}</span>
              <span className="sm:hidden">{copied ? "Copied" : "Contact"}</span>
            </button>
          </div>
        </div>

        {/* Dynamic Reading Scroll Bar */}
        <div className="w-full bg-[#EAE6DF] h-0.5">
          <div 
            className="bg-[#C2410C] h-0.5 transition-all duration-150" 
            style={{ width: `${scrollProgress}%` }}
          />
        </div>
      </header>

      {/* Main Container */}
      <main className="max-w-4xl mx-auto px-4 md:px-8 py-16 md:py-24 space-y-24 md:space-y-32">
        
        {/* Section 1: Strategic Work Sample Header (The Cover Plate) */}
        <section id="cover" className="space-y-8 text-center md:text-left">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-orange-50 rounded-full border border-orange-100 text-[#C2410C] font-mono text-xs uppercase tracking-widest mx-auto md:mx-0">
              <span className="w-2 h-2 rounded-full bg-[#C2410C] block"></span>
              Strategic Work Sample
            </div>
            
            <h1 className="font-serif text-4xl md:text-6xl font-medium tracking-tight text-[#1C1A17] leading-tight md:leading-[1.12]">
              Turning Attention Into Demand for a <span className="text-[#C2410C] italic font-semibold">600K+</span> Education Creator
            </h1>
          </div>

          <div className="h-[1px] bg-[#EAE6DF] w-full"></div>

          {/* Brief Quick Specs Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-left pt-2">
            <div>
              <span className="font-mono text-[10px] text-gray-400 uppercase tracking-widest block">Client Ecosystem</span>
              <span className="font-sans font-bold text-sm text-gray-800 mt-1 block">Fluenky (English Niche)</span>
            </div>
            <div>
              <span className="font-mono text-[10px] text-gray-400 uppercase tracking-widest block">Strategic Focus</span>
              <span className="font-sans font-bold text-sm text-gray-800 mt-1 block">Aspirational Positioning</span>
            </div>
            <div>
              <span className="font-mono text-[10px] text-gray-400 uppercase tracking-widest block">Core Accomplishment</span>
              <span className="font-sans font-bold text-sm text-gray-800 mt-1 block">+570,000 Organic Gain</span>
            </div>
            <div>
              <span className="font-mono text-[10px] text-gray-400 uppercase tracking-widest block">Evaluation Objective</span>
              <span className="font-sans font-bold text-sm text-[#C2410C] mt-1 block">E-comm / DTC Translation</span>
            </div>
          </div>
        </section>

        {/* Section 2: A Quick, Honest Framing */}
        <section id="framing" className="space-y-6 scroll-mt-24 border-l-2 border-[#C2410C] pl-6 md:pl-10">
          <div className="space-y-2">
            <span className="font-mono text-xs text-[#C2410C] uppercase tracking-widest font-semibold block">
              Orientation
            </span>
            <h2 className="font-serif text-2xl md:text-3xl font-medium tracking-tight text-[#1C1A17]">
              A quick, honest framing
            </h2>
          </div>

          <div className="space-y-4 max-w-3xl">
            <p className="font-serif text-lg md:text-xl text-gray-800 italic leading-relaxed">
              This is one case, studied in depth — not a gallery of work.
            </p>

            <BodyText>
              I don&apos;t have a physical-product e-commerce case yet. What I have is something <Highlight>I think tells you more about how I&apos;ll perform in this role</Highlight>: I helped architect the strategy that <Highlight bold>grew a Brazilian English-learning brand past 600,000 followers in 10 months</Highlight> — in one of the most saturated, fear-driven education niches in the country.
            </BodyText>

            <BodyText>
              Below is the strategic anatomy of how, and <Highlight>exactly why every muscle I built here transfers to physical-product e-commerce.</Highlight> The mechanism of converting human attention parameters is identical.
            </BodyText>
          </div>
        </section>

        {/* Section 3: Context */}
        <section id="context" className="space-y-8 scroll-mt-24">
          <div className="space-y-2">
            <span className="font-mono text-xs text-gray-400 uppercase tracking-widest block">
              The Backdrop
            </span>
            <h2 className="font-serif text-3xl font-medium tracking-tight text-[#1C1A17]">
              Context
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
            <div className="space-y-3 bg-white p-6 rounded-md border border-[#EAE6DF]">
              <span className="font-mono text-xs text-[#C2410C] tracking-wide block uppercase font-bold">01 / The Brand</span>
              <h4 className="font-bold text-[#1C1A17] text-lg">Fluenky</h4>
              <p className="text-xs text-gray-600 leading-relaxed">
                A high-potential Brazilian creator-led startup inside the intensely fast-paced English-learning niche.
              </p>
            </div>

            <div className="space-y-3 bg-white p-6 rounded-md border border-[#EAE6DF]">
              <span className="font-mono text-xs text-[#C2410C] tracking-wide block uppercase font-bold">02 / My Role</span>
              <h4 className="font-bold text-[#1C1A17] text-lg">Strategic Partner</h4>
              <p className="text-xs text-gray-600 leading-relaxed">
                Focused entirely on positioning, sales architecture, audience psychographic research, content hooks, and brand growth — deliberately bypassing standard aesthetics.
              </p>
            </div>

            <div className="space-y-3 bg-white p-6 rounded-md border border-[#EAE6DF]">
              <span className="font-mono text-xs text-[#C2410C] tracking-wide block uppercase font-bold">03 / The Market</span>
              <h4 className="font-bold text-[#1C1A17] text-lg">Red-Ocean Matrix</h4>
              <p className="text-xs text-gray-600 leading-relaxed">
                Brazil&apos;s English-learning vertical is highly oversaturated. Every competitor promises speed, boasts proven structures, and displays endless reviews. Attention is cheap; trust and genuine authority are extraordinarily expensive.
              </p>
            </div>
          </div>
        </section>

        {/* Section 4: The Challenge */}
        <section id="challenge" className="space-y-8 scroll-mt-24">
          <div className="space-y-2">
            <span className="font-mono text-xs text-gray-400 uppercase tracking-widest block">
              The Strategic Diagnosis
            </span>
            <h2 className="font-serif text-3xl font-medium tracking-tight text-[#1C1A17]">
              The Challenge
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center bg-white border border-[#EAE6DF] rounded-lg p-6 md:p-10">
            {/* Written Analysis */}
            <div className="md:col-span-7 space-y-4">
              <p className="font-serif text-lg leading-relaxed text-gray-900 border-l-2 border-[#C2410C] pl-4">
                The problem was never visibility. It was differentiation inside a market the audience had already stopped listening to.
              </p>
              
              <div className="space-y-3 text-sm text-gray-700 leading-relaxed">
                <BodyText>
                  The entire niche is camped in the same emotional register: <Highlight bold>fear</Highlight>. You freeze when you try to speak. You&apos;ll be left behind. You&apos;ll embarrass yourself pronouncing things wrong. It&apos;s relentless, high-intensity knife-twisting running on near-100% of competitors.
                </BodyText>
                <BodyText>
                  Predictably, <Highlight>the audience went numb</Highlight>. The constant fear no longer converts; it just becomes background static.
                </BodyText>
                <BodyText>
                  So the strategic choice wasn&apos;t &quot;how do we shout louder?&quot; It was: <Highlight bold>&quot;how do we break through to an audience that has built a solid wall against this exact kind of message?&quot;</Highlight>
                </BodyText>
              </div>
            </div>

            {/* Quick Graphic Matrix mapping Niche Fatigue */}
            <div className="md:col-span-5 bg-[#FAF9F5] rounded border border-[#EAE6DF] p-6 space-y-4">
              <span className="font-mono text-[10px] text-gray-400 uppercase tracking-widest block text-center">Competitor Messaging Map</span>
              
              <div className="space-y-2">
                <div className="flex justify-between items-center text-xs font-mono">
                  <span className="text-red-600 font-bold">Standard Play (Fear)</span>
                  <span className="text-gray-400">98% frequency</span>
                </div>
                <div className="w-full bg-gray-200 h-2 rounded-full overflow-hidden">
                  <div className="bg-red-500 h-full w-[95%]" />
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex justify-between items-center text-xs font-mono">
                  <span className="text-[#C2410C] font-bold">Our Approach (Identity)</span>
                  <span className="text-gray-400">Fluenky Shift</span>
                </div>
                <div className="w-full bg-gray-200 h-2 rounded-full overflow-hidden">
                  <div className="bg-[#C2410C] h-full w-[100%]" />
                </div>
              </div>

              <blockquote className="font-serif text-xs leading-relaxed italic text-gray-500 border-t border-gray-150 pt-3">
                &ldquo;By shifting the emotional register away from panic to aspirational identity, we bypassed competitor advertising systems altogether.&rdquo;
              </blockquote>
            </div>
          </div>
        </section>

        {/* Section 5: Strategic Thinking */}
        <section id="thinking" className="space-y-8 scroll-mt-24">
          <div className="space-y-2">
            <span className="font-mono text-xs text-gray-400 uppercase tracking-widest block">
              Methodology in Action
            </span>
            <h2 className="font-serif text-3xl font-medium tracking-tight text-[#1C1A17]">
              Strategic Thinking
            </h2>
            <p className="text-xs text-gray-500 font-mono">
              This is the part that matters, so I&apos;ll show the reasoning, not just the result.
            </p>
          </div>

          {/* The Four Core Pillars Blocks */}
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              <div className="bg-white border border-[#EAE6DF] p-6 rounded-lg space-y-3 shadow-2xs hover:border-orange-200 transition-all duration-300">
                <div className="flex items-center justify-between border-b border-gray-100 pb-2">
                  <span className="font-mono text-xs font-bold text-[#C2410C]">PILLAR 1</span>
                  <span className="text-xs font-mono text-gray-400">FOUNDATIONAL DATA</span>
                </div>
                <h4 className="font-serif text-lg font-semibold text-[#1C1A17]">Psychographic research as the foundation</h4>
                <p className="text-xs md:text-sm text-gray-600 leading-relaxed">
                  Before formulating a single content hook, <Highlight>I researched the unspoken frustrations of Brazilian English learners</Highlight> — the hidden shame of freezing mid-conversation, the years spent inside traditional courses without progress, and the quiet belief that &quot;I&apos;m just not built for languages.&quot; Those exact raw descriptions became the backbone of every hook, stripping away synthetic marketing fluff.
                </p>
              </div>

              <div className="bg-white border border-[#EAE6DF] p-6 rounded-lg space-y-3 shadow-2xs hover:border-orange-200 transition-all duration-300">
                <div className="flex items-center justify-between border-b border-gray-100 pb-2">
                  <span className="font-mono text-xs font-bold text-[#C2410C]">PILLAR 2</span>
                  <span className="text-xs font-mono text-gray-400">Blue Ocean Positioning</span>
                </div>
                <h4 className="font-serif text-lg font-semibold text-[#1C1A17]">Differentiation by mechanism, not by features</h4>
                <p className="text-xs md:text-sm text-gray-600 leading-relaxed">
                  Every competitor differentiates on features — more lessons, more live support, a &quot;proven system.&quot; That is a race nobody wins. <Highlight>Instead of listing features, we identified why the traditional approach inherently fails</Highlight> — the broken mechanism behind why most study for years and still can&apos;t output speech — and positioned Fluenky as the logical, smart correction of that exact diagnostic failure.
                </p>
              </div>

              <div className="bg-white border border-[#EAE6DF] p-6 rounded-lg space-y-3 shadow-2xs hover:border-orange-200 transition-all duration-300">
                <div className="flex items-center justify-between border-b border-gray-100 pb-2">
                  <span className="font-mono text-xs font-bold text-[#C2410C]">PILLAR 3</span>
                  <span className="text-xs font-mono text-gray-400">Market Expansion</span>
                </div>
                <h4 className="font-serif text-lg font-semibold text-[#1C1A17]">Emotional modulation as a growth engine</h4>
                <p className="text-xs md:text-sm text-gray-600 leading-relaxed">
                  The standard play is to narrow the focus and twist the pain-knife. <Highlight>We did the opposite: kept Fluenky deliberately neutral, plural, and aspirational</Highlight> — speaking to many profiles, anchored in identity and the life fluency opens rather than the fear of failing. That wasn&apos;t a soft choice; it was a market-scale decision. Aspiration expands your target addressable pool; fear actively shrinks it.
                </p>
              </div>

              <div className="bg-white border border-[#EAE6DF] p-6 rounded-lg space-y-3 shadow-2xs hover:border-orange-200 transition-all duration-300">
                <div className="flex items-center justify-between border-b border-gray-100 pb-2">
                  <span className="font-mono text-xs font-bold text-[#C2410C]">PILLAR 4</span>
                  <span className="text-xs font-mono text-gray-400">Attention Systems</span>
                </div>
                <h4 className="font-serif text-lg font-semibold text-[#1C1A17]">Authority and attention, proven at scale</h4>
                <p className="text-xs md:text-sm text-gray-600 leading-relaxed">
                  The initial 3-second window is the most expensive bottleneck. Growing past 600K organic followers in 10 months, peak of 400K in 3 months, is the direct resulting proof. <Highlight>Organic growth at this speed only occurs with systematic pattern-interrupts and tight hooks</Highlight> working across every piece of media published—identical to performance ad design.
                </p>
              </div>

            </div>

            {/* Injected Interactive Translator Block */}
            <div className="pt-10">
              <InteractiveStudyTools scanMode={scanMode} />
            </div>
          </div>
        </section>

        {/* Section 6: The Synthesis — How I Actually Think */}
        <section id="synthesis" className="scroll-mt-24 text-center space-y-8 bg-[#1C1A17] text-[#FAF9F5] rounded-xl p-8 md:p-16 relative overflow-hidden">
          {/* Subtle background radial visual accent */}
          <div className="absolute inset-x-0 top-0 h-40 bg-radial-at-t from-[#C2410C]/20 to-transparent pointer-events-none" />

          <div className="space-y-4 max-w-2xl mx-auto relative z-10">
            <span className="font-mono text-xs uppercase tracking-widest text-[#C2410C] font-semibold">
              The Core Thesis
            </span>
            <h2 className="font-serif text-lg font-light italic text-gray-300">
              The Synthesis — how I actually think:
            </h2>
          </div>

          {/* Emphasized 4-Line Synthesis Grid */}
          <div className="max-w-2xl mx-auto relative z-10 py-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-left border-y border-zinc-800 my-4 divide-y md:divide-y-0 md:divide-x divide-zinc-800">
            <div className="pt-4 md:pt-0 md:px-3">
              <span className="font-mono text-[9px] text-gray-400 block mb-1">CRAFT LEVEL</span>
              <p className="font-serif font-semibold text-lg italic text-white leading-snug">Method makes the creative good.</p>
            </div>
            <div className="pt-4 md:pt-0 md:px-3">
              <span className="font-mono text-[9px] text-gray-400 block mb-1">CONVINCING POINT</span>
              <p className="font-serif font-semibold text-lg italic text-white leading-snug">Authority makes them believe.</p>
            </div>
            <div className="pt-4 md:pt-0 md:px-3">
              <span className="font-mono text-[9px] text-gray-400 block mb-1">EXPANSION ENGINE</span>
              <p className="font-serif font-semibold text-lg italic text-[#C2410C] leading-snug">Aspiration makes it scale.</p>
            </div>
            <div className="pt-4 md:pt-0 md:px-3">
              <span className="font-mono text-[9px] text-gray-400 block mb-1">DESIRE LAYER</span>
              <p className="font-serif font-semibold text-lg italic text-white leading-snug">Identity makes them desire.</p>
            </div>
          </div>

          <div className="max-w-xl mx-auto relative z-10">
            <p className="font-sans text-xs md:text-sm text-zinc-400 leading-relaxed">
              My edge isn&apos;t aesthetic creativity — <span className="text-white font-semibold">it&apos;s strategic creativity.</span> I use aspiration and identity to capture desire, but I ground every single hook angle in proven human mechanisms, authority context, and measured analytics. I&apos;m not someone who simply &quot;has warm ideas.&quot; I am someone who <span className="text-[#C2410C] font-bold">architects psychological velocity and converts it into momentum you can measure.</span>
            </p>
          </div>
        </section>

        {/* Section 7: Results */}
        <section id="results" className="space-y-8 scroll-mt-24">
          <div className="space-y-2">
            <span className="font-mono text-xs text-gray-400 uppercase tracking-widest block">
              Quantifiable Momentum
            </span>
            <h2 className="font-serif text-3xl font-medium tracking-tight text-[#1C1A17]">
              Results & Metric Validation
            </h2>
            <p className="text-xs text-gray-500 font-mono">
              Honest framing: these correspond to high-velocity organic attention metrics—audience growth—where the core initial positioning work was concentrated.
            </p>
          </div>

          {/* Metric Dashboard */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-stretch">
            
            {/* Metric 1 */}
            <div className="md:col-span-4 bg-white border border-[#EAE6DF] rounded-lg p-6 flex flex-col justify-between">
              <div>
                <span className="font-mono text-[10px] text-gray-400 uppercase tracking-widest block">Growth Gained</span>
                <span className="font-serif text-4xl font-bold text-[#C2410C] mt-2 block">
                  570,000+
                </span>
              </div>
              <p className="text-xs text-gray-600 leading-relaxed mt-4">
                Organic followers gained inside 10 continuous months inside Brazil&apos;s saturated education market.
              </p>
            </div>

            {/* Metric 2 */}
            <div className="md:col-span-4 bg-white border border-[#EAE6DF] rounded-lg p-6 flex flex-col justify-between">
              <div>
                <span className="font-mono text-[10px] text-gray-400 uppercase tracking-widest block">Peak Momentum Velocity</span>
                <span className="font-serif text-4xl font-bold text-[#1C1A17] mt-2 block">
                  400,000
                </span>
              </div>
              <p className="text-xs text-gray-600 leading-relaxed mt-4">
                Follower increase achieved within a single 3-month window of campaign expansion.
              </p>
            </div>

            {/* Metric 3 */}
            <div className="md:col-span-4 bg-white border border-[#EAE6DF] rounded-lg p-6 flex flex-col justify-between">
              <div>
                <span className="font-mono text-[10px] text-gray-400 uppercase tracking-widest block">Paid Acquisition Cost</span>
                <span className="font-serif text-4xl font-bold text-emerald-700 mt-2 block">
                  $0.00
                </span>
              </div>
              <p className="text-xs text-gray-600 leading-relaxed mt-4">
                Organic amplification. Driven entirely via premium differentiation & mechanism alignment rather than reliance on heavy ad-spend.
              </p>
            </div>

          </div>

          {/* Pure SVG Custom Vector Velocity Graph (Ensuring zero external chart dependencies blockages) */}
          <div className="bg-white border border-[#EAE6DF] p-6 rounded-lg">
            <span className="font-mono text-[10px] text-gray-400 uppercase tracking-widest block mb-4 text-center">
              10-Month Audited Growth Path Velocity (Fluenky Organic Followers)
            </span>
            
            <div className="aspect-[21/9] w-full relative">
              <svg 
                viewBox="0 0 700 250" 
                className="w-full h-full text-[#C2410C]"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Horizontal Guide Lines */}
                <line x1="50" y1="50" x2="650" y2="50" stroke="#EAE6DF" strokeWidth="1" strokeDasharray="4 4" />
                <line x1="50" y1="125" x2="650" y2="125" stroke="#EAE6DF" strokeWidth="1" strokeDasharray="4 4" />
                <line x1="50" y1="200" x2="650" y2="200" stroke="#EAE6DF" strokeWidth="1" />

                {/* Y Axis Legend labels */}
                <text x="40" y="55" textAnchor="end" className="text-[9px] fill-gray-400 font-mono">600K</text>
                <text x="40" y="130" textAnchor="end" className="text-[9px] fill-gray-400 font-mono">300K</text>
                <text x="40" y="205" textAnchor="end" className="text-[9px] fill-gray-400 font-mono">0</text>

                {/* Curve fill shadow */}
                <path 
                  d="M 50 200 L 100 195 L 180 180 L 260 160 L 340 145 L 420 110 L 500 70 L 580 55 L 650 50 L 650 200 Z" 
                  fill="url(#gradient-gold)" 
                  opacity="0.15" 
                />

                {/* Growth Path Polyline */}
                <path 
                  d="M 50 200 Q 100 196, 180 180 T 340 145 T 500 75 T 650 50" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="3.5" 
                  strokeLinecap="round"
                />

                {/* Point indicators & tooltip labels */}
                <circle cx="500" cy="75" r="5" fill="#1C1A17" stroke="#FAF9F5" strokeWidth="2" />
                <text x="500" y="55" textAnchor="middle" className="text-[10px] font-mono fill-gray-800 font-bold">Peak Gain Block (+400K)</text>

                <circle cx="650" cy="50" r="5" fill="#C2410C" stroke="#FAF9F5" strokeWidth="2" />
                <text x="640" y="32" textAnchor="end" className="text-[10px] font-mono fill-[#C2410C] font-semibold">600K+ Milestone</text>

                {/* X Axis Months Label */}
                <text x="50" y="222" textAnchor="middle" className="text-[9px] fill-gray-400 font-mono">Month 1</text>
                <text x="200" y="222" textAnchor="middle" className="text-[9px] fill-gray-400 font-mono">Month 3</text>
                <text x="350" y="222" textAnchor="middle" className="text-[9px] fill-gray-400 font-mono">Month 5</text>
                <text x="500" y="222" textAnchor="middle" className="text-[9px] fill-gray-400 font-mono">Month 8 (Explosion)</text>
                <text x="650" y="222" textAnchor="middle" className="text-[9px] fill-gray-400 font-mono">Month 10</text>

                {/* Gradient Definition */}
                <defs>
                  <linearGradient id="gradient-gold" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#C2410C" />
                    <stop offset="100%" stopColor="#FFFFFF" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </div>
        </section>

        {/* Section 8: Why This Translates to Physical-Product E-commerce */}
        <section id="translation" className="space-y-8 scroll-mt-24">
          <div className="space-y-2">
            <span className="font-mono text-xs text-gray-400 uppercase tracking-widest block">
              DTC Muscle Bridge
            </span>
            <h2 className="font-serif text-3xl font-medium tracking-tight text-[#1C1A17]">
              Why this transfers directly to physical-product e-commerce
            </h2>
          </div>

          <div className="space-y-6">
            <BodyText>
              I haven&apos;t run a DTC product yet — but the muscles I built here map directly onto it, and <Highlight>I&apos;d rather show you the explicit map</Highlight> than ask you to take it on faith:
            </BodyText>

            {/* Translation horizontal stack cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
              
              <div className="bg-white border border-[#EAE6DF] p-6 rounded-md space-y-2">
                <span className="font-mono text-xs uppercase text-gray-400 tracking-wider">01 / AWARENESS GEOMETRIES</span>
                <h4 className="font-bold text-[#1C1A17] text-base">Awareness-stage targeting</h4>
                <p className="text-xs text-gray-600 leading-relaxed">
                  Identical logic for any DTC product: knowing whether you are talking to a problem-aware, solution-aware, or entirely unaware audience decides your entire conceptual angles and copy length.
                </p>
              </div>

              <div className="bg-white border border-[#EAE6DF] p-6 rounded-md space-y-2">
                <span className="font-mono text-xs uppercase text-gray-400 tracking-wider">02 / MECHANISM INTENSITY</span>
                <h4 className="font-bold text-[#1C1A17] text-base">Mechanism-based differentiation</h4>
                <p className="text-xs text-gray-600 leading-relaxed">
                  The identical logical framework that separated Fluenky from its competitors is what separates a winning video ad from a losing creative on Meta. Identify and name the broken mechanism, position the product as the single cure.
                </p>
              </div>

              <div className="bg-white border border-[#EAE6DF] p-6 rounded-md space-y-2">
                <span className="font-mono text-xs uppercase text-gray-400 tracking-wider">03 / EMOTIONAL HACKING</span>
                <h4 className="font-bold text-[#1C1A17] text-base">Emotional-quadrant modulation</h4>
                <p className="text-xs text-gray-600 leading-relaxed">
                  Moving a brand out of saturated fear-messaging into clean identity-driven aspiration is exactly how you keep digital e-commerce ads from fatiguing, raising CTR and expanding your addressable market scale.
                </p>
              </div>

              <div className="bg-white border border-[#EAE6DF] p-6 rounded-md space-y-2">
                <span className="font-mono text-xs uppercase text-gray-400 tracking-wider">04 / AUDIENCE SCRYING</span>
                <h4 className="font-bold text-[#1C1A17] text-base">Authority and attention at scale</h4>
                <p className="text-xs text-gray-600 leading-relaxed">
                  The account-wide version of the core pattern-interrupt mechanisms and feedback retention loops that govern high-performing mini-VSLs or native hook TikTok assets.
                </p>
              </div>

            </div>

            <div className="border border-dashed border-[#C2410C]/40 bg-orange-50/20 p-6 rounded-lg text-center font-serif text-lg text-gray-800 leading-relaxed italic max-w-2xl mx-auto">
              &ldquo;The object of the sale changes. The engine doesn&apos;t.&rdquo;
            </div>
          </div>
        </section>

        {/* Section 9: Bonus Section — 60-Second Ad Breakdown */}
        <section id="bonus" className="space-y-8 scroll-mt-24">
          <div className="space-y-2">
            <span className="font-mono text-xs text-gray-400 uppercase tracking-widest block">
              DTC Creative Proof
            </span>
            <h2 className="font-serif text-3xl font-medium tracking-tight text-[#1C1A17]">
              Bonus: a 60-second ad breakdown
            </h2>
            <p className="text-xs text-gray-500 font-mono max-w-2xl">
              To prove I actively read the e-commerce physical product canvas and keep continuous analysis of the Meta library, here is my direct strategic breakdown of an active live benchmark.
            </p>
          </div>

          <AdBreakdownSection />
        </section>

        {/* Section 10: Hire Interactive Call to Action */}
        <section className="bg-white border border-[#EAE6DF] rounded-xl p-8 md:p-12 text-center space-y-6">
          <div className="max-w-xl mx-auto space-y-3">
            <span className="font-mono text-xs uppercase tracking-widest text-[#C2410C]">
              Candidate Evaluation Handoff
            </span>
            <h3 className="font-serif text-3xl font-bold text-[#1C1A17]">
              Hire Gabriel Letácio
            </h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              Seeking a Creative Strategist who grounds aesthetic output in rigorous psychographic data, mechanism alignment, and proven attention mechanics? Let&apos;s build momentum together.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
            <button
              onClick={copyEmail}
              className="w-full sm:w-auto px-6 py-3 bg-[#C2410C] hover:bg-[#a03509] text-white font-mono text-xs font-semibold rounded flex items-center justify-center gap-2 transition-all duration-200"
            >
              {copied ? <Check size={14} /> : <Copy size={14} />}
              <span>{copied ? "Copied: Gabriieellxeu@gmail.com" : "Copy Strategic Email Address"}</span>
            </button>
            
            <a
              href="mailto:Gabriieellxeu@gmail.com?subject=Strategic%20Creative%20Role%20Inquiry"
              className="w-full sm:w-auto px-6 py-3 bg-[#1C1A17] hover:bg-neutral-800 text-white font-mono text-xs font-semibold rounded flex items-center justify-center gap-2 transition-all duration-200"
            >
              <span>Email Directly</span>
              <ArrowUpRight size={14} />
            </a>
          </div>

          <p className="text-[11px] text-gray-400 font-mono">
            Direct Email: <span className="underline select-all text-gray-500">Gabriieellxeu@gmail.com</span>
          </p>
        </section>

      </main>

      {/* Footer signoff */}
      <footer className="bg-white border-t border-[#EAE6DF] py-12 text-center text-xs font-mono text-gray-400">
        <div className="max-w-4xl mx-auto px-4 space-y-2">
          <p className="text-gray-600 font-bold">
            Built and written by Gabriel Letácio — Creative Strategist.
          </p>
          <p className="text-[10px] text-gray-400">
            © {new Date().getFullYear()} — Designed to evaluate creative-strategy performance. All rights reserved.
          </p>
        </div>
      </footer>

    </div>
  );
}
