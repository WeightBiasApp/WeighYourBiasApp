
import { Link } from "react-router-dom";
import { ArrowLeftIcon, LogOutIcon } from "lucide-react";
import { Button } from "../../components/ui/button";
import { useState } from "react";


export default function BiasSelfCheck () {

      const options = ["I wasn’t aware at all ", "I noticed a few moments of bias  ", "I was somewhat aware and reflective ", "I actively paused and questioned assumptions ", "I was highly mindful and inclusive throughout "];
  const [selected, setSelected] = useState<string | null>(null);




  return (
    <main className="relative flex flex-col h-[954px] w-full max-w-[400px] mx-auto bg-[#e6ebf0]">
      {/* Header */}
      <header className="w-full h-[171px] bg-[#2e3b42] rounded-b-[25px] relative shadow-md">
        <h1 className="absolute max-w-[90%] left-[19px] right-[19px] top-[101px] text-white font-bold text-xl text-center font-['Poppins']">
          Bias Self-Check
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
          <Link to="/MiniSelfCheck">
            <Button variant="outline" size="icon" className="h-[34px] w-[35px] rounded-full bg-[#f89725] p-0 border-none">
              <ArrowLeftIcon className="h-6 w-6 text-[#2e3b42]" />
            </Button>
          </Link>
          <span className="mt-1 text-[10px] text-[#f89725] font-['Poppins']">Back</span>
        </div>
      </header>

      <section className="flex flex-col items-center px-4 mt-10">
        <h2 className="font-['Poppins',Helvetica] font-semibold italic text-[#2E3B42] text-[20px] text-center tracking-[0.10px] leading-[31px] max-w-[369px]">
      Quick Self-Check: How Did I Do Today?   </h2>


        <p className="font-['Poppins',Helvetica] font-semibold text-[#2E3B42] text-[16px] text-center tracking-[0.10px] leading-[20px] max-w-[369px] pt-4">
          How aware were you of your assumptions & biases during patient interactions today?
        </p>
        </section>


    <div className=" absolute top-[370px] left-[20px] flex flex-col items-center gap-4">
      {options.map((option) => (
<Button
  key={option}
  onClick={() => setSelected(selected === option ? null : option)}

  className={`w-[359px] min-h-[70px] px-4 py-2 rounded-[37px] border-[2px] font-['Poppins',Helvetica] font-semibold text-[16px] tracking-[0.48px] text-center whitespace-normal leading-[20px] break-words ${
    selected === option
      ? "bg-[#2E3B42] text-white border-[#2E3B42]"
      : "bg-white text-black border-[#2E3B42] hover:bg-[#2E3B42] hover:text-white"
  }`}
>
  {option}
</Button>




      ))}
    </div>

       <section className="flex flex-col items-center px-4 mt-10">
        <Link
          to="/ToolsToSurfaceUB"
          className="absolute top-[845px] left-1/2 transform -translate-x-1/2 w-[195px] h-[49px] bg-[#f89725] rounded-[25px] font-['Poppins',Helvetica] font-semibold text-black text-base tracking-[0.48px] hover:bg-[#e88615] flex items-center justify-center"
        >
          Next
        </Link>
      </section>
    </main>
  );
}
