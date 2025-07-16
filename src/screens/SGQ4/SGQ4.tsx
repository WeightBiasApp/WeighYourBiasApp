import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "../../components/ui/button";
import { ArrowLeftIcon } from "lucide-react";
import Image4Image from "../../assets/image4.png";

export const SGQ4 = (): JSX.Element => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const options = [
    {
      text: "Assume the patient didn’t take it seriously and move on, deciding it’s not your responsibility once they leave.",
      explanation:
        "This dismisses the patient’s reaction and  ignore the potential emotional arm caused. Patient care continues beyond the appointment, and reflecting on your communication is essential to improve future interactions. ",
        },
    {
      text: "Reflect on your comment and consider how it might have affected the patients willingness to return or engage in care.",
      explanation:
        "Reflection helps you recognise the impact of your words and opens the door to improving communication and patient relationships moving forward.",
    },
    {
      text: "Tell your colleagues about the patient’s reaction to warn them.",
      explanation:
        "Sharing this without reflection risks reinforcing negative attitudes or gossip, rather than fostering a supportive environment for improving care. The focus should be on professional self-awareness first.",
    },
  ];

  return (
    <main className="relative flex flex-col h-[890px] w-full max-w-[390px] mx-auto bg-[#e6ebf0]">
      {/* Header */}
      <header className="w-full h-[171px]">
        {/* Back */}
        <div className="absolute top-5 left-[17px] flex flex-col items-center">
          <Link to="/SGSceneFour">
            <Button
              variant="outline"
              size="icon"
              className="h-[34px] w-[35px] rounded-full bg-[#f89725] p-0 border-none"
            >
              <ArrowLeftIcon className="h-6 w-6 text-[#2e3b42]" />
            </Button>
          </Link>
          <span className="mt-1 text-[10px] text-[#f89725] font-['Poppins']">
            Back
          </span>
        </div>
      </header>

      {/* Image */}
      <div className="px-4 mt-4">
        <img
          src={Image4Image}
          alt="Waiting room"
          className="absolute top-[85px] left-[25px] w-[342px] h-[201px] object-cover object-center rounded-[25px]"
      />
      </div>

      {/* Question Box */}
      <div className="absolute top-[300px] left-[25px] w-[342px] bg-[#2e3b42] rounded-[25px] px-6 py-4 shadow-md">
        <p className="font-['Poppins',Helvetica] text-[#ffffff] text-[14px] font-medium text-center leading-relaxed">
         You notice the patient became very quiet immediately after your comment about their weight and has now left the clinic. What should you do next as a healthcare professional?  </p>
      </div>

      {/* Answer Buttons */}
      <div className="absolute top-[470px] left-[25px] w-[342px] flex flex-col gap-4">
        {options.map((option, index) => {
          const isOpen = openIndex === index;

          // If a card is open and this is not the selected one, don't show it
          if (openIndex !== null && !isOpen) return null;

          return (
            <div
              key={index}
              onClick={() => setOpenIndex(isOpen ? null : index)}
              className="bg-white rounded-[25px]  px-6 py-4 shadow-md cursor-pointer transition-all duration-500 ease-in-out overflow-hidden"
            >
              <p className="font-['Poppins',Helvetica] text-[#2e3b42] text-[14px] text-center font-medium leading-relaxed max-w-[380px] mx-auto">
                {option.text}
                </p>


              {/* Explanation */}
              <div
                className={`transition-all duration-500 ease-in-out ${
                  isOpen ? "max-h-[500px] mt-4 opacity-100" : "max-h-0 opacity-0"
                } overflow-hidden`}
              >
               <p className="font-['Poppins',Helvetica] text-[#2e3b42] text-[14px] text-center font-regular leading-relaxed max-w-[380px] mx-auto">
                {option.explanation}
                </p>

              </div>
            </div>
          );
        })}
      </div>

      {/* Next Button (only visible if second option is selected) */}
      {(openIndex === 1 ) && (

        <section className="absolute top-[775px] left-1/2 transform -translate-x-1/2">
          <Link
            to="/SGSceneFive"
            className="w-[205px] h-[49px] bg-[#f89725] rounded-[25px] font-['Poppins',Helvetica] font-semibold text-black text-[14px] text-base tracking-[0.48px] hover:bg-[#e88615] flex items-center justify-center"
          >
            Next Question
          </Link>
        </section>
      )}
    </main>
  );
};
