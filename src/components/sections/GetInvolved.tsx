import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent } from '@/components/ui/card';
import { Heart, Handshake, Users, Home, MessageSquare } from 'lucide-react';
import { toast } from 'sonner';

const GetInvolved = () => {
  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Thank you for your pledge! Our team will contact you shortly.");
  };

  const options = [
    { title: 'Volunteer', icon: Users, desc: 'Join our grassroots team and help us reach every door in West Nyakach.' },
    { title: 'Support Pledge', icon: Heart, desc: 'Commit your support and help spread the word to your family and friends.' },
    { title: 'Host a Meeting', icon: Home, desc: 'Invite Hon. Alfred Ochieng Opiyo to speak with your community group or neighbors.' },
    { title: 'WhatsApp Contact', icon: MessageSquare, desc: 'Get direct updates and share your concerns with us via WhatsApp.' },
  ];

  return (
    <section id="get-involved" className="py-24 bg-uda-yellow/10">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-uda-green font-black tracking-wider uppercase text-sm mb-4 block">Get Involved</span>
          <h2 className="text-4xl md:text-5xl font-black text-stone-900 mb-6">Join the Movement for Progress</h2>
          <p className="text-lg text-stone-600 font-medium">
            Real change starts with you. Whether you have 5 minutes or 5 hours, there are many ways you can help build a better West Nyakach.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {options.map((option, idx) => (
              <Card key={idx} className="border-2 border-stone-100 shadow-md hover:shadow-xl transition-all bg-white hover:border-uda-yellow">
                <CardContent className="pt-6">
                  <div className="w-12 h-12 bg-uda-yellow/20 rounded-xl flex items-center justify-center text-uda-green-dark mb-4 border border-uda-yellow">
                    <option.icon className="w-6 h-6" />
                  </div>
                  <h4 className="font-black text-xl mb-2">{option.title}</h4>
                  <p className="text-stone-600 mb-6 font-medium">{option.desc}</p>
                  <Button variant="link" className="p-0 text-uda-green font-black hover:no-underline group">
                    Get Started <span className="ml-2 transition-transform group-hover:translate-x-1">→</span>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="bg-white rounded-3xl shadow-2xl p-8 border-4 border-uda-green-dark relative overflow-hidden">
            <div className="absolute top-0 right-0 w-24 h-24 bg-uda-yellow -mr-12 -mt-12 rotate-45"></div>
            <h3 className="text-2xl font-black text-stone-900 mb-6 relative z-10">Pledge Your Support</h3>
            <form onSubmit={handleFormSubmit} className="space-y-4 relative z-10">
              <div className="space-y-2">
                <Label htmlFor="name" className="font-bold">Full Name</Label>
                <Input id="name" placeholder="Enter your full name" className="border-stone-200 focus:border-uda-green" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone" className="font-bold">Phone Number</Label>
                <Input id="phone" type="tel" placeholder="07XX XXX XXX" className="border-stone-200 focus:border-uda-green" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="area" className="font-bold">Area/Village</Label>
                <Input id="area" placeholder="Which part of West Nyakach?" className="border-stone-200 focus:border-uda-green" required />
              </div>
              <div className="pt-4">
                <Button className="w-full bg-uda-green hover:bg-uda-green-dark text-white h-12 font-black border-b-4 border-uda-green-dark active:border-b-0 active:translate-y-1 transition-all">
                  Submit My Support
                </Button>
              </div>
              <p className="text-xs text-stone-500 text-center mt-4 font-medium">
                By submitting, you agree to receive campaign updates via SMS and WhatsApp.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetInvolved;