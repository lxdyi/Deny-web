import { useState, useEffect, useContext } from "react";
import axios from "axios";
import VideoPlayer from "../Components/VideoPlayer";
import { AppContext } from "../Context/AppContext";
import CircularProgress from "@mui/material/CircularProgress";
const url = `https://deen.somee.com/api/App/GetAllSavedQuran`;

const MahfuzatSurah = () => {
  const [surahData, setSurahData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showVideo, setShowVideo] = useState(null);
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const { userId } = useContext(AppContext);

  useEffect(() => {
    const fetchSurahData = async () => {
      setLoading(true);
      try {
        if (!userId) {
          throw new Error("User ID is missing or invalid.");
        }
        const response = await axios.get(url, {
          params: {
            UniqueId: userId,
          },
        });
        setSurahData(response.data);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
        console.error("Error fetching Quran data:", error);
      }
    };

    if (userId) {
      fetchSurahData();
    }
  }, [userId]);
  if (loading)
    return (
      <p>
        <div className=" absolute left-[50%] top-[70%] translate-x-[-50%] translate-y-[-50%]">
          <CircularProgress color="success" />
        </div>
      </p>
    );
  const handleVideoClick = (id) => {
    const index = surahData.findIndex((surah) => surah.id === id);
    if (index !== -1) {
      setShowVideo(surahData[index].file);
      setCurrentVideoIndex(index);
    }
  };

  if (error) return <h3>You have not saved anything.</h3>;

  return (
    <div
      className={`p-4 px-4 lg:px-20 xl:px-32 justify-center flex flex-col ${
        showVideo && "xl:flex-row items-start"
      }  w-full gap-20 xl:gap-40  `}
    >
      <div
        className={`gap-3 relative py-10 ${
          showVideo
            ? "flex flex-row lg:flex-row overflow-x-auto xl:overflow-x-visible xl:grid w-[100%]"
            : "grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3"
        }`}
      >
        {surahData.map((surah, index) => (
          <div
            key={index}
            className="flex items-center cursor-pointer rounded-xl gap-5 p-4 border shadow-lg max-w-[360px] min-w-[350px] h-[80px] bg-white"
            onClick={() => handleVideoClick(surah.id)}
          >
            <div className="relative w-10 h-10">
              <img className="w-10 h-10" src="/src/assets/stare-2.png" alt="" />
              <span className="absolute translate-x-[-50%] left-[50%] top-2">
                {index + 1}
              </span>
            </div>
            <div className="flex flex-col flex-grow">
              <div className="flex justify-between font-bold mb-2">
                <h2 className="text-gray-900 text-lg">Al-Fātiḥah</h2>
                <h2 className="text-[#03AA77] font-bold text-lg">
                  {surah.name}
                </h2>
              </div>
              <div className="flex gap-2">
                <div className="bg-gray-200 py-1 px-1 rounded-lg flex items-center gap-2">
                  <img
                    src="/src/assets/video.png"
                    alt="icon"
                    className="w-4 h-4"
                  />
                  <p dir="rtl" className="text-gray-700 text-sm">
                    3 دقائق
                  </p>
                </div>
                <div className="bg-gray-200 py-1 px-1 rounded-lg flex items-center gap-2">
                  <img
                    src="/src/assets/kab.png"
                    alt="icon"
                    className="w-4 h-4"
                  />
                  <p dir="rtl" className="text-gray-700 text-sm">
                    مكية
                  </p>
                </div>
                <div className="bg-gray-200 py-1 px-1 rounded-lg flex items-center gap-2">
                  <img
                    src="/src/assets/book.png"
                    alt="icon"
                    className="w-4 h-4"
                  />
                  <p dir="rtl" className="text-gray-700 text-sm">
                    7 ايات
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      {showVideo && (
        <VideoPlayer
          showVideo={showVideo}
          setShowVideo={setShowVideo}
          surahData={surahData}
          currentVideoIndex={currentVideoIndex}
          setCurrentVideoIndex={setCurrentVideoIndex}
        />
      )}
    </div>
  );
};

export default MahfuzatSurah;
