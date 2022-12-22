import styles from "./NoTasks.module.css";
import { ClipboardText } from "phosphor-react";

export function NoTasks() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.line}></div>
      <ClipboardText size={56} color="#333333" />
      <p className={styles.text1}>You don't have any tasks</p>
      <p className={styles.text2}>Create tasks abd organize your to do items</p>
    </div>
  );
}
