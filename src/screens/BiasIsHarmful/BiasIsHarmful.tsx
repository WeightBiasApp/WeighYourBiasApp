import { useState } from "react";
import { useSwipeable } from "react-swipeable";
import { ArrowLeftIcon, LogOutIcon } from "lucide-react";
import { Card, CardContent } from "../../components/ui/card";
import { Link } from "react-router-dom";
import { Button } from "../../components/ui/button";
import MentalImage from "../../assets/020-mental-illness.png";
import BadImage from "../../assets/023-bad-review.png";
import ADHDImage from "../../assets/026-adhd-1.png";

export const BiasIsHarmful = (): JSX.Element => {
  const cardData = [
  {
    title: "Tired or under time pressure",
 
  image: MentalImage,
 
    imageAlt: "mental image",
     height: "h-[107px]",
      width: "w-[107px]",
      
description: "designed by Freepik from Flaticon", 
  link: "https://www.flaticon.com/free-icons/mental-illness",

  },
  {
    title: "Stressed or emotionally triggered",
     image: BadImage,
        imageAlt: "bad review image",
     height: "h-[107px]",
      width: "w-[107px]",
      
description: "designed by Freepik from Flaticon", 
  link: "https://www.flaticon.com/free-icons/Bad-review",

  },
  {
    title: "Multitasking or distracted",
   image: ADHDImage,
           imageAlt: "ADHD image",
     height: "h-[107px]",
      width: "w-[107px]",
      
description: "designed by Freepik from Flaticon", 
  link: "https://www.flaticon.com/free-icons/ADHD",

  
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
    <main className="relative flex flex-col h-[918px] w-full max-w-[390px] mx-auto bg-[#e6ebf0]">
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
  <Link to="/HowBiasForms2"> {/* Replace /previouspage with your actual route */}
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

 <h2 className="absolute w-[312px] top-[227px] left-[37px] font-['Poppins',Helvetica] font-semibold text-[#2e3b42] text-xl text-center">
          When bias becomes harmful, it is more likely to influence our decisions when we are:
        </h2>



      {/* Swipeable Card */}
      <div
        {...swipeHandlers}
        className="absolute top-[345px] left-2.5 w-[371px] h-[276px]"
      >
        <Card
          className="bg-[#2e3b42] rounded-2xl border-none w-full h-full p-0"
          style={{
            transition: "transform 0.3s ease",
          }}
        >
<CardContent className="h-full flex items-center justify-between px-8">
  {/* Text section on the left */}
  <div className="w-[220px]">
    <h2 className=" my-auto font-['Poppins',Helvetica] max-w-[180px] font-bold text-xl text-white mb-2">
      {currentCard.title} 
    </h2>
                    <a
  href={currentCard.link}
  target="_blank"
  rel="noopener noreferrer"
  className="absolute top-[180px] left-[215px] text-[#636C71] text-[10px] font-medium font-['Poppins'] text-center max-w-[140px] leading-tight underline"
>
  {currentCard.description}
</a>
    
  </div>

  {/* Image on the right, centered vertically */}
  <img
    src={currentCard.image}
    alt="Illustration"
    className="absolute left-[240px] w-[90px] h-[90px] object-cover rounded-md"
  />
</CardContent>



        </Card>
      </div>

      {/* Pagination Dots */}
      <div className="absolute w-17 h-[17px] top-[703px] left-[158px] flex gap-[10px]">
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
            to="/TypesOfUB" // Change this path to where you want to go next
            className="absolute left-[92px] top-[760px] w-[205px] h-[49px] bg-[#f89725] rounded-[25px] font-['Poppins',Helvetica] font-semibold text-black text-base tracking-[0.48px] hover:bg-[#e88615] flex items-center justify-center"
          >
            Next
          </Link>
        </section>
      )}
    </main>
  );
};
