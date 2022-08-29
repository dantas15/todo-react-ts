import { ChangeEvent, FormEvent, useState } from 'react';
import { Plus } from 'phosphor-react';
import { v4 as uuid } from 'uuid';

import styles from './AddTask.module.css';
import { Task } from '../interfaces/Task';

interface AddTaskProps {
  handleAddTask: (newTask: Task) => void;
}

export function AddTask({ handleAddTask }: AddTaskProps) {
  const [title, setTitle] = useState('');

  function handleSubmit(event: FormEvent) {
    event.preventDefault();
    const newTask: Task = {
      id: uuid(),
      title: title,
      created_at: new Date(),
      done_at: null,
    };

    handleAddTask(newTask);
  }

  function handleChangeTitle(event: ChangeEvent<HTMLInputElement>) {
    setTitle(event.target.value);
  }

  return (
    <div className={styles.wrapper}>
      <form onSubmit={handleSubmit} className={styles.form}>
        <input
          type="text"
          value={title}
          onChange={handleChangeTitle}
          placeholder="Add a new task"
        />
        <button type="submit">
          <span>Add</span> <Plus />
        </button>
      </form>
    </div>
  );
}
