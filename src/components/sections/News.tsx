import React from 'react';
import { Calendar, ArrowRight } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const News = () => {
  const updates = [
    {
      title: 'Community Townhall at West Nyakach Center',
      date: 'Oct 15, 2023',
      category: 'Event',
      image: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/af53913a-798f-48fc-9bdd-68dc3ff372f2/community-engagement-action-d0a4f9f9-1778844818141.webp',
      excerpt: 'Hundreds of residents gathered to share their concerns and discuss our vision for the ward.'
    },
    {
      title: 'Road Assessment Tour: Identifying Key Gaps',
      date: 'Oct 12, 2023',
      category: 'Action',
      image: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/af53913a-798f-48fc-9bdd-68dc3ff372f2/roads-infrastructure-priority-4b5dc2d6-1778844818439.webp',
      excerpt: 'Hon. Alfred Ochieng Opiyo visited several neglected road sections to document the current state for future planning.'
    },
    {
      title: 'Supporting Our Local Schools',
      date: 'Oct 08, 2023',
      category: 'Education',
      image: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/af53913a-798f-48fc-9bdd-68dc3ff372f2/youth-empowerment-priority-de63fa68-1778844819005.webp',
      excerpt: 'A donation drive for textbooks and supplies was successfully conducted at 3 local primary schools.'
    }
  ];

  return (
    <section id="news" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <span className="text-uda-green font-black tracking-wider uppercase text-sm mb-4 block border-l-4 border-uda-yellow pl-3">Campaign Updates</span>
            <h2 className="text-4xl md:text-5xl font-black text-stone-900 mb-4">Latest from the Ground</h2>
            <p className="text-lg text-stone-600 font-medium">
              Stay informed about our latest activities, community visits, and progress across West Nyakach Ward.
            </p>
          </div>
          <Button variant="outline" className="border-2 border-uda-green text-uda-green hover:bg-uda-yellow/10 font-black px-6">
            View All Updates
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {updates.map((post, idx) => (
            <Card key={idx} className="border-2 border-stone-50 shadow-xl overflow-hidden group hover:border-uda-yellow transition-colors">
              <div className="h-64 overflow-hidden relative">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4 bg-uda-yellow text-uda-green-dark px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-wider shadow-lg border border-white">
                  {post.category}
                </div>
              </div>
              <CardContent className="p-8">
                <div className="flex items-center text-stone-500 text-sm mb-4 font-bold">
                  <Calendar className="w-4 h-4 mr-2 text-uda-green" />
                  {post.date}
                </div>
                <h3 className="text-xl font-black text-stone-900 mb-4 group-hover:text-uda-green transition-colors">
                  {post.title}
                </h3>
                <p className="text-stone-600 mb-6 line-clamp-2 font-medium">
                  {post.excerpt}
                </p>
                <Button variant="link" className="p-0 text-uda-green font-black hover:no-underline group/btn">
                  Read More <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default News;