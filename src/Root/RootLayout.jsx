import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

const RootLayout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex-1">
        <Outlet />
      </div>
      <Footer className="fixed bottom-0 left-0 w-full flex items-center justify-center h-16 bg-gray-200"/>
    </div>
  );
};

export default RootLayout;
