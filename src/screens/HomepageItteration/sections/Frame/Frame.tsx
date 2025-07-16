import { Card, CardContent } from "../../../../components/ui/card";
import { Progress } from "../../../../components/ui/progress";
import { Link } from "react-router-dom";

export const Frame = (): JSX.Element => {
  const modules = [
    { title: "What is Weight Bias?", progress: 0, path: "/ModuleSubCategory" },
    { title: "Understanding Unconscious Weight Bias", progress: 0, path: "/UnconsciousBias" },
    { title: "Recognising Weight Stigma in Clinical Practice", progress: 0 },
    { title: "Health at Every Size", progress: 0 },
  ];

  return (
    <div className="mt-10 px-4 overflow-x-auto">
      <div className="flex gap-[15px] w-fit mr-[100px] pb-2">
        {modules.map((module, index) => {
          const cardContent = (
            <Card
              key={index}
              className="min-w-[168px] max-w-[168px] h-[154px] bg-[#2e3b42] rounded-2xl shadow-[0px_4px_4px_#00000040] flex flex-col justify-between p-3 transition hover:scale-[1.02] cursor-pointer"
            >
              <CardContent className="p-0 flex flex-col justify-between h-full">
                <div>
                  <h3 className="font-['Poppins',Helvetica] font-bold text-white text-base leading-[21.6px]">
                    {module.title}
                  </h3>
                </div>
                <div className="mt-4">
                  <p className="font-['Poppins',Helvetica] font-normal text-white text-base leading-[21.6px] whitespace-nowrap">
                    {module.progress}% Complete
                  </p>
                  <div className="mt-2 bg-white h-3.5 rounded-2xl">
                    <Progress
                      value={module.progress}
                      className="h-3.5 rounded-2xl bg-white"
                    />
                  </div>
                </div>

                
              </CardContent>
            </Card>
          );

          return module.path ? (
            <Link to={module.path} key={index} className="block">
              {cardContent}
            </Link>
          ) : (
            <div key={index}>{cardContent}</div>
          );
        })}
      </div>
    </div>

    
  );
};
