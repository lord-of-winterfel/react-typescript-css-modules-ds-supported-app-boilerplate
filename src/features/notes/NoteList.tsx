import { NoteItem } from "./NoteItem";
import type { Note } from "../../types/note";
import styles from "./Notes.module.css";

interface NoteListProps {
  notes: Note[];
  onDelete: (id: string) => void;
}

export function NoteList({ notes, onDelete }: NoteListProps) {
  if (notes.length === 0) {
    return <p className={styles.itemText}>No notes yet. Add one above.</p>;
  }

  return (
    <ul className={styles.list}>
      {notes.map((note) => (
        <NoteItem key={note.id} note={note} onDelete={onDelete} />
      ))}
    </ul>
  );
}
