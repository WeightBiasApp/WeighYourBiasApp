import { Link } from "react-router-dom";

export const HowItWorks = (): JSX.Element => {
  // Data for bullet points to enable mapping
  const assessmentPurposes = [
    "Assuming that larger body size equates to obesity or poor health.",
    "Difficulty in challenging negative comments about people with larger bodies.",
    "Tendency to avoid individuals with larger body sizes.",
  ];

  return (
 <main className="relative flex flex-col h-[844px] w-full max-w-[390px] mx-auto bg-[#e6ebf0]">

      {/* Header section */}
<header className="relative w-full h-[146px] bg-[#2e3b42] rounded-b-[25px] shadow-[0px_4px_4px_#00000040] flex flex-col items-center pt-[1px] pb-[27px]">
  <h1 className="mt-[61px] font-['Poppins',Helvetica] font-bold text-white text-[28px] text-center tracking-[0.5px] leading-8 max-w-[360px] mb-[2px]">
    Your Self-Assessment <br /> Overview
  </h1>
</header>


<div className=" relative w-[377px] h-[492px] bg-[#2e3b42] rounded-[25px] px-6 py-4 max-w-[800px] mx-auto mt-6 shadow-md">
  <h2 className="font-['Poppins',Helvetica] font-semibold text-white text-xl text-center tracking-[0.10px] leading-[31px] max-w-[369px] pb-[5px] pt-[5px]">
          Areas of Potential Bias
        </h2>
  <p className="font-['Poppins',Helvetica] text-[#ffffff] text-[16px] leading-relaxed font-regular">
  Your responses indicate that you may hold some assumptions about people's health or behaviours based on their body size.{' '}
  <span className="font-semibold">For example:</span>
</p>
  {/* Bullet points */}
        <ul className="mt-[50px] w-full max-w-[330px]">
          {assessmentPurposes.map((purpose, index) => (
            <li key={index} className="flex items-start mb-8">
              <div className="w-2.5 h-2.5 bg-[#f89725] rounded-[5px] -mt-2  mr-2 ml-3 flex-shrink-0" />
              <p className="font-['Poppins',Helvetica] font-medium text-white text-base tracking-[0.50px] leading-[25px] -mt-4 ml-3 ">
                {purpose}
              </p>
            </li>
          ))}
        </ul>
</div>

  <section className="flex flex-col items-center px-4 mt-10">
        

        {/* Begin button */}
        <Link 
  to="/Whythismatters" 
  className="absolute left-[92px] top-[730px] w-[205px] h-[49px] bg-[#f89725] rounded-[25px] font-['Poppins',Helvetica] font-semibold text-black text-base tracking-[0.48px] hover:bg-[#e88615] flex items-center justify-center"
>
  Next
</Link>

      </section>
    </main>
  );
};