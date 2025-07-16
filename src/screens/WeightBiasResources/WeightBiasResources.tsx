import { ChevronDownIcon, SearchIcon, HeartIcon } from "lucide-react";
import { useState, useEffect } from "react";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";
import { Input } from "../../components/ui/input";
import { Navbar } from "../../components/Navbar";
import { Link } from "react-router-dom";
import { LogOutIcon } from "lucide-react";
import { ArrowLeftIcon } from "lucide-react";

export const WeightBiasResources = (): JSX.Element => {
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
      title: "Weight bias and health care utilization: a scoping review",
      link: "https://pmc.ncbi.nlm.nih.gov/articles/PMC6650789/",
      subtitle: "The purpose of this scoping review was to explore the evidence on how perceptions and/or experiences of weight bias in primary health...",
      description: "Alberga, Angela S., Iyoma Y. Edache, Mary Forhan, and Shelly Russell-Mayhew. ",
    },
    {
      id: 2,
      title: "Impact of perceived weight stigma among underserved women on doctor–patient relationships",
      link: "https://pmc.ncbi.nlm.nih.gov/articles/PMC4902272/",
      subtitle: "The aim of this study was to evaluate how...",
      description: "Ferrante, J. M., K. Seaman, A. Bator, P. Ohman‐Strickland, D. Gundersen, L. Clemow, and R. Puhl.",
 
    },
    {
      id: 3,
      title: "Contributors to patient engagement in primary health care: perceptions of patients with obesity",
      link: "https://pubmed.ncbi.nlm.nih.gov/23237022/",
      subtitle: "Patients with obesity are at risk for treatment avoidance and nonadherence. Factors that contribute to engagement...",
      description: "Forhan, M., Risdon, C., & Solomon, P.",
    },
     {
      id: 4,
      title: "From fatness to badness: The modern morality of obesity",
      link: "https://journals.sagepub.com/doi/10.1177/1363459312447254",
      subtitle: "Obesity (or being overweight) is now considered a by-product of membership of developed societies. Moreover, it is considered a growing ‘global’ health problem.",
      description: "Grønning, I., Scambler, G., & Tjora, A.",
    },
     {
      id: 5,
      title: "Prior doctor shopping resulting from differential treatment correlates with differences in current patient-provider relationships",
      link: "https://pmc.ncbi.nlm.nih.gov/articles/PMC4149586/",
      subtitle: "To determine the prevalence of doctor...",
      description: "Gudzune, K. A., Bennett, W. L., Cooper, L. A., Clark, J. M., & Bleich, S. N.",
    },
    {
      id: 6,
      title: "Managing social awkwardness when caring for morbidly obese patients in intensive care: A focused ethnography",
      link: "https://pubmed.ncbi.nlm.nih.gov/27087301/",
      subtitle: "Critically ill morbidly obese patients pose considerable healthcare delivery and resource utilisation challenges in...",
      description: "Hales, C., de Vries, K., & Coombs, M.",
    },
      {
      id: 7,
      title: "Weight bias among health care professionals: A systematic review and meta-analysis",
      link: "https://onlinelibrary.wiley.com/doi/10.1002/oby.23266",
      subtitle: "Weight-biased attitudes and views held by health care professionals can have...",
      description: "Lawrence, B. J., Kerr, D., Pollard, C. M., Theophilus, M., Alexander, E., Haywood, D., & O’Connor, M.",
    },
    {
      id: 8,
      title: "Weight Bias Interventions for Healthcare Professionals: An Integrative Review",
      link: "https://onlinelibrary.wiley.com/doi/full/10.1111/jan.17065?campaign=wolearlyview",
      subtitle: "To describe interventions to mitigate weight bias among practicing healthcare providers and examine their effectiveness.",
      description: "Marler, G. S., Turk, M. T., Kalarchian, M., Oermann, M. H., Sabol, V. K., & Phelan, S. M.",
    },
     {
      id: 9,
      title: "Women’s stories of their experiences as overweight patients",
      link: "https://onlinelibrary.wiley.com/doi/10.1111/j.1365-2648.2008.04794.x",
      subtitle: "his paper is a report of a study to illuminate the meaning of women’s experiences as overweight patients in their encounters with healthcare services and healthcare...",
      description: "Merrill, E., & Grassley, J.",
    },
    {
      id: 10,
      title: "Are Medical Students Aware of Their Anti-Obesity Bias?",
      link: "https://pmc.ncbi.nlm.nih.gov/articles/PMC3930920/#:~:text=Explicit%20(conscious)%20bias,preference%20was%20moderate%20or%20strong.",
      subtitle: "Anti-obesity prejudices affect the quality of care obese individuals receive. The authors sought to determine the prevalence...",
      description: "Miller, D. P., Jr., Spangler, J. G., Vitolins, M. Z., Davis, S. W., Ip, E. H., Marion, G. S., & Crandall, S. J.",
    },
    {
      id: 11,
      title: "Interventions for reducing weight bias in healthcare providers: An interprofessional systematic review and meta-analysis",
      link: "https://onlinelibrary.wiley.com/doi/abs/10.1111/cob.12545",
      subtitle: "Weight bias is prevalent in many...",
      description: "Moore, C. H., Oliver, T. L., Randolph, J., & Dowdell, E. B.",
    },
    {
      id: 12,
      title: "Knowledge gaps and weight stigma shape attitudes toward obesity",
      link: "https://doi.org/10.1016/S2213-8587(20)30073-5",
      subtitle: "Substantial evidence shows that weight-related stigma is very pervasive, causes physical and psychological harm to people who experience it, and leads to...",
      description: "O'Keeffe, M., Flint, S. W., Watts, K., & Rubino, F.",
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
    <main className="relative h-[3244px] w-full bg-[#e6ebf0] max-w-[390px] mx-auto">
      {/* Header */}
      <div className="w-full h-[136px] bg-[#2e3b42] rounded-[0px_0px_25px_25px] shadow-[0px_4px_4px_#00000040]">
        <h1 className="absolute w-[363px] top-[89px] left-3.5 font-['Inter',Helvetica] font-bold text-white text-[28px] text-center tracking-[0.50px]  leading-8">
          Weight Bias Resources
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
