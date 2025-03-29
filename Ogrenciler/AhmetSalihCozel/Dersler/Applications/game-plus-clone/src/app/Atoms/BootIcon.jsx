import React from 'react';

const BootIcon = ({ iconName, children, className, size = 1}) => {
  const iconStyle = {
    fontSize:`${size}px`,
  };

  return <i className={`bi bi-${iconName} ${className}`} style={iconStyle}>{children}</i>
};

export default BootIcon;
