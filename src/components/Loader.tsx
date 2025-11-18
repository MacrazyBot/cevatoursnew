import { useEffect, useState } from "react";
import peruMap from "@/assets/peru.svg";

const Loader = ({ onLoadComplete }: { onLoadComplete: () => void }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(onLoadComplete, 800);
          return 100;
        }
        return prev + 1.5;
      });
    }, 35);

    return () => clearInterval(interval);
  }, [onLoadComplete]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-tropical-sun via-tropical-ocean to-tropical-palm overflow-hidden">
      <div className="text-center space-y-8">
        <div className="relative w-48 h-48 mx-auto flex items-center justify-center">
          <img
            src={peruMap}
            alt="Mapa del Perú"
            className="w-40 h-40 object-contain animate-pulse-slow drop-shadow-2xl"
            style={{
              filter: "brightness(0) saturate(100%) invert(91%) sepia(23%) saturate(541%) hue-rotate(352deg) brightness(106%) contrast(97%)",
            }}
          />
          <div className="absolute inset-0 bg-gradient-radial from-tropical-sand/20 to-transparent animate-ping" style={{ maxWidth: '160px', maxHeight: '160px', margin: 'auto' }} />
        </div>
        
        <div className="space-y-3">
          <h2 className="text-3xl font-bold text-white drop-shadow-lg">
            CEVATOURS
          </h2>
          <p className="text-white/90 text-lg">Descubre la belleza de Piura</p>
        </div>

        <div className="w-64 mx-auto space-y-2">
          <div className="h-2 bg-tropical-sand/20 rounded-full overflow-hidden">
            <div 
              className="h-full bg-tropical-sand rounded-full transition-all duration-300 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>
          <p className="text-tropical-sand/90 text-sm">{progress}%</p>
        </div>
      </div>
    </div>
  );
};

export default Loader;
