import { useContext } from "react";
import { ThemeContext } from "../../context";
import styles from "./ToggleButton.module.css";

export const ToggleButton = () => {
    const { setTheme } = useContext(ThemeContext);

    return (
        <nav className={styles.toggleStyle}>
            <button onClick={() => setTheme("light")}>Light</button>
            <button onClick={() => setTheme("dark")}>Dark</button>
        </nav>
    );
};
