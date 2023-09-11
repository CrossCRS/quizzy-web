import React from 'react';

import TextLink from './core/TextLink';

function Header() {
  return (
    <header className='w-full p-2 bg-emerald-500 fixed z-10 md:relative'>
      <div className='max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center'>
        <div>
          <TextLink nohover to='/'>
            <h2 className='m-0 font-bold text-white' style={{ fontFamily: 'Poppins' }}>Quizzy</h2>
          </TextLink>
        </div>
        <div className='text-center text-sm md:text-base'>
          <TextLink to='/quizzes?page=1'>Browse</TextLink>
          <TextLink to='/create'>Create</TextLink>
          <TextLink to='/login'>Log in</TextLink>
          <TextLink to='/signup'>Sign up</TextLink>
        </div>
      </div>
    </header>
  );
}

export default Header;