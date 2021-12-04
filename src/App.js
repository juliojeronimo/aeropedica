import { Link } from "react-router-dom";
import styles from './App.css';


export default function App() {
  return (
    <div className={styles.content}>
    <h1>Bookkeeper</h1>
      <nav
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem"
        }}
      >
        <Link to="/passengers">Passengers</Link>
        <Link to="/expenses">Expenses</Link>
      </nav>
    </div>
  );
}