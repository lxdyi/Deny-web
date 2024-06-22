import { useState } from "react";
import useFetchQuranData from "../hooks/useFetchQuranData";
import { BiSkipNext, BiSkipPrevious } from "react-icons/bi";

const MoringAdhdhkar = () => {
  const {
    data: adhdhkarData,
    loading,
    error,
  } = useFetchQuranData(
    "https://deen.somee.com/api/Dashboard/GetAllAthkarMorning"
  );
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const videoBaseUrl = "https://deen.somee.com/files/";

  const handlePrevious = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? adhdhkarData.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === adhdhkarData.length - 1 ? 0 : prevIndex + 1
    );
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  const currentImage = adhdhkarData[currentImageIndex];

  return (
    <div>
      {currentImage && (
        <div className=" bg-white w-[600px] h-[600px] shadow-xl flex justify-center items-center">
          <img src={`${videoBaseUrl}${currentImage.file}`} alt="" />
        </div>
      )}
      <div className="flex justify-center gap-20 mt-4">
        <button
          onClick={handlePrevious}
          disabled={currentImageIndex === 0}
          style={{
            color: currentImageIndex === 0 ? "#777E91" : "inherit",
          }}
        >
          <BiSkipPrevious size={40} />
        </button>
        <button
          onClick={handleNext}
          disabled={currentImageIndex === adhdhkarData.length - 1}
          style={{
            color:
              currentImageIndex === adhdhkarData.length - 1
                ? "#777E91"
                : "inherit",
          }}
        >
          <BiSkipNext size={40} />
        </button>
      </div>
    </div>
  );
};

export default MoringAdhdhkar;