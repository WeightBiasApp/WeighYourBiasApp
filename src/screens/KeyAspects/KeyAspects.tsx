import { useState } from "react";
import { useSwipeable } from "react-swipeable";
import { ArrowLeftIcon, LogOutIcon, } from "lucide-react";
import { Button } from "../../components/ui/button";
import { useNavigate } from "react-router-dom";

import { Link } from "react-router-dom";


export const KeyAspects = (): JSX.Element => {
  const [index, setIndex] = useState(0);

  const navigate = useNavigate();

  const slides = [
    {
      key: "intro",
      title: (
        <>
          <span className="text-white">Key Aspects of </span>
          <span className="text-[#f89725]">Weight Bias & Stigma:</span>
        </>
      ),
      frontContent: (
       <ul className="w-[326px] mt-[40px] mx-auto font-['Poppins',Helvetica] text-white space-y-6">
  {[
    { title: "Nature", description: "– What each concept is at its core." },
    { title: "Visibility", description: "– How apparent or observable it is." },
    { title: "Impact", description: "– The effects on individuals and systems." },
    { title: "Scope", description: "– The extent and reach of each concept." },
  ].map((aspect, idx) => (
    <li key={idx} className="flex gap-2 items-start">
      {/* Use flex-shrink-0 and min-w to keep the dot aligned */}
      <span className="text-[#f89725] text-xl leading-[1] mt-[2px] flex-shrink-0 min-w-[1em] text-center">•</span>
      <div>
        <span className="font-bold text-[#f89725] text-lg">{aspect.title} </span>
        <span className="text-base font-semibold leading-[21.6px]">{aspect.description}</span>
      </div>
    </li>
  ))}
</ul>

      ),
    },
    {
      key: "nature",
      heading: "Nature",
      subtitle: "What each concept is at its core.",
     
      backContent: (
        <ul
          className="text-white text-left max-w-[336px] font-['Poppins',Helvetica] text-base font-bold pl-4 space-y-6 list-disc mt-10 mx-auto"
          style={{ listStyleType: "disc", color: "#F89725" }}
        >
          <li>
            <span className="text-[#F89725] text-[20px]">Weight bias</span>{" "}
            <span className="text-white text-[20px]">is primarily about attitudes and beliefs.</span>
          </li>
          <li>
            <span className="text-[#F89725] text-[20px]">Weight stigma</span>{" "}
            <span className="text-white text-[20px]">involves actions and behaviours resulting from these attitudes.</span>
          </li>
        </ul>
      ),
    },
    {
      key: "visibility",
      heading: "Visibility",
      subtitle: "How apparent or observable it is." ,
     
      backContent: (
        <ul
          className="text-white text-left font-['Poppins',Helvetica] max-w-[336px] text-base font-bold pl-4 space-y-6 list-disc mt-10 mx-auto"
          style={{ listStyleType: "disc", color: "#F89725" }}
        >
          <li>
            <span className="text-[#F89725] text-[20px]">Weight bias</span>{" "}
            <span className="text-white text-[20px]">can be implicit or unconscious.</span>
          </li>
          <li>
            <span className="text-[#F89725] text-[20px]">Weight stigma</span>{" "}
            <span className="text-white text-[20px]">is more overt and visible.</span>
          </li>
        </ul>
      ),
    },
    {
      key: "impact",
      heading: "Impact",
      subtitle: "The effects on individuals and systems.",
    
      backContent: (
        <ul
          className="text-white text-left max-w-[336px] font-['Poppins',Helvetica] text-base font-bold pl-4 space-y-6 list-disc mt-10 mx-auto"
          style={{ listStyleType: "disc", color: "#F89725" }}
        >
          <li>
            <span className="text-[#F89725] text-[20px]">Weight bias</span>{" "}
            <span className="text-white text-[20px] ">affects perceptions and judgements.</span>
          </li>
          <li>
            <span className="text-[#F89725] text-[20px]">Weight stigma</span>{" "}
            <span className="text-white text-[20px]">directly impacts individuals through discrimination and prejudice.</span>
          </li>
        </ul>
      ),
    },
    {
      key: "scope",
      heading: "Scope",
      subtitle: "The extent and reach of each concept.",
      
      backContent: (
        <ul
          className="text-white text-left font-['Poppins',Helvetica] max-w-[336px] text-base font-bold pl-4 space-y-6 list-disc mt-10 mx-auto"
          style={{ listStyleType: "disc", color: "#F89725" }}
        >
          <li>
            <span className="text-[#F89725] text-[20px]">Weight bias</span>{" "}
            <span className="text-white text-[20px]">exists at an individual or societal level.</span>
          </li>
          <li>
            <span className="text-[#F89725] text-[20px]">Weight stigma</span>{" "}
            <span className="text-white text-[20px]">manifests in social, institutional, and interpersonal contexts.</span>
          </li>
        </ul>
      ),
    },
  ];

  const swipeHandlers = useSwipeable({
    onSwipedLeft: () => setIndex((prev) => Math.min(prev + 1, slides.length - 1)),
    onSwipedRight: () => setIndex((prev) => Math.max(prev - 1, 0)),
    trackMouse: true,
  });

  const slide = slides[index];

  return (
    <main className="relative flex flex-col h-[870px] w-full max-w-[390px] mx-auto bg-[#e6ebf0]">
      {/* Header */}
      <div className="w-[390px] h-[171px] bg-[#2e3b42] rounded-[0px_0px_25px_25px] relative">
        <h1 className="absolute w-[352px] top-[107px] left-[19px] font-['Poppins',Helvetica] font-bold text-white text-2xl text-center">
          1: Definitions &amp; terminology
        </h1>

  {/* Exit button */}
<div className="absolute top-8 right-[17px] flex flex-col items-center">
  <Link to="/ModuleSubCategory"> {/* Replace /exitpage with your actual route */}
    <Button
      variant="outline"
      size="icon"
      className="h-[34px] w-[35px] rounded-full bg-[#f89725] p-0 border-none"
    >
      <LogOutIcon className="h-6 w-6 text-[#2e3b42]" />
    </Button>
  </Link>
  <span className="mt-1 font-['Poppins',Helvetica] text-[10px] text-[#f89725]">Exit</span>
</div>

{/* Back button */}
<div className="absolute top-8 left-[17px] flex flex-col items-center">
  <Link to="/DefinitionsAndTerminology_1"> {/* Replace /previouspage with your actual route */}
    <Button
      variant="outline"
      size="icon"
      className="h-[34px] w-[35px] rounded-full bg-[#f89725] p-0 border-none"
    >
      <ArrowLeftIcon className="h-6 w-6 text-[#2e3b42]" />
    </Button>
  </Link>
  <span className="mt-1 font-['Poppins',Helvetica] text-[10px] text-[#f89725]">Back</span>
</div>
</div>

      {/* Swipeable & Flip Card */}
      <div {...swipeHandlers} className="relative w-[371px] h-[524px] mt-8 mx-auto perspective-[1000px]">
        <div className="relative w-full min-h-[445px] bg-[#2e3b42] rounded-2xl p-6">
  <h2 className="font-['Poppins',Helvetica] text-2xl font-bold text-center text-white mb-6">
    {slide.heading ? (
      <div className="flex flex-col items-center">
        <span className="text-[#F89725] text-[28px]">{slide.heading}</span>
        <span className="text-white text-[18px] max-w-[275px] font-medium mt-1">{slide.subtitle}</span>
      </div>
    ) : (
      slide.title
    )}
  </h2>

  {/* Show both contents */}
  <div>{slide.frontContent}</div>
  <div className="mt-6">{slide.backContent}</div>
</div>


        {/* Pagination Dots */}
        <div className="flex justify-center gap-[10px] mt-4">
          {slides.map((_, i) => (
            <div
              key={i}
              className={`w-[17px] h-[17px] rounded-full ${
                i === index ? "bg-[#f89725]" : "bg-[#ebd3b5]"
              }`}
            />
          ))}
        </div>
      </div>

    

      {/* Next Button on Last Slide */}
      {index === slides.length - 1 && (
        <div className="mt-4 flex justify-center">
          <Button
            onClick={() => navigate("/WeightBiasRecognition")}
            className="w-[205px] h-[49px] bg-[#f89725] rounded-[25px] font-['Poppins',Helvetica] font-semibold text-black text-base tracking-[0.48px] hover:bg-[#e88615]"
          >
            Next
          </Button>
        </div>
      )}
    </main>
  );
};
