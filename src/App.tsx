import { Navigate, Route, Routes } from "react-router-dom";
import { MainLayout } from "./layouts/MainLayout";
import { AboutPage } from "./pages/About/AboutPage";
import { TeamPage } from "./pages/Team/TeamPage";
import { ResultsPage } from "./pages/Results/ResultsPage";
import { MethodologyPage } from "./pages/Methodology/MethodologyPage";
import { FeedbackPage } from "./pages/Feedback/FeedbackPage";
import { ContactPage } from "./pages/Contact/ContactPage";

function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<AboutPage />} />
        <Route path="/equipe" element={<TeamPage />} />
        <Route path="/resultados" element={<ResultsPage />} />
        <Route path="/metodologia" element={<MethodologyPage />} />
        <Route path="/feedback" element={<FeedbackPage />} />
        <Route path="/contato" element={<ContactPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  );
}

export default App;
