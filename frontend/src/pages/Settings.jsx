import { useState, useEffect } from "react"
function Settings() {
  const [darkMode, setDarkMode] = useState(true)
  const [notificationsEnabled, setNotificationsEnabled] = useState(true)

useEffect(() => {
  if (darkMode) {
    document.documentElement.classList.add("dark")
  } else {
    document.documentElement.classList.remove("dark")
  }
}, [darkMode])
  return (
    <div className=" space-y-6">

      <h2 className="text-2xl md:text-3xl font-bold text-blue-600"><br />Settings</h2>

      <div className="bg-blue-400/20 p-6 rounded-2xl shadow-xl">
        <h2 className="text-lg dark:text-white font-semibold mb-3">Appearance</h2>
        <p className="text-gray-400">
          Toggle between light and dark themes for your productivity workspace.
        </p>
<button
  onClick={() => setDarkMode(!darkMode)}
  className={`mt-4 px-4 py-2 rounded-lg  transition
  ${
    darkMode   
      ? "bg-yellow-300 text-black hover:bg-yellow-500 "
      : "bg-purple-700 text-white hover:bg-purple-600"
  }`}
>
  {darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
</button>
      </div>

<div className="bg-blue-400/20  p-6 rounded-2xl shadow-xl">

  <h2 className="text-lg font-semibold mb-3 text-gray-900 dark:text-white">
    Notifications
  </h2>

  <p className="text-gray-700 dark:text-gray-300 mb-4">
    Manage reminder notifications for upcoming tasks.
  </p>

 <button
  onClick={() => setNotificationsEnabled(!notificationsEnabled)}
  className={`px-4 py-2 rounded-lg transition text-white ${
    notificationsEnabled
      ? "bg-green-500 hover:bg-green-600"
      : "bg-gray-500 cursor-not-allowed"
  }`}
>
  {notificationsEnabled ? "🔔 Disable Notifications" : "🔕 Notifications Disabled"}
</button>

</div>

<div className="bg-blue-400/20 p-6 rounded-2xl shadow-xl">

  <h2 className="text-lg font-semibold mb-3 text-gray-900 dark:text-white">
    Account
  </h2>

  <p className="text-gray-700 dark:text-gray-300 mb-4">
    Future user account settings will appear here.
  </p>

  <button
    className="px-4 py-2 rounded-lg bg-red-500 hover:bg-red-600 text-white transition"
  >
    ❌ Logout
  </button>

</div>

    </div>
  )
}

export default Settings