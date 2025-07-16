import { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  ArrowLeftIcon,
 
  PlayIcon,
  PauseIcon,
  RotateCcwIcon,
  RotateCwIcon,
  Maximize2Icon,
} from "lucide-react";
import { Button } from "../../components/ui/button";

// ✅ Import your video
import PhysioandStairs from "../../assets/PhysioandStairs.mp4";

export default function Physio () {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const togglePlay = () => {
    const video = videoRef.current;
    if (!video) return;

    if (video.paused) {
      video.play();
      setIsPlaying(true);
    } else {
      video.pause();
      setIsPlaying(false);
    }
  };

  const rewind10 = () => {
    const video = videoRef.current;
    if (video) video.currentTime -= 10;
  };

  const forward10 = () => {
    const video = videoRef.current;
    if (video) video.currentTime += 10;
  };

  const enterFullscreen = () => {
    const video = videoRef.current;
    if (!video) return;

    if (video.requestFullscreen) {
      video.requestFullscreen();
    } else if ((video as any).webkitEnterFullscreen) {
      (video as any).webkitEnterFullscreen(); // iOS Safari
    } else if ((video as any).mozRequestFullScreen) {
      (video as any).mozRequestFullScreen();
    } else if ((video as any).msRequestFullscreen) {
      (video as any).msRequestFullscreen();
    }
  };

  // ✅ Track fullscreen changes
  useEffect(() => {
    const handleFullscreenChange = () => {
      const fullscreenElement = document.fullscreenElement;
      setIsFullscreen(!!fullscreenElement);
    };

    document.addEventListener("fullscreenchange", handleFullscreenChange);
    return () => {
      document.removeEventListener("fullscreenchange", handleFullscreenChange);
    };
  }, []);

  return (
    <main className="relative flex flex-col h-[844px] w-full max-w-[400px] mx-auto bg-[#e6ebf0]">
      {/* Header */}
      <header className="w-full h-[171px] bg-[#2e3b42] rounded-b-[25px] relative shadow-md">
        <h1 className="absolute max-w-[90%] left-[19px] right-[19px] top-[101px] text-white font-bold text-xl text-center font-['Poppins']">
          Physio and Stairs
        </h1>


        {/* Back */}
        <div className="absolute top-8 left-[17px] flex flex-col items-center">
          <Link to="/ResourcesCategories">
            <Button
              variant="outline"
              size="icon"
              className="h-[34px] w-[35px] rounded-full bg-[#f89725] p-0 border-none"
            >
              <ArrowLeftIcon className="h-6 w-6 text-[#2e3b42]" />
            </Button>
          </Link>
          <span className="mt-1 text-[10px] text-[#f89725] font-['Poppins']">Back</span>
        </div>

     
      </header>

      {/* Video Section */}
      <section className="flex flex-col items-center justify-center px-4 mt-12 space-y-4">
 
  
        {/* Video Preview Box */}
        <div className="w-[358px] h-[473px] rounded-[25px] overflow-hidden shadow-lg bg-black">
          <video
            ref={videoRef}
            src={PhysioandStairs}
            className={`w-full h-full rounded-[25px] ${
              !isFullscreen ? "object-cover" : ""
            }`}
            onEnded={() => setIsPlaying(false)}
            controls={false}
          />
        </div>

        {/* Video Controls */}
        <div className="flex items-center justify-center space-x-4 pt-2">
          <Button
            variant="outline"
            className="rounded-full bg-white text-[#2e3b42] border-none shadow"
            onClick={rewind10}
          >
            <RotateCcwIcon className="h-5 w-5" />
          </Button>

          <Button
            variant="outline"
            className="rounded-full bg-white text-[#2e3b42] border-none shadow"
            onClick={togglePlay}
          >
            {isPlaying ? <PauseIcon className="h-5 w-5" /> : <PlayIcon className="h-5 w-5" />}
          </Button>

          <Button
            variant="outline"
            className="rounded-full bg-white text-[#2e3b42] border-none shadow"
            onClick={forward10}
          >
            <RotateCwIcon className="h-5 w-5" />
          </Button>

          <Button
            variant="outline"
            className="rounded-full bg-white text-[#2e3b42] border-none shadow"
            onClick={enterFullscreen}
          >
            <Maximize2Icon className="h-5 w-5" />
          </Button>
        </div>
      </section>

    </main>
  );
}
