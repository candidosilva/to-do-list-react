import { Check, Trash } from "phosphor-react";

import styles from "./Task.module.css";

interface TaskProps {
  id: string;
  finished: boolean;
  text: string;
  toggleTask: (taskId: string) => void;
  deleteTask: (taskId: string) => void;
}

export function Task({
  id,
  finished,
  text,
  toggleTask,
  deleteTask,
}: TaskProps) {
  function handleToggleTask() {
    toggleTask(id);
  }

  function handleDeleteTask() {
    deleteTask(id);
  }

  return (
    <div className={styles.taskWrapper}>
      {finished ? (
        <div onClick={handleToggleTask} className={styles.selectedIcon}>
          <Check color="#fff" />
        </div>
      ) : (
        <div onClick={handleToggleTask}>
          <div className={styles.notSelectedIcon}></div>
        </div>
      )}

      {finished ? (
        <p className={styles.finishedText}>{text}</p>
      ) : (
        <p className={styles.text}>{text}</p>
      )}

      <div onClick={handleDeleteTask} className={styles.trashBox}>
        <Trash size={25} color="#808080" />
      </div>
    </div>
  );
}
