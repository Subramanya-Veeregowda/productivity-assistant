import { PieChart, Pie, Cell, Tooltip, BarChart, Bar, XAxis, YAxis, LineChart, Line, ResponsiveContainer } from "recharts"
import { useState, useEffect } from "react"

function Analytics() {

  const [tasks, setTasks] = useState([])

  useEffect(() => {
    const savedTasks = localStorage.getItem("tasks")
    if (savedTasks) {
      setTasks(JSON.parse(savedTasks))
    }
  }, [])

  const completed = tasks.filter(t => t.completed).length
  const pending = tasks.length - completed

  const high = tasks.filter(t => t.priority === "High Priority").length
  const medium = tasks.filter(t => t.priority === "Medium Priority").length
  const low = tasks.filter(t => t.priority === "Low Priority").length

  const totalTasks = tasks.length

  const overdueTasks = tasks.filter(task => {
    const due = new Date(task.dueDate)
    const now = new Date()
    return !task.completed && due < now
  }).length


  const data = [
    { name: "Completed", value: completed },
    { name: "Pending", value: pending }
  ]

  const priorityData = [
    { name: "High", value: high },
    { name: "Medium", value: medium },
    { name: "Low", value: low }
  ]

  const weeklyData = [
    { day: "Mon", tasks: Math.floor(Math.random() * 5) },
    { day: "Tue", tasks: Math.floor(Math.random() * 5) },
    { day: "Wed", tasks: Math.floor(Math.random() * 5) },
    { day: "Thu", tasks: Math.floor(Math.random() * 5) },
    { day: "Fri", tasks: Math.floor(Math.random() * 5) },
    { day: "Sat", tasks: Math.floor(Math.random() * 5) },
    { day: "Sun", tasks: Math.floor(Math.random() * 5) }
  ]

  const COLORS = ["#10B981", "#F43F5E"]

  return (

    <div className="p-6 space-y-8 max-w-6xl mx-auto">

      <h2 className="text-2xl md:text-3xl font-bold text-blue-500">
        Task Analytics
      </h2>

      {/* STATS CARDS */}

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">

        <div className="bg-blue-200 text-blue-900 p-4 rounded shadow-md">
          <h3 className="font-semibold">Total Tasks</h3>
          <p className="text-2xl font-bold">{totalTasks}</p>
        </div>

        <div className="bg-green-200 text-green-900 p-4 rounded shadow-md">
          <h3 className="font-semibold">Completed</h3>
          <p className="text-2xl font-bold">{completed}</p>
        </div>

        <div className="bg-yellow-200 text-yellow-900 p-4 rounded shadow-md">
          <h3 className="font-semibold">Pending</h3>
          <p className="text-2xl font-bold">{pending}</p>
        </div>

        <div className="bg-red-200 text-red-900 p-4 rounded shadow-md">
          <h3 className="font-semibold">Overdue</h3>
          <p className="text-2xl font-bold">{overdueTasks}</p>
        </div>

      </div>


      {/* CHARTS */}

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">


        {/* PIE CHART */}

        <div className="bg-blue-400/20 p-4 rounded-xl shadow-lg border border-gray-200">

          <h3 className="mb-3 font-semibold text-gray-800">
            Task Completion
          </h3>

          <div className="w-full h-72">

            <ResponsiveContainer>

              <PieChart>

                <Pie
                  data={data}
                  dataKey="value"
                  outerRadius={90}
                  label
                >
                  {data.map((entry, index) => (
                    <Cell
                      key={index}
                      fill={COLORS[index % COLORS.length]}
                    />
                  ))}
                </Pie>

                <Tooltip />

              </PieChart>

            </ResponsiveContainer>

          </div>

        </div>


        {/* BAR CHART */}

        <div className="bg-blue-400/20 p-4 rounded-xl shadow-lg border border-gray-200">

          <h3 className="mb-3 font-semibold text-gray-800">
            Priority Distribution
          </h3>

          <div className="w-full h-72">

            <ResponsiveContainer>

              <BarChart data={priorityData}>

                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />

                <Bar
                  dataKey="value"
                  fill="#3b82f6"
                  radius={[6,6,0,0]}
                />

              </BarChart>

            </ResponsiveContainer>

          </div>

        </div>


        {/* LINE CHART */}

        <div className="bg-blue-400/20 p-4 rounded-xl shadow-lg border border-gray-200">

          <h3 className="mb-3 font-semibold text-gray-800">
            Weekly Productivity
          </h3>

          <div className="w-full h-72">

            <ResponsiveContainer>

              <LineChart data={weeklyData}>

                <XAxis dataKey="day" />
                <YAxis />
                <Tooltip />

                <Line
                  type="monotone"
                  dataKey="tasks"
                  stroke="#6366f1"
                  strokeWidth={3}
                />

              </LineChart>

            </ResponsiveContainer>

          </div>

        </div>


      </div>

    </div>

  )

}

export default Analytics