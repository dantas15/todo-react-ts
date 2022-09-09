import { ChangeEvent, FormEvent, InvalidEvent, useState } from 'react';
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
      created_at: Date.now(),
    };

    handleAddTask(newTask);
    setTitle('');
  }

  function handleChangeTitle(event: ChangeEvent<HTMLInputElement>) {
    event.target.setCustomValidity('');
    setTitle(event.target.value);
  }

  function handleOnInvalid(event: InvalidEvent<HTMLInputElement>) {
    event.target.setCustomValidity('Please enter a task title');
  }

  return (
    <div className={styles.wrapper}>
      <form onSubmit={handleSubmit} className={styles.formWrapper}>
        <input
          type="text"
          value={title}
          onChange={handleChangeTitle}
          placeholder="Add a new task"
          onInvalid={handleOnInvalid}
          required
        />
        <button type="submit">
          <span>Add</span> <Plus />
        </button>
      </form>
    </div>
  );
}
