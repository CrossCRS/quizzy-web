/* Text Input Component v20210503-ts */
/* (c) Norbert Budzyński 2021 */
import React from 'react';

import classNames from 'classnames';

interface Props {
  className?: string,
  type?: 'email' | 'number' | 'password' | 'range' | 'search' | 'text' | 'url',
  disabled?: boolean,
  [x:string]: any;
}

function TextLink({ className = '', type = 'text', disabled = false, ...other }: Props) {
  const inputClasses = classNames({
    'py-2 px-4 rounded shadow-sm border border-gray-300': true,
    'focus:outline-none focus:border-blue-300 focus:shadow': true,
    'text-black': !disabled,
    'border-gray-200': disabled,
    [`${className}`]: className,
  });

  return (
    <input type={type} className={inputClasses} {...other} />
  );
}

export default TextLink;