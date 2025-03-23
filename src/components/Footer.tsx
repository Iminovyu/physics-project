
import React from 'react';
import { Heart, Instagram, MessageCircle } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-ash text-white py-6 mt-auto">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-center md:text-left">
            <p className="text-sm text-ash-100">
              © {new Date().getFullYear()} Physics Test.
            </p>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1 text-sm">
              <span>Created with</span>
              <Heart className="h-4 w-4 text-lava-500 fill-lava-500 animate-pulse-soft" />
              <span>by Iminov Yu</span>
            </div>
            
            <div className="flex items-center gap-3 ml-4">
              <a href="https://t.me/iminov_yu" target="_blank" rel="noopener noreferrer" 
                 className="text-white hover:text-lava-300 transition-colors">
                <MessageCircle className="h-5 w-5" />
              </a>
              <a href="https://instagram.com/iminov_yu" target="_blank" rel="noopener noreferrer"
                 className="text-white hover:text-lava-300 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
