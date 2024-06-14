import { useState } from "react";
import { Surahs } from "../Constant/Index";

const Surah = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 18;

  const totalPages = Math.ceil(Surahs.length / itemsPerPage);

  const handleClick = (newPage) => {
    setCurrentPage(newPage);
  };

  const currentItems = Surahs.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className="p-4 px-32">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
        {currentItems.map((surah, index) => (
          <div
            key={index}
            className="flex items-center rounded-xl gap-5  p-4 border shadow-lg w-[350px] h-[80px] bg-white"
          >
            <div className=" relative w-10 h-10">
              <img className="w-10 h-10" src="/src/assets/stare-2.png" alt="" />
              <span className=" absolute left-[15px] top-2 ">{index + 1}</span>
            </div>
            <div className="flex flex-col flex-grow">
              <div className="flex justify-between font-bold mb-2">
                <h2 className="text-gray-900 text-lg">{surah.eng}</h2>
                <h2 className="text-[#03AA77] font-bold text-lg">
                  {surah.ara}
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
                    {surah.time} دقائق
                  </p>
                </div>
                <div className="bg-gray-200 py-1 px-1 rounded-lg flex items-center gap-2">
                  <img
                    src="/src/assets/kab.png"
                    alt="icon"
                    className="w-4 h-4"
                  />
                  <p dir="rtl" className="text-gray-700 text-sm">
                    {surah.place}
                  </p>
                </div>
                <div className="bg-gray-200 py-1 px-1 rounded-lg flex items-center gap-2">
                  <img
                    src="/src/assets/book.png"
                    alt="icon"
                    className="w-4 h-4"
                  />
                  <p dir="rtl" className="text-gray-700 text-sm">
                    {surah.aya} ايات
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-4">
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index + 1}
            onClick={() => handleClick(index + 1)}
            className={`px-3 py-1 mx-2 rounded ${
              currentPage === index + 1 ? "bg-[#03AA77] " : "bg-gray-200"
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default Surah;
