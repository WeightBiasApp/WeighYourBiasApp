import { Link } from "react-router-dom";
import { Button } from "../../components/ui/button";
import { ArrowLeftIcon } from "lucide-react";
import { LogOutIcon } from "lucide-react";

export const ModuleLearningIntro = (): JSX.Element => {
  const LearningObjectives = [
    "Define weight bias and weight stigma.",
    "Identify manifestations of weight bias in healthcare settings.",
    "Understand the impact of weight bias on patient outcomes and care experiences.",
  ];

  const ModuleConcepts = [
    "Core concept overviews paired with evidence-based insights to build foundational knowledge.",
    "Interactive features that promote active, hands-on learning experiences.",
    "Realistic case scenarios to help apply knowledge in practical, real-world contexts.",
    "Curated resources for further exploration and deeper topic understanding beyond the module.",
    "Reflective exercises aimed at encouraging both personal insight and professional development.",
  ];

  return (
    <main className="relative flex flex-col h-[1147px] w-full max-w-[390px] mx-auto bg-[#e6ebf0]">
      {/* Header */}
      <header className="relative w-full h-[176px] bg-[#2e3b42] rounded-b-[25px] shadow-[0px_4px_4px_#00000040] flex flex-col items-center pt-[1px] pb-[27px]">
        <h1 className="mt-[94px] font-['Poppins',Helvetica] font-bold text-[24px] text-center tracking-[0.5px] leading-8 max-w-[360px] mb-[2px]">
          <span className="text-white">What is Weight Bias? </span>
          <span className="text-[#F89725]">Module Introduction</span>
        </h1>

     {/* Exit button */}
<div className="absolute top-8 right-[17px] flex flex-col items-center">
  <Link to="/ModuleSubCategory"> {/* Replace /exitpage with your actual route */}
    <Button
      variant="outline"
      size="icon"
      className="h-[34px] w-[35px] rounded-full bg-[#f89725] p-0 border-none"
    >
      <LogOutIcon className="h-6 w-6 text-[#2e3b42]" />
    </Button>
  </Link>
  <span className="mt-1 font-['Poppins',Helvetica] text-[10px] text-[#f89725]">Exit</span>
</div>

{/* Back button */}
<div className="absolute top-8 left-[17px] flex flex-col items-center">
  <Link to="/ModuleLearningObjective"> {/* Replace /previouspage with your actual route */}
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

      {/* Intro Text as Numbered Points */}
      <section className="pt-10 px-8">
        <h2 className="font-['Poppins',Helvetica] font-bold text-[#2E3B42] text-[20px] mb-4">
          In this module you’ll find:
        </h2>
        <ol className="list-decimal ml-5 space-y-4 text-black font-['Poppins',Helvetica] text-[16px] leading-relaxed">
          {ModuleConcepts.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ol>
      </section>


{/* Learning Objectives Section */}
<section className="px-8 mt-12">
  <h2 className="font-['Poppins',Helvetica] font-bold text-[#2E3B42] text-[20px] mb-4">
    Learning Objectives
  </h2>
  <ul className="space-y-4">
    {LearningObjectives.map((objective, index) => (
      <li key={index} className="flex items-start">
        <div className="w-2.5 h-2.5 bg-[#f89725] rounded-[5px] mt-2 mr-3 flex-shrink-0" />
        <p className="font-['Poppins',Helvetica] font-medium text-[#2E3B42] text-[16px] leading-relaxed">
          {objective}
        </p>
      </li>
    ))}
  </ul>
</section>

      {/* Next button */}
      <section className="flex flex-col items-center px-4 mt-10">
        <Link
          to="/DefinitionsAndTerminology"
          className="absolute left-[92px] top-[1057px] w-[205px] h-[49px] bg-[#f89725] rounded-[25px] font-['Poppins',Helvetica] font-semibold text-black text-base tracking-[0.48px] hover:bg-[#e88615] flex items-center justify-center"
        >
          Next
        </Link>
      </section>
    </main>
  );
};
