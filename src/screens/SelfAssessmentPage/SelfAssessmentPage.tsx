import { Link } from "react-router-dom";

export const SelfAssessmentPage = (): JSX.Element => {
  // Data for bullet points to enable mapping
  const assessmentPurposes = [
    "Reflect on your personal attitudes, behaviours, and beliefs about weight.",
    "Uncover potential unconscious biases related to weight.",
    "Gain self-awareness to improve future interactions with patients.",
  ];

  return (
    <main className="flex flex-col h-[844px] w-full max-w-[390px] mx-auto bg-[#e6ebf0]">
      {/* Header section */}
      <header className="relative w-full h-[235px] bg-[#2e3b42] rounded-b-[25px] shadow-[0px_4px_4px_#00000040] flex flex-col items-center justify-start px-5 pt-[80px]">
  <h1 className="font-['Poppins',Helvetica] font-bold text-white text-[32px] text-center tracking-[0.50px] leading-8 mt-[10px]">
    Kia ora, Ms. Jones
  </h1>
  <p className="font-['Poppins',Helvetica] font-medium text-white text-base text-center tracking-[0.50px] leading-[25px] mt-[15px] max-w-[349px]">
    Before starting the learning modules, we will begin with a brief self-assessment.
  </p>
</header>

      {/* Main content */}
      <section className="flex flex-col items-center px-4 mt-10">
        <h2 className="font-['Poppins',Helvetica] font-semibold text-black text-xl text-center tracking-[0.10px] leading-[31px] max-w-[369px]">
          The purpose of this self-assessment is to help you:
        </h2>

        {/* Bullet points */}
        <ul className="mt-[50px] w-full max-w-[302px]">
          {assessmentPurposes.map((purpose, index) => (
            <li key={index} className="flex items-start mb-6">
              <div className="w-2.5 h-2.5 bg-black rounded-[5px] mt-2 mr-5 flex-shrink-0" />
              <p className="font-['Poppins',Helvetica] font-medium text-black text-base tracking-[0.50px] leading-[25px]">
                {purpose}
              </p>
            </li>
          ))}
        </ul>

        {/* Reminder text */}
        <p className="font-['Poppins',Helvetica] font-medium text-[#7d7d7d] text-base text-center tracking-[0.50px] leading-[25px] mt-auto mb-10 max-w-[314px]">
          Remember this is not a test—there are no right or wrong answers.
        </p>

        {/* Begin button */}
        <Link 
          to="/new-page" 
          className="w-[205px] h-[49px] bg-[#f89725] rounded-[25px] font-['Poppins',Helvetica] font-semibold text-black text-base tracking-[0.48px] hover:bg-[#e88615] mb-6 flex items-center justify-center"
        >
          Begin
        </Link>
      </section>
    </main>
  );
};
