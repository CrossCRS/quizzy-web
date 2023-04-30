import React from 'react';

import { faAngleLeft, faAngleRight, faAnglesLeft, faAnglesRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Button from './core/Button';


interface Props {
  pageCount: number,
  currentPage: number,
}

function SimplePaginator(props: Props) {
  return (
    <div className='flex justify-between mb-10 mx-2'>
      <div className='space-x-1'>
        <Button basic link to={'/quizzes?page=1'} color='emerald'><FontAwesomeIcon icon={faAnglesLeft} size='lg' /></Button>
        {props.currentPage > 1
          ? <Button basic link to={`/quizzes?page=${props.currentPage - 1}`} color='emerald'><FontAwesomeIcon icon={faAngleLeft} size='lg' /></Button>
          : <Button basic disabled link to={`/quizzes?page=${props.currentPage - 1}`} color='emerald'><FontAwesomeIcon icon={faAngleLeft} size='lg' /></Button>
        }
      </div>
      <div className='space-x-1'>
        {props.currentPage < props.pageCount
          ? <Button basic link to={`/quizzes?page=${props.currentPage + 1}`} color='emerald'><FontAwesomeIcon icon={faAngleRight} size='lg' /></Button>
          : <Button basic disabled link to={`/quizzes?page=${props.currentPage + 1}`} color='emerald'><FontAwesomeIcon icon={faAngleRight} size='lg' /></Button>
        }
        <Button basic link to={`/quizzes?page=${props.pageCount}`} color='emerald'><FontAwesomeIcon icon={faAnglesRight} size='lg' /></Button>
      </div>
    </div>
  );
}

export default SimplePaginator;