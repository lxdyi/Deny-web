import { adhdhkar } from "../Constant/Index";

const Adhdhkar = () => {
  return (
    <div className="p-4 px-32 mt-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
        {adhdhkar.map((adhdhkar, index) => (
          <div
            key={index}
            className="flex items-center rounded-xl gap-5  p-4 border shadow-lg w-[350px] h-[80px] bg-white"
          >
            <div className="flex justify-between ite w-full  font-bold mb-2">
              <div className=" relative w-10 h-10">
                <img
                  className="w-10 h-10"
                  src="/src/assets/stare-2.png"
                  alt=""
                />
                <span className=" absolute left-[15px] top-2 ">
                  {index + 1}
                </span>
              </div>
              <h2 className="text-[#03AA77] font-bold text-lg mt-2">
                {adhdhkar.name}
              </h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Adhdhkar;
