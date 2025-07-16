import { useState } from "react";
import { useSwipeable } from "react-swipeable";
import { ArrowLeftIcon, LogOutIcon } from "lucide-react";
import { Card, CardContent } from "../../components/ui/card";
import { Link } from "react-router-dom";
import { Button } from "../../components/ui/button";

export const DefinitionsAndTerminology = (): JSX.Element => {
  const cardData = [
    {
      title: "The Definition of",
      highlight: "Weight Bias :",
      description:
        "Negative attitudes, beliefs, and judgments held about individuals based on their weight or body size.",
    },
    {
      title: "The Definition of",
      highlight: "Weight Stigma :",
      description:
        "The social devaluation of a person based on their weight or body size resulting in prejudice, negative stereotyping and discrimination.",
    },
  ];

  const [index, setIndex] = useState(0);

  const swipeHandlers = useSwipeable({
    onSwipedLeft: () => {
      setIndex((prev) => Math.min(prev + 1, cardData.length - 1));
      console.log("Swiped Left");
    },
    onSwipedRight: () => {
      setIndex((prev) => Math.max(prev - 1, 0));
      console.log("Swiped Right");
    },
    trackMouse: true,
  });

  const currentCard = cardData[index];

  return (
    <main className="relative flex flex-col h-[844px] w-full max-w-[390px] mx-auto bg-[#e6ebf0]">
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
  <Link to="/ModuleLearningIntro"> {/* Replace /previouspage with your actual route */}
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

      {/* Swipeable Card */}
      <div
        {...swipeHandlers}
        className="absolute top-[233px] left-2.5 w-[371px] h-[303px]"
      >
        <Card
          className="bg-[#2e3b42] rounded-2xl border-none w-full h-full p-0"
          style={{
            transition: "transform 0.3s ease",
          }}
        >
          <CardContent className="p-0 relative h-full">
            <h2 className="absolute w-[314px] top-8 left-6 font-['Poppins',Helvetica] font-bold text-2xl">
              <span className="text-white">{currentCard.title} </span>
              <span className="text-[#f89725]">{currentCard.highlight}</span>
            </h2>
            <p className="absolute w-[326px] top-[120px] left-6 font-['Poppins',Helvetica] font-semibold text-white text-base">
              {currentCard.description}
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Pagination Dots */}
      <div className="absolute w-11 h-[17px] top-[600px] left-[173px] flex gap-[10px]">
        {cardData.map((_, i) => (
          <div
            key={i}
            className={`w-[17px] h-[17px] rounded-[8.5px] ${
              i === index ? "bg-[#f89725]" : "bg-[#ebd3b5]"
            }`}
            aria-current={i === index ? "true" : "false"}
          />
        ))}
      </div>

      {/* Show "Next" button only on second card */}
      {index === 1 && (
        <section className="flex flex-col items-center px-4 mt-10">
          <Link
            to="/DefinitionsAndTerminology_1" // Change this path to where you want to go next
            className="absolute left-[92px] top-[670px] w-[205px] h-[49px] bg-[#f89725] rounded-[25px] font-['Poppins',Helvetica] font-semibold text-black text-base tracking-[0.48px] hover:bg-[#e88615] flex items-center justify-center"
          >
            Next
          </Link>
        </section>
      )}
    </main>
  );
};
