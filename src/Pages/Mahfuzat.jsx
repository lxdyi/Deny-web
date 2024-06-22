import { mahfuza } from "../Constant/Index";

const Mahfuzat = () => {
  return (
    <div className="p-4 px-32 ">
      <h3 className=" text-right font-[900] text-4xl mb-5">المحفوظات</h3>


      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
        {mahfuza.map((surah, index) => (
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
                    {surah.time}
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
            <div className="mb-5">
            Sure, here is the MP4 video you provided:

<video width="640" height="480" controls>
  <source src="/mnt/data/d0316c47-6979-4270-8fe9-a9f81fabf406_IMG_9386.MP4" type="video/mp4"/>
  Your browser does not support the video tag.
</video>
      </div>
    </div>
  );
};

export default Mahfuzat;
