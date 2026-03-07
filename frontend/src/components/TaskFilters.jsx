function TaskFilters({ filter, setFilter }) {

  return (
    <div className="flex flex-wrap gap-3 mb-6">

      <button
        onClick={() => setFilter("all")}
        className={`px-4 py-2 rounded-lg text-sm ${
          filter === "all" ? "bg-blue-500 text-white" : "bg-blue-200"
        }`}
      >
        All
      </button>

      <button
        onClick={() => setFilter("pending")}
        className={`px-4 py-2 rounded-lg text-sm ${
          filter === "pending" ? "bg-yellow-500 text-white" : "bg-yellow-200"
        }`}
      >
        Pending
      </button>

      <button
        onClick={() => setFilter("completed")}
        className={`px-4 py-2 rounded-lg text-sm ${
          filter === "completed" ? "bg-green-500 text-white" : "bg-green-200"
        }`}
      >
        Completed
      </button>

      <button
        onClick={() => setFilter("overdue")}
        className={`px-4 py-2 rounded-lg text-sm ${
          filter === "overdue" ? "bg-red-500 text-white" : "bg-red-200"
        }`}
      >
        Overdue
      </button>

      <button
        onClick={() => setFilter("today")}
        className={`px-4 py-2 rounded-lg text-sm ${
          filter === "today" ? "bg-purple-500 text-white" : "bg-purple-200"
        }`}
      >
        Today
      </button>

    </div>
  )
}

export default TaskFilters