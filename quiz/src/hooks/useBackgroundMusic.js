import { useEffect } from "react";
import musica from "../assets/sounds/musica.mp3";

export default function useBackgroundMusic() {
  useEffect(() => {
    const audio = new Audio(musica);
    audio.loop = true;
    audio.play();

    return () => audio.pause();
  }, []);
}
