import Hero from "../components/Hero";
import oceanImage from "../assets/images/ocean.jpg";
import flowerImage from "../assets/images/flowers.jpg";

export default function LinkPage() {
  return (
    <section className="min-h-full bg-white px-8 py-12">
      <div className="max-w-4xl mx-auto space-y-6">
        <h1 className="text-3xl font-light tracking-wide text-black">Links</h1>
        <p className="text-sm text-gray-600 leading-relaxed">
          This page can hold curated links, collections, or featured work.
        </p>
        <div className="rounded-lg border border-gray-200 p-6">
          <ul className="space-y-3 text-sm text-gray-700">
            <li>• Featured gallery</li>
            <li>• Travel journal</li>
            <li>• Behind-the-scenes notes</li>
          </ul>
        </div>
      </div>
      <Hero oceanImage={oceanImage} flowerImage={flowerImage} />
    </section>
  );
}
