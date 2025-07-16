import { useState } from "react";
import { useSwipeable } from "react-swipeable";
import { ArrowLeftIcon, LogOutIcon } from "lucide-react";
import { Card, CardContent } from "../../components/ui/card";
import { Link } from "react-router-dom";
import { Button } from "../../components/ui/button";
import LotusImage from "../../assets/lotus.png";
import NotebookImage from "../../assets/notebook.png";
import CustomereviewImage from "../../assets/customerreview.png";


export const RecognisingBiasInYourself = (): JSX.Element => {
  
  const cardData = [
   {
      title: "Mindfulness Before patient interactions  ",

      description:
        "  Take 30 seconds to pause, breathe, and clear assumptions before entering a patient room.  ",

                  image: LotusImage,
                        height: "h-[87px]",
              width: "w-[87px]",
              
        description1: "designed by Freepik from Flaticon", 
          link: "https://www.flaticon.com/free-icons/lotus",
        
    },

    {
      title: "Journaling or Debriefing ",
     
      description:
        " Reflect on challenging care situations-what went well, what felt off, and why.  ",
                  image: NotebookImage,
                        height: "h-[87px]",
              width: "w-[87px]",
              
        description1: "designed by Freepik from Flaticon", 
          link: "https://www.flaticon.com/free-icons/notebook",
        
    },

        
 
      {
      title: "Seeking Feedback ",
     
      description:
        "Ask trusted peers or patients for honest input about your communication and assumptions. ",
                  image: CustomereviewImage,
                        height: "h-[87px]",
              width: "w-[87px]",
              
        description1: "designed by Freepik from Flaticon", 
          link: "https://www.flaticon.com/free-icons/customer-review",
        
    
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
    <main className="relative flex flex-col h-[1054px] w-full max-w-[390px] mx-auto bg-[#e6ebf0]">
      {/* Header */}
      <header className="absolute w-[390px] h-[171px] top-0 left-0 bg-[#2e3b42] rounded-b-[25px] shadow-[0px_4px_4px_#00000040]">
        <h1 className="absolute w-[392px] top-[105px] left-[-1px] font-['Poppins',Helvetica] font-bold text-white text-[24px] text-center">
          Recognising Bias in Yourself
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
  <Link to="/SelfReflectionChecklist"> {/* Replace /previouspage with your actual route */}
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

<h1 className="absolute w-[357px] top-[203px] left-[15px] font-['Poppins',Helvetica] font-semibold text-[#2e3b42] text-[18px] leading-[22px] text-center">
          Why Self-Awareness Matters
        </h1>


 <section className="px-5 mt-8 text-center">
       
      <ul className="absolute top-[240px] text-[#2e3b42] text-[16px] font-['Poppins'] font-regular leading-[22px] list-disc pl-5 space-y-2 text-left">
        <li>
           Unconscious bias is automatic—but becoming aware of it is the first step toward change. Recognising your own patterns helps you pause, reflect, and choose more inclusive actions. 
        </li>
       
        </ul>

      </section>


      {/* Swipeable Card */}
      <div
        {...swipeHandlers}
        className="absolute top-[385px] left-2.5 w-[371px] h-[472px]"
      >
        <Card
          className="bg-[#2e3b42] rounded-2xl border-none w-full h-full p-0"
          style={{
            transition: "transform 0.3s ease",
          }}
        >
   <CardContent className="p-0 relative h-full">
            <h2 className="absolute w-[314px] top-16 left-7 font-['Poppins',Helvetica] font-bold text-center leading-[24px] text-[24px]">
              <span className="text-white">{currentCard.title} </span>
              
            </h2>

                     <p
  className={`absolute w-[326px] left-1/2 -translate-x-1/2 font-['Poppins',Helvetica] font-semibold text-[#f89725] text-[20px] leading-[24px] text-center  ${
    index === 1 ? "top-[150px]" : "top-[150px]"
  }`}
>
  {currentCard.description}
</p>

                                          <a
  href={currentCard.link}
  target="_blank"
  rel="noopener noreferrer"
  className="absolute top-[440px] left-1/2 -translate-x-1/2 -translate-y-1/2 text-[#636C71] text-[10px] font-medium font-['Poppins'] text-center max-w-[140px] leading-tight underline"
>
  {currentCard.description1}
</a>
  

{/* Image on the right, centered vertically */}
  <img
  src={currentCard.image}
  alt="Illustration"
  className="absolute top-[340px] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140px] h-[140px] object-cover rounded-md"
/>


 

          </CardContent>



        </Card>
      </div>

      {/* Pagination Dots */}
      <div className="absolute w-17 h-[17px] top-[893px] left-[158px] flex gap-[10px]">
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
            to="/CommonTriggers" // Change this path to where you want to go next
            className="absolute left-[92px] top-[960px] w-[205px] h-[49px] bg-[#f89725] rounded-[25px] font-['Poppins',Helvetica] font-semibold text-black text-base tracking-[0.48px] hover:bg-[#e88615] flex items-center justify-center"
          >
            Next
          </Link>
        </section>
      )}
    </main>
  );
};
