import { Link } from "react-router-dom";
import { Settings1 } from "./icons/Settings1";
import { Home1_1 } from "./icons/Home1_1";
import { Group34 } from "./icons/Group34";
import { Modules } from "./icons/Modules";

// src/components/Navbar.tsx
export const Navbar = (): JSX.Element => {
  return (
    <div className="fixed bottom-0 w-[390px] h-[85px] bg-white rounded-t-2xl shadow-[0px_-4px_4px_#00000040] mx-auto left-0 right-0 z-50">
      <div className="relative h-full w-full">
        <Link to="/Homepageitteration">
          <Home1_1 className="absolute h-[57px] w-[57px] top-[10px] left-[31px]" />
        </Link>

        <Link to="/ResourcesCategories">
          <Group34 className="absolute h-[46px] w-[50px] top-[15px] left-[129px]" />
        </Link>

        <Settings1 className="absolute h-[52px] w-[52px] top-[13px] left-[304px]" />

  <Link to="/EducationModule">
 <Modules className="left-[217px] absolute top-[15px]" />
 </Link>
 

        {/* Labels */}
        <div className="absolute top-[67px] left-[44px] text-[10px] text-black font-['Poppins',Helvetica]">Home</div>
        <div className="absolute top-[67px] left-[128px] text-[10px] text-black font-['Poppins',Helvetica]">Resources</div>
        <div className="absolute top-[67px] left-[219px] text-[10px] text-black font-['Poppins',Helvetica]">Modules</div>
        <div className="absolute top-[67px] left-[309px] text-[10px] text-black font-['Poppins',Helvetica]">Settings</div>
      </div>
    </div>
  );
};
