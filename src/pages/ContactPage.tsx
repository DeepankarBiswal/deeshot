import Hero from "../components/Hero";
import oceanImage from "../assets/images/ocean.jpg";
import flowerImage from "../assets/images/flowers.jpg";

export default function ContactPage() {
  return (
    <section className="min-h-full bg-white px-8 py-12">
      <div className="max-w-4xl mx-auto space-y-6">
        <h1 className="text-3xl font-light tracking-wide text-black">Contact</h1>
        <p className="text-sm text-gray-600 leading-relaxed">
          Reach out for collaborations, commissions, or questions about the work.
        </p>
        <div className="rounded-lg border border-gray-200 p-6 space-y-3 text-sm text-gray-700">
          <p>Email: hello@deeshot.com</p>
          <p>Instagram: @deeshot</p>
          <p>Location: Based in the Pacific Northwest</p>
        </div>
      </div>
      <Hero oceanImage={oceanImage} flowerImage={flowerImage} />
    </section>
  );
}
