import React from 'react';

import Box from './Box';
import Counter from './core/Counter';

interface Author {
  id: number,
  username: string,
  avatarUrl?: string,
  createdQuizzesCount: string,
}

interface Props {
  author: Author,
}

function AuthorCard({ author }: Props) {
  return (
    <Box>
      <div className='flex flex-col items-center'>
        <img className='mb-6 rounded-full border-2 border-white shadow-2xl' width={128} height={128} src={author.avatarUrl ? author.avatarUrl : 'https://placehold.co/128x128'}/>
        <h2 className='font-semibold text-gray-800 m-0 mb-8'>{author.username}</h2>

        <div className='flex justify-around w-full md:w-1/2 mb-4'>
          <Counter label='Quizzes Created' value={author.createdQuizzesCount} />
          <Counter label='Followers' value='0' />
        </div>
      </div>
    </Box>
  );
}

export default AuthorCard;
