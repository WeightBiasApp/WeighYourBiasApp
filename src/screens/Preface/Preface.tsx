import { Link } from "react-router-dom";
import { Button } from "../../components/ui/button";
import { LogOutIcon } from "lucide-react";
import { ArrowLeftIcon } from "lucide-react";

export const Preface = (): JSX.Element => {
  // Data for bullet points to enable mapping


  return (
  <main className="relative flex flex-col h-[844px] w-full max-w-[390px] mx-auto bg-[#e6ebf0]">
      {/* Header */}
      <header className="w-full h-[171px] bg-[#2e3b42] rounded-b-[25px] relative shadow-md">
        <h1 className="absolute w-[372px] max-w-[300px] top-[96px] left-[50px] text-white font-bold text-[28px] text-center font-['Poppins']">
          The Insensitive Comment
        </h1>

        {/* Exit */}
        <div className="absolute top-8 right-[17px] flex flex-col items-center">
          <Link to="/ModuleSubCategory">
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

        {/* Back */}
        <div className="absolute top-8 left-[17px] flex flex-col items-center">
          <Link to="/PatientScenarioHowItWorks">
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







 <h2 className=" absolute top-[220px] left-[37px] font-['Poppins',Helvetica] text-[#2E3B42] text-[24px] leading-relaxed font-bold max-w-[370px]">
  Preface:
</h2>



 <section className="flex flex-col items-center px-4 mb-15 pt-[10px]">
<div className="absolute top-[252px] font-['Poppins',Helvetica] text-black text-[16px] text-left leading-relaxed font-regular mt-6 max-w-[310px]">
 In this scenario, a routine check-up takes an unexpected turn when a nurse makes an insensitive comment about a patient’s weight. What may seem like a casual remark has a lasting impact, causing the patient to feel embarrassed and avoid future medical visits. 
      </div>
</section>

  <section className="flex flex-col items-center px-4 mt-15">
        

        {/* Begin button */}
        <Link 
  to="/YouWillExplore" 
  className="absolute left-[92px] top-[740px] w-[205px] h-[49px] bg-[#f89725] rounded-[25px] font-['Poppins',Helvetica] font-semibold text-black text-base tracking-[0.48px] hover:bg-[#e88615] flex items-center justify-center"
>
  Next
</Link>

      </section>
    </main>
  );
};