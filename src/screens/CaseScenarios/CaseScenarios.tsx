import { SearchIcon, ChevronDownIcon, ArrowLeftIcon } from "lucide-react";
import { Button } from "../../components/ui/button";
import { useState } from "react";
import { Card, CardContent } from "../../components/ui/card";
import { Input } from "../../components/ui/input";
import { Link } from "react-router-dom";
import { Navbar } from "../../components/Navbar";

export const CaseScenarios = (): JSX.Element => {
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");
  const [showSortOptions, setShowSortOptions] = useState(false);

  const modules = [
    { title: "The Insensitive Comment" },
    { title: "Case Scenario 2" },
    { title: "Case Scenario 3" },
    { title: "Case Scenario 4" },
  ];

  const filteredModules = modules
    .filter((module) =>
      module.title.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .sort((a, b) =>
      sortOrder === "asc"
        ? a.title.localeCompare(b.title)
        : b.title.localeCompare(a.title)
    );

  return (
    <main className="relative h-[844px] w-full bg-[#e6ebf0] max-w-[390px] mx-auto">
      {/* Header */}
      <div className="w-full h-[136px] bg-[#2e3b42] rounded-[0px_0px_25px_25px] shadow-[0px_4px_4px_#00000040]">
        <h1 className="absolute w-[363px] top-[77px] left-3.5 font-['Poppins',Helvetica] font-bold text-white text-[28px] text-center tracking-[0.50px] leading-8">
          Case Scenarios
        </h1>
      </div>

      {/* Back Button */}
      <div className="absolute top-8 left-[17px] flex flex-col items-center">
        <Link to="/EducationModule">
          <Button
            variant="outline"
            size="icon"
            className="h-[34px] w-[35px] rounded-full bg-[#f89725] p-0 border-none"
          >
            <ArrowLeftIcon className="h-6 w-6 text-[#2e3b42]" />
          </Button>
        </Link>
        <span className="mt-1 text-[10px] text-[#f89725] font-['Poppins']">
          Back
        </span>
      </div>

      <main className="px-[19px] pb-7 pt-3">
        {/* Search Bar */}
        <div className="mt-4 mb-8 flex justify-center">
          <div className="relative w-[347px]">
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

        {/* Module Count */}
        <div className="flex justify-between items-center mb-4">
          <span className="font-['Poppins',Helvetica] font-normal text-black text-[13px] tracking-[-0.24px] leading-[30.8px]">
            {filteredModules.length} Modules
          </span>
        </div>

        {/* Sort Button */}
        <div className="absolute w-[79px] h-[25px] top-[254px] right-[29px]">
          <div className="relative">
            <Button
              onClick={() => setShowSortOptions(!showSortOptions)}
              className="h-[25px] bg-[#f89725] rounded-2xl border-none px-2 font-['Poppins',Helvetica] font-normal text-black text-[13px] tracking-[-0.24px] hover:bg-[#f89725] hover:text-black"
            >
              Sort by
              <ChevronDownIcon className="ml-1 h-[7px] w-2.5" />
            </Button>

            {showSortOptions && (
              <div className="absolute top-[30px] right-0 bg-white border rounded shadow-md text-sm font-['Poppins',Helvetica] z-20">
                <div
                  className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                  onClick={() => {
                    setSortOrder("asc");
                    setShowSortOptions(false);
                  }}
                >
                  A - Z
                </div>
                <div
                  className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                  onClick={() => {
                    setSortOrder("desc");
                    setShowSortOptions(false);
                  }}
                >
                  Z - A
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Module Cards Grid */}
        {filteredModules.length === 0 ? (
          <p className="text-center text-black font-['Poppins',Helvetica]">
            No modules found.
          </p>
        ) : (
          <div className="grid grid-cols-2 gap-[15px]">
            {filteredModules.map((module, index) => (
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
                </CardContent>
              </Card>
            ))}
          </div>
        )}

        <Navbar />
      </main>
    </main>
  );
};
