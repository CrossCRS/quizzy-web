/* Radio Button Component v20220608-ts */
/* (c) Norbert Budzyński 2022 */
import React, { ChangeEventHandler } from 'react';

import classNames from 'classnames';

interface Props {
  className?: string,
  onChange?: ChangeEventHandler<HTMLInputElement>,
  readOnly?: boolean,
  correct?: boolean,
  incorrect?: boolean,
  id: string,
  name: string,
  value: string,
  children?: React.ReactNode
}

function RadioButton({ className = '', onChange = undefined, readOnly = false, correct = false, incorrect = false, id, name, value, children, ...other } : Props) {
  const divClasses = classNames({
    'flex items-center justify-between border rounded shadow-sm mb-2 transition-colors': true,
    'hover:bg-emerald-300': !readOnly,

    // 'bg-gray-100 text-gray-400 cursor-default focus:outline-none': disabled,
    // 'bg-gray-200 hover:bg-gray-300 focus:ring-gray-100 text-gray-900': !disabled && !color && basic,
    [`${className}`]: className,
  });

  const labelClasses = classNames({
    'w-full p-3 rounded': true,
    'cursor-pointer peer-checked:text-white peer-checked:bg-emerald-500 peer-checked:font-bold': !readOnly,
    'text-white font-bold bg-red-500 line-through': readOnly && incorrect,
    'text-white font-bold bg-emerald-500': readOnly && correct,
  });

  return (
    <div className={divClasses} {...other}>
      <input type='radio'
        className='peer sr-only'
        id={id}
        name={name}
        value={value}
        disabled={readOnly}
        onChange={onChange}
      />
      <label className={labelClasses} htmlFor={id}>{children}</label>
    </div>
  );
}

export default RadioButton;