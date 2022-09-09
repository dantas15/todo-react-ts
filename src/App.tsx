import { useEffect, useState } from 'react';
import { Header } from './components/Header';
import { ListTask } from './components/ListTasks';
import { Task } from './interfaces/Task';

import './global.css';
import { sortTasks } from './util/sortTasks';

export function App() {
  const [tasks, setTasks] = useState<Task[]>([]);

  useEffect(() => {
    const tasksFromLocalStorage = JSON.parse(
      localStorage.getItem('tasks') ?? '[]'
    );

    if (tasksFromLocalStorage.length > 0) {
      setTasks(tasksFromLocalStorage);
    }
  }, []);

  useEffect(() => {
    const tasksStateHasTasks = Array.isArray(tasks) && tasks.length > 0;

    if (!tasksStateHasTasks) {
      localStorage.removeItem('tasks');
      return;
    }

    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  function handleTaskUpdate(updatedTask: Task) {
    setTasks((state) => {
      const taskExists = state.find((task) => task.id === updatedTask.id);

      if (!taskExists) {
        return sortTasks([...state, updatedTask]);
      }

      const updatedTasks = state.map((task) => {
        if (task.id === updatedTask.id) {
          return updatedTask;
        }

        return task;
      });

      return sortTasks(updatedTasks);
    });
  }

  function handleRemoveTask(taskId: string) {
    setTasks((state) => state.filter((task) => task.id !== taskId));
  }

  return (
    <>
      <Header />
      <ListTask
        tasks={tasks}
        handleUpdateOrCreateTask={handleTaskUpdate}
        handleRemoveTask={handleRemoveTask}
      />
    </>
  );
}
