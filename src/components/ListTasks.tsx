import { Dispatch, SetStateAction } from 'react';
import { Task as TaskType } from '../interfaces/Task';
import { AddTask } from './AddTask';
import { Task } from './Task';

import styles from './ListTasks.module.css';
import { Empty } from './Empty';

interface ListTaskProps {
  tasks: TaskType[];
  setTasks: Dispatch<SetStateAction<TaskType[]>>;
}

export function ListTask({ tasks, setTasks }: ListTaskProps) {
  function handleAddTask(newTask: TaskType) {
    setTasks((state) => [...state, newTask]);
  }

  const tasksCreated = tasks.length;
  const tasksCompleted = tasks.filter((task) => !!task.done_at).length;
  return (
    <main className={styles.mainContent}>
      <AddTask handleAddTask={handleAddTask} />
      <div className={styles.tasksWrapper}>
        <section className={styles.info}>
          <span className={styles.infoCreated}>
            Tasks created <span className={styles.badge}>{tasksCreated}</span>
          </span>
          <span className={styles.infoCompleted}>
            Completed <span className={styles.badge}>{tasksCompleted}</span>
          </span>
        </section>
        <section className={styles.tasksSection}>
          <ul className={styles.taskList}>
            {tasks.map((task) => (
              <Task key={task.id} task={task} />
            ))}
          </ul>
          {tasks.length === 0 && <Empty />}
        </section>
      </div>
    </main>
  );
}
