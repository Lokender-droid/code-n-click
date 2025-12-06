import React, { useRef, useState } from 'react';
import { motion, useMotionTemplate, useMotionValue } from 'framer-motion';
import { Rocket, Code2, Zap, Shield, TrendingUp, Sparkles, ArrowRight, MousePointer2 } from 'lucide-react';

const SpotlightCard = ({ children, className = "" }) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <div
      className={`group relative border border-gray-800 bg-gray-900/50 overflow-hidden ${className}`}
      onMouseMove={handleMouseMove}
    >
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-xl opacity-0 transition duration-300 group-hover:opacity-100"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              650px circle at ${mouseX}px ${mouseY}px,
              rgba(59, 130, 246, 0.15),
              transparent 80%
            )
          `,
        }}
      />
      <div className="relative h-full">{children}</div>
    </div>
  );
};

const AdvancedFeatures = () => {
  const features = [
    {
      title: "Build & Play",
      description: "Interactive code playgrounds. Build, test, and deploy directly in your browser with zero setup.",
      icon: Rocket,
      className: "md:col-span-2",
      gradient: "from-blue-500 to-cyan-500",
      tags: ["WebContainers", "Live Preview", "Instant Deploy"]
    },
    {
      title: "Career Growth",
      description: "Structured learning paths designed by industry experts to fast-track your career progression.",
      icon: TrendingUp,
      className: "md:col-span-1",
      gradient: "from-green-500 to-emerald-500",
      tags: ["Mentorship", "Certification"]
    },
    {
      title: "Global Community",
      description: "Join 100,000+ developers sharing knowledge, code, and opportunities worldwide.",
      icon: Sparkles,
      className: "md:col-span-1",
      gradient: "from-purple-500 to-pink-500",
      tags: ["Networking", "Events"]
    },
    {
      title: "Enterprise Scale",
      description: "Bank-grade security and scalable infrastructure for mission-critical applications.",
      icon: Shield,
      className: "md:col-span-2",
      gradient: "from-orange-500 to-red-500",
      tags: ["SSO", "Audit Logs", "SLA Support"]
    },
    {
      title: "Modern Stack",
      description: "Edge-first architecture powered by the latest frameworks and tools.",
      icon: Code2,
      className: "md:col-span-1",
      gradient: "from-cyan-500 to-blue-500",
      tags: ["Next.js 14", "Rust", "WASM"]
    },
    {
      title: "Lightning Fast",
      description: "Global CDN distribution ensuring <50ms latency anywhere on Earth.",
      icon: Zap,
      className: "md:col-span-2",
      gradient: "from-yellow-500 to-orange-500",
      tags: ["Edge Functions", "Global Mesh"]
    },
  ];

  return (
    <section className="py-24 bg-gray-950 relative overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-[128px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-[128px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">


        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6">
          {features.map((feature, index) => (
            <SpotlightCard
              key={index}
              className={`rounded-2xl ${feature.className} hover:shadow-2xl hover:shadow-blue-900/20 transition-all duration-300`}
            >
              <div className="p-8 h-full flex flex-col">
                <div className="flex items-start justify-between mb-8">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center shadow-lg`}>
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                </div>

                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            </SpotlightCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AdvancedFeatures;
