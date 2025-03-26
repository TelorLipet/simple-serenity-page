
import { useEffect, useState } from 'react';
import TagBubble from './TagBubble';
import { cn } from '@/lib/utils';

interface TagPosition {
  text: string;
  top: string;
  left: string;
  animationVariant: "default" | "slow" | "fast";
  delay: number;
}

const HeroSection = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  // Define positions of tag bubbles
  const tagPositions: TagPosition[] = [
    { text: "Sustainable", top: "12%", left: "15%", animationVariant: "default", delay: 300 },
    { text: "Succulent", top: "35%", left: "10%", animationVariant: "slow", delay: 400 },
    { text: "(・ω・)", top: "55%", left: "15%", animationVariant: "fast", delay: 500 },
    { text: "Low-maintenance", top: "75%", left: "12%", animationVariant: "slow", delay: 600 },
    { text: "(*･ω･)", top: "55%", left: "25%", animationVariant: "default", delay: 700 },
    { text: "Beautiful", top: "20%", left: "80%", animationVariant: "slow", delay: 800 },
    { text: "(^・^)", top: "30%", left: "85%", animationVariant: "default", delay: 300 },
    { text: "Natural!", top: "60%", left: "80%", animationVariant: "fast", delay: 400 },
    { text: "(⌒▽⌒)", top: "75%", left: "85%", animationVariant: "slow", delay: 500 },
    { text: "Unique", top: "85%", left: "55%", animationVariant: "default", delay: 600 },
    { text: "Eco-friendly!", top: "15%", left: "40%", animationVariant: "fast", delay: 700 },
  ];

  return (
    <section className="min-h-screen w-full flex flex-col items-center justify-center relative overflow-hidden pt-20 px-6">
      <div className="desert-bg"></div>
      
      <div className="max-w-6xl mx-auto w-full relative z-10">
        {/* Tags */}
        {tagPositions.map((tag, i) => (
          <TagBubble
            key={i}
            text={tag.text}
            className={cn(
              "absolute opacity-0",
              loaded && "animate-fade-in"
            )}
            style={{ 
              top: tag.top, 
              left: tag.left, 
              animationDelay: `${tag.delay}ms`
            }}
            animationVariant={tag.animationVariant}
          />
        ))}

        {/* Main content */}
        <div className="text-center mb-10 relative z-10">
          <span className={cn(
            "inline-block text-sm md:text-base font-medium mb-2 opacity-0",
            loaded && "animate-fade-in"
          )}>
            DESERT BEAUTY INDOORS
          </span>
          
          <h1 className="relative">
            <span className={cn(
              "text-5xl md:text-7xl lg:text-8xl font-display font-bold text-kawaii-darkGreen block opacity-0",
              loaded && "animate-slide-up"
            )} 
            style={{ animationDelay: '200ms' }}
            >
              Moro
            </span>
            <span className={cn(
              "text-5xl md:text-7xl lg:text-8xl font-display font-bold text-black block opacity-0",
              loaded && "animate-slide-up"
            )}
            style={{ animationDelay: '300ms' }}
            >
              Cactus
            </span>
            <span className={cn(
              "text-5xl md:text-7xl lg:text-8xl font-display font-bold text-black block opacity-0",
              loaded && "animate-slide-up"
            )}
            style={{ animationDelay: '400ms' }}
            >
              Collection
            </span>
          </h1>
        </div>

        {/* Center cactus image */}
        <div className={cn(
          "relative max-w-md mx-auto mt-8 opacity-0 transform scale-95",
          loaded && "animate-fade-in !scale-100"
        )}
        style={{ transitionDuration: '1s', animationDelay: '600ms' }}>
          <div className="w-full aspect-square relative">
            {/* Cactus pot placeholder */}
            <div className="w-full h-full relative overflow-hidden">
              {/* Cactus pot */}
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[60%] h-[35%] rounded-t-none rounded-b-[50%/30%] bg-[#E07A5F] overflow-hidden"></div>
              
              {/* Cactus body */}
              <div className="absolute bottom-[30%] left-1/2 -translate-x-1/2 w-[40%] h-[55%] bg-[#81B29A] rounded-lg">
                {/* Cactus details */}
                <div className="absolute w-[10%] h-[15%] bg-[#81B29A] top-[20%] -right-[8%] rounded-full"></div>
                <div className="absolute w-[10%] h-[25%] bg-[#81B29A] top-[40%] -left-[8%] rounded-full"></div>
                
                {/* Cactus spikes */}
                <div className="absolute w-[2%] h-[5%] bg-white top-[10%] right-[20%] rotate-45"></div>
                <div className="absolute w-[2%] h-[5%] bg-white top-[20%] right-[30%] rotate-45"></div>
                <div className="absolute w-[2%] h-[5%] bg-white top-[30%] right-[15%] rotate-45"></div>
                <div className="absolute w-[2%] h-[5%] bg-white top-[15%] left-[20%] -rotate-45"></div>
                <div className="absolute w-[2%] h-[5%] bg-white top-[25%] left-[30%] -rotate-45"></div>
                <div className="absolute w-[2%] h-[5%] bg-white top-[35%] left-[15%] -rotate-45"></div>
              </div>
              
              {/* Sand/soil in pot */}
              <div className="absolute bottom-[5%] left-1/2 -translate-x-1/2 w-[55%] h-[8%] bg-[#F4F1DE] rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
