import { Link } from "react-router-dom";
import { Button } from "../../components/ui/button";
import { LogOutIcon } from "lucide-react";
import { ArrowLeftIcon } from "lucide-react";

export const PatientScenarioHowItWorks = (): JSX.Element => {
  // Data for bullet points to enable mapping


  return (
  <main className="relative flex flex-col h-[1055px] w-full max-w-[390px] mx-auto bg-[#e6ebf0]">
      {/* Header */}
      <header className="w-full h-[171px] bg-[#2e3b42] rounded-b-[25px] relative shadow-md">
        <h1 className="absolute w-[372px] top-[101px] left-[9px] text-white font-bold text-[28px] text-center font-['Poppins']">
          Patient Scenario
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
          <Link to="/HealthcareProfessionals">
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


<div className="relative w-[377px] h-[430px] bg-[#2e3b42] rounded-[25px] px-6 py-4 max-w-[800px] mx-auto mt-6 mb-6 shadow-md">
  <h2 className="font-['Poppins',Helvetica] font-semibold text-white text-[24px] text-center tracking-[0.10px] leading-[31px] max-w-[369px] pb-[17px] pt-[17px]">
    How It Works
  </h2>

  <div className="flex flex-col space-y-6 ">
    <p className="font-['Poppins',Helvetica] text-[#ffffff] text-[16px] max-w-[389px] leading-relaxed font-regular">
      Just like in real life, you’ll be presented with a patient coming into your practice with a specific health concern.
    </p>

    <p className="font-['Poppins',Helvetica] text-[#ffffff] text-[16px] leading-relaxed font-regular">
      At multiple stages in this learning module, you will choose from three possible responses or actions.          
    </p>

    <p className="font-['Poppins',Helvetica] text-[#ffffff] text-[16px] leading-relaxed font-regular">
      Based on your choices, you will receive feedback that shows how your responses affect the patient’s experience and emotional state.      
    </p>
  </div>
</div>



<div className=" relative w-[377px] h-[86px] bg-[#2e3b42] rounded-[25px] px-6 py-4 max-w-[800px] mx-auto mt-3 shadow-md">
 <p className="font-['Poppins',Helvetica] text-[#ffffff] text-[16px] text-center leading-relaxed font-regular max-w-[370px]">
  This scenario will take approximately{" "}
  <span className="font-bold">
    15 minutes
  </span>{" "}
  to complete.
</p>


</div>
 <section className="flex flex-col items-center px-4 mb-15 pt-[10px]">
<div className=" font-['Poppins',Helvetica] text-black text-[14px] text-center leading-relaxed font-regular mt-6 max-w-[320px]">
 Due to the nature of simulating a real-life appointment, each scenario will run continuously without the option to pause and return later. Please allocate sufficient time to complete the scenario in one sitting. 
</div>
</section>

  <section className="flex flex-col items-center px-4 mt-15">
        

        {/* Begin button */}
        <Link 
  to="/Preface" 
  className="absolute left-[92px] top-[940px] w-[205px] h-[49px] bg-[#f89725] rounded-[25px] font-['Poppins',Helvetica] font-semibold text-black text-base tracking-[0.48px] hover:bg-[#e88615] flex items-center justify-center"
>
  Next
</Link>

      </section>
    </main>
  );
};