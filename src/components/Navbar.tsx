
import { useState, useEffect } from 'react';
import { Search, Coffee, Menu, X } from 'lucide-react';
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 px-6 md:px-10 transition-all duration-300 py-4",
        isScrolled ? "glassmorphism" : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <a 
          href="#" 
          className="flex items-center gap-2 opacity-0 animate-fade-in" 
          style={{ animationDelay: '100ms' }}
        >
          <span className="font-display font-bold text-lg">kawaii kava</span>
        </a>

        <nav className="hidden md:flex items-center gap-10">
          {['home', 'products', 'about', 'contact'].map((item, i) => (
            <a 
              key={item} 
              href={`#${item}`}
              className="opacity-0 animate-fade-in font-medium text-sm hover:text-black/70 transition-colors duration-300"
              style={{ animationDelay: `${(i + 1) * 100 + 200}ms` }}
            >
              {item}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <div 
            className={cn(
              "relative opacity-0 animate-fade-in hidden md:flex items-center",
              isScrolled ? "bg-white/40 backdrop-blur-md" : "bg-black/10 backdrop-blur-sm"
            )}
            style={{ animationDelay: '600ms' }}
          >
            <Search className="absolute left-3 w-4 h-4 text-black/70" />
            <input 
              type="text" 
              placeholder="Search" 
              className="py-2 pl-9 pr-4 rounded-full bg-transparent text-sm w-40 outline-none border-none placeholder:text-black/50"
            />
          </div>
          
          <button 
            className="opacity-0 animate-fade-in bg-black text-white p-2 rounded-full flex items-center justify-center transition-transform duration-300 hover:scale-105"
            style={{ animationDelay: '700ms' }}
          >
            <Coffee className="w-5 h-5" />
          </button>
          
          <button 
            className="md:hidden opacity-0 animate-fade-in"
            style={{ animationDelay: '700ms' }}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div 
        className={cn(
          "md:hidden fixed inset-0 bg-kawaii-blue/90 backdrop-blur-lg pt-20 px-6 flex flex-col transition-all duration-500 ease-in-out z-40",
          isMobileMenuOpen ? "opacity-100 translate-x-0" : "opacity-0 translate-x-full pointer-events-none"
        )}
      >
        <nav className="flex flex-col items-center gap-8 py-10">
          {['home', 'products', 'about', 'contact'].map((item, i) => (
            <a 
              key={item} 
              href={`#${item}`}
              className="font-medium text-lg"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {item}
            </a>
          ))}

          <div className="relative mt-4 bg-white/30 backdrop-blur-md w-full max-w-xs rounded-full">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-black/70" />
            <input 
              type="text" 
              placeholder="Search" 
              className="py-3 pl-9 pr-4 rounded-full bg-transparent w-full outline-none border-none placeholder:text-black/50"
            />
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
