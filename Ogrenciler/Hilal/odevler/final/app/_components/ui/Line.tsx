import React from 'react';
import clsx from 'clsx';

interface LineProps {
  layout?: 'horizontal' | 'vertical';
  width?: string;
  height?: string;
  color?: string;
  className?: string;
}

const Line = ({
  layout = 'horizontal',
  width = '100%',
  height = '1px',
  className,
}:LineProps) => {
  const isHorizontal = layout === 'horizontal';

  const style: React.CSSProperties = {
    width: isHorizontal ? width : height,
    height: isHorizontal ? height : width,
  };

  return <div className={clsx("line",className)} style={style} />;
};

export default Line;
