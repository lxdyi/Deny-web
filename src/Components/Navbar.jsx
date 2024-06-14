import { FaSearch } from "react-icons/fa";
import { NavLink, useLocation } from "react-router-dom";
import Avatare from "./Avatar";
const Navbar = () => {
  const location = useLocation();
  const isActive = (path) => location.pathname === path;

  return (
    <div className="flex justify-center flex-col items-center pt-10 relative">
      <div>
        <img src="/src/assets/Logo.png" alt="logo" />
      </div>
      <div className="relative">
        <input
          type="text"
          placeholder="ابحث هنا"
          dir="rtl"
          className="shadow-lg w-[500px] py-4 pl-10 pr-4 rounded-xl focus:outline-none"
        />
        <FaSearch className="absolute left-3 top-[60%] transform -translate-y-1/2 text-[#03AA77]" />
      </div>
      <ul className="flex items-center gap-3 list-none pt-8">
        <li className="bg-[#00000014] py-1 px-2 rounded-full text-[#525252]">
          الكهف
        </li>
        <li className="bg-[#00000014] py-1 px-2 rounded-full text-[#525252]">
          الرحمان
        </li>
        <li className="bg-[#00000014] py-1 px-2 rounded-full text-[#525252]">
          تبارك
        </li>
        <li className="bg-[#00000014] py-1 px-2 rounded-full text-[#525252]">
          الانسان
        </li>
        <li className="bg-[#00000014] py-1 px-2 rounded-full text-[#525252]">
          البقرة
        </li>
      </ul>
      <div className="flex items-center gap-7 pt-7">
        <NavLink
          to="/adhdhkar"
          className={`flex items-center gap-3 py-2 px-2 rounded-xl ${
            isActive("/adhdhkar")
              ? "bg-[#FBE09C] text-[#03AA77] border-none"
              : "text-[#C2C2C2] border-[1px] border-solid border-[#C2C2C2]"
          }`}
        >
          <img src="/src/assets/book.png" alt="icon" />
          <p>اذكار الصباح والمساء</p>
        </NavLink>
        <NavLink
          to="/"
          className={`flex items-center gap-3 py-2 px-2 rounded-xl ${
            isActive("/")
              ? "bg-[#FBE09C] text-[#03AA77] border-none"
              : "text-[#C2C2C2] border-[1px] border-solid border-[#C2C2C2]"
          }`}
        >
          <img src="/src/assets/Stare.png" alt="icon" />
          <p>السور</p>
        </NavLink>
      </div>
      <div className=" absolute right-32 top-10">
        <Avatare />
      </div>
    </div>
  );
};

export default Navbar;
