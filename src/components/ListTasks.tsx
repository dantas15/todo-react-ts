import { Task as TaskType } from '../interfaces/Task';
import { AddTask } from './AddTask';
import { Task } from './Task';

import styles from './ListTasks.module.css';
import { Empty } from './Empty';

interface ListTaskProps {
  tasks: TaskType[];
  handleUpdateOrCreateTask: (task: TaskType) => void;
  handleRemoveTask: (taskId: string) => void;
}

export function ListTask({
  tasks,
  handleUpdateOrCreateTask,
  handleRemoveTask,
}: ListTaskProps) {
  function handleToggleTaskStatus(id: string) {
    const taskToBeUpdated = tasks.find((task) => task.id === id);

    if (!taskToBeUpdated) {
      // TODO Put some sort of notification here
      return;
    }

    const updatedTask = {
      ...taskToBeUpdated,
      done_at: taskToBeUpdated.done_at ? undefined : Date.now(),
    };

    handleUpdateOrCreateTask(updatedTask);
  }

  const tasksCreated = tasks.length;
  const tasksCompleted = tasks.filter((task) => !!task.done_at).length;
  return (
    <main className={styles.mainContent}>
      <AddTask handleAddTask={handleUpdateOrCreateTask} />
      <div className={styles.tasksWrapper}>
        <section className={styles.info}>
          <span className={styles.infoCreated}>
            Tasks created <span className={styles.badge}>{tasksCreated}</span>
          </span>
          <span className={styles.infoCompleted}>
            Completed{' '}
            <span className={styles.badge}>
              {tasksCompleted} out of {tasksCreated}
            </span>
          </span>
        </section>
        <section className={styles.tasksSection}>
          <ul className={styles.taskList}>
            {tasks.map((task) => (
              <Task
                handleToggleTaskStatus={handleToggleTaskStatus}
                handleDelete={handleRemoveTask}
                key={task.id}
                task={task}
              />
            ))}
          </ul>
          {tasks.length === 0 && <Empty />}
        </section>
      </div>
    </main>
  );
}
