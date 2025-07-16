import { SearchIcon } from "lucide-react";
import { Button } from "../../components/ui/button";
import { useState } from "react";
import { Card, CardContent } from "../../components/ui/card";
import { Input } from "../../components/ui/input";
import { Progress } from "../../components/ui/progress";
import { Navbar } from "../../components/Navbar";
import { Link } from "react-router-dom";

export const EducationModule = (): JSX.Element => {
  const [searchTerm, setSearchTerm] = useState("");

  const modules = [
    { title: "What is Weight Bias?", progress: 0 },
    { title: "Understanding Unconscious Weight Bias", progress: 0 },
    { title: "Recognising Weight Stigma in Clinical Practice", progress: 0 },
    { title: "Health at Every Size", progress: 0 },
  ];

  const filteredModules = modules.filter((module) =>
    module.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <main className="relative h-[844px] w-full bg-[#e6ebf0] max-w-[390px] mx-auto">
      {/* Header */}
      <div className="w-full h-[136px] bg-[#2e3b42] rounded-[0px_0px_25px_25px] shadow-[0px_4px_4px_#00000040]">
        <h1 className="absolute w-[363px] top-[77px] left-3.5 font-['Inter',Helvetica] font-bold text-white text-[32px] text-center tracking-[0.50px] leading-8">
          Modules
        </h1>
      </div>

      <main className="px-[19px] pb-8">
        {/* Search Bar */}
        <div className="mt-4 mb-8 flex justify-center">
          <div className="relative w-[327px]">
            <div className="absolute left-4 top-1/2 transform -translate-y-1/2">
              <SearchIcon className="h-5 w-5 text-[#f89725]" />
            </div>
            <Input
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="h-[54px] pl-12 pr-24 py-4 bg-white rounded-[25px] font-['Poppins',Helvetica] font-medium text-black text-base shadow-[0px_4px_10px_#00000040]"
              placeholder="Search"
            />
          </div>
        </div>

        {/* Module Count and Sort */}
        <div className="flex justify-between items-center mb-4">
          <span className="font-['Poppins',Helvetica] font-normal text-black text-[13px] tracking-[-0.24px] leading-[30.8px]">
            {modules.length } Modules
          </span>
          <Button
            variant="outline"
            className="h-[25px] bg-[#f89725] rounded-2xl border-none hover:bg-[#f89725]/90"
          >
            <span className="font-['Poppins',Helvetica] font-normal text-black text-[13px] tracking-[-0.24px] leading-[30.8px]">
              Sort by
            </span>
            <img
              className="w-[9px] h-1.5 ml-1"
              alt="Icon"
              src="https://c.animaapp.com/mbkivzxbBVPcwp/img/icon.svg"
            />
          </Button>
        </div>

    

        {/* Standard Module Cards Grid */}
        {filteredModules.length === 0 ? (
          <p className="text-center text-black font-['Poppins',Helvetica]">
            No modules found.
          </p>
        ) : (
          <div className="grid grid-cols-2 gap-[15px]">
            {filteredModules.map((module, index) => {
              const cardContent = (
                <Card
                  key={index}
                  className="w-[168px] h-[154px] bg-[#2e3b42] rounded-2xl shadow-[0px_4px_4px_#00000040] border-none flex flex-col justify-between p-3 transition hover:scale-[1.02] cursor-pointer"
                >
                  <CardContent className="p-0 flex flex-col justify-between h-full">
                    <div>
                      <h3 className="font-['Poppins',Helvetica] font-bold text-white text-base leading-[21.6px]">
                        {module.title}
                      </h3>
                    </div>
                    <div className="mt-4">
                      <p className="font-['Poppins',Helvetica] font-normal text-white text-base leading-[21.6px] whitespace-nowrap">
                        {module.progress}% Complete
                      </p>
                      <div className="mt-2 bg-white h-3.5 rounded-2xl">
                        <Progress
                          value={module.progress}
                          className="h-3.5 rounded-2xl bg-white"
                        />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );

              // Add links to specific modules
              if (module.title === "What is Weight Bias?") {
                return (
                  <Link to="/ModuleSubCategory" key={index} className="block">
                    {cardContent}
                  </Link>
                );
              } else if (
                module.title === "Understanding Unconscious Weight Bias"
              ) {
                return (
                  <Link to="/UnderstandingUnconsciousBias" key={index} className="block">
                    {cardContent}
                  </Link>
                );
              } else {
                return <div key={index}>{cardContent}</div>;
              }
            })}
          </div>
        )}

        <Navbar />
      </main>
    </main>
  );
};
