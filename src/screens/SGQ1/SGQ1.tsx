import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "../../components/ui/button";
import { ArrowLeftIcon } from "lucide-react";
import BloodPressureImage from "../../assets/BloodPressure.png";

export const SGQ1 = (): JSX.Element => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const options = [
    {
      text: "Stick strictly to the checklist and begin the procedure without small talk — efficiency is important.",
      explanation:
        "While the answer you have selected is professional, it can distance yourself from the patient. It is understandable that it is a busy time, however, you pose the risk of making the patient feel overlooked.",
    },
    {
      text: "Pause before starting and offer a warm, friendly greeting, asking how the patient is feeling today.",
      explanation:
        "The response you’ve chosen demonstrates empathy and helps build trust and rapport with your patient. Even small moments of genuine care can make a significant difference in the patient’s comfort and willingness to communicate.",
    },
    {
      text: "Make a light-hearted personal comment to break the ice before starting.",
      explanation:
        "This answer is a risky choice. Although you may have intended to ease the tension, personal or weight-related humour can unintentionally offend or make the patient self-conscious.",
    },
  ];

  return (
    <main className="relative flex flex-col h-[890px] w-full max-w-[390px] mx-auto bg-[#e6ebf0]">
      {/* Header */}
      <header className="w-full h-[171px]">
        {/* Back */}
        <div className="absolute top-5 left-[17px] flex flex-col items-center">
          <Link to="/SGSceneOne">
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
        src={BloodPressureImage}
        alt="Waiting room"
        className="absolute top-[85px] left-[25px] w-[342px] h-[201px] object-cover rounded-[25px]"
      />

      </div>

      {/* Question Box */}
      <div className="absolute top-[305px] left-[25px] w-[342px] bg-[#2e3b42] rounded-[25px] px-6 py-4 shadow-md">
        <p className="font-['Poppins',Helvetica] text-[#ffffff] text-[14px] text-center leading-relaxed">
          You’ve brought the patient into the exam room. It’s time to begin the
          standard procedure: height, blood pressure, and weight. The patient
          seems quiet as you prepare the equipment. How do you choose to
          approach the interaction?
        </p>
      </div>

      {/* Answer Buttons */}
      <div className="absolute top-[490px] left-[25px] w-[342px] flex flex-col gap-4">
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
      {openIndex === 1 && (
        <section className="absolute top-[785px] left-1/2 transform -translate-x-1/2">
          <Link
            to="/SGSceneTwo"
            className="w-[205px] h-[49px] bg-[#f89725] rounded-[25px] font-['Poppins',Helvetica] font-semibold text-black text-[14px] text-base tracking-[0.48px] hover:bg-[#e88615] flex items-center justify-center"
          >
            Next Question
          </Link>
        </section>
      )}
    </main>
  );
};
