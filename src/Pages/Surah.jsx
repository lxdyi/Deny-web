import { useState } from "react";
import VideoPlayer from "../Components/VideoPlayer";
import useFetchQuranData from "../hooks/useFetchQuranData";
import SaveIcon from "../Components/SaveIcon";

const Surah = () => {
  const {
    data: surahData,
    loading,
    error,
  } = useFetchQuranData("https://deen.somee.com/api/App/GetAllQuran");
  const [currentPage, setCurrentPage] = useState(1);
  const [showVideo, setShowVideo] = useState(null);
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const itemsPerPage = 18;
  const totalPages = Math.ceil(surahData.length / itemsPerPage);
  const saveUrl = "https://deen.somee.com/api/App/AddQuranToArchive";

  const handleClick = (newPage) => {
    setCurrentPage(newPage);
  };

  const currentItems = surahData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handleVideoClick = (id) => {
    const index = surahData.findIndex((surah) => surah.id === id);
    if (index !== -1) {
      setShowVideo(surahData[index].file);
      setCurrentVideoIndex(index);
    }
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div className="p-4 px-32 flex w-full gap-40 items-start">
      <div
        className={`grid gap-3 relative py-10 ${
          showVideo ? "grid-cols-1" : "grid-cols-3"
        }`}
      >
        {currentItems.map((surah, index) => (
          <div
            key={index}
            className="flex items-center cursor-pointer rounded-xl gap-5 p-4 border shadow-lg w-[350px] h-[80px] bg-white"
            onClick={() => handleVideoClick(surah.id)}
          >
            <div className="relative w-10 h-10">
              <img className="w-10 h-10" src="/src/assets/stare-2.png" alt="" />
              <span className="absolute translate-x-[-50%] left-[50%] top-2 ">
                {index + 1}
              </span>
            </div>
            <div className="flex flex-col flex-grow relative">
              <div className="flex justify-between items-center font-bold mb-2">
                <h2 className="text-gray-900 text-lg">Al-Fātiḥah</h2>

                <div className=" absolute right-24">
                  <SaveIcon surahId={surah.id} apiUrl={saveUrl} />
                </div>
                <h2 className="text-[#03AA77] font-bold text-lg">
                  {surah.name}
                </h2>
              </div>
              <div className="flex gap-2">
                <div className="bg-gray-200 py-1 px-2 rounded-lg flex items-center gap-3">
                  <img
                    src="/src/assets/kab.png"
                    alt="icon"
                    className="w-4 h-4"
                  />
                  <p dir="rtl" className="text-gray-700 text-sm">
                    {surah.type === "Makiya" ? "مكية" : "مدنية"}
                  </p>
                </div>
                <div className="bg-gray-200 py-1 px-2 rounded-lg flex items-center gap-2">
                  <img
                    src="/src/assets/book.png"
                    alt="icon"
                    className="w-4 h-4"
                  />
                  <p dir="rtl" className="text-gray-700 text-sm">
                    {surah.ayatNum}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
        <div className="flex justify-center mt-4 absolute translate-x-[-50%] left-[50%] -bottom-0">
          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index + 1}
              onClick={() => handleClick(index + 1)}
              className={`px-3 py-1 mx-2 rounded ${
                currentPage === index + 1 ? "bg-[#03AA77]" : "bg-gray-200"
              }`}
            />
          ))}
        </div>
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

export default Surah;
