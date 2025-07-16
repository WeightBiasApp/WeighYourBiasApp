import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeftIcon, LogOutIcon } from "lucide-react";
import { Button } from "../../components/ui/button";

export default function ImpactReflection() {
  const reflectionTitle = "Case Scenario Reflection";
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
    <main className="relative flex flex-col h-[864px] w-full max-w-[400px] mx-auto bg-[#e6ebf0]">
      {/* Header */}
      <header className="w-full h-[171px] bg-[#2e3b42] rounded-b-[25px] relative shadow-md">
        <h1 className="absolute max-w-[90%] left-[19px] right-[19px] top-[101px] text-white font-bold text-[28px] text-center font-['Poppins']">
          Personal Reflection
        </h1>

        {/* Exit */}
        <div className="absolute top-8 right-[17px] flex flex-col items-center">
          <Link to="/ModuleSubCategory">
            <Button variant="outline" size="icon" className="h-[34px] w-[35px] rounded-full bg-[#f89725] p-0 border-none">
              <LogOutIcon className="h-6 w-6 text-[#2e3b42]" />
            </Button>
          </Link>
          <span className="mt-1 text-[10px] text-[#f89725] font-['Poppins']">Exit</span>
        </div>

        {/* Back */}
        <div className="absolute top-8 left-[17px] flex flex-col items-center">
          <Link to="/SGQ5">
            <Button variant="outline" size="icon" className="h-[34px] w-[35px] rounded-full bg-[#f89725] p-0 border-none">
              <ArrowLeftIcon className="h-6 w-6 text-[#2e3b42]" />
            </Button>
          </Link>
          <span className="mt-1 text-[10px] text-[#f89725] font-['Poppins']">Back</span>
        </div>
      </header>

      {/* Instructions */}
      <section className="px-5 mt-8 text-center">
        <h2 className="text-[#2e3b42] font-bold text-lg font-['Poppins']">Your Thoughts</h2>
        <p className="mt-2 text-[#2e3b42] text-sm font-['Poppins']">
          Take a moment to reflect on what you’ve just experienced. What stood out to you? How might you respond differently in a similar situation? There are no right or wrong answers - just your honest thoughts.
        </p>
      </section>

      {/* Text Area */}
      <section className="mt-6 px-5 flex justify-center">
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className="w-[371px] h-[373px] rounded-[25px] bg-[#2E3B42] text-white text-sm p-4 resize-none font-['Poppins'] overflow-y-auto focus:outline-none"
          placeholder="Type your response here..."
        />
      </section>

      {/* Save Button */}
      <div className="px-5 mt-4">
        <Button
          onClick={handleSave}
   className="absolute top-[680px] left-1/2 transform -translate-x-1/2 w-[195px] h-[49px] rounded-[25px] bg-transparent font-['Poppins',Helvetica] font-semibold text-[#F89725] text-base tracking-[0.48px] flex items-center justify-center hover:bg-transparent hover:text-[#F89725] active:bg-transparent"
 >
          Save Reflection
        </Button>
      </div>

       <section className="flex flex-col items-center px-4 mt-10">
        <Link
          to="/ModuleComplete"
          className="absolute top-[775px] left-1/2 transform -translate-x-1/2 w-[195px] h-[49px] bg-[#f89725] rounded-[25px] font-['Poppins',Helvetica] font-semibold text-black text-base tracking-[0.48px] hover:bg-[#e88615] flex items-center justify-center"
        >
          Next
        </Link>
      </section>
    </main>
  );
}
