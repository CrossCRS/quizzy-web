/* Button Component v20220518-ts */
/* (c) Norbert Budzyński 2022 */
import React, { MouseEventHandler } from 'react';

import classNames from 'classnames';
import { Link } from 'react-router-dom';

interface Props {
  className?: string,
  color?: string,
  type?: 'button' | 'submit' | 'reset',
  onClick?: MouseEventHandler<HTMLButtonElement>,
  disabled?: boolean,
  basic?: boolean,
  block?: boolean,
  link?: boolean,
  to?: string,
  children?: React.ReactNode,
  [x:string]: any;
}

function Button({ className = '', color = '', type = 'button', onClick = undefined, disabled = false, basic = false, block = false, link = false, to = '', children, ...other } : Props) {
  const btnClasses = classNames({
    'px-4 py-2 border border-transparent rounded shadow-sm font-semibold text-center': true,
    'focus:outline-none focus:ring': !disabled,
    'text-white hover:text-white': !disabled && !basic,
    'bg-blue-500 hover:bg-blue-600 focus:ring-blue-200': !disabled && !basic && !color,

    'block': block,

    'bg-emerald-500 hover:bg-emerald-600 focus:ring-emerald-200': !disabled && !basic && color === 'emerald',
    'bg-green-500 hover:bg-green-600 focus:ring-green-200': !disabled && !basic && color === 'green',
    'bg-green-400 hover:bg-green-600 focus:ring-green-200': !disabled && !basic && color === 'lightgreen',
    'bg-red-500 hover:bg-red-600 focus:ring-red-200': !disabled && !basic && color === 'red',
    'bg-red-400 hover:bg-red-600 focus:ring-red-200': !disabled && !basic && color === 'lightred',

    'text-gray-900': !disabled && basic,
    'text-emerald-500': !disabled && basic && color === 'emerald',
    'text-green-500': !disabled && basic && color === 'green',
    'text-green-400': !disabled && basic && color === 'lightgreen',
    'text-red-500': !disabled && basic && color === 'red',
    'text-red-400': !disabled && basic && color === 'lightred',

    'bg-gray-100 text-gray-400 cursor-default focus:outline-none': disabled,
    'bg-gray-200 hover:bg-gray-300 focus:ring-gray-100': !disabled && basic,
    [`${className}`]: className,
  });

  if (link) {
    return (
      <Link to={to} className={btnClasses} {...other}>
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      className={btnClasses}
      onClick={onClick}
      disabled={disabled}
      {...other}
    >
      {children}
    </button>
  );
}

export default Button;