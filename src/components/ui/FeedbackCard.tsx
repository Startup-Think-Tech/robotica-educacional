import { User } from "lucide-react";
import { Card, CardContent } from "./card";
import { cn } from "@/lib/utils";

interface FeedbackCardProps {
  id: number;
  name: string;
  comment: string;
  stars: number;
}

export function FeedbackCard({ name, comment, stars }: FeedbackCardProps) {
  return (
    <Card className="rounded-2xl border-black/10 bg-brand-lightBgSecondary p-6 shadow-light transition hover:-translate-y-1 hover:shadow-medium dark:border-white/20 dark:bg-brand-darkBgSecondary/60">
      <CardContent className="p-0">
        <div className="flex items-center gap-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-full border border-brand-primary/40 bg-brand-primary/10 text-brand-primary">
            <User className="h-6 w-6" aria-hidden />
          </div>
          <div>
            <h3 className={cn("text-lg font-semibold text-brand-primary")}>
              {name}
            </h3>
            <div className="flex items-center gap-1 text-feedback-star">
              {Array.from({ length: 5 }, (_, index) => (
                <span key={index} aria-hidden>
                  {index < stars ? "★" : "☆"}
                </span>
              ))}
            </div>
          </div>
        </div>
        <p className="mt-4 text-sm leading-relaxed text-brand-lightTextMuted dark:text-brand-darkTextMuted">
          "{comment}"
        </p>
      </CardContent>
    </Card>
  );
}

