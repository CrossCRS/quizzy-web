import React, { useEffect, useState } from 'react';

import { useSearchParams } from 'react-router-dom';

import Loader from '../components/Loader';
import QuizCard from '../components/QuizCard';
import SimplePaginator from '../components/SimplePaginator';
import { useQuizzes } from '../services/quiz.service';

function Quizzes() {
  const [searchParams, setSearchParams] = useSearchParams();

  const [pageCount, setPageCount] = useState(0);
  const quizzes = useQuizzes(Number(searchParams.get('page') as string), false);

  // Fetch quizzes on search parameters change
  useEffect(() => {
    if (searchParams.get('page') === null) {
      searchParams.set('page', '1');
      setSearchParams(searchParams);
    }
    quizzes.execute();
  }, [searchParams, setSearchParams]);

  // Update page count on data change
  useEffect(() => {
    if (quizzes.data) {
      console.log(quizzes.data);
      setPageCount(quizzes.data.pageCount);
    }
  }, [quizzes.data]);

  if (quizzes.isLoading) {
    return (
      <Loader />
    );
  }

  if (quizzes.error) {
    return (
      <>
        <h1 className='text-gray-400 text-center m-0 mb-1'>Browse</h1>
        <h2 className='text-gray-400 text-center m-0 mb-8'>Could not load quizzes.</h2>
      </>
    );
  }
  
  return (
    <>
      <h1 className='text-gray-400 text-center m-0 mb-8'>Browse</h1>
      {quizzes.data.data.map((quiz: any) =>
        <QuizCard key={quiz.id} id={quiz.id} title={quiz.title} author={'TODO'} questionsCount={quiz.questionsCount}>
          {quiz.description}
        </QuizCard>,
      )}
      <SimplePaginator pageCount={pageCount} currentPage={Number(searchParams.get('page') as string)} />
    </>
  );
}

export default Quizzes;
