'use client'
import styles from "./../RecipeForm.module.css"; // You would need to create this CSS module

const ColorPicker = ({ selectedColor, setSelectedColor, clearGrid }) => {
    const colors = [
        "#ff6666", "#ffcc66", "#ffff66", "#ccff66", "#66ff66",
        "#66ffcc", "#66ffff", "#66ccff", "#6666ff", "#cc66ff",
        "#ff66cc", "#ff6699"
    ];

    return (
        <div className={styles.colorPicker}>
            {colors.map((color, index) => (
                <button
                    key={index}
                    className={`${styles.colorButton} ${color === selectedColor ? styles.selected : ""}`}
                    style={{ backgroundColor: color }}
                    onClick={() => setSelectedColor(color)}
                ></button>
            ))}
            <button className={styles.clearButton} onClick={clearGrid}>
                Grid'i Temizle
            </button>
        </div>
    );
};

export default ColorPicker; 