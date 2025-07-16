import { useState } from "react";
import { ArrowLeftIcon, LogOutIcon } from "lucide-react";
import { Button } from "../../components/ui/button";
import { Link } from "react-router-dom";
import MedicalProfsImage from "../../assets/medical-team.png";
import StudentImage from "../../assets/student.png";



export const HealthcareProfessionals = (): JSX.Element => {
  const [flippedCard, setFlippedCard] = useState<number | null>(null);

 const factorsData = [
  {
    id: 1,
    title: "Healthcare Trainees/Students",
          imageSrc: StudentImage,
      imageAlt: "healthcare image",
      height: "h-[107px]",
      width: "w-[107px]",
      
description: "designed by Freepik from Flaticon",
  link: "https://www.flaticon.com/free-icons/graduation-hat",
   
    backText: (
      <>
         Weight bias begins early in healthcare education, with {" "}
        <a
          href="https://pmc.ncbi.nlm.nih.gov/articles/PMC3930920/#:~:text=Explicit%20(conscious)%20bias,preference%20was%20moderate%20or%20strong."
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#F89725] font-bold underline"
        >
          67% of medical students 
        </a>{" "}
       and similar rates among {" "}
       <a 
    
     href="https://onlinelibrary.wiley.com/doi/10.1111/jhn.12019"
     className="text-[#F89725] font-bold underline"
      >
        nursing students
      </a>{" "}  demonstrating implicit weight bias. This suggests that negative attitudes toward patients in larger bodies are already forming during professional training, before entering clinical practice.   </>
    ),
  },
  // ...other cards


    {
  id: 2,
  title: "Healthcare Professionals",
           imageSrc: MedicalProfsImage,
      imageAlt: "healthcare image",
      height: "h-[107px]",
      width: "w-[107px]",
      
description: "designed by Freepik from Flaticon",
  link: "https://www.flaticon.com/free-icons/doctor",
   
  backText: (
    <>
      Weight bias is widespread among {" "}
      <a
        href="https://onlinelibrary.wiley.com/doi/10.1002/oby.23266"
        target="_blank"
        rel="noopener noreferrer"
        className="text-[#F89725] font-bold underline"
      >
        practicing healthcare professionals,
      </a> {" "}
        with{" "}
   
    <a 
    
     href="https://pubmed.ncbi.nlm.nih.gov/17062811/"
     className="text-[#F89725] font-bold underline"
      >
        50-70%
      </a>{" "} exhibiting some form of bias against patients in larger bodies. This spans across all specialties, including 67% of medical professionals showing implicit bias and over 50% of physicians viewing patients with obesity negatively.   </>
  ),
},
   
  ];

  return (
    <main className="relative flex flex-col h-[844px] w-full max-w-[390px] mx-auto bg-[#e6ebf0]">
      {/* Header */}
      <header className="w-full h-[171px] bg-[#2e3b42] rounded-b-[25px] relative shadow-md">
        <h1 className="absolute w-[372px] top-[101px] left-[9px] text-white font-bold text-xl text-center font-['Poppins']">
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
          <Link to="/HealthcareExpectations">
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
            className="w-full h-[219px] perspective-[1000px]"
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
  className="absolute top-[170px] left-[230px] text-[#636C71] text-[10px] font-medium font-['Poppins'] text-center max-w-[120px] leading-tight underline"
>
  {factor.description}
</a>
                </div>
                <img
                    src={factor.imageSrc}
                    alt={factor.imageAlt}
                    className={`${factor.width} ${factor.height} rounded-xl ml-auto mr-2`}
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
          to="/PatientScenarioHowItWorks"
          className="absolute left-[92px] top-[750px] w-[205px] h-[49px] bg-[#f89725] rounded-[25px] font-['Poppins',Helvetica] font-semibold text-black text-base tracking-[0.48px] hover:bg-[#e88615] flex items-center justify-center"
        >
          Next
        </Link>
      </section>
    </main>
  );
};
