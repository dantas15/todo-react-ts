import { Task as TaskType } from '../interfaces/Task';

import styles from './Task.module.css';

interface TaskProps {
  task: TaskType;
}

export function Task({ task }: TaskProps) {
  return <li className={styles.wrapper}>{task.title}</li>;
}
