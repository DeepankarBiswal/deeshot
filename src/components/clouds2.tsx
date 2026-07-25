// src/components/Clouds2.tsx
export default function Clouds2() {
  return (
    <div className="min-h-screen w-full bg-black flex items-center justify-center">
      {/* Full-page image */}
      <img
        src="\src\assets\images\clouds.png"   // ← change this path
        alt="Page image"
        className="w-full h-full object-cover"
      />
    </div>
  );
}

