import { useState } from "react";
import { useSwipeable } from "react-swipeable";
import { ArrowLeftIcon, LogOutIcon } from "lucide-react";
import { Card, CardContent } from "../../components/ui/card";
import { Link } from "react-router-dom";
import { Button } from "../../components/ui/button";


export const SubtleWays = (): JSX.Element => {
  const cardData = [
   {
      title: "Assuming non-compliance based on body size ",

      description:
        " “They probably won’t follow through with the treatment plan.”  ",
    },
    {
      title: "Attributing all symptoms to weight ",
     
      description:
        " “Your knee pain is likely due to your weight.” ",
    },
      {
      title: "Spending less time with patients in larger bodies ",
     
      description:
        "Shorter consults, less eye contact, or less detailed explanations. ",
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
        <h1 className="absolute w-[392px] top-[104px] left-[-1px] font-['Poppins',Helvetica] font-bold text-white text-[24px] text-center">
          Impact on clinical decisions
        </h1>

       {/* Exit button */}
<div className="absolute top-8 right-[17px] flex flex-col items-center">
  <Link to="/UnderstandingUnconsciousBias"> {/* Replace /exitpage with your actual route */}
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
  <Link to="/UnconsciousBiasQuiz"> {/* Replace /previouspage with your actual route */}
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

<h1 className="absolute w-[357px] top-[203px] left-[15px] font-['Poppins',Helvetica] font-semibold text-[#2e3b42] text-[18px leading-[22px] text-center">
          Unconscious weight bias can influence clinical behaviours, decisions, and patient interactions, often in subtle ways. 
        </h1>



      {/* Swipeable Card */}
      <div
        {...swipeHandlers}
        className="absolute top-[305px] left-2.5 w-[371px] h-[309px]"
      >
        <Card
          className="bg-[#2e3b42] rounded-2xl border-none w-full h-full p-0"
          style={{
            transition: "transform 0.3s ease",
          }}
        >
   <CardContent className="p-0 relative h-full">
            <h2 className="absolute w-[314px] top-16 left-7 font-['Poppins',Helvetica] font-bold text-center leading-[24px] text-[20px]">
              <span className="text-white">{currentCard.title} </span>
              
            </h2>
            <p
  className={`absolute w-[326px] left-6 font-['Poppins',Helvetica] font-semibold text-[#f89725] text-[20px] leading-[24px] text-center  ${
    index === 1 ? "top-[160px]" : "top-[180px]"
  }`}
>
  {currentCard.description}
</p>

          </CardContent>



        </Card>
      </div>

      {/* Pagination Dots */}
      <div className="absolute w-17 h-[17px] top-[653px] left-[158px] flex gap-[10px]">
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
      {index === 2 && (
        <section className="flex flex-col items-center px-4 mt-50">
          <Link
            to="/SubtleSigns" // Change this path to where you want to go next
            className="absolute left-[92px] top-[720px] w-[205px] h-[49px] bg-[#f89725] rounded-[25px] font-['Poppins',Helvetica] font-semibold text-black text-base tracking-[0.48px] hover:bg-[#e88615] flex items-center justify-center"
          >
            Next
          </Link>
        </section>
      )}
    </main>
  );
};
