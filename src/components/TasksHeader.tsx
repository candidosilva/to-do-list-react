import { useState } from "react";
import styles from "./TasksHeader.module.css";

interface Props {
  tasks: Tasks[];
}

interface Tasks {
  finished: boolean;
  text: string;
}

export function TasksHeader({ tasks }: Props) {
  const finishedQty = finishedCount();
  function finishedCount() {
    return tasks.reduce((total, obj) => {
      if (obj.finished) return total + 1;
      return total;
    }, 0);
  }

  return (
    <header className={styles.header}>
      <div className={styles.createdTasksArea}>
        <p className={styles.createdTasks}>Created tasks</p>
        <div className={styles.createdTasksCount}>{tasks.length}</div>
      </div>

      <div className={styles.finishedArea}>
        <p className={styles.finished}>Finished</p>
        <div className={styles.finishedCount}>
          <div>{finishedQty}</div> <span>de</span> <span>{tasks.length}</span>
        </div>
      </div>
    </header>
  );
}
