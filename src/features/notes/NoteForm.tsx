import { useState, type FormEvent } from "react";
import { Button } from "my-ui";
import styles from "./Notes.module.css";

interface NoteFormProps {
  onAdd: (text: string) => void;
}

export function NoteForm({ onAdd }: NoteFormProps) {
  const [text, setText] = useState("");

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const trimmed = text.trim();
    if (trimmed) {
      onAdd(trimmed);
      setText("");
    }
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div className={styles.inputRow}>
        <input
          type="text"
          className={styles.input}
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Write a note..."
          aria-label="Note text"
        />
        <Button type="submit" size="md">
          Add
        </Button>
      </div>
    </form>
  );
}
