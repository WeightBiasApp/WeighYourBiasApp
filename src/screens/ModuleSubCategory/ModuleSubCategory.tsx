import { ArrowLeftIcon, PlayIcon } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";
import { Progress } from "../../components/ui/progress";

// Module data for mapping
const moduleItems = [
  {
    id: 1,
    title: "Definitions and Terminology",
    link: "/ModuleLearningObjective", // route for first card
  },
  {
    id: 2,
    title: "Origins and perpetuating factors of weight bias",
    link: "/WeightBiasRecognition", // route for second card
  },
  {
    id: 3,
    title: "Recognising weight-bias in healthcare settings",
    link: "/FactorsAndCauses"
  },
  {
    id: 4,
    title: "Patient Narratives (Video/Articles)",
    link: "/DietAdvice"
  },
  {
    id: 5,
    title: "Self-Reflections",
        link: "/ImpactReflection"
    
  },
  {
    id: 6,
    title: "Case Scenario",
    link: "/PatientScenarioHowItWorks"
  },
];

export const ModuleSubCategory = (): JSX.Element => {
  return (
    <div
      className="relative h-[844px] w-full bg-[#e6ebf0] max-w-[390px] mx-auto"
      data-model-id="322:4543"
    >
      {/* Header */}
      <header className="relative w-full h-[171px] bg-[#2e3b42] rounded-[0px_0px_25px_25px] shadow-[0px_4px_4px_#00000040]">
        <h1 className="absolute w-[314px] top-[110px] left-1/2 -translate-x-1/2 font-['Poppins',Helvetica] font-bold text-white text-2xl text-center tracking-[0] leading-[32.4px]">
          What is Weight Bias?
        </h1>

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
          <span className="mt-1 font-['Poppins',Helvetica] text-[10px] text-[#f89725]">
            Back
          </span>
        </div>
      </header>

      {/* Module content */}
      <main className="pt-[28px] px-3 pb-6 flex flex-col gap-[19px]">
        {moduleItems.map((item) => {
          const card = (
            <Card
              key={item.id}
              className="w-full h-[120px] bg-[#2e3b42] rounded-2xl relative border-none cursor-pointer"
            >
              <CardContent className="p-0 h-full">
                {/* Module number */}
                <div className="absolute w-7 top-[12px] left-[18px] bg-[#E6EBF0] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] font-['Poppins',Helvetica] font-bold text-pow text-[32px] tracking-[0] leading-[43.2px]">
                  {item.id}
                </div>

                {/* Module title */}
                <h2 className="absolute w-[218px] top-[19px] left-12 font-['Poppins',Helvetica] font-bold text-white text-[24px] text-base tracking-[0] leading-[21.6px]">
                  {item.title}
                </h2>

                  {/* PlayIcon button */}
                <Button
                  className="absolute w-[60px] h-[60px] top-4 right-5 p-0 bg-white border-[#f89725] border-4 hover:bg-transparent rounded-full"
                  aria-label={`PlayIcon ${item.title}`}
                >
                  <PlayIcon
  className="w-[60px] h-[60px] text-[#f89725]"
  strokeWidth={4}      // ← thicker line (default is 2)
 />

                </Button>

                {/* Progress bar */}
                <div className="absolute w-[333px] h-3.5 bottom-4 left-4">
                  <Progress
                    value={0}
                    className="w-full h-3.5 bg-white rounded-2xl [&>div]:bg-[#f89725] [&>div]:rounded-2xl"
                  />
                </div>
              </CardContent>
            </Card>
          );

          return item.link ? (
            <Link to={item.link} key={item.id}>
              {card}
            </Link>
          ) : (
            <div key={item.id}>{card}</div>
          );
        })}
      </main>
    </div>
  );
};
