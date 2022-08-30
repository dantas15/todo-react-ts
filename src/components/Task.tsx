import { CheckCircle, Circle, Trash } from 'phosphor-react';
import { FormEvent, useState } from 'react';
import { Task as TaskType } from '../interfaces/Task';

import styles from './Task.module.css';

interface TaskProps {
  task: TaskType;
  handleToggleTaskStatus: (id: string) => void;
  handleDelete: (id: string) => void;
}

export function Task({
  task,
  handleToggleTaskStatus,
  handleDelete,
}: TaskProps) {
  const [isHoveringTaskButton, setIsHoveringTaskButton] = useState(false);

  const isTaskDone = !!task.done_at;

  function handleActivateButtonTaskHover() {
    setIsHoveringTaskButton(true);
  }
  function handleDisableButtonTaskHover() {
    setIsHoveringTaskButton(false);
  }

  return (
    <li className={styles.wrapper}>
      <button
        type="button"
        onClick={() => handleToggleTaskStatus(task.id)}
        onMouseEnter={handleActivateButtonTaskHover}
        onMouseLeave={handleDisableButtonTaskHover}
      >
        {isTaskDone ? (
          <CheckCircle size={22} className={styles.checked} weight="fill" />
        ) : (
          <Circle
            size={22}
            className={styles.unChecked}
            weight={isHoveringTaskButton ? 'duotone' : 'regular'}
          />
        )}
      </button>
      <span className={isTaskDone ? styles.taskTitleDone : undefined}>
        {task.title}
      </span>
      <button
        type="button"
        className={styles.trashButton}
        onClick={() => handleDelete(task.id)}
      >
        <Trash size={22} />
      </button>
    </li>
  );
}
