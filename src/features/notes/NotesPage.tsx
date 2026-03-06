import { useState, useCallback } from "react";
import { Card } from "my-ui";
import type { Note } from "../../types/note";
import { NoteForm } from "./NoteForm";
import { NoteList } from "./NoteList";
import styles from "./Notes.module.css";

function generateId(): string {
  return crypto.randomUUID?.() ?? `id-${Date.now()}-${Math.random().toString(36).slice(2)}`;
}

export function NotesPage() {
  const [notes, setNotes] = useState<Note[]>([]);

  const handleAdd = useCallback((text: string) => {
    setNotes((prev) => [...prev, { id: generateId(), text }]);
  }, []);

  const handleDelete = useCallback((id: string) => {
    setNotes((prev) => prev.filter((n) => n.id !== id));
  }, []);

  return (
    <div className={styles.page}>
      <Card>
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>New note</h2>
          <NoteForm onAdd={handleAdd} />
        </section>
      </Card>

      <Card>
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Notes</h2>
          <NoteList notes={notes} onDelete={handleDelete} />
        </section>
      </Card>
    </div>
  );
}
