import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent } from "../../../../components/ui/card";
import { HeartIcon } from "lucide-react";

interface SavedCard {
  id: number;
  title: string;
  subtitle?: string;
  description?: string;
  path?: string;
}

export const FrameWrapper = (): JSX.Element => {
  const [savedCards, setSavedCards] = useState<SavedCard[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    const saved = localStorage.getItem("savedCards");
    if (saved) {
      try {
        setSavedCards(JSON.parse(saved));
      } catch {
        setSavedCards([]);
      }
    }
  }, []);

  const toggleUnsave = (id: number) => {
    const updated = savedCards.filter((card) => card.id !== id);
    setSavedCards(updated);
    localStorage.setItem("savedCards", JSON.stringify(updated));
  };

  return (
    <div className="relative w-full max-w-[400px] mx-auto px-2">
      {savedCards.length === 0 ? (
        <p className="text-center font-['Poppins',Helvetica] text-gray-500 mt-10">
          You have no saved resources yet.
        </p>
      ) : (
        <div className="mt-10 overflow-x-auto overflow-y-hidden">
          <div className="flex gap-4 w-max pb-4">
            {savedCards.map((card) => (
              <Card
                key={card.id}
                className="w-[340px] h-[225px] bg-[#2e3b42] rounded-2xl shadow-[0px_4px_4px_#00000040] relative flex-shrink-0"
              >
                <CardContent className="p-4">
                  {/* Heart icon for unsaving */}
                  <button
                    onClick={() => toggleUnsave(card.id)}
                    className="absolute top-3 right-3"
                    aria-label="Unsave"
                  >
                    <HeartIcon className="h-5 w-5 fill-[#f89725] text-[#f89725]" />
                  </button>

                  {/* Title link */}
                  <h3
                    onClick={() => card.path && navigate(card.path)}
                    className="font-['Poppins',Helvetica] font-bold text-white text-lg mb-1 hover:underline cursor-pointer"
                  >
                    {card.title}
                  </h3>

                  {/* Subtitle */}
                  {card.subtitle && (
                    <h4 className="font-['Poppins',Helvetica] font-semibold text-[#f89725] text-sm mb-1">
                      {card.subtitle}
                    </h4>
                  )}

                  {/* Description */}
                  {card.description && (
                    <p className="font-['Poppins',Helvetica] text-white text-sm leading-snug max-h-[72px] overflow-hidden text-ellipsis">
                      {card.description}
                    </p>
                  )}




                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
