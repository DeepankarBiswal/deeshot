import Hero from "../components/Hero";
import oceanImage from "../assets/images/ocean.jpg";
import flowerImage from "../assets/images/flowers.jpg";

export default function AboutPage() {
  return (
    <section className="min-h-full bg-white">
      <Hero oceanImage={oceanImage} flowerImage={flowerImage} />
    </section>
  );
}
