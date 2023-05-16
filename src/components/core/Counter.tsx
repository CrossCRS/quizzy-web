/* Counter Component v20230516-ts */
/* (c) Norbert Budzyński 2023 */
import React from 'react';

import classNames from 'classnames';

interface Props {
  className?: string,
  label: string,
  value: string,
}

function Counter({ className = '', label, value } : Props) {
  const counterClasses = classNames({
    'flex flex-col items-center text-center': true,
    [`${className}`]: className,
  });

  const valueClasses = classNames({
    'm-0': true,
    'text-emerald-500': true,
  });

  const labelClasses = classNames({
    'text-xs text-gray-400': true,
  });

  return (
    <div className={counterClasses}>
      <h2 className={valueClasses}>{value}</h2>
      <span className={labelClasses}>{label}</span>
    </div>
  );
}

export default Counter;
