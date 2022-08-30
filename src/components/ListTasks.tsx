import { Dispatch, SetStateAction, useEffect } from 'react';
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

  function handleToggleTaskStatus(id: string) {
    setTasks((state) => {
      const taskToBeUpdated = state.find((task) => task.id === id);

      if (!taskToBeUpdated) {
        // TODO Put some sort of notification here
        return state;
      }

      return state.map((task) => {
        if (task.id === id) {
          const done_at = task.done_at ? undefined : Date.now();
          return { ...task, done_at };
        }
        return task;
      });
    });
  }

  function handleRemoveTask(id: string) {
    setTasks((state) => {
      return state.reduce((acc, task) => {
        if (task.id !== id) {
          acc.push(task);
        }
        return acc;
      }, [] as TaskType[]);
    });
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
