import { Link } from "react-router-dom";
import { Button } from "../../components/ui/button";
import { ArrowLeftIcon } from "lucide-react";




export const Module2Intro= (): JSX.Element => {
  // Data for bullet points to enable mapping


  return (
 <main className="relative flex flex-col h-[844px] w-full max-w-[390px] mx-auto bg-[#e6ebf0]">

      {/* Header section */}
<header className="relative w-full h-[176px] bg-[#2e3b42] rounded-b-[25px] shadow-[0px_4px_4px_#00000040] flex flex-col items-center pt-[1px] pb-[27px]">
  <h1 className="mt-[63px] font-['Poppins',Helvetica] font-bold text-[24px] text-center tracking-[0.5px] leading-8 max-w-[320px] mb-[2px]">
  <span className="text-white">Understanding Unconscious Bias </span>
  <span className="text-[#F89725]">Module Introduction</span>
</h1>


{/* Back button */}
<div className="absolute top-8 left-[17px] flex flex-col items-center">
  <Link to="/UnderstandingUnconsciousBias"> {/* Replace /previouspage with your actual route */}
    <Button
      variant="outline"
      size="icon"
      className="h-[34px] w-[35px] rounded-full bg-[#f89725] p-0 border-none"
    >
      <ArrowLeftIcon className="h-6 w-6 text-[#2e3b42]" />
    </Button>
  </Link>
  <span className="mt-1 font-['Poppins',Helvetica] text-[10px] text-[#f89725]">Back</span>
</div>

</header>



  
  <p className="pt-10 px-8 font-['Poppins',Helvetica] text-[#000000] text-[16px] leading-relaxed font-regular">
  In Module 1, we explored the distinction between explicit (conscious) and implicit (unconscious) bias. Now, we focus on why it’s important to recognise our own unconscious biases—and how they can subtly influence clinical decisions, patient interactions, and health outcomes.       </p>
 
<p className="pt-10 px-8 font-['Poppins',Helvetica] text-[#000000] text-[16px] leading-relaxed font-regular">
By increasing awareness and learning practical strategies, we can begin to interrupt bias in real time and provide more equitable, compassionate care.  </p>
 

  <section className="flex flex-col items-center px-4 mt-10">
        

        {/* Begin button */}
        <Link 
  to="/Module2LearningIntro" 
  className="absolute left-[92px] top-[730px] w-[205px] h-[49px] bg-[#f89725] rounded-[25px] font-['Poppins',Helvetica] font-semibold text-black text-base tracking-[0.48px] hover:bg-[#e88615] flex items-center justify-center"
>
  Next
</Link>

      </section>
    </main>
  );
};