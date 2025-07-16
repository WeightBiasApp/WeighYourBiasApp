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
import PhysioandStairs from "../../assets/PhysioandStairs.mp4";

export default function TDH () {
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
    <main className="relative flex flex-col h-[1033px] w-full max-w-[390px] mx-auto bg-[#e6ebf0]">
      {/* Header */}
      <header className="absolute w-[390px] h-[171px] top-0 left-0 bg-[#2e3b42] rounded-b-[25px] shadow-[0px_4px_4px_#00000040]">
          <h1 className="absolute w-[352px] top-[95px] left-[19px] font-['Poppins',Helvetica] font-bold text-white text-2xl text-center">
          Recognising Bias in Clinical Settings
        </h1>


        {/* Exit */}
        <div className="absolute top-8 right-[17px] flex flex-col items-center">
          <Link to="/UnderstandindUnconsciousBias">
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
          <Link to="/TypesOfUB2">
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

     <h2 className="absolute w-[362px] top-[200px] left-[17px] font-['Poppins',Helvetica] font-semibold text-[#2e3b42] text-xl ml-2 text-left">
         Tracey's Discharge Home   
        </h2>

        <p className="absolute w-[362px] top-[240px] left-[17px] font-['Poppins',Helvetica] font-semibold text-[#2e3b42] text-[16px] leading-[18px] ml-2 text-left">
         In this video, Tracey reflects on her experience with a physiotherapist during hospital discharge planning.  
        </p>

         <p className="absolute w-[362px] top-[320px] left-[17px] font-['Poppins',Helvetica] font-semibold text-[#2e3b42] text-[16px] leading-[18px] ml-2 text-left">
       As you follow her story, identify moments where unconscious weight bias may have influenced the physiotherapist’s decisions or communication.  </p>


      </header>

      {/* Video Section */}
      <section className="absolute top-[440px] flex flex-col items-center justify-center px-4 mt-222 space-y-4">

        {/* Video Preview Box */}
        <div className="w-[358px] h-[373px] rounded-[25px] overflow-hidden shadow-lg bg-black">
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
        <div className="flex items-center justify-center  space-x-4">
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
          to="/TDHReflection"
          className="absolute left-[93px] top-[910px] w-[205px] h-[49px] bg-[#f89725] rounded-[25px] font-['Poppins',Helvetica] font-semibold text-black text-base tracking-[0.48px] hover:bg-[#e88615] flex items-center justify-center"
        >
          Next
        </Link>
      </section>
    </main>
  );
}
