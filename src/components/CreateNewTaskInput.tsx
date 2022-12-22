import styles from "./CreateNewTaskInput.module.css";
import { PlusCircle } from "phosphor-react";
import { v4 as uuidv4 } from "uuid";
import { FormEvent, InvalidEvent, useState } from "react";

interface Props {
  newTask: (id: string, finished: boolean, text: string) => void;
}

export function CreateNewTaskInput({ newTask }: Props) {
  const [newTaskText, setNewTaskText] = useState("");

  function handleNewTask(event: FormEvent) {
    event.preventDefault();

    const id = uuidv4();
    const finished = false;
    const text = newTaskText;

    newTask(id, finished, text);
    setNewTaskText("");
  }

  function handleNewTaskText(event: InvalidEvent<HTMLInputElement>) {
    event.target.setCustomValidity("Esse campo é obrigatório");
  }

  function handleNewTextChange(event: InvalidEvent<HTMLInputElement>) {
    event.target.setCustomValidity("");

    setNewTaskText(event.target.value);
  }

  return (
    <form onSubmit={handleNewTask} className={styles.wrapper}>
      <input
        type="text"
        placeholder="Add a new task"
        className={styles.input}
        value={newTaskText}
        onChange={handleNewTextChange}
        onInvalid={handleNewTaskText}
        required
      />

      <button type="submit" className={styles.button}>
        Add <PlusCircle size={16} />
      </button>
    </form>
  );
}
