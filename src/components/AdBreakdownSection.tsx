/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Play, ClipboardList, Info, Sparkles, ExternalLink, Activity, AppWindow } from "lucide-react";
import { AdPhase } from "../types";

export default function AdBreakdownSection() {
  const [activeSegment, setActiveSegment] = useState<number>(0);

  const adPhases: AdPhase[] = [
    {
      timeRange: "0:00 - 0:10",
      label: "The Hook",
      title: "The Silent Standoff",
      focus: "Lifestyle Pattern-Interrupt",
      mechanic: "Unaware / Problem-Unaware targeting",
      visualCue: "Close-up of a cat sniffing still water, sitting in quiet rejection, then nudging the bowl with its paw.",
      explanation: "Targets cat owners before they look for fountains. It loops standard, subtle behavioral tension. By focusing on the cat rejecting a bowl, it stops the scroll of any pet lover who recognizes this daily interaction."
    },
    {
      timeRange: "0:10 - 0:25",
      label: "The Problem",
      title: "The Broken Mechanism",
      focus: "Dehydration Anxiety & Hygiene Risks",
      mechanic: "Problem-Aware transition",
      visualCue: "Microscopic view animation representing bacteria in standing water or dry pet kibble vs. cat's actual needs.",
      explanation: "Exposes *why* default standing bowls are a broken hydration mechanism for predatory carnivores. It highlights that cats possess an evolutionary aversion to still water. The risk shifts from 'dirty water' to feline kidney concerns."
    },
    {
      timeRange: "0:25 - 0:45",
      label: "The Solution",
      title: "The Weight-Sensing Reveal",
      focus: "Authority Pivot & Deep Tech Integration",
      mechanic: "Solution-Aware pivot",
      visualCue: "Sleek PetSnowy app dashboard popping up showing exact weight-based fluid updates in real time.",
      explanation: "Instead of demonstrating an aesthetic plastic dish, it introduces the wireless weight-sensing app. It leverages parents' demand for objective metrics. The product is positioned as a critical health monitor rather than another pet gadget."
    },
    {
      timeRange: "0:45 - 1:00",
      label: "The Offer",
      title: "Direct Conversion & CTA",
      focus: "Urgency and Seamless Purchase",
      mechanic: "Most Aware close",
      visualCue: "Prompt: 'Grab Your Special Discount Today! Shop now.' Banner overlaid onto premium living room styling.",
      explanation: "Offers an frictionless upgrade discount. Leverages the high emotional trust built during the authority-sensing phase. It drives immediate action through active Meta Library hooks ('Grab Your Special Discount Today!'), positioning premium price tags as health investments."
    }
  ];

  return (
    <div className="border border-[#EAE6DF] bg-white rounded-lg p-6 md:p-10 shadow-xs">
      {/* Header Info */}
      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 border-b border-gray-100 pb-6 mb-8">
        <div>
          <span className="font-mono text-xs uppercase tracking-widest text-[#C2410C]">
            Creative Strategy Case Study Alternative
          </span>
          <h3 className="font-serif text-2xl md:text-3xl font-medium tracking-tight mt-1 text-[#1C1A17]">
            PetSnowy ad breakdown
          </h3>
          <p className="font-sans text-xs text-gray-500 mt-1 max-w-xl">
            Analyzing a live, high-performing physical product Meta library campaign (<span className="font-mono font-bold text-gray-700">Library ID: 1347849273827695</span>) using strategic growth mechanics.
          </p>
        </div>
        <div className="flex items-center gap-2 px-3 py-1 bg-emerald-50 text-emerald-800 text-xs font-mono rounded border border-emerald-100 uppercase tracking-widest">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 block animate-pulse"></span>
          Meta Sandbox Active
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        
        {/* Left Column: Interactive Timeline Segmenter */}
        <div className="lg:col-span-5 space-y-4">
          <span className="font-mono text-xs text-gray-400 uppercase tracking-widest block mb-1">
            Video Timeline & Storyboard Segments
          </span>
          
          <div className="grid grid-cols-1 gap-2">
            {adPhases.map((phase, idx) => {
              const active = activeSegment === idx;
              return (
                <button
                  key={idx}
                  onClick={() => setActiveSegment(idx)}
                  className={`text-left p-4 rounded border transition-all duration-200 ${
                    active 
                      ? "bg-[#FAF9F5] border-[#C2410C] shadow-xs" 
                      : "bg-white border-gray-200 hover:border-gray-400"
                  }`}
                >
                  <div className="flex justify-between items-center mb-1">
                    <span className="font-mono text-[10px] text-gray-400 font-semibold uppercase tracking-wider">
                      PHASE {idx + 1}
                    </span>
                    <span className={`font-mono text-[10px] px-1.5 py-0.5 rounded ${
                      active ? 'bg-orange-100 text-[#C2410C]' : 'bg-gray-100 text-gray-500'
                    }`}>
                      {phase.timeRange}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className={`w-2 h-2 rounded-full ${active ? 'bg-[#C2410C]' : 'bg-gray-300'}`}></span>
                    <h4 className="font-sans font-bold text-sm text-gray-900">{phase.label}: {phase.title}</h4>
                  </div>
                  <p className="text-xs text-gray-500 mt-1 line-clamp-1">{phase.focus}</p>
                </button>
              );
            })}
          </div>

          <div className="bg-[#FAF9F5] p-4 rounded border border-[#EAE6DF] mt-6">
            <h5 className="font-mono text-xs font-semibold text-gray-700 flex items-center gap-1.5 mb-2">
              <ClipboardList size={14} className="text-[#C2410C]" />
              Strategic Contrast Point
            </h5>
            <p className="text-xs text-gray-600 leading-relaxed">
              Where competitor cat toy ads rely strictly on instant prey drive (like a silver vine chew stick review), <strong>PetSnowy</strong> builds an ecosystem based on health anxiety and high-end metrics, commandingly shifting emotional quadrants.
            </p>
          </div>
        </div>

        {/* Right Column: Visual Frame Mockup and Micro-analysis */}
        <div className="lg:col-span-7 space-y-6 bg-[#FAF9F5] p-6 md:p-8 rounded-lg border border-[#EAE6DF]">
          
          {/* Virtual Player Simulation viewport */}
          <div className="relative aspect-video w-full bg-neutral-900 rounded-md overflow-hidden flex flex-col justify-between p-4 border border-neutral-800 shadow-lg">
            {/* Screen static effect or subtle glow */}
            <div className="absolute inset-0 bg-radial-at-t from-zinc-800 to-zinc-950 opacity-90 z-0"></div>

            {/* Play overlay hud top */}
            <div className="z-10 flex justify-between items-center text-white/80 font-mono text-[10px]">
              <span className="flex items-center gap-1">
                <Activity size={10} className="text-[#C2410C] animate-pulse" />
                META CAMPAIGN STREAM
              </span>
              <span className="bg-black/40 px-2 py-0.5 rounded">
                SEC: {activeSegment * 15} - {(activeSegment + 1) * 15}s
              </span>
            </div>

            {/* Simulated frame content */}
            <div className="z-10 text-center py-6">
              <motion.div 
                key={activeSegment}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="space-y-2 px-6"
              >
                <div className="inline-block px-2.5 py-0.5 bg-[#C2410C] text-white font-mono text-[9px] uppercase tracking-wider rounded">
                  {adPhases[activeSegment].focus}
                </div>
                <p className="text-zinc-200 font-serif text-sm md:text-base leading-snug italic max-w-md mx-auto">
                  "{adPhases[activeSegment].visualCue}"
                </p>
              </motion.div>
            </div>

            {/* Timeline slider representation */}
            <div className="z-10 space-y-1 w-full">
              <div className="flex justify-between text-[9px] text-zinc-400 font-mono">
                <span>ACTIVE PAUSE</span>
                <span>0:60s</span>
              </div>
              <div className="w-full bg-neutral-800 h-1 rounded-full overflow-hidden">
                <div 
                  className="bg-[#C2410C] h-full transition-all duration-300"
                  style={{ width: `${(activeSegment + 1) * 25}%` }}
                />
              </div>
            </div>
          </div>

          {/* Editorial Analysis Output */}
          <div className="space-y-4">
            <div className="flex justify-between items-baseline border-b border-gray-200 pb-2">
              <span className="font-mono text-xs uppercase tracking-wider text-gray-400">
                Strategic Anatomy Lens
              </span>
              <span className="font-mono text-xs font-semibold text-[#C2410C]">
                {adPhases[activeSegment].mechanic}
              </span>
            </div>

            <div className="space-y-2">
              <h4 className="font-serif text-[#1C1A17] font-semibold text-lg md:text-xl">
                {adPhases[activeSegment].label}: {adPhases[activeSegment].title}
              </h4>
              <p className="text-xs md:text-sm text-gray-700 leading-relaxed">
                {adPhases[activeSegment].explanation}
              </p>
            </div>

            <div className="pt-2 flex items-center gap-1.5 text-xs text-gray-500 font-mono bg-white p-3 rounded border border-[#EAE6DF]">
              <Info size={14} className="text-[#C2410C] shrink-0" />
              <span>
                <strong>Analysis Focus:</strong> This demonstrates how to modulate standard fear into scientific health metrics, avoiding long term ad fatigue.
              </span>
            </div>
          </div>

        </div>

      </div>

      {/* Loom-script direct quote alternative block */}
      <div className="mt-8 pt-6 border-t border-gray-100 flex flex-col md:flex-row gap-6 items-center">
        <div className="shrink-0 flex items-center justify-center w-12 h-12 bg-orange-100/40 rounded-full border border-orange-200">
          <Play size={20} className="text-[#C2410C] fill-[#C2410C]/20" />
        </div>
        <div className="space-y-1">
          <span className="font-mono text-[10px] text-gray-400 uppercase tracking-widest block font-bold">
            Gabriel's Video Screenplay Benchmark
          </span>
          <p className="text-xs text-gray-600 leading-relaxed">
            "As a safer benchmark, I also looked at another real pet e-commerce ad: PetSnowy's wireless weight-sensing pet fountain. It targets the same broad cat-owner market, but the angle is different — not instinct and prey drive, but health anxiety and control. That contrast points exactly to creative-strategy planning: both expand beyond a narrow problem-aware pool, but doing it through hidden behaviors vs smart convenience adjusts your entire scaling speed."
          </p>
        </div>
      </div>
    </div>
  );
}
