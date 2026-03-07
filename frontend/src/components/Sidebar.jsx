import { NavLink } from "react-router-dom";

function Sidebar() {
  return (
<div
className="
hidden md:block
fixed top-15 left-0
h-screen w-60
bg-gray-200/60 dark:bg-gray-900/70
backdrop-blur-lg
border-r border-white/20
text-gray-900 dark:text-gray-200
p-4
"
>

      <ul className="text-lg flex flex-col gap-3 mt-4">

<NavLink
  to="/dashboard"
  className={({ isActive }) =>
    `block px-3 py-2 rounded-lg transition-all duration-200 font-medium md:font-semibold text-gray-800 dark:text-white
    ${isActive
      ? "bg-blue-500/20 text-blue-500 font-semibold"
      : "hover:bg-blue-500/10 hover:text-blue-500 hover:-translate-x-1"
    }`
  }
> 
Dashboard
</NavLink>

        <NavLink to="/tasks"className={({ isActive }) =>`block px-3 py-2 rounded-lg transition-all duration-200 font-medium md:font-semibold text-gray-800 dark:text-white
      ${isActive? "bg-blue-500/20 text-blue-500 font-semibold" : "hover:bg-blue-500/10 hover:text-blue-500 hover:-translate-x-1"
       }`}> 
          Tasks
       </NavLink>

<NavLink
  to="/analytics"
  className={({ isActive }) =>
    `block px-3 py-2 rounded-lg transition-all duration-200 font-medium md:font-semibold text-gray-800 dark:text-white
    ${isActive
      ? "bg-blue-500/20 text-blue-500 font-semibold"
      : "hover:bg-blue-500/10 hover:text-blue-500 hover:-translate-x-1"
    }`
  }
> 
Analytics
</NavLink>

<NavLink
  to="/focus"
  className={({ isActive }) =>
    `block px-3 py-2 rounded-lg transition-all duration-200 font-medium md:font-semibold text-gray-800 dark:text-white
    ${isActive
      ? "bg-blue-500/20 text-blue-500 font-semibold"
      : "hover:bg-blue-500/10 hover:text-blue-500 hover:-translate-x-1"
    }`
  }
> 
Focus
</NavLink>

<NavLink
  to="/settings"
  className={({ isActive }) =>
    `block px-3 py-2 rounded-lg transition-all duration-200 font-medium md:font-semibold text-gray-800 dark:text-white
    ${isActive
      ? "bg-blue-500/20 text-blue-500 font-semibold"
      : "hover:bg-blue-500/10 hover:text-blue-500 hover:-translate-x-1"
    }`
  }
> 
Settings
</NavLink>

        

      </ul>

    </div>
  );
}

export default Sidebar;