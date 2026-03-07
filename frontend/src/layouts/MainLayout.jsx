import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Sidebar from "../components/Sidebar";

const MainLayout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">

      {/* Navbar - full width */}
      <Navbar />

      <div className="flex flex-1">

        {/* Sidebar */}
        <div className="md:w-60 md:left-0 ">
          <Sidebar />
        </div>

        {/* Main content */}
        <main className="flex-1 bg-gray-100 text-black-900 backdrop-blur-lg dark:bg-gradient-to-br dark:from-gray-400 dark:to-gray-500">
          {children}
        </main>

      </div>

      {/* Footer - full width */}
      <Footer/>

    </div>
  );
};

export default MainLayout;