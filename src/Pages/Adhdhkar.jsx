import React, { useState } from "react";
import MoringAdhdhkar from "../Components/MoringAdhdhkar";
import EveningAdhdhkar from "../Components/EveningAdhdhkar";
import SleepingAdhdhkar from "../Components/SleepingAdhdhkar";
import { adhdhkar } from "../Constant/Index";
import SaveAdhdhkar from "../Components/SaveAdhdhkar";

const Adhdhkar = () => {
  const [selectedAdhdhkar, setSelectedAdhdhkar] = useState(null);
  const [showAdhdhkar, setShowAdhdhkar] = useState(false);

  const handleAdhdhkarClick = (index) => {
    switch (index) {
      case 0:
        setSelectedAdhdhkar("sleeping");
        break;
      case 1:
        setSelectedAdhdhkar("evening");
        break;
      case 2:
        setSelectedAdhdhkar("morning");
        break;
      default:
        setSelectedAdhdhkar(null);
        break;
    }
  };

  return (
    <div
      className={`p-4 px-4 lg:px-20 xl:px-32 justify-center flex flex-col ${
        showAdhdhkar && "xl:flex-row items-start"
      }  w-full gap-40  `}
    >
      <div
        className={`gap-3 relative py-10 ${
          showAdhdhkar
            ? "flex flex-row lg:flex-row overflow-x-auto xl:overflow-x-visible xl:grid w-[100%]"
            : "grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3"
        }`}
      >
        {adhdhkar.map((adhdhkarItem, index) => (
          <div
            key={index}
            className="flex items-center rounded-xl gap-5 p-4 border shadow-lg max-w-[360px] min-w-[350px] h-[80px] bg-white cursor-pointer"
            onClick={() => {
              handleAdhdhkarClick(index);
              setShowAdhdhkar(true);
            }}
          >
            <div className="flex justify-between items-center w-full font-bold mb-2">
              <div className="relative w-10 h-10">
                <img
                  className="w-10 h-10"
                  src="/src/assets/stare-2.png"
                  alt=""
                />
                <span className="absolute left-[15px] top-2">{index + 1}</span>
              </div>
              <div className="flex items-center">
                <div>
                  <SaveAdhdhkar adhdhkarid={adhdhkarItem.id} />
                </div>
                <h2 className="text-[#03AA77] font-bold text-lg ">
                  {adhdhkarItem.name}
                </h2>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-5 flex justify-center w-full">
        {selectedAdhdhkar === "sleeping" && <SleepingAdhdhkar />}
        {selectedAdhdhkar === "evening" && <EveningAdhdhkar />}
        {selectedAdhdhkar === "morning" && <MoringAdhdhkar />}
      </div>
    </div>
  );
};

export default Adhdhkar;
