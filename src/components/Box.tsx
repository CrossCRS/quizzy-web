import React from 'react';

import classNames from 'classnames';

interface Props {
  className?: string,
  hoverable?: boolean,
  border?: boolean,
  row?: boolean,
  children?: React.ReactNode,
  [x:string]: any;
}

function Box({ className = '', hoverable = false, border = false, row = false, children, ...other }: Props) {
  const boxClasses = classNames({
    'bg-white mb-8 md:mb-12 mx-2 p-4 border rounded shadow-sm flex': true,
    'flex-col': !row,
    'flex-row': row,
    'hover:shadow': hoverable,
    'border-t-emerald-500 border-t-4': border,
    [`${className}`]: className,
  });

  return (
    <div className={boxClasses} {...other}>{children}</div>
  );
}

export default Box;