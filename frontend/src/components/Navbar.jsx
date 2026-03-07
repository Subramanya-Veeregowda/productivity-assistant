import { useState, useEffect } from "react";
import { SunIcon, MoonIcon } from "@heroicons/react/24/solid";

function Navbar() {
  const [darkMode, setDarkMode] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

useEffect(() => {
  if (darkMode) {
    document.documentElement.classList.add("dark")
    localStorage.setItem("theme", "dark")
  } else {
    document.documentElement.classList.remove("dark")
    localStorage.setItem("theme", "light")
  }
}, [darkMode])

useEffect(() => {
  const savedTheme = localStorage.getItem("theme")

  if (savedTheme === "dark") {
    setDarkMode(true)
    document.documentElement.classList.add("dark")
  }
}, [])

  return (
    <>
<nav className="fixed w-full top-0 z-50 h-16 flex items-center justify-between px-4
bg-blue-400/20 dark:bg-gray-900/80
backdrop-blur-lg
border-b border-gray-200 dark:border-gray-700">
  
  {/* LEFT */}
  <div className="flex flex-col">
    <h1 className="text-lg font-bold truncate dark:text-white">
      Productivity Assistant
    </h1>
    <span className="text-xs text-gray-500 dark:text-gray-300">
      © Subramanya V
    </span>
  </div>

  {/* RIGHT */}
  <div className="flex items-center gap-3 flex-shrink-0">

    {/* Theme toggle */}
<button
  onClick={() => setDarkMode(prev => !prev)}
  className="p-2 rounded-full bg-gray-200 dark:bg-gray-600"
>
  {darkMode ? (
    <MoonIcon className="w-5 h-5 text-yellow-400" />
  ) : (
    <SunIcon className="w-5 h-5 text-gray-800" />
  )}
</button>

    {/* Hamburger */}
    <button
      className="md:hidden text-3xl dark:text-white"
      onClick={() => setMenuOpen(!menuOpen)}
    >
      ☰
    </button>

  </div>

</nav>

      {/* Mobile Menu */}
{menuOpen && (
  <div className="fixed top-16 right-0 w-1/2 h-screen 
backdrop-blur-lg bg-gray-200/40 dark:bg-gray-900/40
border-l text-1xl border-white/20 shadow-xl
md:hidden flex flex-col p-6 gap-4 z-50
animate-[slideIn_.25s_ease] dark:text-white font-bold">

<a href="/" className="transition-all duration-200 hover:text-blue-500 hover:text-2xl hover:-translate-x-1">Dashboard</a>

<a href="/tasks" className="transition-all duration-200 hover:text-blue-500 hover:text-2xl hover:-translate-x-1">Tasks</a>

<a href="/analytics" className="transition-all duration-200 hover:text-blue-500 hover:text-2xl hover:-translate-x-1">Analytics</a>

<a href="/focus" className="transition-all duration-200 hover:text-blue-500 hover:text-2xl hover:-translate-x-1">Focus</a>

<a href="/settings" className="transition-all duration-200 hover:text-blue-500 hover:text-2xl hover:-translate-x-1">Settings</a>

  </div>
)}
    </>
  );
}

export default Navbar;