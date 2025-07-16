import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "../../components/ui/button";
import { ArrowLeftIcon } from "lucide-react";
import TalkingImage from "../../assets/Talking.png";

export const SGQ2 = (): JSX.Element => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const options = [
    {
      text: "Yes",
      explanation:
        "The patient may avoid future check-ups or hesitate to seek medical help, especially if they felt judged or embarrassed. This answer highlights the long-term harm of thoughtless comments. ",
        },
    {
      text: "Possibly",
      explanation:
        "Even small comments can stick with patients, shaping how comfortable they feel in healthcare environments.",
    },
    {
      text: "No",
      explanation:
        "If you believe this was just a passing comment, and the patient likely won’t think much of it afterward, you are mistaken. It is a common answer but there is a need to challenge that assumption.",
    },
  ];

  return (
    <main className="relative flex flex-col h-[890px] w-full max-w-[390px] mx-auto bg-[#e6ebf0]">
      {/* Header */}
      <header className="w-full h-[171px]">
        {/* Back */}
        <div className="absolute top-5 left-[17px] flex flex-col items-center">
          <Link to="/SGSceneTwo">
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
          src={TalkingImage}
          alt="Waiting room"
          className="absolute top-[85px] left-[25px] w-[342px] h-[201px] object-cover object-top rounded-[25px]"
      />
      </div>

      {/* Question Box */}
      <div className="absolute top-[300px] left-[25px] w-[342px] bg-[#2e3b42] rounded-[25px] px-6 py-4 shadow-md">
        <p className="font-['Poppins',Helvetica] text-[#ffffff] text-[14px] font-medium text-center leading-relaxed">
          Do you think this comment will affect the patient in their future doctor’s visits in any way?
        </p>
      </div>

      {/* Answer Buttons */}
      <div className="absolute top-[440px] left-[25px] w-[342px] flex flex-col gap-4">
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
      {openIndex === 0 && (
        <section className="absolute top-[775px] left-1/2 transform -translate-x-1/2">
          <Link
            to="/SGSceneThree"
            className="w-[205px] h-[49px] bg-[#f89725] rounded-[25px] font-['Poppins',Helvetica] font-semibold text-black text-[14px] text-base tracking-[0.48px] hover:bg-[#e88615] flex items-center justify-center"
          >
            Next Question
          </Link>
        </section>
      )}
    </main>
  );
};
