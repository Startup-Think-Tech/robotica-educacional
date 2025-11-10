import { Outlet } from "react-router-dom";
import { SiteHeader } from "../components/layout/SiteHeader";
import { SiteFooter } from "../components/layout/SiteFooter";

export function MainLayout() {
  return (
    <div className="app-root flex min-h-screen flex-col bg-brand-lightBg text-brand-lightText transition-colors dark:bg-brand-darkBg dark:text-brand-darkText">
      <SiteHeader />
      <main className="flex-1">
        <Outlet />
      </main>
      <SiteFooter />
    </div>
  );
}

