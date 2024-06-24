import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../Context/AppContext";
import MorningAdhdhkar from "../Components/MoringAdhdhkar";
import EveningAdhdhkar from "../Components/EveningAdhdhkar";
import SleepingAdhdhkar from "../Components/SleepingAdhdhkar";

const apiUrl = "https://deen.somee.com/api/App/GetAllSavedAthkar";

const MahfuzatAdhdkar = () => {
  const { userId } = useContext(AppContext);
  const [athkar, setAthkar] = useState([]);
  const [selectedAdhdhkar, setSelectedAdhdhkar] = useState(null);
  const [showAdhdhkar, setShowAdhdhkar] = useState(false);

  const fetchSavedAthkar = async () => {
    if (!userId) {
      console.error("User ID is undefined");
      return;
    }

    try {
      const response = await fetch(`${apiUrl}?UniqueId=${userId}`, {
        method: "GET",
      });

      if (response.ok) {
        const data = await response.json();
        console.log("Fetched Saved Athkar:", data);
        setAthkar(data);
      } else {
        console.error("Failed to fetch saved Athkar");
      }
    } catch (error) {
      console.error("Error fetching saved Athkar:", error);
    }
  };

  useEffect(() => {
    console.log("User ID:", userId);
    if (userId) {
      fetchSavedAthkar(); // Call the fetch function when the component mounts
    }
  }, [userId]); // Dependency array to re-fetch when userId changes

  const handleAdhdhkarClick = (type) => {
    setSelectedAdhdhkar(type.toLowerCase());
    setShowAdhdhkar(true);
  };

  return (
    <div
      className={`p-4 px-32 mt-5 ${
        showAdhdhkar && "flex w-full gap-40 items-start"
      }`}
    >
      <div
        className={`grid gap-3 relative py-10 ${
          showAdhdhkar ? "grid-cols-1" : "grid-cols-3"
        }`}
      >
        {athkar.map((adhdhkarItem, index) => (
          <div
            key={adhdhkarItem.id}
            className="flex items-center rounded-xl gap-5 p-4 border shadow-lg w-[350px] h-[80px] bg-white cursor-pointer"
            onClick={() => handleAdhdhkarClick(adhdhkarItem.type)}
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
                <h2 className="text-[#03AA77] font-bold text-lg ">
                  {adhdhkarItem.type === "Morning"
                    ? "أذكار الصباح"
                    : adhdhkarItem.type === "Evening"
                    ? "أذكار المساء"
                    : adhdhkarItem.type === "Sleeping"
                    ? "أذكار النوم"
                    : ""}
                </h2>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-5">
        {selectedAdhdhkar === "sleeping" && <SleepingAdhdhkar />}
        {selectedAdhdhkar === "evening" && <EveningAdhdhkar />}
        {selectedAdhdhkar === "morning" && <MorningAdhdhkar />}
      </div>
    </div>
  );
};

export default MahfuzatAdhdkar;
