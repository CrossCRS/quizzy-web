import React from 'react';

import { faList, faPlus, faRightToBracket, faSearch, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { useAuth } from '../hooks/useAuth';
import TextLink from './core/TextLink';
import HeaderAvatar from './HeaderAvatar';

function Header() {
  const auth = useAuth();
  
  return (
    <header className='w-full p-2 bg-emerald-500 z-10 relative'>
      <div className='max-w-7xl mx-auto flex flex-row justify-between items-center'>
        <div>
          <TextLink nohover to='/'>
            <h2 className='m-0 font-bold text-white' style={{ fontFamily: 'Poppins' }}>Quizzy</h2>
          </TextLink>
        </div>
        <div className='text-center text-base'>
          <TextLink to='/quizzes?page=1'><FontAwesomeIcon icon={faList} size='lg' /></TextLink>
          <TextLink to='/create'><FontAwesomeIcon icon={faPlus} size='lg' /></TextLink>
          {auth.token ? 
            <>
              {/* <TextLink to='/logout'>Logout</TextLink> */}
              <HeaderAvatar />
            </>
            :
            <>
              <TextLink to='/login'><FontAwesomeIcon icon={faRightToBracket} size='lg' /></TextLink>
            </>
          }
        </div>
      </div>
    </header>
  );
}

export default Header;