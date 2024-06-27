import { FaSearch } from "react-icons/fa";
import { NavLink, useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
// Define the navigation links as an array of objects

const Navbar = ({ navLinks }) => {
  const location = useLocation();
  const isActive = (path) => location.pathname === path;

  return (
    <div className="flex justify-center flex-col items-center pt-10 relative">
      <div>
        <img
          className="w-[120px] md:w-[200px] "
          src="/src/assets/Logo.png"
          alt="logo"
        />
      </div>
      <div className="relative">
        <input
          type="text"
          placeholder="ابحث هنا"
          dir="rtl"
          className="shadow-lg w-[350px] md:w-[500px] py-4 pl-10 pr-4 rounded-xl focus:outline-none"
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
        {navLinks.map((link) => (
          <NavLink
            to={link.path}
            key={link.path} // Use the path as a unique key for each link
            className={`flex items-center gap-3 py-2 px-2 rounded-xl ${
              isActive(link.path)
                ? "bg-[#FBE09C] text-[#03AA77] border-none"
                : "text-[#C2C2C2] border-[1px] border-solid border-[#C2C2C2]"
            }`}
          >
            <img src={link.icon} alt="icon" />
            <p>{link.label}</p>
          </NavLink>
        ))}
      </div>
      <div className=" absolute right-4 lg:right-32 top-10">
        <Link to={"mahfuzat"}>
          <p className="text-left font-extrabold">المحفوظات</p>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
