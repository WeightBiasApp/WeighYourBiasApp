import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeftIcon, LogOutIcon } from "lucide-react";
import { Button } from "../../components/ui/button";

export default function TDHReflection() {
   const reflectionTitle = "Tracey's Discharge Home Reflection";
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
  <main className="relative flex flex-col h-[1033px] w-full max-w-[390px] mx-auto bg-[#e6ebf0]">
      {/* Header */}
      <header className="absolute w-[390px] h-[171px] top-0 left-0 bg-[#2e3b42] rounded-b-[25px] shadow-[0px_4px_4px_#00000040]">
          <h1 className="absolute w-[352px] top-[95px] left-[19px] font-['Poppins',Helvetica] font-bold text-white text-2xl  text-center">
          Recognising Bias in Clinical Settings
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
          <Link to="/TDH">
            <Button variant="outline" size="icon" className="h-[34px] w-[35px] rounded-full bg-[#f89725] p-0 border-none">
              <ArrowLeftIcon className="h-6 w-6 text-[#2e3b42]" />
            </Button>
          </Link>
          <span className="mt-1 text-[10px] text-[#f89725] font-['Poppins']">Back</span>
        </div>
      </header>

      {/* Instructions */}
      <section className="px-5 mt-10 text-center">
       
      <ul className="mt-40 text-[#2e3b42] text-[16px] font-['Poppins'] font-semibold leading-[22px] list-disc pl-5 space-y-2 text-left">
        <li>
            What assumptions were made about Tracey’s mobility?
        </li>
        <li>
            How might this interaction have gone differently if the physio had asked about her home setup first?
        </li>
        <li>
            What could have been the consequences if Tracey hadn’t spoken up? 
        </li>
        </ul>

      </section>

      {/* Text Area */}
      <section className=" absolute top-[400px] mt-6 px-2.5 flex justify-center">
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
   className="absolute top-[790px] left-1/2 transform -translate-x-1/2 w-[195px] h-[49px] rounded-[25px] bg-transparent font-['Poppins',Helvetica] font-semibold text-[#F89725] text-base tracking-[0.48px] flex items-center justify-center hover:bg-transparent hover:text-[#F89725] focus:outline-none active:bg-transparent"
 >
          Save Reflection
        </Button>
      </div>

       <section className="flex flex-col items-center px-4 mt-10">
        <Link
          to="/UnconsciousBiasQuiz"
          className="absolute top-[915px] left-1/2 transform -translate-x-1/2 w-[195px] h-[49px] bg-[#f89725] rounded-[25px] font-['Poppins',Helvetica] font-semibold text-black text-base tracking-[0.48px] hover:bg-[#e88615] flex items-center justify-center"
        >
          Next
        </Link>
      </section>
    </main>
  );
}
