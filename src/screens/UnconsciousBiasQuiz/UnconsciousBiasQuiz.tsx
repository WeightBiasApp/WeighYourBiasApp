import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "../../components/ui/button";
import { ArrowLeftIcon, LogOutIcon } from "lucide-react";

export const UnconsciousBiasQuiz = (): JSX.Element => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const options = [
    {
      prefix: "A)",
      text: "A clinician assumes a patient’s fatigue is due to poor diet without asking about sleep or stress ",
      explanation:
        "This is an example of unconscious bias. The clinician is making an assumption based on a stereotype (e.g., linking body size or lifestyle to poor diet) without gathering full information. This kind of automatic judgement can lead to misdiagnosis or missed diagnoses.",
    },
    {
      prefix: "B)",
      text: "A clinician orders a full workup before making any assumptions",
      explanation:
        "This is not an example of bias. It shows a clinician is taking the time to gather evidence before forming conclusions, which supports fair and effective care.",
    },
    {
      prefix: "C)",
      text: "A clinician asks open-ended questions about the patient’s lifestyle ",
      explanation:
        "This is a bias-reducing communication strategy. Open-ended questions allow patients to share their experiences without being led by assumptions. It reflects a patient-centred approach that helps uncover the full context of a patient’s health.",
    },
  ];

  return (
    <main className="relative flex flex-col h-[844px] w-full max-w-[390px] mx-auto bg-[#e6ebf0]">
      {/* Header */}
      <header className="absolute w-[390px] h-[171px] top-0 left-0 bg-[#2e3b42] rounded-b-[25px] shadow-[0px_4px_4px_#00000040]">
        <h1 className="absolute w-[352px] top-[95px] left-[19px] font-['Poppins',Helvetica] font-bold text-white text-2xl text-center">
          Recognising Bias in Clinical Settings
        </h1>

        {/* Exit button */}
        <div className="absolute top-8 right-[17px] flex flex-col items-center">
          <Link to="/UnderstandingUnconsciousBias">
            <Button
              variant="outline"
              size="icon"
              className="h-[34px] w-[35px] rounded-full bg-[#f89725] p-0 border-none"
            >
              <LogOutIcon className="h-6 w-6 text-[#2e3b42]" />
            </Button>
          </Link>
          <span className="mt-1 text-[10px] text-[#f89725] font-['Poppins']">Exit</span>
        </div>

        {/* Back button */}
        <div className="absolute top-8 left-[17px] flex flex-col items-center">
          <Link to="/TDHReflection">
            <Button
              variant="outline"
              size="icon"
              className="h-[34px] w-[35px] rounded-full bg-[#f89725] p-0 border-none"
            >
              <ArrowLeftIcon className="h-6 w-6 text-[#2e3b42]" />
            </Button>
          </Link>
          <span className="mt-1 text-[10px] text-[#f89725] font-['Poppins']">Back</span>
        </div>
      </header>

      {/* Question Box */}
      <div className="absolute top-[210px] left-[5px] w-[382px] rounded-[25px] px-6 py-4">
        <p className="font-['Poppins',Helvetica] text-[#2e3b42] text-[20px] font-semibold text-center leading-relaxed">
          Which of the following is an example of unconscious bias?
        </p>
      </div>

      {/* Answer Buttons */}
      <div className="absolute top-[320px] left-[25px] w-[342px] flex flex-col gap-4">
        {options.map((option, index) => {
          const isOpen = openIndex === index;

          // If a card is open and this is not the selected one, hide it
          if (openIndex !== null && !isOpen) return null;

          return (
            <div
              key={index}
              onClick={() => setOpenIndex(isOpen ? null : index)}
              className={`rounded-[25px] px-6 py-4 shadow-md cursor-pointer transition-all duration-500 ease-in-out overflow-hidden ${
                isOpen && index === 0 ? "bg-white border-[2px] border-[#2e3b42]" : "bg-[#2e3b42]"
              }`}
            >
              <p
            className={`font-['Poppins',Helvetica] text-[14px] text-center font-medium leading-relaxed max-w-[380px] mx-auto ${
                isOpen && index === 0 ? "text-[#2e3b42]" : "text-white"
            }`}
            >

                <span className="text-[#f89725] font-semibold">{option.prefix} </span>
                {option.text}
              </p>

              {/* Explanation */}
              <div
                className={`transition-all duration-500 ease-in-out ${
                  isOpen ? "max-h-[500px] mt-4 opacity-100" : "max-h-0 opacity-0"
                } overflow-hidden`}
              >
                <p
                  className={`font-['Poppins',Helvetica] text-[14px] text-center leading-relaxed max-w-[380px] mx-auto ${
                    isOpen && index === 0 ? "text-[#2e3b42]" : "text-white "
                  }`}
                >
                  {option.explanation}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Next Button (only visible if first option is selected) */}
      {openIndex === 0 && (
        <section className="absolute top-[775px] left-1/2 transform -translate-x-1/2">
          <Link
            to="/SubtleWays"
            className="w-[205px] h-[49px] bg-[#f89725] rounded-[25px] font-['Poppins',Helvetica] font-semibold text-black text-[14px] text-base tracking-[0.48px] hover:bg-[#e88615] flex items-center justify-center"
          >
            Next Question
          </Link>
        </section>
      )}
    </main>
  );
};
