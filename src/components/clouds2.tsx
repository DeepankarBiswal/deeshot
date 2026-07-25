import cloudsImage from "../assets/images/clouds.png";

export default function Clouds2() {
  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-black">
      <img
        src={cloudsImage}
        alt="Cloudy background"
        className="absolute inset-0 w-full h-full object-cover"
      />
    </div>
  );
}

