import { TasksHeader } from "./TasksHeader";
import { NoTasks } from "./NoTasks";
import { Tasks } from "./Tasks";

interface Props {
  tasks: Tasks[];
  toggleTask: (taskId: string) => void;
  deleteTask: (taskId: string) => void;
}

interface Tasks {
  id: string;
  finished: boolean;
  text: string;
}

export function TaskArea({ tasks, toggleTask, deleteTask }: Props) {
  return (
    <div>
      <TasksHeader tasks={tasks} />

      <main>
        {tasks.length === 0 ? (
          <NoTasks />
        ) : (
          <Tasks
            tasks={tasks}
            toggleTask={toggleTask}
            deleteTask={deleteTask}
          />
        )}
      </main>
    </div>
  );
}
