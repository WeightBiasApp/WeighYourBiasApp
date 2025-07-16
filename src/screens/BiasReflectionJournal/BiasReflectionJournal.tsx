import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeftIcon, LogOutIcon } from "lucide-react";
import { Button } from "../../components/ui/button";


export default function BiasReflectionJournal () {
  const reflectionTitle = "Bias Reflection Journal Submission";
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
    <main className="relative flex flex-col h-[1174px] w-full max-w-[400px] mx-auto bg-[#e6ebf0]">
      {/* Header */}
      <header className="w-full h-[171px] bg-[#2e3b42] rounded-b-[25px] relative shadow-md">
        <h1 className="absolute max-w-[90%] left-[19px] right-[19px] top-[101px] text-white font-bold text-xl text-center font-['Poppins']">
          Bias Reflection Journal
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
          <Link to="/CommonTriggers">
            <Button variant="outline" size="icon" className="h-[34px] w-[35px] rounded-full bg-[#f89725] p-0 border-none">
              <ArrowLeftIcon className="h-6 w-6 text-[#2e3b42]" />
            </Button>
          </Link>
          <span className="mt-1 text-[10px] text-[#f89725] font-['Poppins']">Back</span>
        </div>
      </header>


        
      {/* Instructions */}

      
        <h2 className="absolute max-w-[90%] left-[20px] right-[19px] top-[208px] text-[#2e3b42] font-semibold text-[16px] text-left leading-[20px] font-['Poppins']">
         Awareness is the first step toward change. Use the prompts below to explore and reflect on your own potential biases.
        </h2>
      <section className="absolute top-[240px] px-5  text-center">
       
      <ul className="mt-14 text-[#2e3b42] text-[16px] font-['Poppins'] font-medium leading-[22px] list-disc pl-5 space-y-2 text-left">
        <li>
           “Did I make any assumptions today before gathering all the facts?” 
        </li>
        <li>
           “Was there a moment I felt frustrated, what might have triggered that?” 
        </li>
        <li>
            “Did I treat any patient differently based on appearance or background?” 
        </li>
        <li>
            “Did I pause to ask open-ended questions, or did I jump to conclusions?”
        </li>
         <li>
            “How did I feel during that patient interaction/consultation and why?” 
        </li>
        </ul>

      </section>

       

      {/* Text Area */}
      <section className=" absolute top-[550px] left-[-6px] mt-6 px-5 flex justify-center">
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
   className="absolute top-[960px] left-1/2 transform -translate-x-1/2 w-[195px] h-[49px] rounded-[25px] bg-transparent font-['Poppins',Helvetica] font-semibold text-[#F89725] text-base tracking-[0.48px] flex items-center justify-center hover:bg-transparent hover:text-[#F89725] focus:outline-none active:bg-transparent"
 >
          Save Reflection
        </Button>
      </div>

       <section className="flex flex-col items-center px-4 mt-10">
        <Link
          to="/MiniSelfCheck"
          className="absolute top-[1065px] left-1/2 transform -translate-x-1/2 w-[195px] h-[49px] bg-[#f89725] rounded-[25px] font-['Poppins',Helvetica] font-semibold text-black text-base tracking-[0.48px] hover:bg-[#e88615] flex items-center justify-center"
        >
          Next
        </Link>
      </section>
    </main>
  );
}
