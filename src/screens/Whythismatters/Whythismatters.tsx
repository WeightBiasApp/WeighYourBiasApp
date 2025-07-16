
import { Link } from "react-router-dom";
import { Card, CardContent } from "../../components/ui/card";

export const Whythismatters = (): JSX.Element => {
  return (
    <main className="relative h-[844px] w-full bg-[#e6ebf0] max-w-[390px] mx-auto">
      {/* Header */}
      <div className="w-full h-[146px] bg-[#2e3b42] rounded-[0px_0px_25px_25px] shadow-[0px_4px_4px_#00000040]">
        <h1 className="absolute w-[363px] top-[77px] left-3.5 font-['Inter',Helvetica] font-bold text-white text-[32px] text-center tracking-[0.50px] leading-8">
          Why This Matters:
        </h1>
      </div>

      {/* Main content card */}
      <Card className="w-[377px] h-[348px] mx-auto mt-[88px] bg-[#2e3b42] rounded-2xl border-none">
        <CardContent className="p-[20px] py[0px]">
          <h2 className="font-['Poppins',Helvetica] font-semibold text-white text-[24px] text-center tracking-[0.50px] leading-[25px] mt-2 mb-6">
            Weight bias—whether conscious or unconscious.
          </h2>

          <div className="font-['Poppins',Helvetica] text-white text-[16px] text-base tracking-[0.09px] space-y-6 mr-[10px] ml-[10px]">
            <p>
              Can impact patient care and the health care staff-patient
              relationship, that may deter patients from seeking help.
            </p>

            <p>
              Recognising these biases is essential for delivering compassionate
              and effective healthcare.
            </p>
          </div>
        </CardContent>
      </Card>
 
         {/* Begin button */}
  
 
         <Link 
   to="/Movingforward" 
   className="absolute left-[92px] top-[670px] w-[205px] h-[49px] bg-[#f89725] rounded-[25px] font-['Poppins',Helvetica] font-semibold text-black text-base tracking-[0.48px] hover:bg-[#e88615] flex items-center justify-center"
 >
   Next
 </Link>
     </main>
   );
 };