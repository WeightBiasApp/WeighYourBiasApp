
import { useState } from "react";
import { useSwipeable } from "react-swipeable";
import { ArrowLeftIcon, LogOutIcon } from "lucide-react";
import { Card, CardContent } from "../../components/ui/card";
import { Link } from "react-router-dom";
import { Button } from "../../components/ui/button";
import VoiceImage from "../../assets/voice.png";
import ExcludeImage from "../../assets/exclude.png";
import ShortcutImage from "../../assets/shortcut.png";

    
    export const SubtleSigns = (): JSX.Element => {
      const cardData = [
       {
          title: "Tone Of Voice ",
            image: VoiceImage,
            description:
            " Example: Sounding dismissive or impatient. ",
                height: "h-[107px]",
      width: "w-[107px]",
      
description1: "designed by Freepik from Flaticon", 
  link: "https://www.flaticon.com/free-icons/voice",

        },
        {
        title: "Body Language ",
        image: ExcludeImage,
        description:
            " “Example: Avoiding eye contact, closed posture ",
        height: "h-[107px]",
        width: "w-[107px]",
            
        description1: "designed by Freepik from Flaticon", 
        link: "https://www.flaticon.com/free-icons/exclude",

        },
          {
          title: "Diagnostic Shortcuts ",
         image: ShortcutImage,
          description:
            "Example: Skipping tests or assuming weight is the root cause ",
             height: "h-[107px]",
        width: "w-[107px]",
            
        description1: "designed by Freepik from Flaticon", 
        link: "https://www.flaticon.com/free-icons/shortcut",

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
    <main className="relative h-[844px] w-full bg-[#e6ebf0] max-w-[390px] mx-auto">
           {/* Header section */}
<header className="relative w-full h-[176px] bg-[#2e3b42] rounded-b-[25px] shadow-[0px_4px_4px_#00000040] flex flex-col items-center pt-[1px] pb-[27px]">
  <h1 className="mt-[94px] font-['Poppins',Helvetica] font-bold text-[24px] text-center tracking-[0.5px] leading-8 max-w-[340px] mb-[2px]">
  <span className="text-white"> Recognising Bias In Yourself </span>
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
  <Link to="/SubtleWays"> {/* Replace /previouspage with your actual route */}
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

<h2 className="mt-[25px] font-['Poppins',Helvetica] font-semibold text-[20px] text-center tracking-[0.5px] leading-8 max-w-[360px] ml-4 mb-[2px]">
  <span className="text-[#2e3b42]"> Subtle Signs of Bias </span>
</h2>

<p className="mt-[10px] font-['Poppins',Helvetica] font-medium text-[16px] text-center tracking-[0.5px] leading-[20px] max-w-[360px] ml-4 mb-[2px]">
  <span className="text-[#2e3b42]"> Bias doesn’t always show up in words,
it can be felt in tone, posture, and clinical shortcuts:  </span>
</p>

    {/* Swipeable Card */}
      <div
        {...swipeHandlers}
        className="absolute top-[335px] left-2.5 w-[371px] h-[309px]"
      >
        <Card
          className="bg-[#2e3b42] rounded-2xl border-none w-full h-full p-0"
          style={{
            transition: "transform 0.3s ease",
          }}
        >
   <CardContent className="p-0 relative h-full">
            <h2 className="absolute w-[314px] top-10 left-7 font-['Poppins',Helvetica] font-bold text-center leading-[24px] text-[20px]">
              <span className="text-white">{currentCard.title} </span>
              
            </h2>
                                <a
  href={currentCard.link}
  target="_blank"
  rel="noopener noreferrer"
  className="absolute top-[180px] left-[125px] text-[#636C71] text-[10px] font-medium font-['Poppins'] text-center max-w-[140px] leading-tight underline"
>
  {currentCard.description1}
</a>
            <p
  className={`absolute w-[326px] left-6 font-['Poppins',Helvetica] font-bold text-white text-[20px] leading-[24px] text-center  ${
    index === 2 ? "top-[220px]" : "top-[230px]"
  }`}
>
  {currentCard.description}
</p>

{/* Image on the right, centered vertically */}
  <img
    src={currentCard.image}
    alt="Illustration"
    className="absolute top-[80px] left-[142px] w-[90px] h-[90px] object-cover rounded-md"
  />

          </CardContent>



        </Card>
      </div>

      {/* Pagination Dots */}
      <div className="absolute w-17 h-[17px] top-[683px] left-[158px] flex gap-[10px]">
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
        <section className="flex flex-col items-center px-4 mt-70">
          <Link
            to="/SelfReflectionChecklist" // Change this path to where you want to go next
            className="absolute left-[92px] top-[750px] w-[205px] h-[49px] bg-[#f89725] rounded-[25px] font-['Poppins',Helvetica] font-semibold text-black text-base tracking-[0.48px] hover:bg-[#e88615] flex items-center justify-center"
          >
            Next
          </Link>
        </section>
      )}
    </main>
    
   );
 };