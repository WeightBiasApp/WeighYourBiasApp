
import { Link } from "react-router-dom";
import { Card, CardContent } from "../../components/ui/card";
import { Button } from "../../components/ui/button";
import { ArrowLeftIcon } from "lucide-react";
import { LogOutIcon } from "lucide-react";

export const ToolsToSurfaceUB = (): JSX.Element => {
  return (
    <main className="relative h-[844px] w-full bg-[#e6ebf0] max-w-[390px] mx-auto">
              {/* Header section */}
<header className="relative w-full h-[176px] bg-[#2e3b42] rounded-b-[25px] shadow-[0px_4px_4px_#00000040] flex flex-col items-center pt-[1px] pb-[27px]">
  <h1 className="mt-[94px] font-['Poppins',Helvetica] font-bold text-[24px] text-center tracking-[0.5px] leading-8 max-w-[360px] mb-[2px]">
  <span className="text-white">Tools to Surface Unconscious Bias</span>
  
</h1>
{/* Exit button */}
<div className="absolute top-8 right-[17px] flex flex-col items-center">
  <Link to="/UnderstandingUnconsciousBias"> {/* Replace /exitpage with your actual route */}
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
  <Link to="/BiasSelfCheck"> {/* Replace /previouspage with your actual route */}
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
      {/* Main content card */}
      <Card className="w-[377px] h-[410px] mx-auto mt-[68px] bg-[#2e3b42] rounded-2xl border-none">
        <CardContent className="p-[20px] py[0px]">
           <p className="mt-[28px] font-['Poppins',Helvetica] font-semibold text-[18px] text-center tracking-[0.5px] leading-[22px] max-w-[350px] mb-[2px]">
          <span className="text-white">The </span>
          <span className="text-[#F89725]">Implicit Association Test (IAT) </span>
          <span className="text-white">explores your unconscious associations with weight and body size. </span>
        </p>

          <div className="font-['Poppins',Helvetica] font-semibold text-white text-[16px] text-center tracking-[0.09px] leading-[20px] space-y-6 mt-20 mr-[5px] ml-[5px]">
            <p>
           The IAT is a research-based tool that measures the strength of automatic associations between concepts—in this case, weight and attributes like “good” or “bad.” It helps surface biases that may influence clinical decision-making without conscious awareness.  </p>

        
          </div>
        </CardContent>
      </Card>
 
         {/* Begin button */}
  
 
         <Link 
   to="/UnderstandingUnconsciousBias" 
   className="absolute left-[62px] top-[730px] w-[265px] h-[49px] bg-[#f89725] rounded-[25px] font-['Poppins',Helvetica] font-semibold text-black text-base tracking-[0.48px] hover:bg-[#e88615] flex items-center justify-center"
 >
   Take the Weight IAT
 </Link>
     </main>
   );
 };