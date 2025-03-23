
import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import Footer from "@/components/Footer";
import { ChevronDown, Coffee, Gift, Clock } from "lucide-react";
import { cn } from "@/lib/utils";

const Index = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  const features = [
    {
      icon: <Coffee className="w-6 h-6" />,
      title: "Premium Quality",
      description: "Sourced from the finest beans, our coffee offers an unparalleled smooth taste."
    },
    {
      icon: <Gift className="w-6 h-6" />,
      title: "Special Experience",
      description: "Every cup is served with a touch of kawaii delight to brighten your day."
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Perfect Timing",
      description: "Expertly brewed for the optimal flavor profile, just as you deserve."
    }
  ];

  return (
    <div className="relative w-full min-h-screen overflow-hidden">
      <Navbar />
      <HeroSection />
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center z-10">
        <span className="text-xs mb-2 opacity-70">Scroll Down</span>
        <ChevronDown className="w-5 h-5 animate-bounce" />
      </div>
      
      {/* About Section */}
      <section id="about" className="py-24 px-6 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <span className={cn(
              "inline-block text-sm uppercase tracking-wider mb-2 opacity-0",
              loaded && "animate-fade-in"
            )}>
              Why Choose Us
            </span>
            <h2 className={cn(
              "text-3xl md:text-4xl font-display font-bold opacity-0",
              loaded && "animate-slide-up"
            )}
            style={{ animationDelay: '100ms' }}>
              The Kawaii Difference
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className={cn(
                  "glassmorphism p-8 rounded-2xl transition-all duration-300 hover:shadow-medium transform hover:-translate-y-1 opacity-0",
                  loaded && "animate-fade-in"
                )}
                style={{ animationDelay: `${(index + 1) * 200}ms` }}
              >
                <div className="bg-kawaii-blue/20 p-3 rounded-full w-fit mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-display font-semibold mb-3">{feature.title}</h3>
                <p className="text-gray-700">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Products Preview Section */}
      <section id="products" className="py-20 px-6 relative">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-block text-sm uppercase tracking-wider mb-2">
              Our Selection
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-bold">
              Kawaii Creations
            </h2>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { name: "Cat Cappuccino", price: "$4.50", color: "bg-kawaii-yellow/20" },
              { name: "Bunny Latte", price: "$5.25", color: "bg-kawaii-pink/20" },
              { name: "Panda Mocha", price: "$4.75", color: "bg-kawaii-purple/20" },
            ].map((product, index) => (
              <div 
                key={index}
                className={cn(
                  "rounded-2xl overflow-hidden shadow-card transition-all duration-300 hover:shadow-medium transform hover:-translate-y-1 opacity-0",
                  loaded && "animate-fade-in"
                )}
                style={{ animationDelay: `${(index + 1) * 200}ms` }}
              >
                <div className={cn("aspect-square w-full", product.color)}>
                  <div className="w-full h-full flex items-center justify-center">
                    <div className="w-32 h-32 rounded-full bg-white shadow-md"></div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-display font-semibold text-lg">{product.name}</h3>
                  <p className="text-gray-700 mt-1">{product.price}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <button className="bg-black text-white px-8 py-3 rounded-full font-medium transition-transform hover:scale-105">
              View All Products
            </button>
          </div>
        </div>
      </section>
      
      {/* Newsletter Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto glassmorphism rounded-3xl p-10 md:p-16">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-display font-bold mb-3">Join Our Kawaii Club</h2>
            <p className="text-gray-700 max-w-md mx-auto">
              Subscribe to our newsletter for special offers, new product updates, and all things kawaii!
            </p>
          </div>
          
          <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Your email address" 
              className="flex-1 px-5 py-3 rounded-full bg-white/50 backdrop-blur-sm border border-white/30 focus:outline-none focus:ring-2 focus:ring-kawaii-blue/50"
              required
            />
            <button 
              type="submit" 
              className="bg-black text-white px-6 py-3 rounded-full font-medium transition-transform hover:scale-105"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;
