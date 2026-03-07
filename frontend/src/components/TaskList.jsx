import TaskCard from "./TaskCard"

function TaskList({ tasks, completeTask, deleteTask, startEdit }) {

  if (tasks.length === 0) {
    return (
      <p className="text-gray-400 mt-4 text-center">
        No tasks found.
      </p>
    )
  }

  return (
    <div className="max-h-[60vh] overflow-y-auto pr-2">
      <div className="space-y-6">

        {[...tasks]
          .sort((a, b) => {

            if (a.completed !== b.completed) {
              return a.completed ? 1 : -1
            }

            const priorityRank = {
              "High Priority": 1,
              "Medium Priority": 2,
              "Low Priority": 3
            }

            return priorityRank[a.priority] - priorityRank[b.priority]

          })
          .map(task => (
            <TaskCard
              key={task.id}
              task={task}
              onComplete={completeTask}
              onDelete={deleteTask}
              onEdit={startEdit}
            />
          ))}

      </div>
    </div>
  )
}

export default TaskList