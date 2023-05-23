import React from 'react';

import Box from './Box';

interface Props {
  count: number,
}

function QuizCardSkeleton(props: Props) {
  return (
    <>
      {[...Array(props.count)].map((_, i) =>
        <Box key={`quizcardskeleton-${i}`}>
          <span className='my-1 h-8 w-64 bg-gray-200 animate-pulse'></span>
          <span className='my-1 h-4 w-48 bg-gray-200 animate-pulse'></span>
          <span className='my-4 h-24 w-full bg-gray-200 animate-pulse'></span>
          <span className='my-1 h-10 w-full bg-gray-200 animate-pulse'></span>
        </Box>,
      )}
    </>
  );
}

export default QuizCardSkeleton;
