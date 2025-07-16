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
import CTscanner from "../../assets/CTscanner.mp4";
import barriersImage from"../../assets/barriers.png";

export default function HealthcareBarriers() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [flippedCard, setFlippedCard] = useState<number | null>(null);
  const [videoEnded, setVideoEnded] = useState(false); // NEW STATE

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
      (video as any).webkitEnterFullscreen();
    } else if ((video as any).mozRequestFullScreen) {
      (video as any).mozRequestFullScreen();
    } else if ((video as any).msRequestFullscreen) {
      (video as any).msRequestFullscreen();
    }
  };

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

  const factorsData = [
    {
      id: 1,
      title: "Barriers to Healthcare",
      imageSrc: barriersImage,
              height: "h-[85px]",
            width: "w-[120px]",
    
      imageAlt: "Illustration of diverse people",
      backText: (
        <>
          Healthcare settings create {" "}
      
  <a
    href="https://onlinelibrary.wiley.com/doi/10.1111/j.1365-2648.2008.04794.x"
    target="_blank"
    rel="noopener noreferrer"
    className="text-[#F89725] font-bold underline"
  >
    physical and emotional
  </a>
  {" "}barriers including inadequate equipment (gowns, examination tables, chairs, BP cuffs), uncomfortable seating, and{" "}
  <a
    href="https://pubmed.ncbi.nlm.nih.gov/23998170/"
    target="_blank"
    rel="noopener noreferrer"
    className="text-[#F89725] font-bold underline"
  >
    judgemental staff attitudes
  </a>
  . Patients often feel embarrassed about undressing or exposing their bodies in clinical settings. These systemic issues, combined with past negative experiences, discourage patients from seeking necessary care.
</>

      ),
    },
  ];

  return (
      <main className="relative flex flex-col h-[1055px] w-full max-w-[390px] mx-auto bg-[#e6ebf0]">
      {/* Header */}
      <header className="w-full h-[171px] bg-[#2e3b42] rounded-b-[25px] relative shadow-md">
        <h1 className="absolute w-[390px]  top-[91px] left-[1px] text-white font-bold text-xl text-center font-['Poppins']">
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
          <Link to="/ImpactReflection">
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

      {/* Flip Card Section */}
      <section className="flex flex-col gap-4 items-center px-4 pt-6">
        {factorsData.map((factor) => (
          <div
            key={factor.id}
            className="w-full h-[219px] perspective-[1000px]"
            onClick={() =>
              setFlippedCard(flippedCard === factor.id ? null : factor.id)
            }
          >
            <div
              className="relative w-full h-full transition-transform duration-700"
              style={{
                transformStyle: "preserve-3d",
                transform:
                  flippedCard === factor.id ? "rotateY(180deg)" : "rotateY(0deg)",
              }}
            >
              {/* Front Side */}
              <div
                className="absolute w-full h-full bg-[#2e3b42] rounded-2xl p-4 flex items-center"
                style={{ backfaceVisibility: "hidden" }}
              >
                <div className="flex flex-col justify-center w-1/2 pl-3">
                  <h2 className="text-white text-lg font-bold font-['Poppins'] leading-tight">
                    {factor.title}
                  </h2>
                </div>
                <img
            
                    src={factor.imageSrc}
                    alt={factor.imageAlt}
                    className={`${factor.width} ${factor.height} rounded-xl ml-auto mr-2`}
                />
              </div>

              {/* Back Side */}
              <div
                className="absolute w-full h-full bg-[#2e3b42] rounded-2xl p-4 flex items-center"
                style={{
                  transform: "rotateY(180deg)",
                  backfaceVisibility: "hidden",
                }}
              >
                <p className="text-white text-[15px] font-medium font-['Poppins'] leading-[20px]">
                  {factor.backText}
                </p>
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* Video Section */}
      <section className="flex flex-col items-center justify-center px-4 mt-8 space-y-4">
        <h2 className="text-[#2e3b42] font-semibold text-lg font-['Poppins'] text-center pb-2">
          Physical Barriers and Dismissive Attitudes
        </h2>

        <div className="w-[358px] h-[373px] rounded-[25px] overflow-hidden shadow-lg bg-black">
          <video
            ref={videoRef}
            src={CTscanner}
            className={`w-full h-full rounded-[25px] ${
              !isFullscreen ? "object-cover" : ""
            }`}
            onEnded={() => {
              setIsPlaying(false);
              setVideoEnded(true); // Mark video as completed
            }}
            controls={false}
          />
        </div>

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

      {/* Conditionally Show "Next" Button */}
      {videoEnded && (
        <section className="flex flex-col items-center px-4 mt-10 mb-6">
          <Link
            to="/HealthcareExpectations"
            className="w-[205px] h-[49px] bg-[#f89725] rounded-[25px] font-['Poppins',Helvetica] font-semibold text-black text-base tracking-[0.48px] hover:bg-[#e88615] flex items-center justify-center"
          >
            Next
          </Link>
        </section>
      )}
    </main>
  );
}
