import styles from "./App.module.css";
import { CreateNewTaskInput } from "./components/CreateNewTaskInput";
import { Header } from "./components/Header";
import { TaskArea } from "./components/TaskArea";
import { v4 as uuidv4 } from "uuid";
import { useState } from "react";

function App() {
  const [tasks, setTasks] = useState([
    {
      id: uuidv4(),
      finished: false,
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      id: uuidv4(),
      finished: false,
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      id: uuidv4(),
      finished: false,
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      id: uuidv4(),
      finished: true,
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      id: uuidv4(),
      finished: true,
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
  ]);

  function handleAddNewTask(id: string, finished: boolean, text: string) {
    setTasks([...tasks, { id, finished, text }]);
  }

  function handleToggleTask(taskId: string) {
    const tasksToggled = tasks.map((taskObj) => {
      if (taskId === taskObj.id) {
        taskObj.finished = !taskObj.finished;
        return taskObj;
      } else {
        return taskObj;
      }
    });

    setTasks(tasksToggled);
  }

  function handleDeleteTask(taskId: string) {
    const tasksNotDeleted = tasks.filter((task) => taskId !== task.id);

    setTasks(tasksNotDeleted);
  }

  return (
    <div>
      <Header />

      <main>
        <CreateNewTaskInput newTask={handleAddNewTask} />

        <div className={styles.wrapper}>
          <TaskArea
            tasks={tasks}
            toggleTask={handleToggleTask}
            deleteTask={handleDeleteTask}
          />
        </div>
      </main>
    </div>
  );
}

export default App;
