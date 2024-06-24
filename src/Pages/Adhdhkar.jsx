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
      className={`p-4 px-32 mt-5 ${
        showAdhdhkar && "flex w-full gap-40 items-start"
      }`}
    >
      <div
        className={` grid gap-3 relative py-10 ${
          showAdhdhkar ? "grid-cols-1" : "grid-cols-3"
        }`}
      >
        {adhdhkar.map((adhdhkarItem, index) => (
          <div
            key={index}
            className="flex items-center rounded-xl gap-5 p-4 border shadow-lg w-[350px] h-[80px] bg-white cursor-pointer"
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

      <div className="mt-5">
        {selectedAdhdhkar === "sleeping" && <SleepingAdhdhkar />}
        {selectedAdhdhkar === "evening" && <EveningAdhdhkar />}
        {selectedAdhdhkar === "morning" && <MoringAdhdhkar />}
      </div>
    </div>
  );
};

export default Adhdhkar;
