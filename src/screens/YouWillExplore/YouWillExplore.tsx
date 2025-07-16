import { Link } from "react-router-dom";
import { Button } from "../../components/ui/button";
import { LogOutIcon } from "lucide-react";
import { ArrowLeftIcon } from "lucide-react";

export const YouWillExplore = (): JSX.Element => {
  // Data for bullet points to enable mapping
 const Outline = [
    "The interaction: Observe how a seemingly casual comment is received by the patient.",
    "The patient’s reaction: Understand the emotional response and how it affects future health-seeking behaviour",
    "The consequences: Consider how moments like this can contribute to long-term disengagement from healthcare.",
    "Reflection and learning: Think critically about how language and tone shape patient experiences — and how they can be improved",
  ];

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
          <Link to="/Preface">
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
  You Will Explore:
</h2>

<div className=" absolute top-[240px] left-[27px] font-['Poppins',Helvetica] text-[#2E3B42] text-[24px] leading-relaxed font-bold max-w-[370px]">
 {/* Bullet points */}
        <ul className="mt-[50px] w-full max-w-[330px]">
          {Outline.map((purpose, index) => (
            <li key={index} className="flex items-start mb-8">
              <div className="w-2.5 h-2.5 bg-[#f89725] rounded-[5px] -mt-2  mr-2 ml-3 flex-shrink-0" />
             {(() => {
  const [boldPart, rest] = purpose.split(":");
  return (
    <p className="font-['Poppins',Helvetica] font-light text-[#2E3B42] text-base tracking-[0.50px] leading-[25px] -mt-4 ml-3">
      <span className="font-bold">{boldPart}:</span>{rest ? ` ${rest.trim()}` : ""}
    </p>
  );
})()}

            </li>
          ))}
        </ul>

</div>



  <section className="flex flex-col items-center px-4 mt-15">
        

        {/* Begin button */}
        <Link 
  to="/SGSceneOne" 
  className="absolute left-[92px] top-[750px] w-[205px] h-[49px] bg-[#f89725] rounded-[25px] font-['Poppins',Helvetica] font-semibold text-black text-base tracking-[0.48px] hover:bg-[#e88615] flex items-center justify-center"
>
  Next
</Link>

      </section>
    </main>
  );
};