/* Alert Component v20220727-ts */
/* (c) Norbert Budzyński 2022 */
import React from 'react';

import classNames from 'classnames';

export type AlertType = 'error' | 'success' | 'warning' | 'info';

interface Props {
  className?: string,
  type?: AlertType,
  absolute?: boolean,
  visible?: boolean,
  children?: React.ReactNode,
  [x:string]: any;
}

function Alert({ className = '', type = 'info', absolute = false, visible = true, children, ...other } : Props) {
  const alertClasses = classNames({
    'p-4 rounded shadow-sm left-1/2 -translate-x-1/2 transition-opacity duration-300': true,
    'bg-red-500 text-white': type === 'error',
    'bg-emerald-500 text-white': type === 'success',
    'bg-orange-400 text-white': type === 'warning',
    'bg-white text-black': type === 'info',
    'absolute': absolute,
    [`${className}`]: className,
  });

  return (
    <div className={alertClasses} style={{ opacity: (visible ? 1.0 : 0.0) }} {...other}>
      {children}
    </div>
  );
}

export default Alert;