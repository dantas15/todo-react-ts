import { ChangeEvent, FormEvent, useState } from 'react';
import { Plus } from 'phosphor-react';

import styles from './AddTask.module.css';

export function AddTask() {
  const [title, setTitle] = useState('');

  function handleSubmit(event: FormEvent) {
    event.preventDefault();
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
