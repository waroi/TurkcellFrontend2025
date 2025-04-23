'use client';

import React from "react";
import Button from "../../atoms/Button/Button";
import styles from "./ButtonGroup.module.scss";

interface ButtonGroupProps {
    data: string[];
    activeIndex?: number;
    onChange?: (index: number) => void;
    theme?: string;
}

const ButtonGroup: React.FC<ButtonGroupProps> = ({
    data,
    activeIndex = -1,
    onChange = () => { },
    theme = "light",
}) => {
    return (
        <div className={styles.buttonContainer}>
            {data.map((label, index) => (
                <Button
                    key={index}
                    className={`${index === activeIndex ? styles.activeButton : styles.inactiveButton} ${theme === "dark" ? styles.dark : styles.light
                        }`}
                    onClick={() => onChange(index)}
                >
                    {label}
                </Button>
            ))}
        </div>
    );
};


export default ButtonGroup;
