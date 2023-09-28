import React from 'react';

import { faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { useAuth } from '../hooks/useAuth';
import TextLink from './core/TextLink';

function HeaderAvatar() {
  const auth = useAuth();
  
  return (
    <>
      <TextLink to='/profile' className='mx-4 rounded-full border-2 border-transparent bg-gray-200 shadow-md hover:border-emerald-600'>
        <FontAwesomeIcon className='-mx-1 text-gray-500 hover:text-gray-500' icon={faUser} size='lg' />
      </TextLink>
    </>
  );
}

export default HeaderAvatar;