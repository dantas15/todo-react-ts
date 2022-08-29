import { useState } from 'react';
import { Header } from './components/Header';
import { ListTask } from './components/ListTasks';
import { Task } from './interfaces/Task';

import './global.css';

export function App() {
  const [tasks, setTasks] = useState<Task[]>([]);

  return (
    <>
      <Header />
      <ListTask tasks={tasks} setTasks={setTasks} />
    </>
  );
}
