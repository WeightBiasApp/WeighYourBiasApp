import { useState } from "react";
import { ArrowLeftIcon, LogOutIcon } from "lucide-react";
import { Button } from "../../components/ui/button";
import { Link } from "react-router-dom";
import targetImage from "../../assets/target.png";
import brainImage from "../../assets/brain.png";
import DeclineImage from "../../assets/decline.png";

export const ImpactOnPatients = (): JSX.Element => {
  const [flippedCard, setFlippedCard] = useState<number | null>(null);

 const factorsData = [
  {
    id: 1,
    title: "Physical Health Impact",
    imageSrc: targetImage,
    imageAlt: "target image",
     height: "h-[107px]",
      width: "w-[107px]",
      
description: "designed by Freepik from Flaticon", 
  link: "https://www.flaticon.com/free-icons/target",
   
    backText: (
      <>
  Weight stigma leads to worse health outcomes through{" "}
  <a
    href="https://pmc.ncbi.nlm.nih.gov/articles/PMC6650789/"
    target="_blank"
    rel="noopener noreferrer"
    className="text-[#F89725] font-bold underline"
  >
    delayed care, misdiagnosis, and inadequate treatment.
  </a>{" "}
  The chronic stress from experiencing stigma also elevates{" "}
  <a
    href="https://onlinelibrary.wiley.com/doi/10.1111/jan.13511"
    target="_blank"
    rel="noopener noreferrer"
    className="text-[#F89725] font-bold underline"
  >
    cortisol levels
  </a>
  , causing inflammation and metabolic changes that can worsen{" "}
  <a
    href="https://onlinelibrary.wiley.com/doi/10.1111/jan.13511"
    target="_blank"
    rel="noopener noreferrer"
    className="text-[#F89725] font-bold underline"
  >
    
    weight gain
  </a>{" "}
  and increase cardiovascular risks. Patients may avoid necessary care or have symptoms dismissed, resulting in missed diagnoses and untreated conditions.
</>

     
 

     
    ),
  },
  // ...other cards


    {
  id: 2,
  title: "Psychological Health Impact",
   imageSrc: brainImage,
    imageAlt: "brain image",
     height: "h-[107px]",
      width: "w-[107px]",
      
description: "designed by Smashicons from Flaticon",
  link: "https://www.flaticon.com/free-icons/brain",
   
  backText: (
    <>
      Experiencing weight stigma increases rates of  {" "}
      <a
        href="https://onlinelibrary.wiley.com/doi/10.1111/jan.13511"
        target="_blank"
        rel="noopener noreferrer"
        className="text-[#F89725] font-bold underline"
      >
        depression, anxiety, eating disorders, and low self-esteem.
      </a>{" "}
    The chronic stress from discrimination and shame can worsen mental health, create body dissatisfaction, and lead to unhealthy coping behaviours that further impact overall wellbeing.  
      
    </>
  ),
},


    {
      id: 3,
      title: "Reduced Health Care Seeking Behaviours",
      imageSrc: DeclineImage,
      imageAlt: "healthcare image",
      height: "h-[107px]",
      width: "w-[107px]",
  imageClass: "transform -scale-y-100 -scale-x-100 " ,
description: "designed by meaicon from Flaticon",
  link: "https://www.flaticon.com/free-icons/growth",
   
       backText: (
    <>
    
    
    Fear of weight-based judgement causes patients to delay or avoid healthcare situations entirely. Many become reluctant to discuss health concerns with healthcare providers, dread being weighed, and skip recommended screenings and preventive care. Embarrassment about their weight and    <a 
    
     href="https://pmc.ncbi.nlm.nih.gov/articles/PMC4902272/"
     className="text-[#F89725] font-bold underline"
      >
fear of receiving unsolicited weight loss advice 
      </a>{" "} leads to serious long-term consequences from untreated or late-diagnosed conditions.    </>
  ),
},

  ];

  return (
    <main className="relative flex flex-col h-[1140px] w-full max-w-[400px] mx-auto bg-[#e6ebf0]">
      {/* Header */}
      <header className="w-full h-[171px] bg-[#2e3b42] rounded-b-[25px] relative shadow-md">
       <h1 className="absolute max-w-[380px] left-[15px] right-[19px] top-[101px] text-white font-bold text-[20px] text-center font-['Poppins']">
          4: Impact of weight bias on patient outcomes & care experiences 
        </h1>

        {/* Exit */}
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
          <span className="mt-1 text-[10px] text-[#f89725] font-['Poppins']">Exit</span>
        </div>

        {/* Back */}
        <div className="absolute top-8 left-[17px] flex flex-col items-center">
          <Link to="/FactorsAndCauses">
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

      {/* Cards */}
      <section className="absolute top-[199px] left-1/2 transform -translate-x-1/2 flex flex-col gap-4 w-[371px]">
        {factorsData.map((factor) => (
          <div
            key={factor.id}
            className="w-full h-[245px] perspective-[1000px]"
            onClick={() =>
              setFlippedCard(flippedCard === factor.id ? null : factor.id)
            }
          >
            <div
              className="relative w-full h-full transition-transform duration-700"
              style={{
                transformStyle: "preserve-3d",
                transform:
                  flippedCard === factor.id ? "rotateY(180deg)" : "rotateY(0deg)",
              }}
            >
              {/* Front Side */}
              <div className="absolute w-full h-full bg-[#2e3b42] rounded-2xl p-4 flex items-center" style={{ backfaceVisibility: "hidden" }}>
                <div className="flex flex-col justify-center w-1/2 pl-3">
                  <h2 className="text-white text-lg font-bold font-['Poppins'] leading-tight">
                    {factor.title}
                  </h2>
                  <a
  href={factor.link}
  target="_blank"
  rel="noopener noreferrer"
  className="absolute top-[180px] left-[215px] text-[#636C71] text-[10px] font-medium font-['Poppins'] text-center max-w-[140px] leading-tight underline"
>
  {factor.description}
</a>
  </div>
           <img
                  src={factor.imageSrc}
                  alt={factor.imageAlt}
                   className={`${factor.width} ${factor.height} ${factor.imageClass}rounded-xl ml-auto mb-8 mr-4`}
                
                />
              </div>

              {/* Back Side */}
              <div
                className="absolute w-full h-full bg-[#2e3b42] rounded-2xl p-4 flex items-center"
                style={{
                  transform: "rotateY(180deg)",
                  backfaceVisibility: "hidden",
                }}
              >
                <p className="text-white text-[15px] font-medium font-['Poppins'] leading-[20px]">
                  {factor.backText}
                </p>
              </div>
            </div>
          </div>
        ))}
      </section>

      <section className="flex flex-col items-center px-4 mt-10">
        <Link
          to="/DietAdvice"
          className="absolute left-[92px] top-[1030px] w-[205px] h-[49px] bg-[#f89725] rounded-[25px] font-['Poppins',Helvetica] font-semibold text-black text-base tracking-[0.48px] hover:bg-[#e88615] flex items-center justify-center"
        >
          Next
        </Link>
      </section>
    </main>
  );
};
