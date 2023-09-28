import React, { useRef, useState } from 'react';

import {
  useFloating,
  autoUpdate,
  offset,
  flip,
  shift,
  useDismiss,
  useRole,
  useClick,
  useInteractions,
  FloatingFocusManager,
  arrow,
  FloatingArrow,
} from '@floating-ui/react';
import { faCircleUser, faUser as faUserRegular } from '@fortawesome/free-regular-svg-icons';
import { faPowerOff, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


import MenuLink from './core/MenuLink';
import { useAuth } from '../hooks/useAuth';

function HeaderAvatarMenu() {
  const auth = useAuth();

  const [isOpen, setIsOpen] = useState(false);

  const arrowRef = useRef(null);

  const { refs, floatingStyles, context } = useFloating({
    open: isOpen,
    onOpenChange: setIsOpen,
    middleware: [
      offset(14),
      flip({ fallbackAxisSideDirection: 'end' }),
      shift(),
      arrow({
        element: arrowRef,
      }),
    ],
    whileElementsMounted: autoUpdate,
  });

  const click = useClick(context);
  const dismiss = useDismiss(context);
  const role = useRole(context);

  const { getReferenceProps, getFloatingProps } = useInteractions([
    click,
    dismiss,
    role,
  ]);
  
  return (
    <>
      <button 
        className='py-2 px-4 mx-4 rounded-full border-2 border-transparent bg-gray-200 shadow-md hover:border-emerald-600'
        ref={refs.setReference}
        {...getReferenceProps()}
      >
        <FontAwesomeIcon className='-mx-1 text-gray-500 hover:text-gray-500' icon={faUser} size='lg' />
      </button>
      {isOpen && (
        <FloatingFocusManager context={context} modal={false}>
          <div ref={refs.setFloating} style={floatingStyles} {...getFloatingProps()}>
            <FloatingArrow ref={arrowRef} context={context} width={20} height={12} fill='white' />
            <div className='bg-white rounded shadow-md pb-1'>
              <h4 className='m-0 p-4 font-bold'>{auth.username}</h4>
              <ul className='flex flex-col items-start list-none'>
                <li><MenuLink to='/profile' className='font-normal' icon={faCircleUser}>Profile</MenuLink></li>
                <li><MenuLink to='/logout' className='font-normal' icon={faPowerOff}>Logout</MenuLink></li>
              </ul>
            </div>
          </div>
        </FloatingFocusManager>
      )}
    </>
  );
}

export default HeaderAvatarMenu;