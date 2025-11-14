import { Card, CardContent } from "./card";
import { cn } from "@/lib/utils";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

interface ResultCardProps {
  title: string;
  description: string;
  image: string;
  orientation: "text-left" | "text-right";
}

export function ResultCard({
  title,
  description,
  image,
  orientation,
}: ResultCardProps) {
  const { elementRef, isVisible } = useScrollAnimation();

  return (
    <Card
      ref={elementRef}
      className={cn(
        "overflow-hidden border-black/10 bg-white/80 shadow-light backdrop-blur-md transition-all duration-700 hover:shadow-medium dark:border-white/10 dark:bg-white/10",
        "sm:rounded-3xl md:grid md:grid-cols-2 md:items-center md:gap-10",
        isVisible
          ? "translate-y-0 opacity-100"
          : "translate-y-8 opacity-0",
        "rounded-2xl"
      )}
    >
      <div
        className={cn(
          "relative h-full",
          orientation === "text-right" && "md:order-2"
        )}
      >
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover"
          loading="lazy"
        />
      </div>
      <CardContent className="p-6 sm:p-8 md:p-12">
        <h3 className="text-xl font-semibold text-brand-accent sm:text-2xl md:text-3xl">
          {title}
        </h3>
        <p className="mt-3 text-sm leading-relaxed text-brand-lightTextMuted sm:mt-4 sm:text-base dark:text-brand-darkTextMuted">
          {description}
        </p>
      </CardContent>
    </Card>
  );
}

