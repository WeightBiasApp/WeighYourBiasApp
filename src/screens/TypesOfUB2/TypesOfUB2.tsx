import { useState } from "react";
import { useSwipeable } from "react-swipeable";
import { ArrowLeftIcon, LogOutIcon } from "lucide-react";
import { Card, CardContent } from "../../components/ui/card";
import { Link } from "react-router-dom";
import { Button } from "../../components/ui/button";


export const TypesOfUB2 = (): JSX.Element => {
  const cardData = [

  {
    title: "Anchoring Bias",
    paragraph1: "Relying too heavily on the first piece of information",
    smallText: "Example:",
    paragraph2: "Assuming weight is the cause of knee pain without further investigation.",
  },
  {
    title: "Confirmation Bias ",
    paragraph1: "Seeking information that confirms pre-existing beliefs ",
    smallText: "Example:",
    paragraph2: "Only asking about diet and no other symptoms ",
  },


  {
    title: "Attribution Bias",
    paragraph1: "Explaining behaviour based on stereotypes ",
    smallText: "Example:",
    paragraph2: "Believing a patient is non-compliant due to laziness ",
  },
  {
    title: "Affinity Bias",
    paragraph1: "Favouring people who are like us .",
    smallText: "Example:",
    paragraph2: "Spending more time with patients who share your background ",
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
    <main className="relative flex flex-col h-[924px] w-full max-w-[390px] mx-auto bg-[#e6ebf0]">
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
  <Link to="/TypesOfUB2"> {/* Replace /previouspage with your actual route */}
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

 <h2 className="absolute w-[362px] top-[200px] left-[17px] font-['Poppins',Helvetica] font-semibold text-[#2e3b42] text-xl text-center">
         There are many different types of bias that can affect how we process information and make decisions.  
        </h2>

      {/* Swipeable Card */}
      <div
        {...swipeHandlers}
        className="absolute top-[335px] left-2.5 w-[371px] h-[379px]"
      >
        <Card
          className="bg-[#2e3b42] rounded-2xl border-none w-full h-full p-0"
          style={{
            transition: "transform 0.3s ease",
          }}
        >
 <CardContent className="relative p-6 h-full flex flex-col items-center justify-start gap-4">
  <h2 className="font-['Poppins',Helvetica] font-bold text-[#f89725] text-center text-[28px] mt-4">
    {currentCard.title}
  </h2>

  <p className="absolute top-[95px] font-['Poppins',Helvetica] text-white text-[20px] font-semibold  max-w-[300px] leading-[28px] text-center">
    {currentCard.paragraph1}
  </p>

  <p className="absolute top-[215px] font-['Poppins',Helvetica] text-[#f89725] text-[20px] font-semibold text-center">
    {currentCard.smallText}
  </p>

  <p className="absolute top-[270px] font-['Poppins',Helvetica] font-semibold text-white text-[20px] max-w-[300px] leading-[28px] text-center">
    {currentCard.paragraph2}
  </p>
</CardContent>




        </Card>
      </div>

      {/* Pagination Dots */}
      <div className="absolute w-17 h-[17px] top-[753px] left-[148px] flex gap-[10px]">
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
      {index === 3 && (
        <section className="flex flex-col items-center px-4 mt-50">
          <Link
            to="/TDH" // Change this path to where you want to go next
            className="absolute left-[92px] top-[810px] w-[205px] h-[49px] bg-[#f89725] rounded-[25px] font-['Poppins',Helvetica] font-semibold text-black text-base tracking-[0.48px] hover:bg-[#e88615] flex items-center justify-center"
          >
            Next
          </Link>
        </section>
      )}
    </main>
  );
};
