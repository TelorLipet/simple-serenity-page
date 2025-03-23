
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
    "Succulent": "bg-kawaii-green/80",
    "Sustainable": "bg-white/80",
    "Eco-friendly!": "bg-kawaii-lightGreen/80",
    "Low-maintenance": "bg-kawaii-green/80",
    "Beautiful": "bg-kawaii-sand/80",
    "Natural!": "bg-kawaii-green/80",
    "Unique": "bg-kawaii-sand/80",
    "(・ω・)": "bg-kawaii-lightGreen/80",
    "(⌒▽⌒)": "bg-kawaii-sand/80",
    "(^・^)": "bg-kawaii-darkGreen/80",
    "(*･ω･)": "bg-kawaii-sand/80",
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
