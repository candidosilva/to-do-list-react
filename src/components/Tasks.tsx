import { Task } from "./Task";
import styles from "./Tasks.module.css";

interface TasksProps {
  tasks: Task[];
  toggleTask: (taskId: string) => void;
  deleteTask: (taskId: string) => void;
}

interface Task {
  id: string;
  finished: boolean;
  text: string;
}

export function Tasks({ tasks, toggleTask, deleteTask }: TasksProps) {
  return (
    <div className={styles.wrapper}>
      {tasks.map((task) => {
        return (
          <Task
            key={task.id}
            id={task.id}
            finished={task.finished}
            text={task.text}
            toggleTask={toggleTask}
            deleteTask={deleteTask}
          />
        );
      })}
    </div>
  );
}
