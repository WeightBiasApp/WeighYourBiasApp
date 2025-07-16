import { ChevronDownIcon, SearchIcon, HeartIcon } from "lucide-react";
import { useState, useEffect } from "react";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";
import { Input } from "../../components/ui/input";
import { Navbar } from "../../components/Navbar";
import { Link } from "react-router-dom";
import { LogOutIcon } from "lucide-react";
import { ArrowLeftIcon } from "lucide-react";

export const UnconsciousBiasResources = (): JSX.Element => {
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");
  const [showSortOptions, setShowSortOptions] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  // Load saved cards from localStorage on mount
  const [savedIds, setSavedIds] = useState<number[]>(() => {
    const savedCards = localStorage.getItem("savedCards");
    if (savedCards) {
      try {
        const parsed = JSON.parse(savedCards);
        return parsed.map((c: { id: number }) => c.id);
      } catch {
        return [];
      }
    }
    return [];
  });

  // Update localStorage whenever savedIds change
  useEffect(() => {
    // Save full card objects to localStorage for persistence
    // We will find the saved cards by matching savedIds with sectionCards below
    const savedCards = sectionCards.filter((card) => savedIds.includes(card.id));
    localStorage.setItem("savedCards", JSON.stringify(savedCards));
  }, [savedIds]);

  const sectionCards = [
    {
      id: 1,
      title: "Morbidly Obese Patients’ Experiences of Mobility During Hospitalisation and Rehabilitation: A Qualitative Descriptive Study",
      link: "https://www.nursingpraxis.org/article/83487-morbidly-obese-patients-experiences-of-mobility-during-hospitalisation-and-rehabilitation-a-qualitative-descriptive-study",
      subtitle: "Morbid obesity is strongly linked to declining mobility and is a main risk factor for...",
      description: "Hales, C., Curran, N., & de Vries, K. ",
    },
    {
      id: 2,
      title: "A Neural Network Framework for Cognitive Bias",
      link: "https://pmc.ncbi.nlm.nih.gov/articles/PMC6129743/#abstract1",
      subtitle: "Human decision-making shows systematic simplifications and deviations from the tenets of rationality (‘heuristics’) that may lead to suboptimal decisional outcomes (‘cognitive biases’).",
      description: "Korteling, J. E., Brouwer, A.-M., & Toet, A.",
 
    },
    {
      id: 3,
      title: "Weight Stigma and Barriers to Effective Obesity Care",
      link: "https://doi.org/10.1016/j.gtc.2023.02.002",
      subtitle: "Weight stigma is prevalent and has negative consequences for health and well-being. This problem is present in health care, with stigmatizing attitudes toward patients with obesity expressed by medical...",
      description: "Puhl, R. M.",
    },
    
     
    
    // Add other cards here...
  ];

  const filteredCards = sectionCards
    .filter((card) => card.title.toLowerCase().includes(searchTerm.toLowerCase()))
    .sort((a, b) => {
      if (sortOrder === "asc") return a.title.localeCompare(b.title);
      return b.title.localeCompare(a.title);
    });

  // Toggle save/un-save a card
  const toggleSave = (card: { id: number; title: string }) => {
    setSavedIds((prev) =>
      prev.includes(card.id) ? prev.filter((id) => id !== card.id) : [...prev, card.id]
    );
  };

  return (
    <main className="relative h-[1044px] w-full bg-[#e6ebf0] max-w-[390px] mx-auto">
      {/* Header */}
      <div className="w-full h-[136px] bg-[#2e3b42] rounded-[0px_0px_25px_25px] shadow-[0px_4px_4px_#00000040]">
        <h1 className="absolute w-[363px] top-[59px] left-3.5 font-['Inter',Helvetica] font-bold text-white text-[28px] text-center tracking-[0.50px]  leading-8">
         Unconscious Bias Resources
        </h1>
      </div>
       {/* Exit Button */}
        <div className="absolute top-8 right-[17px] flex flex-col items-center">
          <Link to="/HomePageItteration">
            <Button
              variant="outline"
              size="icon"
              className="h-[34px] w-[35px] rounded-full bg-[#f89725] p-0 border-none"
            >
              <LogOutIcon className="h-6 w-6 text-[#2e3b42]" />
            </Button>
          </Link>
          <span className="mt-1 font-['Poppins',Helvetica] text-[10px] text-[#f89725]">
            Exit
          </span>
        </div>

        {/* Back Button */}
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
          <span className="mt-1 font-['Poppins',Helvetica] text-[10px] text-[#f89725]">
            Back
          </span>
        </div>

      {/* Search Bar */}
      <div className="absolute top-[165px] left-1/2 -translate-x-1/2 w-[342px]">
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

      {/* Sort Button */}
      <div className="absolute w-[79px] h-[25px] top-[250px] right-[38px]">
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

      {/* Section Cards Grid */}
      <div className="absolute top-[293px] left-1/2 -translate-x-1/2 w-[351px] flex flex-col gap-[15px]">
        {filteredCards.map((section) => (
          <Card
            key={section.id}
            
            className="w-[351px] h-[200px] bg-[#2e3b42] rounded-2xl shadow-[0px_4px_4px_#00000040] relative"
          >
            
            <CardContent className="p-4">
              {/* Heart icon button */}
              <button
                onClick={() => toggleSave(section)}
                className="absolute top-3 right-3"
                aria-label={`Save ${section.title}`}
              >
                <HeartIcon
                  className={`h-5 w-5 ${
                    savedIds.includes(section.id) ? "fill-[#f89725] text-[#f89725]" : "text-white"
                  }`}
                />
              </button>

              {/* Title link */}
              {section.link ? (
                <a
                  href={section.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-['Poppins',Helvetica] font-bold text-white text-[18px] max-w-[300px] leading-tight mb-1 hover:underline block"
                >
                  {section.title}
                </a>
              ) : (
                <h3 className="font-['Poppins',Helvetica] font-bold text-white text-[18px] leading-tight max-w-[200px] mb-1">
                  {section.title}
                </h3>
              )}

              {/* Subtitle and description */}
              {section.subtitle && (
                <h4 className="font-['Poppins',Helvetica] font-semibold text-[#f89725] text-sm mb-1">
                  {section.subtitle}
                </h4>
              )}
              {section.description && (
                <p className="font-['Poppins',Helvetica] text-white text-sm leading-snug">{section.description}</p>
              )}
            </CardContent>
          </Card>

          
        ))}
      </div>

      <Navbar />
    </main>
  );
};
