import React, { useEffect, useState } from 'react';

import { useSearchParams } from 'react-router-dom';

import Loader from '../components/Loader';
import QuizCard from '../components/QuizCard';
import { useQuizzes } from '../services/quiz.service';

function Quizzes() {
  const [searchParams, setSearchParams] = useSearchParams();

  // TODO: Pagination
  const [pageCount, setPageCount] = useState(0);
  const quizzes = useQuizzes(searchParams.get('page') as string, false);

  // Fetch quizzes on search parameters change
  useEffect(() => {
    quizzes.execute();
  }, [searchParams]);

  // Update page count on data change
  useEffect(() => {
    if (quizzes.data) {
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
      {quizzes.data.quizzes.map((quiz: any) =>
        <QuizCard key={quiz.id} id={quiz.id} title={quiz.title} author={quiz.author.name} questionCount={quiz.questionCount}>
          {quiz.description}
        </QuizCard>,
      )}
    </>
  );
}

export default Quizzes;
