import React from 'react';

import Box from './Box';
import Button from './core/Button';

interface Props {
  id: number
  title: string,
  author: string,
  questionsCount: number,
  children: React.ReactNode,
}

function QuizCard(props: Props) {
  return (
    <Box hoverable>
      <h4 className='m-0'>{props.title}</h4>
      <span className='font-light text-sm'>by <strong>{props.author}</strong> &middot; {props.questionsCount} questions</span>
      <span className='my-4'>{props.children}</span>
      {props.questionsCount > 0
        ? <Button block link to={`/quizzes/${props.id}`} color='emerald'>Play</Button>
        : <Button block disabled color='emerald'>Play</Button>
      }
    </Box>
  );
}

export default QuizCard;