import { useEffect } from "react";
import { Howl } from "howler";
import musica from "../assets/sounds/musica.mp3"

export default function useBackgroundMusic(play) {
    useEffect(() => {
        if (!play) return;
        const bgMusic = new Howl({ src: [musica], loop: true, volume: 0.4 });
        bgMusic.play();
        return () => bgMusic.stop();
    }, [play]);
}