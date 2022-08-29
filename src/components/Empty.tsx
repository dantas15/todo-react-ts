import { ClipboardText } from 'phosphor-react';

import styles from './Empty.module.css';

export function Empty() {
  return (
    <div className={styles.wrapper}>
      <ClipboardText size={56} />
      <div className={styles.text}>
        <p className={styles.boldText}>You have no tasks</p>
        <p>Add a task and organize the things you have to do</p>
      </div>
    </div>
  );
}
