import { useEffect } from "react";
import musica from "../assets/sounds/musica.mp3";

export default function useBackgroundMusic() {
  useEffect(() => {
    const audio = new Audio(musica);
    audio.loop = true;
    audio.volume = 0.2;
    audio.play().catch(() => {});

    return () => audio.pause();
  }, []);
}
