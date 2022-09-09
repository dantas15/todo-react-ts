import { Task } from '../interfaces/Task';

export function sortTasks(tasks: Task[]) {
  return tasks.sort((firstEl, secondEl) => {
    if (firstEl.done_at && secondEl.done_at) {
      return 0;
    }

    if (firstEl.done_at && !secondEl.done_at) {
      return 1;
    }

    if (!firstEl.done_at && secondEl.done_at) {
      return -1;
    }

    return firstEl.created_at - secondEl.created_at;
  });
}
