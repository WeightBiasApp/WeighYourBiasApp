import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeftIcon, LogOutIcon } from "lucide-react";
import { Button } from "../../components/ui/button";

export default function SelfReflectionChecklist() {
    const reflectionTitle = "Bias Awareness Reflection";
  const [content, setContent] = useState("");
const handleSave = () => {
  const existing = JSON.parse(localStorage.getItem("savedCards") || "[]");
  const newReflection = {
    id: Date.now(),        // unique ID
    title: reflectionTitle,
    description: content,
  };
  const updated = [...existing, newReflection];
  localStorage.setItem("savedCards", JSON.stringify(updated));

  alert("Reflection saved!");   // ← feedback
  setContent("");               // clear textarea
};

  return (
    <main className="relative h-[1244px] w-full bg-[#e6ebf0] max-w-[390px] mx-auto">
           {/* Header section */}
<header className="relative w-full h-[176px] bg-[#2e3b42] rounded-b-[25px] shadow-[0px_4px_4px_#00000040] flex flex-col items-center pt-[1px] pb-[27px]">
  <h1 className="mt-[94px] font-['Poppins',Helvetica] font-bold text-[24px] text-center tracking-[0.5px] leading-8 max-w-[340px] mb-[2px]">
  <span className="text-white"> Recognising Bias In Yourself </span>
</h1>

        {/* Exit */}
        <div className="absolute top-8 right-[17px] flex flex-col items-center">
          <Link to="/UnderstandingUnconsciousBias">
            <Button variant="outline" size="icon" className="h-[34px] w-[35px] rounded-full bg-[#f89725] p-0 border-none">
              <LogOutIcon className="h-6 w-6 text-[#2e3b42]" />
            </Button>
          </Link>
          <span className="mt-1 text-[10px] text-[#f89725] font-['Poppins']">Exit</span>
        </div>

        {/* Back */}
        <div className="absolute top-8 left-[17px] flex flex-col items-center">
          <Link to="/SubtleSigns">
            <Button variant="outline" size="icon" className="h-[34px] w-[35px] rounded-full bg-[#f89725] p-0 border-none">
              <ArrowLeftIcon className="h-6 w-6 text-[#2e3b42]" />
            </Button>
          </Link>
          <span className="mt-1 text-[10px] text-[#f89725] font-['Poppins']">Back</span>
        </div>
      </header>

      {/* Instructions */}

      <h1 className="absolute max-w-[90%] left-[22px] right-[19px] top-[201px] text-[#2e3b42] font-bold text-[20px] text-left font-['Poppins']">
          Have you ever...
        </h1>

      <section className="px-5 mt-16 text-center">
       
      <ul className="mt-10 text-[#2e3b42] text-[16px] font-['Poppins'] font-semibold leading-[22px] list-disc pl-5 space-y-2 text-left">
        <li>
            Assumed a patient’s lifestyle without asking? 
        </li>
        <li>
           Skipped a physical exam or assessment because of assumptions about weight? 
        </li>
        <li>
            Felt frustrated or impatient with a patient in a larger body? 
        </li>
        <li>
            Focused on weight loss as the primary goal without exploring other health factors? 
        </li>
        </ul>

      </section>

       <h2 className="absolute max-w-[87%] left-[24px] right-[19px] top-[495px] text-[#2e3b42] font-medium text-[16px] text-left leading-[20px] font-['Poppins']">
          Think about a recent patient interaction. Did any of these subtle signs show up? What might you do differently in your next patient interaction?
        </h2>

      {/* Text Area */}
      <section className=" absolute top-[600px] mt-6 px-2.5 flex justify-center">
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className="w-[371px] h-[443px] rounded-[25px] bg-[#2E3B42] text-white text-sm p-4 pt-6 resize-none font-['Poppins'] overflow-y-auto focus:outline-none"
          placeholder="Type your response here..."
        />
      </section>

      {/* Save Button */}
      <div className="px-5 mt-4">
        <Button
          onClick={handleSave}
   className="absolute top-[990px] left-1/2 transform -translate-x-1/2 w-[195px] h-[49px] rounded-[25px] bg-transparent font-['Poppins',Helvetica] font-semibold text-[#F89725] text-base tracking-[0.48px] flex items-center justify-center hover:bg-transparent hover:text-[#F89725] focus:outline-none active:bg-transparent"
 >
          Save Reflection
        </Button>
      </div>

       <section className="flex flex-col items-center px-4 mt-10">
        <Link
          to="/RecognisingBiasInYourself"
          className="absolute top-[1115px] left-1/2 transform -translate-x-1/2 w-[195px] h-[49px] bg-[#f89725] rounded-[25px] font-['Poppins',Helvetica] font-semibold text-black text-base tracking-[0.48px] hover:bg-[#e88615] flex items-center justify-center"
        >
          Next
        </Link>
      </section>
    </main>
  );
}
