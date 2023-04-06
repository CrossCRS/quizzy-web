import React from 'react';

import classNames from 'classnames';

interface Props {
  className?: string,
  hoverable?: boolean,
  children?: React.ReactNode,
  [x:string]: any;
}

function Box({ className = '', hoverable = false, children, ...other }: Props) {
  const boxClasses = classNames({
    'bg-white mb-8 md:mb-12 mx-2 p-4 border rounded shadow-sm flex flex-col': true,
    'hover:border-emerald-500': hoverable,
    [`${className}`]: className,
  });

  return (
    <div className={boxClasses} {...other}>{children}</div>
  );
}

export default Box;