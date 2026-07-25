// src/components/Hero.tsx

type HeroProps = {
  flowerImage: string;
  oceanImage: string;
};

export default function Hero({ flowerImage, oceanImage }: HeroProps) {
  return (
    // LAYER WRAPPER — needs relative + explicit height for absolute children to work
    <section className="relative w-full h-150 overflow-hidden">
      {/* LAYER 1 — ocean background, sits behind everything */}
      <img
        src={oceanImage}
        alt="Ocean background"
        className="absolute inset-0 w-full h-full object-cover object-center"
      />

      {/* Dark overlay so text is readable on the photo */}
      <div className="absolute inset-0 bg-black/10" />

      {/* LAYER 2 — content grid on top of the ocean */}
      <div className="relative z-10 h-full flex items-center justify-between px-17 ">
        {/* Left: text block */}
        <div className="max-w-xs">
          <h1 className="text-6xl font-light text-white mb-4">Hello!</h1>
          <p className="text-xs tracking-widest text-white/80 uppercase mb-6">
            See the world through my eyes.
          </p>
          <p className="text-sm italic text-white/70 leading-relaxed">
            Whether you're here to find inspiration, solace, or simply to
            appreciate the artistry of nature, I hope my photos evoke a sense of
            wonder and connection to the beauty that surrounds us. Explore my
            collections, and let your imagination soar as high as the clouds.
          </p>
        </div>

        {/* Right: flower photo card */}
        <div className="h-150 w-75 shrink-0 overflow-hidden py-8 ">
          <img
            src={flowerImage}
            alt="Nature photography"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}
