
import { cn } from "@/lib/utils";
import { Coffee, Heart, Instagram, Twitter, Facebook } from "lucide-react";

const Footer = () => {
  return (
    <footer className="mt-20 pt-16 pb-10 px-6 relative z-10">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <h3 className="font-display font-semibold text-lg mb-4">kawaii kava</h3>
            <p className="text-sm text-gray-700 mb-4 max-w-xs">
              Experience the perfect blend of cuteness and caffeine with our specially crafted kawaii coffee experience.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="transition-transform hover:scale-110">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="transition-transform hover:scale-110">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="transition-transform hover:scale-110">
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-display font-semibold text-lg mb-4">Links</h3>
            <nav className="flex flex-col gap-2">
              {['Home', 'Products', 'About', 'Contact'].map((item) => (
                <a 
                  key={item} 
                  href={`#${item.toLowerCase()}`}
                  className="text-sm text-gray-700 hover:text-black transition-colors"
                >
                  {item}
                </a>
              ))}
            </nav>
          </div>
          
          <div>
            <h3 className="font-display font-semibold text-lg mb-4">Visit Us</h3>
            <address className="text-sm text-gray-700 not-italic">
              123 Kawaii Street<br />
              Cute District<br />
              Tokyo, Japan
            </address>
            <p className="text-sm text-gray-700 mt-4">
              Open every day: 9am - 8pm
            </p>
          </div>
        </div>
        
        <div className="border-t border-gray-200 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-xs text-gray-500">
            © 2023 Kawaii Coffee. All rights reserved.
          </p>
          <p className="text-xs text-gray-500 flex items-center gap-1 mt-4 md:mt-0">
            Made with <Heart className="w-3 h-3 text-red-400" /> and <Coffee className="w-3 h-3" />
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
