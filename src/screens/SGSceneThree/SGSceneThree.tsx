import { Link } from "react-router-dom";
import { Button } from "../../components/ui/button";

import { ArrowLeftIcon } from "lucide-react";
import Image1Image from "../../assets/image1.png";



export const SGSceneThree = (): JSX.Element => {
  // Data for bullet points to enable mapping


  return (
  <main className="relative flex flex-col h-[844px] w-full max-w-[390px] mx-auto bg-[#e6ebf0]">
      {/* Header */}
      <header className="w-full h-[171px] ">
        


        {/* Back */}
        <div className="absolute top-5 left-[17px] flex flex-col items-center">
          <Link to="/SGQ2">
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


  <div className="px-4 mt-4">
    <img
      src={Image1Image}
      alt="Waiting room"
      className="absolute top-[100px] left-[25px] w-[342px] h-[219px] object-cover object-top rounded-[25px]"
      />
  </div>


<div className=" absolute top-[350px] left-[25px] w-[342px] h-[98px] bg-[#2e3b42] rounded-[25px] px-6 py-4 max-w-[800px] mx-auto mt-3 shadow-md">
 <p className="font-['Poppins',Helvetica] text-[#ffffff] text-[24px] text-center leading-relaxed font-bold max-w-[370px]">
  How Might A Patient Feel?
  
</p>


</div>
 <section className="flex flex-col items-center px-4 mb-15 pt-[10px] absolute top-[465px] left-[22px]">
<div className=" font-['Poppins',Helvetica] text-black text-[16px] text-center leading-relaxed font-regular mt-6 max-w-[320px]">
 Take a moment to consider the patient’s perspective. What emotions might they be experiencing? How could this moment influence the rest of the interaction? </div>
</section>


  <section className="flex flex-col items-center px-4 mt-15">
        

        {/* Begin button */}
        <Link 
  to="/SGQ3" 
  className="absolute left-[92px] top-[740px] w-[205px] h-[49px] bg-[#f89725] rounded-[25px] font-['Poppins',Helvetica] font-semibold text-black text-base tracking-[0.48px] hover:bg-[#e88615] flex items-center justify-center"
>
  Next
</Link>

      </section>
    </main>
  );
};