import { Header } from "../components/Header/Header";
import { NotesPage } from "../features/notes/NotesPage";
import styles from "./App.module.css";

export function App() {
  return (
    <div className={styles.app}>
      <Header />
      <main className={styles.main}>
        <NotesPage />
      </main>
    </div>
  );
}
