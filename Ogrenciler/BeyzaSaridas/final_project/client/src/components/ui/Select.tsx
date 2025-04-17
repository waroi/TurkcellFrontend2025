import React, { useState } from "react";
import "./select.scss";

interface SelectProps {
  value?: string;
  onValueChange?: (value: string) => void;
  children: React.ReactNode;
}

interface SelectItemProps {
  value: string;
  children: React.ReactNode;
}

export const Select = ({ value, onValueChange, children }: SelectProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleSelect = (value: string) => {
    onValueChange?.(value);
    setIsOpen(false);
  };

  return (
    <div className="select-container">
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child, {
            value,
            isOpen,
            setIsOpen,
            onSelect: handleSelect,
          });
        }
        return child;
      })}
    </div>
  );
};

export const SelectTrigger = ({
  value,
  setIsOpen,
  children,
}: {
  value?: string;
  setIsOpen: (isOpen: boolean) => void;
  children: React.ReactNode;
}) => {
  return (
    <button
      className="select-trigger"
      onClick={() => setIsOpen((prev) => !prev)}
    >
      {value || <span className="placeholder">{children}</span>}
    </button>
  );
};

export const SelectContent = ({
  isOpen,
  children,
}: {
  isOpen: boolean;
  children: React.ReactNode;
}) => {
  return isOpen ? <div className="select-content">{children}</div> : null;
};

export const SelectItem = ({
  value,
  onSelect,
  children,
}: SelectItemProps & { onSelect: (value: string) => void }) => {
  return (
    <div
      className="select-item"
      onClick={() => onSelect(value)}
      role="button"
      tabIndex={0}
    >
      {children}
    </div>
  );
};

export const SelectValue = ({ value }: { value?: string }) => {
  return <span className="select-value">{value}</span>;
};

export default Select;