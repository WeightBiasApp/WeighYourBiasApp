import { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  ArrowLeftIcon,
  LogOutIcon,
  PlayIcon,
  PauseIcon,
  RotateCcwIcon,
  RotateCwIcon,
  Maximize2Icon,
} from "lucide-react";
import { Button } from "../../components/ui/button";

// ✅ Import your video
import lowCalorieSandwich from "../../assets/lowcalsandwich.mp4";

export default function DietAdvice() {
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
        <h1 className="absolute max-w-[390px] left-[12px] right-[19px] top-[111px] text-white font-bold text-[20px] text-center font-['Poppins']">
          4: Impact of weight bias on patient outcomes & care experiences
        </h1>


        {/* Exit */}
        <div className="absolute top-8 right-[17px] flex flex-col items-center">
          <Link to="/ModuleSubCategory">
            <Button
              variant="outline"
              size="icon"
              className="h-[34px] w-[35px] rounded-full bg-[#f89725] p-0 border-none"
            >
              <LogOutIcon className="h-6 w-6 text-[#2e3b42]" />
            </Button>
          </Link>
          <span className="mt-1 text-[10px] text-[#f89725] font-['Poppins']">Exit</span>
        </div>

        {/* Back */}
        <div className="absolute top-8 left-[17px] flex flex-col items-center">
          <Link to="/ImpactOnPatients">
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
  {/* Video Title */}
  <h2 className="text-[#2e3b42] font-semibold text-lg font-['Poppins'] text-center pb-2">
    Unsolicited Diet Advice
  </h2>
        {/* Video Preview Box */}
        <div className="w-[358px] h-[373px] rounded-[25px] overflow-hidden shadow-lg bg-black">
          <video
            ref={videoRef}
            src={lowCalorieSandwich}
            className={`w-full h-full rounded-[25px] ${
              !isFullscreen ? "object-cover" : ""
            }`}
            onEnded={() => setIsPlaying(false)}
            controls={false}
          />
        </div>

        {/* Video Controls */}
        <div className="flex items-center justify-center space-x-4">
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


      <section className="flex flex-col items-center px-4 mt-10">
        <Link
          to="/ImpactReflection"
          className="absolute left-[93px] top-[760px] w-[205px] h-[49px] bg-[#f89725] rounded-[25px] font-['Poppins',Helvetica] font-semibold text-black text-base tracking-[0.48px] hover:bg-[#e88615] flex items-center justify-center"
        >
          Next
        </Link>
      </section>
    </main>
  );
}
