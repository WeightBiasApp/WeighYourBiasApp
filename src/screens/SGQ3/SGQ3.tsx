import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "../../components/ui/button";
import { ArrowLeftIcon } from "lucide-react";
import Image2Image from "../../assets/image2.png";

export const SGQ3 = (): JSX.Element => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const options = [
    {
      text: "The patient might feel embarrassed or self-conscious, especially if the comment drew attention to something personal.",
      explanation:
        "Even brief, offhand comments about a patient’s appearance or weight can cause feelings of embarrassment or self-consciousness, especially if the patient already has concerns about their health or body image. When a patient feels judged or uncomfortable, it can affect not only their emotional state but also their ability to focus on the rest of the appointment. ",
        },
    {
      text: "The patient likely feels neutral; comments like this are part of routine check-ups and not meant personally.",
      explanation:
        "While this is a common assumption, it’s important to remember that patients often experience healthcare settings differently than medical professionals do. Even comments that are said casually or without harmful intent can feel personal, especially when discussing sensitive topics like weight.",
    },
    {
      text: "The patient could feel less comfortable and less willing to share important health concerns during the rest of the appointment.",
      explanation:
        "When a patient experiences discomfort or embarrassment during an interaction, especially at the start of an appointment, it can reduce their sense of safety and willingness to share personal health concerns. This can affect the quality of care they receive, strain the patient-provider relationship, and discourage future healthcare visits altogether.",
    },
  ];

  return (
    <main className="relative flex flex-col h-[890px] w-full max-w-[390px] mx-auto bg-[#e6ebf0]">
      {/* Header */}
      <header className="w-full h-[171px]">
        {/* Back */}
        <div className="absolute top-5 left-[17px] flex flex-col items-center">
          <Link to="/SGSceneThree">
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
          src={Image2Image}
          alt="Waiting room"
          className="absolute top-[85px] left-[25px] w-[342px] h-[201px] object-cover object-top rounded-[25px]"
      />
      </div>

      {/* Question Box */}
      <div className="absolute top-[300px] left-[25px] w-[342px] bg-[#2e3b42] rounded-[25px] px-6 py-4 shadow-md">
        <p className="font-['Poppins',Helvetica] text-[#ffffff] text-[14px] font-medium text-center leading-relaxed">
          After the comment you made, how do you think your patient is feeling?
        </p>
      </div>

      {/* Answer Buttons */}
      <div className="absolute top-[400px] left-[25px] w-[342px] flex flex-col gap-4">
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
      {(openIndex === 0 || openIndex === 2) && (

        <section className="absolute top-[775px] left-1/2 transform -translate-x-1/2">
          <Link
            to="/SGSceneFour"
            className="w-[205px] h-[49px] bg-[#f89725] rounded-[25px] font-['Poppins',Helvetica] font-semibold text-black text-[14px] text-base tracking-[0.48px] hover:bg-[#e88615] flex items-center justify-center"
          >
            Next Question
          </Link>
        </section>
      )}
    </main>
  );
};
