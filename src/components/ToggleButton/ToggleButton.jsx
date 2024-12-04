import { useContext } from "react";
import { ThemeContext } from "../../context";
import styles from "./ToggleButton.module.css";

export const ToggleButton = () => {
    const { theme, setTheme } = useContext(ThemeContext);

    const toggleTheme = () => {
        const newTheme = theme === "dark" ? "light" : "dark";
        setTheme(newTheme);
    };

    return (
        <button
            className={styles.toggleButton}
            onClick={toggleTheme}
            aria-label="Toggle theme"
        >
            <img
                src={theme === "dark" ? "/img/light-mode.png" : "/img/night-mode.png"}
                alt={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
                className={styles.icon}
            />
        </button>
    );
};
