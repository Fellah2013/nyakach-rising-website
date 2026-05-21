import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  const values = [
    { title: 'Integrity', desc: 'Unwavering commitment to honesty and ethical leadership in every decision.' },
    { title: 'Accountability', desc: 'Taking full responsibility for actions and ensuring transparency in governance.' },
    { title: 'Community-First', desc: 'Putting the needs and voices of West Nyakach residents at the heart of our agenda.' },
  ];

  return (
    <section id="about" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2 relative">
            <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl border-4 border-uda-yellow">
              <img
                src="https://storage.googleapis.com/dala-prod-public-storage/generated-images/af53913a-798f-48fc-9bdd-68dc3ff372f2/community-engagement-action-d0a4f9f9-1778844818141.webp"
                alt="Hon. Alfred Ochieng Opiyo with the community"
                className="w-full aspect-[4/5] object-cover"
              />
            </div>
            {/* Decorative background element */}
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-uda-yellow/30 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-uda-green/20 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
          </div>

          <div className="lg:w-1/2">
            <span className="text-uda-green font-black tracking-wider uppercase text-sm mb-4 block">Meet Your Candidate</span>
            <h2 className="text-4xl md:text-5xl font-black text-stone-900 mb-8 leading-tight">
              A Visionary Leader for <span className="text-uda-green underline decoration-uda-yellow decoration-4">West Nyakach</span>
            </h2>
            <p className="text-lg text-stone-600 mb-8 leading-relaxed">
              Hon. Alfred Ochieng Opiyo is a dedicated community leader with a proven track record of service. Born and raised in West Nyakach, he understands the unique challenges our ward faces. His mission is to improve livelihoods through sustainable development, empowerment, and transparent leadership.
            </p>

            <div className="space-y-6 mb-10">
              {values.map((value, idx) => (
                <div key={idx} className="flex items-start space-x-4">
                  <div className="mt-1 bg-uda-yellow/20 p-1.5 rounded-full border border-uda-yellow">
                    <CheckCircle2 className="w-5 h-5 text-uda-green-dark" />
                  </div>
                  <div>
                    <h4 className="font-bold text-stone-900 text-lg">{value.title}</h4>
                    <p className="text-stone-600">{value.desc}</p>\
                  </div>
                </div>
              ))}
            </div>

            <div className="p-8 bg-uda-green-dark rounded-2xl border-l-8 border-uda-yellow shadow-xl">
              <h4 className="text-uda-yellow font-black mb-2 italic text-xl uppercase tracking-wider">Our Mission</h4>
              <p className="text-white leading-relaxed italic text-lg font-medium">
                "To transform West Nyakach into a hub of prosperity, safety, and opportunity for all residents, leaving no one behind."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;