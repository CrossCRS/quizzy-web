import React from 'react';

import Box from './Box';
import Counter from './core/Counter';
import { User } from '../interfaces/user.interface';

interface Props {
  author: User,
}

function AuthorCard({ author }: Props) {
  return (
    <Box className='mt-20'>
      <div className='flex flex-col items-center'>
        <img className='-mt-20 mb-6 rounded-full border-2 border-white shadow-2xl' width={128} height={128} src={author.avatarUrl ? author.avatarUrl : 'https://placehold.co/128x128'}/>
        <h2 className='font-semibold text-gray-800 m-0 mb-8'>{author.username}</h2>

        <div className='flex justify-around w-full md:w-1/2 mb-4'>
          <Counter label='Quizzes Created' value={String(author.createdQuizzesCount) || '0'} />
          <Counter label='Followers' value='0' />
        </div>
      </div>
    </Box>
  );
}

export default AuthorCard;
