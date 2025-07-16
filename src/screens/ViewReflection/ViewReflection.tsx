import { SearchIcon, Trash2Icon } from "lucide-react";
import { useEffect, useState } from "react";
import { Input } from "../../components/ui/input";
import { Navbar } from "../../components/Navbar";
import { Button } from "../../components/ui/button";
import { ArrowLeftIcon } from "lucide-react";
import { Link } from "react-router-dom";


export const ViewReflection = (): JSX.Element => {
  const [searchTerm, setSearchTerm] = useState("");
  const [reflections, setReflections] = useState<{ title: string; content: string }[]>([]);

 useEffect(() => {
  const saved = localStorage.getItem("reflections");
  if (saved) {
    setReflections(JSON.parse(saved));
  }
}, []);


const handleDelete = (indexToDelete: number) => {
  const updated = reflections.filter((_, index) => index !== indexToDelete);
  setReflections(updated);
  localStorage.setItem("reflections", JSON.stringify(updated));

    // If it's the impactReflection, also clear from localStorage
    if (reflections[indexToDelete].title === "Impact of Weight Bias") {
      localStorage.removeItem("impactReflection");
    }
  };

  const filteredReflections = reflections.filter((reflection) =>
    reflection.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    reflection.content.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <main className="relative h-[844px] w-full bg-[#e6ebf0] max-w-[390px] mx-auto">
      {/* Header */}
       <header className="w-full h-[171px] bg-[#2e3b42] rounded-b-[25px] relative shadow-md">
        <h1 className="absolute w-[372px] top-[101px] left-[9px] text-white font-bold text-[28px] text-center font-['Poppins']">
        Reflections
        </h1>

        {/* Exit */}
    

        {/* Back */}
        <div className="absolute top-8 left-[17px] flex flex-col items-center">
          <Link to="/ResourcesCategories">
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

        {/* Reflections List */}
        {filteredReflections.length === 0 ? (
          <p className="text-center text-black font-['Poppins',Helvetica]">
            No reflections found.
          </p>
        ) : (
          <div className="grid grid-cols-1 gap-[15px]">
            {filteredReflections.map((reflection, index) => (
              <div
                key={index}
                className="w-full bg-[#2e3b42] rounded-2xl shadow-[0px_4px_4px_#00000040] p-4 relative"
              >
                <button
                  onClick={() => handleDelete(index)}
                  className="absolute top-8 right-3 text-white hover:text-[#F89725]"
                  title="Delete"
                >
                  <Trash2Icon className="h-5 w-5" />
                </button>
                <h3 className="text-white font-bold text-lg font-['Poppins'] mb-1">
                  {reflection.title}
                </h3>
                <p className="text-white text-sm font-['Poppins'] whitespace-pre-wrap">
                  {reflection.content}
                </p>
              </div>
            ))}
          </div>
        )}
        <Navbar />
      </main>
    </main>
  );
};
