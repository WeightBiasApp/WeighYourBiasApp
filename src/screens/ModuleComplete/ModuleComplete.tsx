import { Link } from "react-router-dom";


export const ModuleComplete = (): JSX.Element => {
  // Data for bullet points to enable mapping


  return (
  <main className="relative flex flex-col h-[844px] w-full max-w-[390px] mx-auto bg-[#e6ebf0]">
      {/* Header */}
      <header className="w-full h-[171px] bg-[#2e3b42] rounded-b-[25px] relative shadow-md">
        <h1 className="absolute w-[372px] max-w-[300px] top-[96px] left-[50px] text-white font-bold text-[28px] text-center font-['Poppins']">
          Module Complete
        </h1>

      
      </header>







 <h2 className=" absolute top-[220px] left-[37px] font-['Poppins',Helvetica] text-[#2E3B42] text-[24px] leading-relaxed font-bold max-w-[370px]">
 Thank you for taking the time to reflect.
</h2>



 <section className="flex flex-col items-center px-4 mb-15 pt-[10px]">
<div className="absolute top-[252px] font-['Poppins',Helvetica] text-black text-[16px] text-left leading-relaxed font-regular mt-16 max-w-[310px]">
 Your thoughts and insights are a valuable part of your growth as a healthcare professional. Small moments of awareness can lead to meaningful change—for you and your future patients. </div>
</section>

<section className="flex flex-col items-center px-4 mb-15 pt-[10px]">
<div className="absolute top-[432px] font-['Poppins',Helvetica] text-black text-[16px] text-left leading-relaxed font-regular mt-16 max-w-[310px]">
 Module 2 will be available when you are ready to continue. Proceed at your own pace as you deepen your understanding and commitment to equitable, patient-centered care.  </div></section>

  <section className="flex flex-col items-center px-4 mt-15">
        

        {/* Begin button */}
        <Link 
  to="/EducationModule" 
  className="absolute left-[92px] top-[740px] w-[205px] h-[49px] bg-[#f89725] rounded-[25px] font-['Poppins',Helvetica] font-semibold text-black text-base tracking-[0.48px] hover:bg-[#e88615] flex items-center justify-center"
>
  Exit
</Link>

      </section>
    </main>
  );
};