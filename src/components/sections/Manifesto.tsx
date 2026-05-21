import React from 'react';
import { Users, Route, Activity, Sprout, Shield, GraduationCap } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const Manifesto = () => {
  const priorities = [
    {
      title: 'Youth Empowerment',
      desc: 'Creating job opportunities, vocational training centers, and supporting youth-led enterprises to unlock the potential of our young people.',
      icon: Users,
      color: 'bg-yellow-50 text-uda-green-dark border-uda-yellow',
      image: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/af53913a-798f-48fc-9bdd-68dc3ff372f2/youth-empowerment-priority-de63fa68-1778844819005.webp'
    },
    {
      title: 'Good Roads & Infrastructure',
      desc: 'Fixing neglected roads to ease transportation for farmers and traders, and improving rural electrification and water access.',
      icon: Route,
      color: 'bg-green-50 text-uda-green border-uda-green',
      image: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/af53913a-798f-48fc-9bdd-68dc3ff372f2/roads-infrastructure-priority-4b5dc2d6-1778844818439.webp'
    },
    {
      title: 'Healthcare Improvement',
      desc: 'Equipping our local dispensaries with essential drugs, more staff, and ensuring affordable maternal and emergency care.',
      icon: Activity,
      color: 'bg-yellow-50 text-uda-green-dark border-uda-yellow',
      image: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/af53913a-798f-48fc-9bdd-68dc3ff372f2/healthcare-priority-d2544ce0-1778844818624.webp'
    },
    {
      title: 'Agricultural Development',
      desc: 'Subsidized seeds and fertilizers, modern irrigation techniques, and creating direct market links for our farmers.',
      icon: Sprout,
      color: 'bg-green-50 text-uda-green border-uda-green',
      image: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/af53913a-798f-48fc-9bdd-68dc3ff372f2/west-nyakach-vision-f377c00a-1778844818984.webp'
    },
    {
      title: 'Improved Security',
      desc: 'Working with community policing and local authorities to ensure every resident feels safe in their homes and businesses.',
      icon: Shield,
      color: 'bg-yellow-50 text-uda-green-dark border-uda-yellow',
      image: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/af53913a-798f-48fc-9bdd-68dc3ff372f2/community-engagement-action-d0a4f9f9-1778844818141.webp'
    },
    {
      title: 'Better Education System',
      desc: 'Improving school infrastructure, supporting bursaries for needy students, and enhancing early childhood education (ECDE).',
      icon: GraduationCap,
      color: 'bg-green-50 text-uda-green border-uda-green',
      image: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/af53913a-798f-48fc-9bdd-68dc3ff372f2/youth-empowerment-priority-de63fa68-1778844819005.webp'
    },
  ];

  return (
    <section id="manifesto" className="py-24 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-uda-green font-black tracking-wider uppercase text-sm mb-4 block">Our Manifesto</span>
          <h2 className="text-4xl md:text-5xl font-black text-stone-900 mb-6">Our 6 Pillars for Progress</h2>
          <p className="text-lg text-stone-600 font-medium">
            Focused on the real challenges of West Nyakach, our manifesto is built on practical solutions that will deliver tangible results for every family.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {priorities.map((item, idx) => (
            <Card key={idx} className="overflow-hidden border-2 border-stone-100 shadow-lg hover:shadow-2xl transition-all duration-300 group hover:-translate-y-2">
              <div className="h-48 overflow-hidden relative">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4">
                  <div className={`p-3 rounded-xl shadow-lg border-2 ${item.color} bg-white/95 backdrop-blur-sm`}>
                    <item.icon className="w-6 h-6" />
                  </div>
                </div>
              </div>
              <CardHeader>
                <CardTitle className="text-xl font-black text-stone-900 group-hover:text-uda-green transition-colors">
                  {item.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-stone-600 leading-relaxed font-medium">
                  {item.desc}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Manifesto;