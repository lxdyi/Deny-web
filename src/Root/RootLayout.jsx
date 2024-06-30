import { Outlet } from "react-router-dom";
import { useRef, useState } from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

const navLinks = [
  {
    path: "/adhdhkar",
    label: "اذكار",
    icon: "/src/assets/book.png",
  },
  { path: "/", label: "السور", icon: "/src/assets/Stare.png" },
];

const RootLayout = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const surahClickHandlerRef = useRef(null);

  const handleSurahClick = (surahName) => {
    if (surahClickHandlerRef.current) {
      surahClickHandlerRef.current(surahName);
    }
  };

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar navLinks={navLinks} onSearch={handleSearch} onSurahClick={handleSurahClick} />
      <div className="flex-1">
        <Outlet context={{ setSurahClickHandler: (handler) => (surahClickHandlerRef.current = handler), searchQuery }} />
      </div>
      <Footer className="fixed bottom-0 left-0 w-full flex items-center justify-center h-16 bg-gray-200" />
    </div>
  );
};

export default RootLayout;
