import { useState } from "react";
import { FaSearch, FaTimes } from "react-icons/fa"; // Importing FaTimes icon for the clear button
import { NavLink, useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

const Navbar = ({ navLinks, onSearch }) => {
  const location = useLocation();
  const isActive = (path) => location.pathname === path;
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    onSearch(value);
  };

  const handleLiClick = (text) => {
    setSearchTerm(text);
    onSearch(text);
  };

  const clearSearch = () => {
    setSearchTerm("");
    onSearch("");
  };

  return (
    <div className="flex justify-center flex-col items-center pt-10 relative">
      <div>
        <img
          className="w-[120px] md:w-[200px]"
          src="/src/assets/Logo.png"
          alt="logo"
        />
      </div>
      <div className="relative">
        <input
          type="text"
          placeholder="ابحث هنا"
          dir="rtl"
          className="shadow-lg w-[350px] md:w-[500px] py-4 pl-10 pr-10 rounded-xl focus:outline-none"
          value={searchTerm}
          onChange={handleSearchChange}
        />
        <FaSearch className="absolute left-3 top-[60%] transform -translate-y-1/2 text-[#03AA77]" />
        {searchTerm && (
          <FaTimes
            className="absolute right-3 top-[55%] transform -translate-y-1/2 text-[#03AA77] cursor-pointer"
            onClick={clearSearch}
          />
        )}
      </div>
      <ul className="flex items-center gap-3 list-none pt-8">
        {[
          " الكَوثَرَ",
          " الفَلَقِ",
          " الإِخْلَاصِ",
          " الكَافِرُونَ",
          " قُرَيْشٍ",
        ].map((text) => (
          <li
            key={text}
            className="bg-[#00000014] py-1 px-2 rounded-full text-[#525252] cursor-pointer"
            onClick={() => handleLiClick(text)}
          >
            {text}
          </li>
        ))}
      </ul>
      <div className="flex items-center gap-7 pt-7">
        {navLinks.map((link) => (
          <NavLink
            to={link.path}
            key={link.path}
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
      <div className="absolute right-4 lg:right-32 top-10">
        <Link to={"mahfuzat"}>
          <p className="text-left font-extrabold">المحفوظات</p>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
