import { useState } from "react";
import { useSwipeable } from "react-swipeable";
import { ArrowLeftIcon, LogOutIcon } from "lucide-react";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";
import { Link } from "react-router-dom";

export const DefinitionsAndTerminology_1 = (): JSX.Element => {
  const slides = [
    {
      title: (
        <>
          <span className="text-[#f89725]">Explicit </span>
          <span className="text-white">weight bias:</span>
        </>
      ),
      explanation: (
        <p className="text-white text-xl leading-[27px] font-['Poppins',Helvetica]">
          <span className="font-semibold underline">Explicit weight-bias</span>
          <span className="font-medium">
            {" "}
            refers to negative attitudes and actions toward individuals with
            higher body weight that are intentional and conscious.
          </span>
        </p>
      ),
      characteristics: [
        "Openly expressed negative opinions or stereotypes.",
        "Deliberate discriminatory behaviours.",
        "Can be measured through self-report questionnaires.",
      ],
    },
    {
      title: (
        <>
          <span className="text-[#f89725]">Implicit </span>
          <span className="text-white">weight bias:</span>
        </>
      ),
      explanation: (
        <p className="text-white text-xl leading-[27px] font-['Poppins',Helvetica]">
          <span className="font-semibold underline">Implicit weight-bias</span>
          <span className="font-medium">
            {" "}
            refers to unconscious forms of weight bias. Attitudes or associations people may not even realise they hold toward individuals with higher body weight.
          </span>
        </p>
      ),
      characteristics: [
        "Automatic, unintentional attitude or stereotypes.",
        "Often in conflict with consciously held beliefs.",
        "Measured through indirect methods like the Implicit Association Test (IAT).",
      ],
    },
  ];

  const [index, setIndex] = useState(0);

  const swipeHandlers = useSwipeable({
    onSwipedLeft: () => setIndex((prev) => Math.min(prev + 1, slides.length - 1)),
    onSwipedRight: () => setIndex((prev) => Math.max(prev - 1, 0)),
    trackMouse: true,
  });

  const currentSlide = slides[index];

  return (
    <main className="relative flex flex-col h-[998px] w-full max-w-[390px] mx-auto bg-[#e6ebf0]">
      {/* Header */}
      <header className="absolute w-[390px] h-[171px] top-0 left-0 bg-[#2e3b42] rounded-b-[25px] shadow-[0px_4px_4px_#00000040]">
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
  <Link to="/DefinitionsAndTerminology"> {/* Replace /previouspage with your actual route */}
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
      </header>

      {/* Swipeable section */}
      <div
        {...swipeHandlers}
        className="absolute top-[196px] px-2.5 pb-4 w-full flex flex-col gap-4"
      >
        {/* Explanation Card */}
        <Card className="w-full bg-[#2e3b42] rounded-2xl border-none">
          <CardContent className="p-6">
            <h2 className="font-['Poppins',Helvetica] text-2xl font-bold leading-[32.4px] tracking-[0] mb-6">
              {currentSlide.title}
            </h2>
            {currentSlide.explanation}
          </CardContent>
        </Card>

        {/* Characteristics Card */}
        <Card className="w-full bg-[#2e3b42] rounded-2xl border-none">
          <CardContent className="p-6">
            <h2 className="font-['Poppins',Helvetica] text-2xl font-semibold leading-[32.4px] tracking-[0] text-white mb-5">
              Characteristics:
            </h2>
            <ul className="space-y-4 font-['Poppins',Helvetica] text-lg font-medium leading-[24.3px] text-white">
              {currentSlide.characteristics.map((char, i) => (
                <li key={i}>{char}</li>
              ))}
            </ul>
          </CardContent>
        </Card>

        {/* Pagination */}
        <div className="flex justify-center mt-4 gap-2.5">
          {slides.map((_, i) => (
            <div
              key={i}
              className={`h-[17px] w-[17px] rounded-full ${
                i === index ? "bg-[#f89725]" : "bg-[#ebd3b5]"
              }`}
            />
          ))}
        </div>
      </div>

      {/* NEXT button only on last slide */}
      {index === slides.length - 1 && (
           <section className="flex flex-col items-center px-4 mt-100">
        <Link
          to="/KeyAspects" // 🔁 Replace this with your actual next route
          className="absolute left-[92px] top-[890px] w-[205px] h-[49px] bg-[#f89725] rounded-[25px] font-['Poppins',Helvetica] font-semibold text-black text-base tracking-[0.48px] hover:bg-[#e88615] flex items-center justify-center"
        >
          Next
        </Link>
</section>
      )}
    </main>
  );
};
