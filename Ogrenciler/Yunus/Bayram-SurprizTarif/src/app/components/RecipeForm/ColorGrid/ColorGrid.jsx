'use client'
import ColorPicker from "../ColorPicker/ColorPicker";
import styles from "./ColorGrid.module.css";

const ColorGrid = ({ colorGrid, selectedColor, setSelectedColor, handleGridClick, clearGrid }) => {
    return (
        <div>
            <div className={styles.grid}>
                {colorGrid.map((color, index) => (
                    <div
                        key={index}
                        className={styles.gridItem}
                        style={{ backgroundColor: color }}
                        onClick={() => handleGridClick(index)}
                    ></div>
                ))}
            </div>

            <ColorPicker
                selectedColor={selectedColor}
                setSelectedColor={setSelectedColor}
                clearGrid={clearGrid}
            />
        </div>
    );
};

export default ColorGrid;