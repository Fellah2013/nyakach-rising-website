import React from 'react';
import { MessageCircle } from 'lucide-react';

const WhatsAppButton = () => {
  const whatsappNumber = "+2547XXXXXXXX"; // Replace with actual number
  const message = "Hello Hon. Alfred Opiya, I would like to support your campaign for West Nyakach MCA.";
  const encodedMessage = encodeURIComponent(message);
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-8 right-8 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 active:scale-95 transition-all animate-bounce-subtle border-4 border-uda-yellow"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="w-8 h-8" />
      <span className="absolute -top-1 -right-1 flex h-4 w-4">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-uda-yellow opacity-75"></span>
        <span className="relative inline-flex rounded-full h-4 w-4 bg-uda-yellow"></span>
      </span>
    </a>
  );
};

export default WhatsAppButton;