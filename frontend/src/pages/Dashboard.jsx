import { useState, useEffect } from "react"
import TaskFilters from "../components/TaskFilters"
import TaskList from "../components/TaskList"
import { calculateStreak } from "../utils/streak"
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"

function Dashboard() {

  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem("tasks")
    return savedTasks ? JSON.parse(savedTasks) : []
  })

  const [newTask, setNewTask] = useState("")
  const [priority, setPriority] = useState("Medium Priority")
  const [dueDate, setDueDate] = useState(null)
  const [editingTask, setEditingTask] = useState(null)
  const [filter, setFilter] = useState("all")



  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks))
  }, [tasks])



  const streak = calculateStreak(tasks)



  const totalTasks = tasks.length
  const completedTasks = tasks.filter(task => task.completed).length

  const productivityScore =
    totalTasks === 0
      ? 0
      : Math.round((completedTasks / totalTasks) * 100)



  const filteredTasks = tasks.filter(task => {

    if (filter === "pending") return !task.completed

    if (filter === "completed") return task.completed

    if (filter === "overdue") {
      if (!task.dueDate) return false
      return !task.completed && new Date(task.dueDate) < new Date()
    }

    if (filter === "today") {
      if (!task.dueDate) return false
      const today = new Date().toDateString()
      return new Date(task.dueDate).toDateString() === today
    }

    return true
  })



  function startEdit(task) {
    setEditingTask(task)
    setNewTask(task.title)
    setPriority(task.priority)
    setDueDate(task.dueDate ? new Date(task.dueDate) : null)
  }



  function completeTask(id) {

    setTasks(
      tasks.map(task =>
        task.id === id
          ? { ...task, completed: true, completedAt: new Date() }
          : task
      )
    )
  }



  function deleteTask(id) {
    setTasks(tasks.filter(task => task.id !== id))
  }



  function addTask() {

    if (newTask.trim() === "") return



    if (editingTask) {

      setTasks(
        tasks.map(t =>
          t.id === editingTask.id
            ? {
                ...t,
                title: newTask,
                priority,
                dueDate: dueDate ? dueDate.toISOString() : null
              }
            : t
        )
      )

      setEditingTask(null)

    } else {

      const task = {
        id: Date.now(),
        title: newTask,
        priority,
        dueDate: dueDate ? dueDate.toISOString() : null,
        completed: false
      }

      setTasks([...tasks, task])
    }



    setNewTask("")
    setDueDate(null)
  }



  return (

    <div className="min-h-screen bg-transparent dark:from-gray-900 dark:to-gray-950 text-gray-900 dark:text-white">

      <div className="flex flex-col md:flex-row">

        <div className="flex-1 p-6 md:p-10">

          <h2 className="text-2xl md:text-3xl font-bold text-blue-600 mb-6">
            Dashboard
          </h2>


 <div className="bg-blue-400/20 backdrop-blur-xl border border-white/10 shadow-lg rounded-xl p-6 mb-6 w-full max-w-2xl">
          {/* STREAK */}

<div className="bg-orange-100 text-orange-900 px-4 py-2 rounded-xl shadow mb-6 inline-flex items-center gap-2">

  <span className="font-semibold">
    🔥 Productivity Streak
  </span>

  <span className="font-bold text-2xl text-right">
    {streak} Days
  </span>

</div>                                     
         



          {/* PRODUCTIVITY SCORE */}

          <div className="mb-8 ">

            <h3 className="text-lg font-semibold mb-2">
              Productivity Score
            </h3>

            <p className="text-3xl font-bold text-green-600">
              {productivityScore}%
            </p>

            <div className="w-full bg-gray-200 rounded-full h-3 mt-3">

              <div
                className="bg-green-500 h-3 rounded-full transition-all duration-500"
                style={{ width: `${productivityScore}% `}}
              />

            </div>

            <p className="text-sm text-gray-500 mt-2">
              {completedTasks} of {totalTasks} tasks completed
            </p>

          </div>

 </div>

          {/* TASK INPUT */}

          <div className="bg-blue-400/20 backdrop-blur-xl border border-white/10 shadow-lg rounded-xl p-6 mb-6 max-w-3xl flex flex-wrap gap-3 items-center">

            <input
              type="text"
              placeholder="Task..."
              value={newTask}
              onChange={(e) => setNewTask(e.target.value)}
              className="border p-2 rounded bg-white dark:bg-gray-700"
            />



            <select
              value={priority}
              onChange={(e) => setPriority(e.target.value)}
              className="border p-2 rounded bg-white dark:bg-gray-700"
            >

              <option value="High Priority">
                High Priority
              </option>

              <option value="Medium Priority">
                Medium Priority
              </option>

              <option value="Low Priority">
                Low Priority
              </option>

            </select>



            <DatePicker
              selected={dueDate}
              onChange={(date) => setDueDate(date)}
              showTimeSelect
              dateFormat="dd/MM/yyyy h:mm aa"
              placeholderText="Due date & time"
              className="border p-2 rounded bg-white dark:bg-gray-700"
            />



            <button
              onClick={addTask}
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg shadow"
            >
              {editingTask ? "Update Task" : "Add Task"}
            </button>

          </div>



          {/* FILTERS */}

          <TaskFilters
            filter={filter}
            setFilter={setFilter}
          />



          {/* TASK LIST */}

          <TaskList
            tasks={filteredTasks}
            completeTask={completeTask}
            deleteTask={deleteTask}
            startEdit={startEdit}
          />

        </div>

      </div>

    </div>

  )
}

export default Dashboard