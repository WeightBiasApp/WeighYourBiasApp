import { Frame } from "./sections/Frame";
import { FrameWrapper } from "./sections/FrameWrapper";

import "./style.css";
import { Navbar } from "../../components/Navbar";
import CazHalesImage from "../../assets/CazHales.png";
import NadiaPantidiImage from "../../assets/NadiaPantidi.png";
import LanaStrawbridgeImage from "../../assets/LanaStrawbridge.png";
import NikeishaParsotImage from "../../assets/NikeishaParsot.png";
import TraceyCarrImage from "../../assets/TraceyCarr.png";

export const HomepageItteration = (): JSX.Element => {
  return (
    <main className="flex flex-col h-[1124px] w-full max-w-[390px] mx-auto bg-[#e6ebf0]">
      <div className="homepage-itteration" data-model-id="269:946">
        <div className="overlap-2">
          <div className="text-wrapper-25"> Dr. Amanda Jones</div>

          <div className="group-8">
            <div className="text-wrapper-26">Welcome back!</div>

            <div className="icon-sun">
              <img
                className="group-9"
                alt="Group"
                src="https://c.animaapp.com/hwvI6zqJ/img/group@2x.png"
              />
            </div>
          </div>

          <div className="user-wrapper">
            <img
              className="user"
              alt="User"
              src="https://c.animaapp.com/hwvI6zqJ/img/user@2x.png"
            />
          </div>
        </div>

      <div className="px-4 pt-[190px]">
  <h2 className="absolute top-[190px] font-['Poppins',Helvetica] font-bold text-[#2e3b42] text-[24px] mb-4">
  Progress
</h2>
</div>

  <div className="overflow-x-auto">
    <Frame />
  </div>





       <div className="px-4 pt-10 relative">
  <h2 className="font-['Poppins',Helvetica] font-bold text-[#2e3b42] text-[24px] mb-4">
    Saved Resources
  </h2>

  {/* Container for horizontal scrolling with limited height */}
  <div className="absolute top-[20px]  left-0 right-0 h-[300px] overflow-x-auto pl-2 pr-2 pt-10">
  <FrameWrapper />
</div>

</div>


        <div className=" absolute top-[670px] w-full px-4 py-6 mt-10">
          <h2 className="text-[24px] font-['Poppins',Helvetica] font-bold text-[#2e3b42] mb-4">
            Meet The Team
          </h2>

          <div className=" overflow-x-auto">
            <div className="flex gap-4 w-max">
              {/* Card 1 */}
              <div className="flex flex-col w-[176px] h-[229px] items-center bg-[#2e3b42] rounded-xl shadow-md p-4 min-w-[160px]">
                <img
                  src= {CazHalesImage}
                  alt="Caz Hales"
                  className="w-[128px] h-[128px] rounded-full object-cover object-left-top mb-2"
                />
                <p className="text-[16px] font-['Poppins',Helvetica] font-semibold text-white mt-1">Caz Hales</p>
                <p className="text-[14px] font-['Poppins',Helvetica] text-center text-white mt-1 leading-[16px]">Associate Professor, Registered Nurse</p>
              </div>

              {/* Card 2 */}
              <div className="flex flex-col w-[176px] h-[229px] items-center bg-[#2e3b42] rounded-xl shadow-md p-4 min-w-[160px]">
                 <div className="w-[128px] h-[128px] rounded-full overflow-hidden">
                <img
                  src={NadiaPantidiImage}
                  alt="Alana"
                   className="w-[128px] h-[128px] object-cover rounded-full transform mb-5 scale-[1.1] -translate-y-[-2%] -translate-x-[6%]"
                style={{ objectPosition: "center 30%" }}></img></div>
                <p className="text-[16px] mt-3 text-center  font-['Poppins',Helvetica] font-semibold text-white mt-1">Nadia Pantidi</p>
                <p className="text-[14px] font-['Poppins',Helvetica] text-center text-white mt-1 ">Senior Lecturer in Interaction Design</p>
              </div>

              {/* Card 3 */}
               <div className="flex flex-col w-[176px] h-[229px] items-center bg-[#2e3b42] rounded-xl shadow-md p-4 min-w-[160px]">
                <div className="w-[128px] h-[128px] rounded-full overflow-hidden">
                <img
                  src={LanaStrawbridgeImage}
                  alt="Alana"
                   className="w-[128px] h-[128px] object-cover rounded-full transform scale-[2.2] -translate-y-[-34%] -translate-x-[-9%]"
                style={{ objectPosition: "center 30%" }}></img></div>
                <p className="text-[16px] mt-3 text-center  font-['Poppins',Helvetica]  font-semibold text-white mt-1">Alana Strawbridge</p>
                <p className="text-[14px] font-['Poppins',Helvetica] text-white mt-1 ">UX/UI Designer</p>
              </div>
              

              {/* Card 4 */} 
                <div className="flex flex-col w-[176px] h-[229px] items-center bg-[#2e3b42] rounded-xl shadow-md p-4 min-w-[160px]">
                <div className="w-[128px] h-[128px] rounded-full overflow-hidden">
                <img
                  src={NikeishaParsotImage}
                  alt="Nikeisha Parsot"
                   className="w-[128px] h-[128px] object-cover rounded-full transform scale-[1.4] -translate-y-[-15%] "
                style={{ objectPosition: "center 30%" }}></img></div>
                <p className="text-[16px] mt-3 text-center  font-['Poppins',Helvetica] font-semibold text-white mt-1">Nikeisha Parsot</p>
                <p className="text-[14px] font-['Poppins',Helvetica] text-white mt-1 ">UX/UI Designer</p>
              </div>


                  {/* Card 5 */} 
                <div className="flex flex-col w-[176px] h-[229px] items-center bg-[#2e3b42] rounded-xl shadow-md p-4 min-w-[160px]">
                <div className="w-[128px] h-[128px] rounded-full overflow-hidden">
                <img
                  src={TraceyCarrImage}
                  alt="Nadia Pantidi"
                   className="w-[128px] h-[128px] object-cover rounded-full transform scale-[1.4] -translate-y-[-10%] "
                style={{ objectPosition: "center 30%" }}></img></div>
                <p className="text-[16px] mt-3 text-center  font-['Poppins',Helvetica] font-semibold text-white mt-1">Tracey Carr</p>
                <p className="text-[14px] font-['Poppins',Helvetica] text-white mt-1 ">Consultant</p>
              </div>
              
            </div>
          </div>
        </div>


        <Navbar />
      </div>
    </main>
  );
};
