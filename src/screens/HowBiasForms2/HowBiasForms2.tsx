
import { Link } from "react-router-dom";
import { Card, CardContent } from "../../components/ui/card";
import { Button } from "../../components/ui/button";
import { ArrowLeftIcon } from "lucide-react";
import { LogOutIcon } from "lucide-react";
import PatternImage from"../../assets/028-pattern.png";
import InteractionImage from"../../assets/029-interaction.png";


export const HowBiasForms2 = (): JSX.Element => {






  return (
    <main className="relative h-[1267px] w-full bg-[#e6ebf0] max-w-[390px] mx-auto">
           {/* Header section */}
<header className="relative w-full h-[176px] bg-[#2e3b42] rounded-b-[25px] shadow-[0px_4px_4px_#00000040] flex flex-col items-center pt-[1px] pb-[27px]">
  <h1 className="mt-[104px] font-['Poppins',Helvetica] font-bold text-[24px] text-center tracking-[0.5px] leading-8 max-w-[360px] ">
   <span className="text-white"> The Neuroscience of Bias </span>
  
  
  
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
  <Link to="/HowBiasForms"> {/* Replace /previouspage with your actual route */}
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
      <Card className="w-[377px] h-[900px] mx-auto mt-[68px] bg-[#2e3b42] rounded-2xl border-none">
        <CardContent className="p-[20px] py[0px]">
           <h2 className="mt-[13px] font-['Poppins',Helvetica] font-bold text-[24px] text-center tracking-[0.5px] leading-8 max-w-[340px] mb-[2px]">
          <span className="text-[#f89725]"> How Bias Forms</span>
         
        </h2>

          <div className="font-['Poppins',Helvetica] font-medium text-white text-lg text-center text-base tracking-[0.09px] space-y-6 mt-9 mr-[10px] ml-[10px] pb-4">
            <p>
             ‘Heuristics’ help us recognise patterns quickly, but they can also cause us to overgeneralise or misinterpret information.  </p>

  <img
    src= {PatternImage} // Replace with your actual path
    alt="Heuristics illustration"
    className="w-[133pxpx] h-[133px] mx-auto rounded-lg "
  />


 {/* Attribution */}
      <a
        href="https://www.flaticon.com/free-icons/pattern"
        target="_blank"
        rel="noopener noreferrer"
        className="absolute top-[600px] left-[136px] block text-[#636C71] text-[10px] font-medium font-['Poppins'] text-center max-w-[120px] mx-auto leading-tight underline "
      >
        designed by Freepik from Flaticon
      </a>
  
 <p className=" absolute top-[670px] left-[35px] max-w-[320px] font-['Poppins',Helvetica] font-medium text-white text-lg text-center text-base tracking-[0.09px] space-y-6 mt-9  pb-4">


          When we repeatedly associate certain traits with specific groups (e.g., ‘people in larger bodies are unhealthy’), those associations become automatic.    </p>


  <img
    src= {InteractionImage} // Replace with your actual path
    alt="Heuristics illustration"
    className=" absolute top-[830px] left-[125px] w-[133pxpx] h-[133px] mx-auto rounded-lg"
  />

      <a
        href="https://www.flaticon.com/free-icons/interaction"
        target="_blank"
        rel="noopener noreferrer"
        className="absolute top-[973px] left-[132px] block text-[#636C71] text-[10px] font-medium font-['Poppins'] text-center max-w-[120px] mx-auto leading-tight underline "
      >
        designed by Freepik from Flaticon
      </a>

 <div className="absolute top-[1040px] left-[50px] max-w-[320px] font-['Poppins',Helvetica] font-regular text-[12px] text-center  text-[#858E93] tracking-[0.09px] pt-[36px] mr-[10px] ml-[-16px] leading-snug">
  <p>
Korteling et al (2018)- ‘heuristics’ and ‘pattern recognition’ and ‘amygdala and prefrontal cortex,’ 
  </p>
</div>

          </div>
        </CardContent>
      </Card>
 
         {/* Begin button */}
  
 
         <Link 
   to="/BiasIsHarmful" 
   className="absolute left-[92px] top-[1180px] w-[205px] h-[49px] bg-[#f89725] rounded-[25px] font-['Poppins',Helvetica] font-semibold text-black text-base tracking-[0.48px] hover:bg-[#e88615] flex items-center justify-center"
 >
   Next
 </Link>
     </main>
   );
 };