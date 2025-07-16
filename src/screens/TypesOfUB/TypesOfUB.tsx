import { useState } from "react";
import { useSwipeable } from "react-swipeable";
import { ArrowLeftIcon, LogOutIcon } from "lucide-react";
import { Card, CardContent } from "../../components/ui/card";
import { Link } from "react-router-dom";
import { Button } from "../../components/ui/button";


export const TypesOfUB = (): JSX.Element => {
  const cardData = [
   {
      title: "In clinical settings, these conditions are common; making it even more important to be aware of how bias can creep in. ",

      description:
        " “Bias is not a moral failing—it’s a cognitive function. But it becomes a problem when we’re unaware of it.” ",
    },
    {
      title: "Unconscious bias isn’t about being a “bad person”—it’s about being human. ",
     
      description:
        "But as healthcare professionals, we have a responsibility to recognise and interrupt these biases to ensure fair, respectful, and effective care. ",
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
          <h1 className="absolute w-[352px] top-[95px] left-[19px] font-['Poppins',Helvetica] font-bold text-white text-2xl text-center">
          Recognising Bias in Clinical Settings
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
  <Link to="/BiasIsHarmful"> {/* Replace /previouspage with your actual route */}
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
        className="absolute top-[245px] left-2.5 w-[371px] h-[399px]"
      >
        <Card
          className="bg-[#2e3b42] rounded-2xl border-none w-full h-full p-0"
          style={{
            transition: "transform 0.3s ease",
          }}
        >
   <CardContent className="p-0 relative h-full">
            <h2 className="absolute w-[314px] top-8 left-7 font-['Poppins',Helvetica] font-bold text-center text-xl">
              <span className="text-white">{currentCard.title} </span>
              
            </h2>
            <p
  className={`absolute w-[326px] left-6 font-['Poppins',Helvetica] font-semibold text-[#f89725] text-lg text-center text-base ${
    index === 1 ? "top-[180px]" : "top-[220px]"
  }`}
>
  {currentCard.description}
</p>

          </CardContent>



        </Card>
      </div>

      {/* Pagination Dots */}
      <div className="absolute w-17 h-[17px] top-[703px] left-[168px] flex gap-[10px]">
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
        <section className="flex flex-col items-center px-4 mt-50">
          <Link
            to="/TypesOfUB2" // Change this path to where you want to go next
            className="absolute left-[92px] top-[760px] w-[205px] h-[49px] bg-[#f89725] rounded-[25px] font-['Poppins',Helvetica] font-semibold text-black text-base tracking-[0.48px] hover:bg-[#e88615] flex items-center justify-center"
          >
            Next
          </Link>
        </section>
      )}
    </main>
  );
};
