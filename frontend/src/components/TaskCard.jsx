import { getTaskStatus } from "../utils/taskstatus";

function TaskCard({ task, onComplete, onDelete}) {
    const status = getTaskStatus(task);
    const isOverdue = task.dueDate && !task.completed && new Date(task.dueDate) < new Date();
    const formattedDate = task.dueDate ? new Date(task.dueDate).toLocaleString(): "No date"; 

  
return (
  <div className="bg-blue-400/20 p-4  border-gray-700 rounded-xl p-4 shadow-md hover:bg-blue-600/60 hover:shadow-lg transition">
   
  {/* TOP ROW */}
  <div className="flex justify-between items-start mb-3">
    
    {/* TITLE */}
    <h3 className={'text-lg font-semibold tracking-wide text-white" ${task.completed ? "line-through text red-400" : "text-white"}'}>
      {task.title}
    </h3>
{status === "overdue" && (
  <span className="text-red-400 text-xs font-semibold">
    Overdue
  </span>
)}

{status === "today" && (
  <span className="text-yellow-400 text-xs font-semibold">
    Due Today
  </span>
)}

{status === "upcoming" && (
  <span className="text-blue-400 text-xs font-semibold">
    Upcoming
  </span>
)}
    {/* OVERDUE */}
    {task.dueDate && new Date(task.dueDate) < new Date() && !task.completed && (
      <span className="text-xs bg-yellow-500 text-white px-2 py-1 rounded">
        Overdue
      </span>
    )}

  </div>


  {/* INFO ROW */}
  <div className="flex justify-between items-center mb-3 text-sm flex-wrap gap-2">

    {/* PRIORITY */}
    <span
      className={`px-3 py-1 rounded-full font-medium
      ${
        task.priority === "High Priority"
          ? "bg-red-500/20 text-red-400"
          : task.priority === "Medium Priority"
          ? "bg-yellow-500/20 text-yellow-400"
          : "bg-green-500/20 text-green-400"
      }`}
    >
      {task.priority}
    </span>


    {/* DUE DATE */}
    {task.dueDate && (
      <span className="text-black dark:text-blue-400 font-semibold font-medium">
        ⏰ {new Date(task.dueDate).toLocaleString()}
      </span>
    )}

  </div>


  {/* ACTIONS */}
  <div className="flex items-center gap-3 flex-wrap mt-2">

<button
onClick={() => onComplete(task.id)}
disabled={task.completed}
className={`px-4 py-1.5 text-sm font-medium rounded-lg transition-all duration-200 shadow-sm hover:scale-105
${task.completed
? "bg-red-700 text-white cursor-not-allowed"
: "bg-green-500 hover:bg-green-600 text-white"}
`}
> 
{task.completed? "Completed" : "Complete"}
</button>

<button
onClick={() => onEdit(task)}
className="px-4 py-1.5 text-sm font-medium rounded-lg transition-all duration-200 shadow-sm hover:scale-105 bg-purple-500 hover:bg-purple-600 text-white"
> 
Edit
</button>

    <button
onClick={() => onDelete(task.id)}
className="px-4 py-1.5 text-sm font-medium rounded-lg transition-all duration-200 shadow-sm hover:scale-105 bg-gray-600 hover:bg-gray-700 text-white"
> 
Delete
</button>

  </div>

</div>
);
}


export default TaskCard