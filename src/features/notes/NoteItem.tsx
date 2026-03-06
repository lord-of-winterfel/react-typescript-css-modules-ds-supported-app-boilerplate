import { Button } from "my-ui";
import type { Note } from "../../types/note";
import styles from "./Notes.module.css";

interface NoteItemProps {
  note: Note;
  onDelete: (id: string) => void;
}

export function NoteItem({ note, onDelete }: NoteItemProps) {
  return (
    <li className={styles.item}>
      <p className={styles.itemText}>{note.text}</p>
      <Button
        type="button"
        variant="secondary"
        size="sm"
        className={styles.deleteBtn}
        onClick={() => onDelete(note.id)}
        aria-label={`Delete note: ${note.text}`}
      >
        Delete
      </Button>
    </li>
  );
}
