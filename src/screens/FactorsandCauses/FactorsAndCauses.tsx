import { useState } from "react";
import { ArrowLeftIcon, LogOutIcon } from "lucide-react";
import { Button } from "../../components/ui/button";
import { Link } from "react-router-dom";
import GlobeImage from "../../assets/globepeople.png";
import openbookImage from "../../assets/openbook.png";
import MediaImage from "../../assets/media.png";

export const FactorsAndCauses = (): JSX.Element => {
  const [flippedCard, setFlippedCard] = useState<number | null>(null);

 const factorsData = [
  {
    id: 1,
    title: "Society's idealisation of thin bodies",
    imageSrc: GlobeImage,
    imageAlt: "Illustration of diverse people",
    height: "h-[117px]",
      width: "w-[97px]",
    backText: (
      <>
         Society's emphasis on thinness has created harmful standards that connect being{" "}
        <a
          href="https://journals.sagepub.com/doi/10.1177/1363459312447254"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#F89725] font-bold underline"
        >
          thin with health, success, and virtue
        </a>{" "}
        has created harmful standards that connect being thin with health, success, and virtue. The diet and fitness industries promote unrealistic body ideals, while changing beauty standards over time have shaped how we judge people based on their weight, leading to widespread bias and stigma. 
      </>
    ),
  },
  // ...other cards


    {
  id: 2,
  title: "The 'personal responsibility' myth",
  imageSrc: openbookImage,
  imageAlt: "Illustration of a book with stars",
  height: "h-[75px]",
  width: "w-[97px]",
  backText: (
    <>
      Many people believe weight is entirely under {" "}
      <a
        href="https://www.nature.com/articles/ijo201532"
        target="_blank"
        rel="noopener noreferrer"
        className="text-[#F89725] font-bold underline"
      >
        individual control
      </a>{" "}
    , following the oversimplified "calories in, calories out" approach. This ignores the complex reality of  <a 
    
     href="https://www.thelancet.com/journals/landia/article/PIIS2213-8587(24)00316-4/abstract"
     className="text-[#F89725] font-bold underline"
      >
        genetics, environment, socioeconomic factors, and the biological mechanisms
      </a>{" "}  that regulate body weight. These misunderstandings fuel blame and judgement toward people in larger bodies.
    </>
  ),
},


    {
      id: 3,
      title: "Media representation and stereotypes",
      imageSrc: MediaImage,
      imageAlt: "Social media icons",
      height: "h-[75px]",
      width: "w-[97px]",
       backText: (
    <>
    
      <a
        href="https://www-nature-com.helicon.vuw.ac.nz/articles/s41591-020-0803-x"
        target="_blank"
        rel="noopener noreferrer"
        className="text-[#F89725] font-bold underline"
      >
        Movies, TV shows, 
      </a>{" "}
    and   <a 
    
     href="https://www-nature-com.helicon.vuw.ac.nz/articles/s41591-020-0803-x"
     className="text-[#F89725] font-bold underline"
      >
advertisments 
      </a>{" "}  often portray people with obesity negatively, while failing to show true body diversity. News media frequently frames weight as personal failure rather than recognising it as a complex health issue. Social media amplifies unrealistic body images and weight stigma, reinforcing harmful stereotypes and biases. 
    </>
  ),
},

  ];

  return (
    <main className="relative flex flex-col h-[1055px] w-full max-w-[390px] mx-auto bg-[#e6ebf0]">
      {/* Header */}
      <header className="w-full h-[171px] bg-[#2e3b42] rounded-b-[25px] relative shadow-md">
        <h1 className="absolute w-[332px] top-[101px] left-[29px] text-white font-bold text-xl text-center font-['Poppins']">
          3: Causes and contributing factors of weight bias/stigma.
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
          to="/ImpactOnPatients"
          className="absolute left-[92px] top-[950px] w-[205px] h-[49px] bg-[#f89725] rounded-[25px] font-['Poppins',Helvetica] font-semibold text-black text-base tracking-[0.48px] hover:bg-[#e88615] flex items-center justify-center"
        >
          Next
        </Link>
      </section>
    </main>
  );
};
