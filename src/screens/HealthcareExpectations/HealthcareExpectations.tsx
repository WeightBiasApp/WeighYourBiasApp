import { useState } from "react";
import { ArrowLeftIcon, LogOutIcon } from "lucide-react";
import { Button } from "../../components/ui/button";
import { Link } from "react-router-dom";
import handshakeImage from "../../assets/010-handshake.png";
import expectationImage from "../../assets/011-expectation.png";

export const HealthcareExpectations = (): JSX.Element => {
  const [flippedCard, setFlippedCard] = useState<number | null>(null);

  const factorsData = [
    {
      id: 1,
      title: "Expectations of differential healthcare",
            imageSrc: expectationImage,
            imageAlt: "healthcare image",
            height: "h-[107px]",
            width: "w-[107px]",
            
      description: "designed by Freepik from Flaticon",
        link: "https://www.flaticon.com/free-icons/health",
         
      backText: (
        <>
          Patients in larger bodies often expect to receive{" "}
          <a
            href="https://pmc.ncbi.nlm.nih.gov/articles/PMC6650789/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#F89725] font-bold underline"
          >
            different, lower-quality healthcare
          </a>{" "}
          because of their weight. Many anticipate negative stereotypes and biased treatment during healthcare interactions, including maternity care. When patients experience weight-focused interactions or feel their care is compromised due to their size, they may engage in{" "}
          <a
            href="https://pmc.ncbi.nlm.nih.gov/articles/PMC4149586/"
            className="text-[#F89725] font-bold underline"
          >
            "doctor shopping"
          </a>{" "}
          – searching for new healthcare providers who offer better, more respectful treatment. Studies show that 13–21% of patients have changed doctors due to perceived weight stigma and differential care.
        </>
      ),
    },
    {
      id: 2,
      title: "Low trust and communication",
          imageSrc: handshakeImage,
      imageAlt: "healthcare image",
      height: "h-[107px]",
      width: "w-[107px]",
      
description: "designed by Freepik from Flaticon",
  link: "https://www.flaticon.com/free-icons/handshake",
   
      backText: (
        <>
          Weight bias significantly damages the patient-healthcare provider relationship through{" "}
          <a
            href="https://pubmed.ncbi.nlm.nih.gov/23237022/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#F89725] font-bold underline"
          >
            poor communication and eroded trust. 
          </a>
          Patients become reluctant to discuss weight concerns, feeling they cannot speak freely with health professionals who hold negative preconceptions. Healthcare providers often demonstrate lower emotional rapport with patients in larger bodies and provide rushed, insensitive communication. When patients{" "}
          <a
            href="https://pubmed.ncbi.nlm.nih.gov/23237022/"
            className="text-[#F89725] font-bold underline"
          >
            perceive judgement 
          </a>{" "}
         about their weight, they're less likely to trust their healthcare providers and may withhold important health information, compromising the quality of care.  </>
      ),
    },
  ];

  return (
    <main className="relative flex flex-col min-h-screen w-full max-w-[390px] mx-auto bg-[#e6ebf0] pb-10">
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
          <Link to="/WeightBiasRecognition">
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
      <section className="mt-[19px] px-4 flex flex-col gap-6 w-full">
        {factorsData.map((factor) => {
          const isFlipped = flippedCard === factor.id;
          return (
  <div
  key={factor.id}
  onClick={() => setFlippedCard(isFlipped ? null : factor.id)}
  className={`relative w-full transition-all duration-500 perspective-[1000px] ${
    isFlipped ? "h-[349px]" : "h-[219px]"
  }`}
>
  <div
    className="relative w-full h-full transition-transform duration-700"
    style={{
      transformStyle: "preserve-3d",
      transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)",
    }}
  >
    {/* Front Side */}
    <div
      className="absolute w-full h-[219px] bg-[#2e3b42] rounded-2xl p-4 flex items-center"
      style={{ backfaceVisibility: "hidden" }}
    >
      <div className="flex flex-col justify-center w-1/2 pl-3">
        <h2 className="text-white text-lg font-bold font-['Poppins'] leading-tight">
          {factor.title}
        </h2>
        <a
  href={factor.link}
  target="_blank"
  rel="noopener noreferrer"
  className="absolute top-[170px] left-[205px] text-[#636C71] text-[10px] font-medium font-['Poppins'] text-center max-w-[140px] leading-tight underline"
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
      className="relative w-full h-[349px] bg-[#2e3b42] rounded-2xl p-4 flex items-center"
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

          );
        })}
      </section>

      {/* Next Button */}
      <section className="flex flex-col items-center px-4 mt-10">
        <Link
          to="/HealthcareProfessionals"
          className="w-[205px] h-[49px] bg-[#f89725] rounded-[25px] font-['Poppins',Helvetica] font-semibold text-black text-base tracking-[0.48px] hover:bg-[#e88615] flex items-center justify-center"
        >
          Next
        </Link>
      </section>
    </main>
  );
};
