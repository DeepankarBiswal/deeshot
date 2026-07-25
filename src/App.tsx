import { Navigate, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import AboutPage from "./pages/AboutPage";
import LinkPage from "./pages/LinkPage";
import Clouds2 from "./components/clouds2";
import ContactPage from "./pages/ContactPage";
import Hero from "./components/Hero";
import oceanImage from "./assets/images/ocean.jpg";
import flowerImage from "./assets/images/flowers.jpg";

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />

      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Navigate to="/about" replace />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/link" element={<LinkPage />} />
          <Route path="/contact" element={<ContactPage />} />
          
        </Routes>
        <Hero
          oceanImage={oceanImage}
          flowerImage={flowerImage}
        />
      </main>
      
      <Footer />
      <Clouds2 />
    </div>
  );
}
