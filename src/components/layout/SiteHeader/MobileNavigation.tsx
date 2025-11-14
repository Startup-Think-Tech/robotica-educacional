import { NAVIGATION_LINKS } from "../../../constants/navigation";
import { NavLink } from "react-router-dom";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "../../ui/sheet";
import { cn } from "../../../lib/utils";

interface MobileNavigationProps {
  isOpen: boolean;
  onClose: () => void;
  activePath: string;
}

export function MobileNavigation({
  isOpen,
  onClose,
  activePath,
}: MobileNavigationProps) {
  return (
    <Sheet open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <SheetContent
        side="right"
        className="flex flex-col p-0 sm:p-0 md:hidden"
      >
        <SheetHeader
          className={cn(
            "border-b border-black/10 px-5 pb-4 pt-5 transition-all duration-500 ease-smooth-out dark:border-white/10",
            isOpen
              ? "animate-fade-in-up opacity-100 translate-y-0"
              : "opacity-0 -translate-y-2"
          )}
        >
          <SheetTitle className="text-lg font-semibold uppercase tracking-[0.2rem] text-brand-accent">
            Menu
          </SheetTitle>
        </SheetHeader>

        <nav
          className="flex flex-1 flex-col gap-2 px-5 pt-6 text-base font-medium uppercase tracking-wide text-brand-lightTextMuted dark:text-brand-darkTextMuted"
          aria-label="Navegação secundária"
        >
          {NAVIGATION_LINKS.map((link, index) => (
            <NavLink
              key={link.to}
              to={link.to}
              onClick={onClose}
              className={cn(
                "rounded-xl px-4 py-3 transition-all duration-500 ease-smooth-out hover:bg-brand-primary/10 hover:text-brand-primary active:scale-[0.98] dark:hover:bg-white/5",
                isOpen
                  ? "animate-fade-in-up opacity-100 translate-x-0 translate-y-0"
                  : "opacity-0 translate-x-4",
                isOpen && `delay-[${index * 75}ms]`,
                activePath === link.to &&
                  "bg-brand-primary/15 font-semibold text-brand-primary shadow-sm dark:bg-white/10 dark:text-brand-primary"
              )}
            >
              {link.label}
            </NavLink>
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  );
}

