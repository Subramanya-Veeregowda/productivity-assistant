export function getTaskStatus(task) {
  const today = new Date()
  const due = new Date(task.dueDate)

  today.setHours(0,0,0,0)
  due.setHours(0,0,0,0)

  if (task.completed) return "completed"
  if (due < today) return "overdue"
  if (due.getTime() === today.getTime()) return "today"

  return "upcoming"
}