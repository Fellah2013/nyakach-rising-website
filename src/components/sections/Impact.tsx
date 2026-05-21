import React from 'react';
import { ArrowRight, Zap, Target, TrendingUp } from 'lucide-react';

const Impact = () => {
  const points = [
    {
      challenge: 'High youth unemployment and lack of skills.',
      solution: 'Establish a vocational hub and digital center for local youth.',
      icon: Target
    },
    {
      challenge: 'Poor road networks cutting off farmers from markets.',
      solution: 'Prioritize grading and murraming of all critical ward access roads.',
      icon: TrendingUp
    },
    {
      challenge: 'Under-equipped healthcare facilities and drug shortages.',
      solution: 'Implement a direct oversight and supply management system.',
      icon: Zap
    }
  ];

  return (
    <section id="impact" className="py-24 bg-uda-green-dark text-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2">
            <span className="text-uda-yellow font-black tracking-wider uppercase text-sm mb-4 block">Community Vision</span>
            <h2 className="text-4xl md:text-5xl font-black mb-8 leading-tight">
              From Challenges to <span className="text-uda-yellow">Sustainable Solutions</span>
            </h2>
            <p className="text-xl text-white/90 mb-12 leading-relaxed font-medium">
              We don't just see problems; we see opportunities to build a stronger West Nyakach. My vision is based on real-world impact that transforms lives.
            </p>

            <div className="space-y-8">
              {points.map((point, idx) => (
                <div key={idx} className="flex gap-6 items-start group">
                  <div className="flex-shrink-0 w-14 h-14 bg-uda-green rounded-2xl flex items-center justify-center border-2 border-uda-yellow group-hover:scale-110 transition-transform">
                    <point.icon className="w-6 h-6 text-uda-yellow" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-2 text-uda-yellow font-black text-sm uppercase tracking-widest">
                      <span>The Challenge</span>
                      <ArrowRight className="w-3 h-3" />
                    </div>
                    <p className="text-white font-medium mb-3 opacity-80">{point.challenge}</p>
                    <div className="flex items-center gap-2 mb-1 text-uda-yellow font-black text-sm uppercase tracking-widest">
                      <span>Our Solution</span>
                    </div>
                    <p className="text-white text-xl font-black">{point.solution}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:w-1/2 relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4 pt-12">
                <img
                  src="https://storage.googleapis.com/dala-prod-public-storage/generated-images/af53913a-798f-48fc-9bdd-68dc3ff372f2/west-nyakach-vision-f377c00a-1778844818984.webp"
                  className="rounded-2xl shadow-xl w-full aspect-square object-cover border-2 border-uda-yellow/50"
                  alt="Vision image 1"
                />
                <img
                  src="https://storage.googleapis.com/dala-prod-public-storage/generated-images/af53913a-798f-48fc-9bdd-68dc3ff372f2/roads-infrastructure-priority-4b5dc2d6-1778844818439.webp"
                  className="rounded-2xl shadow-xl w-full aspect-[3/4] object-cover border-2 border-uda-yellow/50"
                  alt="Vision image 2"
                />
              </div>
              <div className="space-y-4">
                <img
                  src="https://storage.googleapis.com/dala-prod-public-storage/generated-images/af53913a-798f-48fc-9bdd-68dc3ff372f2/community-engagement-action-d0a4f9f9-1778844818141.webp"
                  className="rounded-2xl shadow-xl w-full aspect-[3/4] object-cover border-2 border-uda-yellow/50"
                  alt="Vision image 3"
                />
                <img
                  src="https://storage.googleapis.com/dala-prod-public-storage/generated-images/af53913a-798f-48fc-9bdd-68dc3ff372f2/healthcare-priority-d2544ce0-1778844818624.webp"
                  className="rounded-2xl shadow-xl w-full aspect-square object-cover border-2 border-uda-yellow/50"
                  alt="Vision image 4"
                />
              </div>
            </div>
            {/* Overlay badge */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-uda-yellow text-uda-green-dark p-8 rounded-full w-40 h-40 flex items-center justify-center text-center font-black shadow-2xl border-8 border-uda-green-dark scale-110">
              <div>
                <p className="text-3xl leading-none">100%</p>
                <p className="text-xs uppercase tracking-tighter">Commitment</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Impact;