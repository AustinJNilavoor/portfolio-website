import { useEffect } from "react";
import { BrowserRouter, Routes, Route, Navigate, useLocation } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Skills from "./pages/Skills";

import "./App.css";
import Experience from "./pages/Experience";
import Projects from "./pages/Projects";
import ProjectDemo from "./pages/Project_demo";

/* Jump to top on route change (in-page #anchors are left alone) */
function ScrollToTop() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (!hash) window.scrollTo(0, 0);
  }, [pathname, hash]);
  return null;
}

export default function App() {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <ScrollToTop />
      <div className="app">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<><Home /><About /><Experience /> <Skills /></>} />
            <Route path="/projects" element={<Projects />} />
                   <Route
          path="/projectdemo/:slug"
          element={<ProjectDemo />}
        />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
