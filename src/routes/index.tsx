import React from 'react';

import Box from '../components/Box';
import Button from '../components/core/Button';

function Index() {
  return (
    <div className='flex flex-col justify-center items-center'>
      <h1 className='font-pretty text-6xl text-gray-600 text-center mt-10 mb-20'>Catchy slogan <span className='text-emerald-500'>here</span></h1>
      <Button link to={'/quizzes/'} color='emerald' className='text-3xl py-6 px-10'>Browse all quizzes</Button>
    </div>
  );
}

export default Index;
