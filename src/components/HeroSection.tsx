
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
    { text: "Unreal", top: "12%", left: "15%", animationVariant: "default", delay: 300 },
    { text: "Super!", top: "35%", left: "10%", animationVariant: "slow", delay: 400 },
    { text: "(・ω・)", top: "55%", left: "15%", animationVariant: "fast", delay: 500 },
    { text: "Fantastic", top: "75%", left: "12%", animationVariant: "slow", delay: 600 },
    { text: "(*･ω･)", top: "55%", left: "25%", animationVariant: "default", delay: 700 },
    { text: "Amazing!", top: "20%", left: "80%", animationVariant: "slow", delay: 800 },
    { text: "(^・^)", top: "30%", left: "85%", animationVariant: "default", delay: 300 },
    { text: "Awesome!", top: "60%", left: "80%", animationVariant: "fast", delay: 400 },
    { text: "(⌒▽⌒)", top: "75%", left: "85%", animationVariant: "slow", delay: 500 },
    { text: "Whoa", top: "85%", left: "55%", animationVariant: "default", delay: 600 },
    { text: "Perfect!", top: "15%", left: "40%", animationVariant: "fast", delay: 700 },
  ];

  return (
    <section className="min-h-screen w-full flex flex-col items-center justify-center relative overflow-hidden pt-20 px-6">
      <div className="cloud-bg"></div>
      
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
            IT'S TIME FOR
          </span>
          
          <h1 className="relative">
            <span className={cn(
              "text-5xl md:text-7xl lg:text-8xl font-display font-bold text-kawaii-blue block opacity-0",
              loaded && "animate-slide-up"
            )} 
            style={{ animationDelay: '200ms' }}
            >
              Kawaii
            </span>
            <span className={cn(
              "text-5xl md:text-7xl lg:text-8xl font-display font-bold text-black block opacity-0",
              loaded && "animate-slide-up"
            )}
            style={{ animationDelay: '300ms' }}
            >
              Coffee
            </span>
            <span className={cn(
              "text-5xl md:text-7xl lg:text-8xl font-display font-bold text-black block opacity-0",
              loaded && "animate-slide-up"
            )}
            style={{ animationDelay: '400ms' }}
            >
              Experience
            </span>
          </h1>
        </div>

        {/* Center mug image */}
        <div className={cn(
          "relative max-w-md mx-auto mt-8 opacity-0 transform scale-95",
          loaded && "animate-fade-in !scale-100"
        )}
        style={{ transitionDuration: '1s', animationDelay: '600ms' }}>
          <div className="w-full aspect-square relative">
            {/* Cat coffee mug placeholder */}
            <div className="w-full h-full rounded-full bg-white shadow-xl relative overflow-hidden">
              {/* Cat ears */}
              <div className="absolute w-16 h-16 bg-white rounded-full -top-6 -left-4 transform rotate-45"></div>
              <div className="absolute w-16 h-16 bg-white rounded-full -top-6 -right-4 transform -rotate-45"></div>
              
              {/* Coffee in mug */}
              <div className="absolute top-[15%] left-1/2 -translate-x-1/2 w-[70%] h-[65%] rounded-[50%/60%] bg-[#D4A76A] overflow-hidden">
                {/* Latte art */}
                <div className="absolute w-3/4 h-5 bg-[#F3E3CF] top-6 left-1/2 -translate-x-1/2 rounded-full"></div>
                <div className="absolute w-1/2 h-4 bg-[#F3E3CF] top-12 left-1/2 -translate-x-1/2 rounded-full"></div>
              </div>
              
              {/* Cat face */}
              <div className="absolute bottom-[15%] left-0 right-0 mx-auto flex flex-col items-center">
                {/* Eyes and nose */}
                <div className="flex gap-5 mb-1">
                  <div className="w-2 h-3 bg-black rounded-full"></div>
                  <div className="w-2 h-3 bg-black rounded-full"></div>
                </div>
                <div className="w-3 h-2 bg-black rounded-full"></div>
                
                {/* Cheeks */}
                <div className="flex w-full justify-between px-10 mt-2">
                  <div className="w-4 h-2 bg-kawaii-pink rounded-full opacity-70"></div>
                  <div className="w-4 h-2 bg-kawaii-pink rounded-full opacity-70"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
