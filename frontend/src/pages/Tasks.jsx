import { useState, useEffect } from "react"
import TaskCard from "../components/TaskCard"

function Tasks() {

  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem("tasks")
    return savedTasks ? JSON.parse(savedTasks) : []
  })

  const [filter, setFilter] = useState("all")

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks))
  }, [tasks])


  // FILTER LOGIC
  const filteredTasks = tasks.filter((task) => {

    if (filter === "pending") {
      return !task.completed
    }

    if (filter === "completed") {
      return task.completed
    }

    if (filter === "overdue") {
      if (!task.dueDate) return false
      return !task.completed && new Date(task.dueDate) < new Date()
    }

    return true
  })


  return (
    <div className="p-6 text-white">

      <h2 className="text-2xl md:text-3xl font-bold text-blue-600 mb-6">
        Task Manager
      </h2>


      {/* FILTER BUTTONS */}

      <div className="flex flex-wrap gap-3 mb-6">

        <button
          onClick={() => setFilter("all")}
          className="px-4 py-2 bg-blue-500 text-sm text-white rounded-lg"
        >
          All
        </button>

        <button
          onClick={() => setFilter("pending")}
          className="px-4 py-2 bg-yellow-500 text-sm text-white rounded-lg"
        >
          Pending
        </button>

        <button
          onClick={() => setFilter("completed")}
          className="px-4 py-2 bg-green-500 text-sm text-white rounded-lg"
        >
          Completed
        </button>

        <button
          onClick={() => setFilter("overdue")}
          className="px-4 py-2 bg-red-500 text-sm text-white rounded-lg"
        >
          Overdue
        </button>

      </div>



      {/* TASK LIST */}

      <div className="space-y-4">

        {filteredTasks.length === 0 ? (

          <p className="text-gray-400">
            No tasks yet.
          </p>

        ) : (

          filteredTasks.map((task) => (
            <TaskCard
              key={task.id}
              task={task}
              tasks={tasks}
              setTasks={setTasks}
            />
          ))

        )}

      </div>

    </div>
  )
}

export default Tasks