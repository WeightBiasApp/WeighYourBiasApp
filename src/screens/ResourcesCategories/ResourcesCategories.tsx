import { TrashIcon, ChevronDownIcon, SearchIcon } from "lucide-react";

import { useState, useEffect } from "react";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";
import { Input } from "../../components/ui/input";
import { Navbar } from "../../components/Navbar";
import { useNavigate } from "react-router-dom";


interface CardType {
  id: number;
  title: string;
  path?: string;
  subtitle?: string;
  description?: string;
}

export const ResourcesCategories = (): JSX.Element => {
  const [activeTab, setActiveTab] = useState("resources");
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");
  const [showSortOptions, setShowSortOptions] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();
  const handleDelete = (id: number) => {
  const updated = savedCards.filter(card => card.id !== id);
  setSavedCards(updated);                                   // update UI
  localStorage.setItem("savedCards", JSON.stringify(updated)); // persist
};


  // Load saved cards fully from localStorage on mount
  const [savedCards, setSavedCards] = useState<CardType[]>(() => {
    const saved = localStorage.getItem("savedCards");
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch {
        return [];
      }
    }
    
    return [];
  });

  // Update savedCards state if localStorage changes externally (optional)
  useEffect(() => {
    const handleStorageChange = () => {
      const saved = localStorage.getItem("savedCards");
      if (saved) {
        try {
          setSavedCards(JSON.parse(saved));
        } catch {
          setSavedCards([]);
        }
      } else {
        setSavedCards([]);
      }
    };
    window.addEventListener("storage", handleStorageChange);



    
    
    return () => window.removeEventListener("storage", handleStorageChange);
  }, []);

  const sectionCards: CardType[] = [
    { id: 1, title: "Weight Bias", path: "/WeightBiasResources" },
    { id: 2, title: "Unconscious Bias", path: "/UnconsciousBiasResources" },
    { id: 3, title: "Recognising Weight Stigma in Clinical Practice" , path: "/SIResources" },
    { id: 4, title: "Health at Every Size" },
    { id: 5, title: "Conversations About Weight And Body Size" , path: "/ConvoResources"},
    { id: 6, title: "Size Inclusive Accessible Care Environments"  },
  ];

  const videoCards: CardType[] = [
    { id: 1, title: "Changing Your Appearance", path: "/changingyourappearance" },
    { id: 2, title: "ED Trolley", path: "/EDTrolley" },
    { id: 3, title: "Good Care Practices", path: "/GoodCarePractices" },
    { id: 4, title: "Low Calorie SandWich", path: "/LowCalSandwich" },
    { id: 5, title: "Minibus Assumptions", path: "/Minibus" },
    { id: 6, title: "Physio And Stairs", path: "/Physio" },
    { id: 7, title: "CT Scanner ", path: "/ctscanner" },
  ];

  const filteredCards = sectionCards
    .filter((card) =>
      card.title.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .sort((a, b) => {
      if (sortOrder === "asc") return a.title.localeCompare(b.title);
      return b.title.localeCompare(a.title);
    });

  return (
    <main className="relative h-[1244px] w-full bg-[#e6ebf0] max-w-[390px] mx-auto">
      {/* Header */}
      <div className="w-full h-[136px] bg-[#2e3b42] rounded-[0px_0px_25px_25px] shadow-[0px_4px_4px_#00000040]">
        <h1 className="absolute w-[363px] top-[77px] left-3.5 font-['Inter',Helvetica] font-bold text-white text-[32px] text-center tracking-[0.50px] leading-8">
          Resources
        </h1>
      </div>

      {/* Custom Tabs */}
      <div className="absolute top-[26px] left-1/2 -translate-x-1/2 w-[342px] h-[52px] bg-white rounded-[56px] shadow-md flex relative z-10">
        <div
          className="absolute top-0 h-full w-[116px] bg-[#f89725] rounded-[56px] transition-all duration-300"
          style={{
            left:
              activeTab === "resources"
                ? 0
                : activeTab === "videos"
                ? 113
                : 226,
          }}
        />
        {[
          { key: "resources", label: "Resources" },
          { key: "videos", label: "Videos" },
          { key: "saved", label: "My Saved" },
        ].map((tab) => (
          <button
            key={tab.key}
            onClick={() => setActiveTab(tab.key)}
            className={`z-20 flex-1 h-full font-['Poppins',Helvetica] font-medium text-sm rounded-[25px] transition-colors duration-200 ${
              activeTab === tab.key ? "text-black" : "text-[#2e3b42]"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Search Bar */}
      {activeTab !== "saved" && (
        <div className="absolute top-[235px] left-1/2 -translate-x-1/2 w-[342px]">
          <div className="relative flex items-center">
            <SearchIcon className="absolute left-4 h-5 w-5 text-[#f89725]" />
            <Input
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-12 pr-24 py-4 h-[54px] bg-white rounded-[25px] border-2 border-solid font-['Poppins',Helvetica] font-medium shadow-[0px_4px_10px_#00000040]"
              placeholder="Search"
            />
          </div>
        </div>
      )}

      {/* Sort Button */}
      {activeTab !== "saved" && (
        <div className="absolute w-[79px] h-[25px] top-[309px] right-[38px]">
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
      )}

      {/* Resources Tab */}
      {activeTab === "resources" && (
        <div className="absolute top-[353px] left-1/2 -translate-x-1/2 w-[351px] grid grid-cols-2 gap-[15px]">
          {filteredCards.map((section) => (
            <Card
              key={section.id}
              onClick={() => section.path && navigate(section.path)}
              className="w-[168px] h-[151px] bg-[#2e3b42] rounded-2xl shadow-[0px_4px_4px_#00000040] cursor-pointer"
            >
              <CardContent className="p-0">
                <div className="p-3">
                  <h3 className="font-['Poppins',Helvetica] font-bold text-white text-base py-8 text-center tracking-[0] leading-[21.6px]">
                    {section.title}
                  </h3>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}

      {/* Videos Tab */}
      {activeTab === "videos" && (
        <div className="absolute top-[353px] left-1/2 -translate-x-1/2 w-[351px] grid grid-cols-2 gap-[15px]">
          {videoCards.map((video) => (
            <Card
              key={video.id}
              onClick={() => video.path && navigate(video.path)}
              className="w-[168px] h-[151px] bg-[#2e3b42] rounded-2xl shadow-[0px_4px_4px_#00000040] cursor-pointer"
            >
              <CardContent className="p-0">
                <div className="p-3">
                  <h3 className="font-['Poppins',Helvetica] font-bold text-white text-base py-10 text-center tracking-[0] leading-[21.6px]">
                    {video.title}
                  </h3>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}

     {/* My Saved Tab */}
{activeTab === "saved" && (
  <div className="mt-[70px] mx-auto w-[351px] flex flex-col gap-[15px] h-[calc(100vh-200px)] overflow-y-auto pr-2">

    {savedCards.length === 0 ? (
      <p className="text-center font-['Poppins',Helvetica] text-gray-500 mt-10">You have no saved resources yet</p>
    ) : (
      savedCards.map((card) => (
        <Card
          key={card.id}
          onClick={() => card.path && navigate(card.path)}
          className="relative w-full bg-[#2e3b42] rounded-2xl shadow-[0px_4px_4px_#00000040] cursor-pointer"
        >
          {/* delete button */}
          <button
            onClick={(e) => {
              e.stopPropagation();       // don’t trigger card navigation
              handleDelete(card.id);
            }}
            className="absolute top-2 right-2 p-1 rounded-full hover:bg-[#f89725]/20 focus:outline-none"
          >
            <TrashIcon className="h-5 w-5 text-[#f89725]" />
          </button>

          <CardContent className="p-4">
            <h3 className="font-['Poppins'] font-bold text-white text-lg mb-1">
              {card.title}
            </h3>
            {card.subtitle && (
              <h4 className="font-['Poppins'] font-semibold text-[#f89725] text-sm mb-1">
                {card.subtitle}
              </h4>
            )}
            {card.description && (
              <p className="font-['Poppins'] text-white text-sm leading-snug">
                {card.description}
              </p>
            )}
          </CardContent>
        </Card>
      ))
    )}
  </div>
)}


      <Navbar />
    </main>
  );
};
