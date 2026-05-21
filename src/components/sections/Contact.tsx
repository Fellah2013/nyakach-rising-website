import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Phone, Mail, MapPin, Send, MessageCircle } from 'lucide-react';
import { toast } from 'sonner';

const Contact = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Message sent! We will get back to you soon.");
  };

  return (
    <section id="contact" className="py-24 bg-stone-950 text-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-16">
          <div className="lg:w-1/2">
            <span className="text-uda-yellow font-black tracking-wider uppercase text-sm mb-4 block">Get in Touch</span>
            <h2 className="text-4xl md:text-5xl font-black mb-8">Let's Talk About Our Ward</h2>
            <p className="text-xl text-stone-300 mb-12 font-medium">
              Your voice matters. Reach out with your ideas, concerns, or to find out how you can support the campaign.
            </p>

            <div className="space-y-8">
              <div className="flex items-center gap-6">
                <div className="w-14 h-14 bg-uda-yellow/10 rounded-2xl flex items-center justify-center border-2 border-uda-yellow/30 shadow-lg">
                  <Phone className="w-6 h-6 text-uda-yellow" />
                </div>
                <div>
                  <p className="text-stone-400 text-sm font-bold uppercase tracking-wider">Call Us</p>\
                  <p className="text-xl font-black">+254 7XX XXX XXX</p>
                </div>
              </div>

              <div className="flex items-center gap-6">
                <div className="w-14 h-14 bg-uda-yellow/10 rounded-2xl flex items-center justify-center border-2 border-uda-yellow/30 shadow-lg">
                  <Mail className="w-6 h-6 text-uda-yellow" />
                </div>
                <div>
                  <p className="text-stone-400 text-sm font-bold uppercase tracking-wider">Email Us</p>
                  <p className="text-xl font-black">info@alfredochiengopiyo.co.ke</p>
                </div>
              </div>

              <div className="flex items-center gap-6">
                <div className="w-14 h-14 bg-uda-yellow/10 rounded-2xl flex items-center justify-center border-2 border-uda-yellow/30 shadow-lg">
                  <MapPin className="w-6 h-6 text-uda-yellow" />
                </div>
                <div>
                  <p className="text-stone-400 text-sm font-bold uppercase tracking-wider">Headquarters</p>
                  <p className="text-xl font-black">West Nyakach Ward, Kenya</p>
                </div>
              </div>
            </div>

            <div className="mt-12 flex gap-4">
              <Button className="bg-uda-green hover:bg-uda-green-dark text-white rounded-full px-8 h-14 text-lg font-black shadow-xl border-b-4 border-uda-green-dark active:border-b-0 active:translate-y-1 transition-all">
                <MessageCircle className="w-6 h-6 mr-3" />
                <span>WhatsApp Support</span>
              </Button>
            </div>
          </div>

          <div className="lg:w-1/2">
            <div className="bg-white text-stone-900 rounded-3xl p-8 md:p-10 shadow-2xl border-t-8 border-uda-yellow">
              <h3 className="text-2xl font-black mb-6 text-center text-uda-green-dark">Send Us a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="contact-name" className="font-bold">Name</Label>
                    <Input id="contact-name" placeholder="Your name" className="bg-stone-50 border-stone-200 focus:border-uda-green" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="contact-phone" className="font-bold">Phone Number</Label>
                    <Input id="contact-phone" type="tel" placeholder="Your phone" className="bg-stone-50 border-stone-200 focus:border-uda-green" required />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="contact-email" className="font-bold">Email (Optional)</Label>
                  <Input id="contact-email" type="email" placeholder="Your email" className="bg-stone-50 border-stone-200 focus:border-uda-green" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="contact-message" className="font-bold">Message</Label>
                  <Textarea id="contact-message" placeholder="How can we help you?" className="bg-stone-50 min-h-[150px] border-stone-200 focus:border-uda-green" required />
                </div>
                <Button className="w-full bg-uda-green-dark hover:bg-black text-white h-12 text-lg font-black shadow-lg">
                  Send Message <Send className="ml-2 w-4 h-4" />
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;