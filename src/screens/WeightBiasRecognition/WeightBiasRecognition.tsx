import { ArrowLeftIcon, LogOutIcon } from "lucide-react";
import { Card, CardContent,} from "../../components/ui/card";
import { useState } from "react";
import { useSwipeable } from "react-swipeable";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "../../components/ui/button";
import DiscussionImage from "../../assets/discussion.png";
import ExcludeImage from "../../assets/exclude.png";
import BloodTestImage from "../../assets/bloodtest.png";
import DismissImage from "../../assets/dismiss.png";
import GurneyImage from "../../assets/gurney.png";
import RegistrationImage from "../../assets/registration.png";

export const WeightBiasRecognition = (): JSX.Element => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const navigate = useNavigate();

  const cards = [
    {
      title: "Verbal communication",
      points: [
        "Using stigmatising language.",
        "Expressing frustration with patients who haven't lost weight.",
      ],
      imageSrc:
        DiscussionImage, 

        CardDescription: "designed by Freepik from Flaticon",
        Link: "https://www.flaticon.com/search/4?word=discussion&color=red&shape=fill",


    },
    {
      title: "Non-verbal Communication",
      points: [
        "Displaying negative facial expressions.",
        "Maintaining less eye contact.",
      ],
      imageSrc:
        ExcludeImage, 

        CardDescription: "designed by Freepik from Flaticon",
        Link: "https://www.flaticon.com/free-icons/exclude",

   
      },
    {
      title: "Clinical Decision-Making",
      points: [
        "Attributing symptoms to weight.",
        "Delaying diagnostic test until a patient loses weight.",
      ],
     imageSrc:
        BloodTestImage, 

        CardDescription: "designed by Freepik from Flaticon",
        Link: "https://www.flaticon.com/free-icons/blood-test",

    
      },
    {
      title: "Time and Resource Allocation",
      points: [
        "Spending less time with a patient.",
        "Providing vague explanations of care.",
      ],
      imageSrc:
        DismissImage, 

        CardDescription: "designed by Freepik from Flaticon",
        Link: "https://www.flaticon.com/free-icons/dismiss",

   
      },
    {
      title: "Environmental Factors",
      points: [
        "Lacking appropriate sized equipment.",
        "Displaying health education material that stigmatises larger bodies​.",
      ],
      imageSrc:
        GurneyImage, 

        CardDescription: "designed by Freepik from Flaticon",
         Link: "https://www.flaticon.com/free-icons/gurney",

   
      },
    {
      title: "Documentation Practices",
      points: [
        "Using Stigmatising language in health records.",
        "Failing to provide weight-related patient concerns.",
      ],
      imageSrc:
        RegistrationImage, 

        CardDescription: "designed by zero_wing from Flaticon",
       Link: "https://www.flaticon.com/free-icons/registration",

  
    },
  ];

  const handlers = useSwipeable({
    onSwipedLeft: () =>
      setCurrentIndex((prev) => Math.min(prev + 1, cards.length - 1)),
    onSwipedRight: () => setCurrentIndex((prev) => Math.max(prev - 1, 0)),
    trackMouse: true,
  });

  const currentCard = cards[currentIndex];

  return (
    <div
      className="relative flex flex-col h-[870px] w-full max-w-[390px] mx-auto bg-[#e6ebf0]"
      data-model-id="709:2487"
    >
      {/* Header */}
      <header className="absolute w-[390px] h-[178px] top-0 left-0 bg-[#2e3b42] rounded-[0px_0px_25px_25px] shadow-[0px_4px_4px_#00000040]">
        <h1 className="absolute w-[343px] top-[101px] left-6 font-['Poppins',Helvetica] font-bold text-white text-xl text-center tracking-[0] leading-[27px]">
          2: Recognising weight-bias in healthcare settings
        </h1>

        {/* Exit Button */}
        <div className="absolute top-8 right-[17px] flex flex-col items-center">
          <Link to="/ModuleSubCategory">
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
          <Link to="/KeyAspects">
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

      {/* Swipeable Card */}
      <div
        {...handlers}
        className="absolute w-[371px] h-[546px] top-52 left-2.5 touch-pan-x"
      >
        <Card className="relative w-[371px] h-[506px] bg-[#2e3b42] rounded-2xl border-none">
          <CardContent className="p-0">
            <h2 className="absolute top-[25px] left-1/2 transform -translate-x-1/2 text-center font-['Poppins',Helvetica] max-w-[333px] font-bold text-white text-[22px] tracking-[0] leading-[29.7px] whitespace-nowrap">
              {currentCard.title}
            </h2>

            <ul className="absolute w-[338px] top-[84px] left-[11px] font-['Poppins',Helvetica] font-semibold text-white text-[18px] tracking-[0] leading-[21.6px] space-y-4 list-disc pl-5">
              {currentCard.points.map((point, index) => (
                <li key={index} className="mb-1">
                  {point}
                </li>
              ))}
            </ul>

          <img
  className="absolute w-[222px] h-[222px] top-[215px] left-1/2 -translate-x-1/2 rounded-lg"
  alt="Healthcare professional"
  src={currentCard.imageSrc}
/>


<p className="absolute top-[445px] left-1/2 transform -translate-x-1/2 text-center font-['Poppins',Helvetica] max-w-[333px] font-medium text-[#636C71] text-[10px] tracking-[0] leading-[29.7px] whitespace-nowrap">
              {currentCard.CardDescription}
            </p>
            

        </CardContent>
        </Card>

        {/* Progress Bar */}
        <div className="absolute w-48 h-3.5 top-[532px] left-[89px] bg-white rounded-2xl">
          <div
            className="h-3.5 bg-[#f89725] rounded-2xl transition-all duration-300"
            style={{
              width: `${100 / cards.length}%`,
              transform: `translateX(${currentIndex * 100}%)`,
            }}
          />
        </div>
      </div>

      {/* Show "Next" Button on Last Card Only */}
      {currentIndex === cards.length - 1 && (
        <div className="absolute bottom-10 w-full flex justify-center">
          <Button
            onClick={() => navigate("/FactorsAndCauses")}
            className="w-[205px] h-[49px] bg-[#f89725] rounded-[25px] font-['Poppins',Helvetica] font-semibold text-black text-base tracking-[0.48px] hover:bg-[#e88615]"
          >
            Next
          </Button>
        </div>
      )}
    </div>
  );
};
