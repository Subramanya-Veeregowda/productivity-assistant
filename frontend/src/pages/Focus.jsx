import { useState, useEffect } from "react"

export function Focus() {
    const history =
    JSON.parse(localStorage.getItem("focusHistory")) || []

  const [time, setTime] = useState(() => {
  const saved = localStorage.getItem("focusTime")
  return saved ? Number(saved) : 25 * 60 * 1000
})
  const [running, setRunning] = useState(() => {
  return localStorage.getItem("focusRunning") === "true"
})
  const [hours, setHours] = useState(0)
  const [minutesInput, setMinutesInput] = useState(25)

  

const startCustomTimer = () => {
    const totalMilliseconds =
      (hours * 60 * 60 + minutesInput * 60) * 1000

    setTime(totalMilliseconds)
    setRunning(true)
  }
useEffect(() => {
  if (!running) return

  const timer = setInterval(() => {
    setTime(prev => {

      if (prev <= 0) {
        console.log("Focus session completed! 🏁🥂")       

  
   const session ={
    duration: hours * 60 + minutesInput,
    date: new Date().toISOString()
   }

   history.push(session)

   localStorage.setItem("focusHistory",JSON.stringify(history))
        setRunning(false)
        return 0
      }

      return prev - 10
    })
  }, 10)

  return () => clearInterval(timer)

}, [running])

useEffect(() => {
  localStorage.setItem("focusTime", time)
}, [time])

useEffect(() => {
  localStorage.setItem("focusRunning", running)
}, [running])

  const hoursDisplay = Math.floor(time / 3600000)
  const minutes = Math.floor((time % 3600000)/60000)
  const seconds = Math.floor((time % 60000)/1000)
  const milliseconds = Math.floor((time % 1000)/10)

  const totalTime = 25 * 60 * 1000
  const isDanger = time <= totalTime * 0.05   

  return (
 <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
   <h1 className="text-2xl md:text-3xl font-bold text-blue-600 col-span-full">Focus</h1> 
    
  <div className="bg-blue-400/20 p-10 rounded-2xl shadow-2xl text-center w-full">

    <h2 className="text-2xl font-bold mb-6  text-black dark:text-white">
      Focus Timer 
    </h2>

    <div className="flex justify-center gap-4 mb-4">

<div className="flex flex-col items-center">
<label className="text-xs text-black mb-1">Hours</label>
<input
type="number"
value={hours}
onChange={(e) => setHours(Number(e.target.value))}
className="w-20 p-2 rounded bg-blue-500/20 dark:bg-gray-700 text-black dark:text-white text-center"
/>
</div>

<div className="flex flex-col items-center">
<label className="text-xs text-black mb-1">Minutes</label>
<input
type="number"
min="0"
value={minutesInput}
onChange={(e) => setMinutesInput(Number(e.target.value))}
className="w-20 p-2 rounded bg-blue-500/20 dark:bg-gray-700 text-black dark:text-white text-center"
/>
</div>

</div>   

    <div
  className={`text-4xl md:text-5xl font-mono font-bold mb-6
  ${isDanger ? "text-red-500 drop-shadow-[0_0_8px_rgba(239,68,68,0.4)]" : "text-blue-500 drop-shadow-[0_0_8px_rgba(59,130,246,0.4)]"}`}
>
  {hoursDisplay.toString().padStart(2,"0")}:
{minutes.toString().padStart(2,"0")}:
{seconds.toString().padStart(2,"0")}:
{milliseconds.toString().padStart(2,"0")}
</div>

    <div className="flex justify-center gap-4">

      <button
        onClick={startCustomTimer}
        className="bg-green-500 hover:bg-green-600 px-5 py-2 rounded-lg text-white font-medium transition"
      >
        Start
      </button>

      <button
        onClick={() => setRunning(false)}
        className="bg-yellow-500 hover:bg-yellow-600 px-5 py-2 rounded-lg text-white font-medium transition"
      >
        Pause
      </button>

      <button
        onClick={() => {
          setRunning(false)
          setTime((hours * 60 * 60 + minutesInput * 60) * 1000)
        }}
        className="bg-red-500 hover:bg-red-600 px-5 py-2 rounded-lg text-white font-medium transition"
      >
        Reset
      </button>

    </div>
</div>

{/* Focus History */}

<div className="bg-blue-400/20 p-6 rounded-2xl shadow-xl w-full">
  <h2 className="text-lg font-bold mb-4 text-black dark:text-white">
    Focus History
  </h2>

  {history.length === 0 ? (
    <p className="text-gray-400 text-sm">
      No sessions completed yet.
    </p>
  ) : (
    <ul className="space-y-2 max-h-48 overflow-y-auto">
      {history.slice(-5).reverse().map((session, index) => (
        <li
          key={index}
          className="bg-blue-500/20 dark:bg-gray-700 p-3 rounded text-sm flex justify-between text-black dark:text-white items centerhover:bg-gray-600 transition font-semibold"
        >
          <span>
            {new Date(session.date).toLocaleDateString()}
          </span>

          <span>
            {session.duration} min
          </span>
        </li>
      ))}
    </ul>
  )}

</div>
  </div>


  )
}

export default Focus