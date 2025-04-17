import React from 'react';
import './checkbox.scss';

interface CheckboxProps {
  checked?: boolean;
  onCheckedChange?: (checked: boolean) => void;
  id?: string;
  disabled?: boolean;
}

const Checkbox = ({ 
  checked = false, 
  onCheckedChange, 
  id,
  disabled = false 
}: CheckboxProps) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (onCheckedChange) {
      onCheckedChange(e.target.checked);
    }
  };

  return (
    <div className="checkbox-container">
      <input
        type="checkbox"
        id={id}
        checked={checked}
        onChange={handleChange}
        disabled={disabled}
        className="checkbox-input"
      />
      <span className="checkbox-checkmark"></span>
    </div>
  );
};

export default Checkbox; 