/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ShieldAlert, Sparkles, TrendingUp, Users, ArrowRight, CheckCircle2, Zap } from "lucide-react";
import { StrategyPoint } from "../types";

interface ToolsProps {
  scanMode: boolean;
}

export default function InteractiveStudyTools({ scanMode }: ToolsProps) {
  const [selectedPillar, setSelectedPillar] = useState<number>(0);
  const [showFearAnalysis, setShowFearAnalysis] = useState<boolean>(false);

  const pillars: StrategyPoint[] = [
    {
      id: 0,
      title: "Awareness-Stage Targeting",
      subtitle: "Unlocking Problem-Unaware Demands",
      creatorExecution: "Avoided talking only to people already actively looking for English lessons (very small segment). Focused on lifestyle, cultural context, and everyday identity blocks that resonate with a massive, untapped Brazilian audience.",
      dtcTranslation: "Instead of pitching 'Buy this custom ergonomic cat feeder now', we hook viewers using natural, curious behaviors (the 'why does my cat nudge their food?' angle), targeting pet owners before they realize they need a solution.",
      metricLabel: "Creator Growth Window",
      metricValue: "400K in 3 Months"
    },
    {
      id: 1,
      title: "Mechanism-Based Differentiation",
      subtitle: "Redefining the Problem to Command Attention",
      creatorExecution: "Rather than claiming 'We have a better method', we exposed *why* years of traditional grammatical drills fail the human speaking reflex. We named the broken mechanism so Fluenky became the only logical correction.",
      dtcTranslation: "Instead of saying 'our pet fountain filters water better', we expose the 'hidden silent dehydration' of cats who reject still water bowls, making a high-tech sparkling filter seem like an inevitable health upgrade.",
      metricLabel: "Acclaimed Market Shift",
      metricValue: "Blue Ocean Frame"
    },
    {
      id: 2,
      title: "Emotional-Quadrant Modulation",
      subtitle: "Shifting from Saturated Pain to Desired Identity",
      creatorExecution: "Broke Brazil's relentless cycle of 'shame & freeze' fear-mongering. We launched with neutral, lifestyle-forward, aspirational tones that treated language as a passport to identity, not survival.",
      dtcTranslation: "In e-commerce, moving from low-margin 'fix your leaky pipe or ruin your house with mold' fear-selling to aesthetic, high-trust smart-home upgrades. This increases average order value (AOV) and keeps creatives from fatiguing.",
      metricLabel: "Total Growth Over 10M",
      metricValue: "570K+ Followers"
    },
    {
      id: 3,
      title: "Authority & Attention at Scale",
      subtitle: "Hard Pattern-Interrupt & Audience Retention",
      creatorExecution: "Trained the creative team on custom pattern-interrupt frames (the critical 3-second scroll hook) and retention triggers. It wasn't luck; it was a systematic focus-attention checklist applied to raw organic content.",
      dtcTranslation: "The exact account-level discipline behind a high-performing mini-VSL or Meta ad. Scroll-stoppers hook interest immediately, while tight internal pacing holds interest long enough to convert attention into dynamic demand.",
      metricLabel: "Retention Target",
      metricValue: "Organic Pattern-Interrupt"
    }
  ];

  return (
    <div className="space-y-16">
      {/* Interactive 1: The Emotional Modulation Simulator */}
      <div id="emotional-modulator" className="border border-[#EAE6DF] bg-white p-6 md:p-10 rounded-lg shadow-xs">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-8 gap-4">
          <div>
            <span className="font-mono text-xs uppercase tracking-widest text-[#C2410C]">
              Strategic Experiment
            </span>
            <h3 className="font-serif text-2xl md:text-3xl font-medium tracking-tight mt-1 text-[#1C1A17]">
              The Emotional Register Simulator
            </h3>
            <p className="text-sm text-gray-500 mt-2 max-w-xl">
              Compare how the industry-wide fear narrative stacks against Gabriel's aspirational strategy. Hover or tap below to visualize addressable market dynamics.
            </p>
          </div>
          <button
            onClick={() => setShowFearAnalysis(!showFearAnalysis)}
            className="self-start px-4 py-2 bg-[#FAF9F5] border border-[#EAE6DF] hover:bg-neutral-100 hover:border-gray-400 text-xs font-mono rounded-md transition-all duration-200"
          >
            {showFearAnalysis ? "Show Fluenky Strategy" : "Compare Core Mechanics"}
          </button>
        </div>

        {/* Visual Map Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Active Quadrant Details */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                {showFearAnalysis ? (
                  <div className="p-2 bg-red-50 text-red-600 rounded">
                    <ShieldAlert size={20} />
                  </div>
                ) : (
                  <div className="p-2 bg-orange-50 text-[#C2410C] rounded">
                    <Sparkles size={20} />
                  </div>
                )}
                <div>
                  <h4 className="font-mono text-xs uppercase tracking-wider text-gray-400">
                    Active Strategy Model
                  </h4>
                  <p className="font-sans font-semibold text-lg text-gray-900">
                    {showFearAnalysis ? "The Red Ocean Pain-Hook" : "The Fluenky Aspirational Engine"}
                  </p>
                </div>
              </div>

              <p className="text-sm leading-relaxed text-gray-600">
                {showFearAnalysis 
                  ? "Competitors rely on intensifying feelings of embarrassment or future professional failure. This gets instant, high-friction attention from struggling learners but alienates the vast majority who seek self-improvement over constant psychological panic."
                  : "We transformed Fluenky into a premium, neutral companion that models fluency as a direct extension of standard personal identity. By neutralizing the tone and leading with positive, clear agency, we built trust without fatigue."
                }
              </p>

              <div className="space-y-2 p-4 bg-[#FAF9F5] rounded border border-[#EAE6DF] mt-4">
                <span className="font-mono text-[10px] text-gray-400 uppercase tracking-wider">Strategic Impact</span>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-600">Addressable Market</span>
                  <span className={`text-xs font-mono font-medium ${showFearAnalysis ? 'text-red-600' : 'text-[#C2410C]'}`}>
                    {showFearAnalysis ? "Narrow (Pain-Aware Only)" : "Broad (Pain-Aware + Unaware)"}
                  </span>
                </div>
                <div className="w-full bg-gray-200 h-1.5 rounded-full overflow-hidden mt-1">
                  <motion.div 
                    initial={{ width: "30%" }}
                    animate={{ width: showFearAnalysis ? "25%" : "100%" }}
                    transition={{ duration: 0.5 }}
                    className={`h-full ${showFearAnalysis ? 'bg-red-500' : 'bg-[#C2410C]'}`}
                  />
                </div>
              </div>
            </div>

            <div className="text-xs text-gray-500 italic pt-4 border-t border-dashed border-gray-200">
              {showFearAnalysis 
                ? "💡 Over time, constant fear leads to audience numbness and high creative burnout rates."
                : "🌟 Positioning for identity scale creates long-term brand equity and sustainable organic traction."
              }
            </div>
          </div>

          {/* Interactive Visual Canvas */}
          <div className="lg:col-span-7 flex flex-col justify-center bg-[#FAF9F5] p-6 rounded-lg border border-[#EAE6DF] min-h-[300px]">
            <span className="font-mono text-[10px] text-gray-400 uppercase tracking-widest block mb-4 text-center">
              Audience Funnel Footprint Representation
            </span>

            <div className="relative flex flex-col items-center justify-center py-6">
              {/* Outer circle (Full Addressable Market) */}
              <div className="w-64 h-64 md:w-72 md:h-72 rounded-full border border-dashed border-gray-300 flex items-center justify-center relative bg-white/40">
                <span className="absolute top-2 font-mono text-[9px] text-gray-400 uppercase tracking-wider">
                  Total Reachable Market (100%)
                </span>

                {/* Mid circle */}
                <div className="w-48 h-48 md:w-56 md:h-56 rounded-full border border-[#EAE6DF] flex items-center justify-center relative bg-white/60">
                  
                  {/* Fluenky expansion field */}
                  <AnimatePresence mode="wait">
                    {!showFearAnalysis ? (
                      <motion.div
                        key="fluenky-field"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                        className="absolute inset-2 rounded-full bg-orange-100/40 border border-[#C2410C]/30 flex flex-col items-center justify-center p-4 text-center"
                      >
                        <Zap size={18} className="text-[#C2410C] mb-1 fill-[#C2410C]/10" />
                        <span className="font-sans font-bold text-xs uppercase tracking-wider text-[#C2410C]">
                          Aspirational Core
                        </span>
                        <span className="font-mono text-[9px] text-gray-500 mt-1">
                          570K+ Organic Growth
                        </span>
                      </motion.div>
                    ) : (
                      <motion.div
                        key="fear-field"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 0.9, scale: 0.6 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                        className="absolute w-32 h-32 rounded-full bg-red-100/30 border border-red-400/30 flex flex-col items-center justify-center p-2 text-center"
                      >
                        <ShieldAlert size={16} className="text-red-500 mb-1" />
                        <span className="font-sans font-bold text-[10px] uppercase tracking-wider text-red-600">
                          Fear Focus
                        </span>
                        <span className="font-mono text-[8px] text-gray-500 mt-1">
                          Niche Saturated
                        </span>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </div>

            <div className="mt-4 flex justify-center gap-4 text-[11px] font-mono">
              <span className="flex items-center gap-1.5 text-gray-600">
                <span className="w-2.5 h-2.5 rounded-full bg-[#EAE6DF] inline-block border border-gray-300"></span> Active Audience
              </span>
              <span className="flex items-center gap-1.5 text-gray-600">
                <span className="w-2.5 h-2.5 rounded-full bg-orange-100 border border-[#C2410C]/30 inline-block"></span> Gabriel's Target Zone
              </span>
            </div>
          </div>

        </div>
      </div>

      {/* Interactive 2: The E-commerce Muscle Translator Board */}
      <div id="muscle-translator" className="space-y-6">
        <div className="border-b border-[#EAE6DF] pb-4 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <span className="font-mono text-xs uppercase tracking-widest text-[#C2410C]">
              Dynamic Framework Map
            </span>
            <h3 className="font-serif text-2xl md:text-3xl font-medium tracking-tight mt-1 text-[#1C1A17]">
              The Creator-to-DTC Muscle Translation
            </h3>
          </div>
          <div className="flex items-center gap-2 text-xs font-mono text-gray-500">
            <span className="w-2.5 h-2.5 rounded-full bg-[#C2410C] block animate-pulse"></span>
            Click on any strategic pillar below
          </div>
        </div>

        {/* Tab Header Selector */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
          {pillars.map((pillar, idx) => {
            const isActive = selectedPillar === idx;
            return (
              <button
                key={pillar.id}
                onClick={() => setSelectedPillar(idx)}
                className={`text-left p-4 rounded-md border transition-all duration-200 relative ${
                  isActive 
                    ? "border-[#C2410C] bg-white shadow-xs" 
                    : "border-[#EAE6DF] bg-transparent hover:bg-white/40"
                }`}
              >
                <div className="font-mono text-[10px] text-gray-400 mb-1">PILLAR 0{idx + 1}</div>
                <div className={`font-sans font-medium text-xs md:text-sm line-clamp-1 transition-colors duration-250 ${isActive ? 'text-[#C2410C]' : 'text-gray-700'}`}>
                  {pillar.title}
                </div>
                {isActive && (
                  <motion.div 
                    layoutId="active-pillar-bar"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#C2410C]"
                  />
                )}
              </button>
            );
          })}
        </div>

        {/* Selected Pillar Contrast Card */}
        <div className="bg-[#FAF9F5] border border-[#EAE6DF] p-6 md:p-8 rounded-lg">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            
            {/* Header / Metric side */}
            <div className="md:col-span-4 flex flex-col justify-between border-b md:border-b-0 md:border-r border-[#EAE6DF] pb-6 md:pb-0 md:pr-8">
              <div className="space-y-2">
                <span className="font-mono text-xs text-[#C2410C] font-semibold uppercase tracking-wider block">
                  {pillars[selectedPillar].title}
                </span>
                <h4 className="font-serif text-xl sm:text-2xl font-medium tracking-tight text-[#1C1A17]">
                  {pillars[selectedPillar].subtitle}
                </h4>
              </div>

              {pillars[selectedPillar].metricValue && (
                <div className="mt-6 pt-4 border-t border-dashed border-gray-200">
                  <span className="font-mono text-[10px] text-gray-400 uppercase tracking-wider block">
                    {pillars[selectedPillar].metricLabel}
                  </span>
                  <span className="font-serif text-2xl font-bold text-[#C2410C] mt-1 block">
                    {pillars[selectedPillar].metricValue}
                  </span>
                </div>
              )}
            </div>

            {/* Contrast Columns side */}
            <div className="md:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Creator Case side */}
              <div className="space-y-3">
                <div className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C2410C]" />
                  <span className="font-mono text-[11px] text-gray-500 uppercase tracking-widest">
                    Creator Execution
                  </span>
                </div>
                <p className="text-xs md:text-sm text-gray-700 leading-relaxed bg-white/70 p-4 rounded border border-[#FAF9F5] shadow-2xs">
                  {pillars[selectedPillar].creatorExecution}
                </p>
              </div>

              {/* DTC Physical side */}
              <div className="space-y-3">
                <div className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-600" />
                  <span className="font-mono text-[11px] text-gray-500 uppercase tracking-widest">
                    Physical DTC Equivalent
                  </span>
                </div>
                <div className="text-xs md:text-sm text-[#1C1A17] font-medium leading-relaxed bg-emerald-50/40 p-4 rounded border border-emerald-100/80 shadow-2xs">
                  <span className="text-emerald-800 font-semibold block mb-1">✓ Identical Logic</span>
                  {pillars[selectedPillar].dtcTranslation}
                </div>
              </div>

            </div>

          </div>
        </div>

        {/* Quick highlight block */}
        <div className={`p-4 bg-orange-50/50 rounded-lg border border-orange-100/40 transition-opacity duration-300 ${scanMode ? 'ring-2 ring-[#C2410C]/30' : ''}`}>
          <blockquote className="font-mono text-[11px] md:text-xs text-[#C2410C] leading-snug flex gap-2">
            <span className="font-bold shrink-0">STRATEGY TAKEAWAY //</span>
            <span>"The object of the sale changes. The engine doesn't. Knowing who you target, identifying the broken mechanism, and adjusting the emotional scale maps directly from creators to e-commerce."</span>
          </blockquote>
        </div>

      </div>
    </div>
  );
}
