import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Analytics from "./pages/Analytics";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer"
import Sidebar from "./components/Sidebar";
import Settings from"./pages/Settings";
import Tasks from "./pages/Tasks";
import Focus from "./pages/Focus";
import { useState } from "react";

 function App() {
  const [tasks, setTasks] = useState([]);

  return (
    <div className="min-h-screen w-full bg-gray-100 dark:bg-gradient-to-b dark:from-gray-900 dark:togray-950 ">

      <Navbar />

      <div className="flex flex-col md:flex-row min-h-screen flex-1 pt-16 px-4 ">

        <Sidebar />

        <div className="flex-1 px-6 md:ml-60 pb-28">
          <Routes>
            <Route
              path="/dashboard"
              element={<Dashboard tasks={tasks} setTasks={setTasks} />}
            />
            <Route path="/tasks" element={<Tasks />} />
            <Route
              path="/analytics"
              element={<Analytics tasks={tasks} />}
            />
                        <Route path="/focus" element={<Focus/>}/>
                        <Route path="/settings" element={<Settings/>}/>
          </Routes>
          </div>
           </div>
          <Footer/>
       

     

    </div>
  );
}

export default App;