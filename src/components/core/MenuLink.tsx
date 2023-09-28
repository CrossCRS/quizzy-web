/* Button Component v20230928-ts */
/* (c) Norbert Budzyński 2023 */
import React from 'react';

import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames';
import { NavLink } from 'react-router-dom';

interface Props {
  className?: string,
  to?: string,
  icon?: IconProp | null,
  children?: React.ReactNode,
  [x:string]: any;
}

function MenuLink({ className = '', to = '/', icon = null, children, ...other }: Props) {
  const linkClasses = classNames({
    'w-full bg-white flex flex-row items-center px-2 py-3': true,
    'text-black hover:bg-emerald-200 hover:text-black': true,
    [`${className}`]: className,
  });

  const childrenClasses = classNames({
    'pl-12': icon == null,
    'pr-16': true,
  });

  return (
    <NavLink to={to} className={linkClasses} {...other}>
      {icon && <FontAwesomeIcon className='text-gray-400 px-3' icon={icon} size='lg' fixedWidth={true} />}
      <div className={childrenClasses}>{children}</div>
    </NavLink>
  );
}

export default MenuLink;
