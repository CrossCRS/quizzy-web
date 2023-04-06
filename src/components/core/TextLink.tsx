/* Button Component v20220518-ts */
/* (c) Norbert Budzyński 2022 */
import React from 'react';

import classNames from 'classnames';
import { NavLink } from 'react-router-dom';

interface Props {
  className?: string,
  to?: string,
  active?: boolean,
  light?: boolean,
  nohover?: boolean,
  children?: React.ReactNode,
  [x:string]: any;
}

function TextLink({ className = '', to = '/', active = false, light = false, nohover = false, children, ...other }: Props) {
  const linkClasses = classNames({
    'inline-block py-2 px-4': true,
    'hover:text-white hover:underline': !nohover,
    'text-white': !light && !active,
    'font-light': light,
    'font-bold': active,
    [`${className}`]: className,
  });

  return (
    <NavLink to={to} className={({ isActive }) =>
      [
        linkClasses,
        isActive ? 'font-bold' : null,
      ]
        .filter(Boolean)
        .join(' ')
    } {...other}>
      {children}
    </NavLink>
  );
}

export default TextLink;