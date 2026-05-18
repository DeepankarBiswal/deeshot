import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import oceanImage from "./assets/images/ocean.jpg";
import flowerImage from "./assets/images/flowers.jpg";

const OCEAN_IMAGE = oceanImage;
const FLOWER_IMAGE = flowerImage;

export default function App() {
  const [activePage, setActivePage] = useState("About");

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar activePage={activePage} onNavigate={setActivePage} />

      <main className="flex-1">
        <Hero oceanImage={OCEAN_IMAGE} flowerImage={FLOWER_IMAGE} />
      </main>

      <Footer />
    </div>
  );
}
