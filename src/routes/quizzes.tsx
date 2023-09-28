import React, { useEffect, useState } from 'react';

import { useSearchParams } from 'react-router-dom';

// import Loader from '../components/Loader';
import QuizCard from '../components/QuizCard';
import QuizCardSkeleton from '../components/QuizCardSkeleton';
import SimplePaginator from '../components/SimplePaginator';
import { Quiz } from '../interfaces/quiz.interface';
import { useQuizzes } from '../services/quiz.service';

function QuizzesPage() {
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
      setPageCount(quizzes.data.pageCount);
    }
  }, [quizzes.data]);

  if (quizzes.isLoading) {
    return (
      // <Loader />
      <>
        <h1 className='text-gray-400 text-center m-0 mb-8'>Browse</h1>
        <QuizCardSkeleton count={10} />
      </>
    );
  }

  if (quizzes.error || quizzes.data == null) {
    return (
      <>
        <h1 className='text-gray-400 text-center m-0 mb-1'>Browse</h1>
        <h2 className='text-gray-400 text-center m-0 mb-8'>Could not load quizzes.</h2>
      </>
    );
  }

  if (pageCount == 0) {
    return (
      <>
        <h1 className='text-gray-400 text-center m-0 mb-1'>Empty</h1>
      </>
    );
  }

  return (
    <>
      <h1 className='text-gray-400 text-center m-0 mb-8'>Browse</h1>
      {quizzes.data.data.map((quiz: Quiz) =>
        <QuizCard 
          key={quiz.id} 
          id={quiz.id} 
          title={quiz.title} 
          author={quiz.author} 
          questionsCount={quiz.questionsCount} 
          createdAt={Intl.DateTimeFormat(navigator.language, { month: 'short', day: 'numeric', year: 'numeric', hour: 'numeric', minute: 'numeric' }).format(Date.parse(quiz.createdAt))}>
          {quiz.description}
        </QuizCard>,
      )}
      <SimplePaginator url={'/quizzes'} pageCount={pageCount} currentPage={Number(searchParams.get('page') as string)} />
    </>
  );
}

export default QuizzesPage;
