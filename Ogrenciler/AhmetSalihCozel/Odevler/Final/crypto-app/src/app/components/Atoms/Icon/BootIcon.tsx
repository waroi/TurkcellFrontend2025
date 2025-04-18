import React, {ReactNode} from 'react';

interface BootIconProps {
  onClick?: ()=> void;
  iconName: string;
  children?: ReactNode;
  className?: string;
  size?: number;
}

const BootIcon: React.FC<BootIconProps> = ({ onClick, iconName, children, className="", size = 1}) => {
  const iconStyle = {
    fontSize: `${size}px`,
  };

  return <i onClick={onClick} className={`bi bi-${iconName} ${className}`} style={iconStyle}>{children}</i>
};

export default BootIcon;
