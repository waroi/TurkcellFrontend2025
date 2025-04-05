import React from 'react';

const BootIcon = ({ onClick, iconName, children, className, size = 1}) => {
  const iconStyle = {
    fontSize:`${size}px`,
  };

  return <i onClick={onClick} className={`bi bi-${iconName} ${className}`} style={iconStyle}>{children}</i>
};

export default BootIcon;
