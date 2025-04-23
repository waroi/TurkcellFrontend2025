'use client';
import React from 'react';
import styles from './Switch.module.scss';

interface SwitchProps {
  checked?: boolean;
  onChange?: (checked: boolean) => void;
  disabled?: boolean;
}

const Switch: React.FC<SwitchProps> = ({ checked = false, onChange, disabled = false }) => {
    const [isChecked, setIsChecked] = React.useState(checked);

    const handleToggle = () => {
      if (disabled) return;
      setIsChecked(!isChecked);
      onChange?.(!isChecked);
    };
    
    return (
      <label className={styles.switch}>
        <input
          type="checkbox"
          checked={isChecked}
          onChange={handleToggle}
          disabled={disabled}
        />
        <span className={styles.slider}></span>
      </label>
    );
};
export default Switch;
