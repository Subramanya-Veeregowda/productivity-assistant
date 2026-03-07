export function calculateStreak(tasks) {
  const completedTasks = tasks
    .filter(t => t.completed)
    .map(t => new Date(t.completedAt).toDateString());

  const uniqueDays = [...new Set(completedTasks)];

  let streak = 0;
  let currentDate = new Date();

  while (true) {
    const day = currentDate.toDateString();

    if (uniqueDays.includes(day)) {
      streak++;
      currentDate.setDate(currentDate.getDate() - 1);
    } else {
      break;
    }
  }

  return streak;
}
  


