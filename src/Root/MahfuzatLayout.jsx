import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
const navLinks = [
  {
    path: "mahfuzatAdhdkar",
    label: "اذكار",
    icon: "/src/assets/book.png",
  },
  { path: "/mahfuzat", label: "السور", icon: "/src/assets/Stare.png" },
];
const MahfuzatLayout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar navLinks={navLinks} />
      <h2 className=" font-bold text-[22px] text-center ml-[600px] mt-5">المحفوظات</h2>
      <div className="flex-1">
        <Outlet />
      </div>
      <Footer className="fixed bottom-0 left-0 w-full flex items-center justify-center h-16 bg-gray-200" />
    </div>
  );
};

export default MahfuzatLayout;
