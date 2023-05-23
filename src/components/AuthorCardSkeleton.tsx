import React from 'react';

import Box from './Box';

function AuthorCardSkeleton() {
  return (
    <Box className='mt-20'>
      <div className='flex flex-col items-center'>
        <div className='-mt-20 mb-6 w-32 h-32 bg-gray-200 rounded-full border-2 border-white shadow-2xl'/>
        <span className='m-0 mb-8 w-48 h-8 bg-gray-200 animate-pulse'></span>

        <div className='flex justify-around w-full md:w-1/2 mb-4'>
          <div className='flex flex-col items-center'>
            <span className='w-32 h-16 bg-gray-200 animate-pulse'></span>
          </div>
          <div className='flex flex-col items-center'>
            <span className='w-32 h-16 bg-gray-200 animate-pulse'></span>
          </div>
        </div>
      </div>
    </Box>
  );
}

export default AuthorCardSkeleton;
