import React from 'react';

import { faCalendarDays, faClipboardQuestion, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Box from './Box';
import Button from './core/Button';
import TextLink from './core/TextLink';

interface Author {
  id: number,
  username: string,
}

interface Props {
  id: number
  title: string,
  author: Author,
  createdAt: string,
  questionsCount: number,
  children: React.ReactNode,
}

function QuizCard(props: Props) {
  return (
    <Box hoverable>
      <h4 className='m-0'>{props.title}</h4>
      <div className='font-light text-sm text-gray-500 gap-4 grid grid-cols-3 mt-4 md:mt-0 md:flex'>
        <div className='flex flex-col md:flex-row md:gap-1 items-center text-center'><FontAwesomeIcon icon={faUser} /> <TextLink dark nopadding to={`/users/${props.author.username}?page=1`}><strong>{props.author.username}</strong></TextLink></div>
        <div className='flex flex-col md:flex-row md:gap-1 items-center text-center'><FontAwesomeIcon icon={faClipboardQuestion} /> {props.questionsCount} {props.questionsCount == 1 ? 'question' : 'questions'}</div>
        <div className='flex flex-col md:flex-row md:gap-1 items-center text-center'><FontAwesomeIcon icon={faCalendarDays} /> {props.createdAt}</div>
      </div>
      <span className='my-4'>{props.children}</span>
      {props.questionsCount > 0
        ? <Button block link to={`/quizzes/${props.id}`} color='emerald'>Play</Button>
        : <Button block disabled color='emerald'>Play</Button>
      }
    </Box>
  );
}

export default QuizCard;
