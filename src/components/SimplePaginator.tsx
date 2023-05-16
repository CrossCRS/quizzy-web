import React from 'react';

import { faAngleLeft, faAngleRight, faAnglesLeft, faAnglesRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Box from './Box';
import Button from './core/Button';


interface Props {
  pageCount: number,
  currentPage: number,
  url: string,
}

function SimplePaginator({ pageCount, currentPage, url }: Props) {
  return (
    <Box row className='justify-between items-center'>
      <div className='flex space-x-1'>
        <Button basic link to={`${url}?page=1`} color='emerald'><FontAwesomeIcon icon={faAnglesLeft} size='lg' /></Button>
        {currentPage > 1
          ? <Button basic link to={`${url}?page=${currentPage - 1}`} color='emerald'><FontAwesomeIcon icon={faAngleLeft} size='lg' /></Button>
          : <Button basic disabled color='emerald'><FontAwesomeIcon icon={faAngleLeft} size='lg' /></Button>
        }
      </div>
      <span>{currentPage} / {pageCount}</span>
      <div className='flex space-x-1'>
        {currentPage < pageCount
          ? <Button basic link to={`${url}?page=${currentPage + 1}`} color='emerald'><FontAwesomeIcon icon={faAngleRight} size='lg' /></Button>
          : <Button basic disabled color='emerald'><FontAwesomeIcon icon={faAngleRight} size='lg' /></Button>
        }
        <Button basic link to={`${url}?page=${pageCount}`} color='emerald'><FontAwesomeIcon icon={faAnglesRight} size='lg' /></Button>
      </div>
    </Box>
  );
}

export default SimplePaginator;
