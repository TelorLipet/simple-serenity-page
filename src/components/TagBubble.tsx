
import { cn } from "@/lib/utils";

interface TagBubbleProps {
  text: string;
  className?: string;
  style?: React.CSSProperties;
  animationVariant?: "default" | "slow" | "fast";
}

const TagBubble = ({ 
  text, 
  className,
  style,
  animationVariant = "default" 
}: TagBubbleProps) => {
  // Determine animation class based on variant
  const animationClass = {
    default: "animate-float",
    slow: "animate-float-slow",
    fast: "animate-float-fast"
  }[animationVariant];

  // Randomize background slightly within the tag's base color
  const backgrounds = {
    "Super!": "bg-kawaii-pink/80",
    "Unreal": "bg-white/80",
    "Perfect!": "bg-kawaii-purple/80",
    "Fantastic": "bg-kawaii-pink/80",
    "Amazing!": "bg-kawaii-blue/80",
    "Awesome!": "bg-kawaii-pink/80",
    "Whoa": "bg-kawaii-yellow/80",
    "(・ω・)": "bg-kawaii-blue/80",
    "(⌒▽⌒)": "bg-kawaii-yellow/80",
    "(^・^)": "bg-kawaii-purple/80",
    "(*･ω･)": "bg-kawaii-yellow/80",
  };

  const bgColor = backgrounds[text as keyof typeof backgrounds] || "bg-white/80";

  return (
    <div 
      className={cn(
        "tag-bubble", 
        bgColor, 
        animationClass,
        className
      )}
      style={style}
    >
      {text}
    </div>
  );
};

export default TagBubble;
