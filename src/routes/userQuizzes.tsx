import React, { useEffect, useState } from 'react';

import { useParams, useSearchParams } from 'react-router-dom';

import AuthorCard from '../components/AuthorCard';
// import Loader from '../components/Loader';
import AuthorCardSkeleton from '../components/AuthorCardSkeleton';
import QuizCard from '../components/QuizCard';
import QuizCardSkeleton from '../components/QuizCardSkeleton';
import SimplePaginator from '../components/SimplePaginator';
import { useQuizzes } from '../services/quiz.service';
import { useUser } from '../services/user.service';

function UserQuizzes() {
  const params = useParams();
  const [searchParams, setSearchParams] = useSearchParams();
  const [pageCount, setPageCount] = useState(0);

  const quizzes = useQuizzes(Number(searchParams.get('page') as string), false, params.userId as string);
  const user = useUser(params.userId as string);

  // Fetch quizzes on search parameters change
  useEffect(() => {
    if (searchParams.get('page') === null) {
      searchParams.set('page', '1');
      setSearchParams(searchParams);
    }
    quizzes.execute();
    user.execute();
  }, [searchParams, setSearchParams]);

  // Update page count on data change
  useEffect(() => {
    if (quizzes.data) {
      setPageCount(quizzes.data.pageCount);
    }
  }, [quizzes.data]);

  if (quizzes.isLoading || user.isLoading) {
    return (
      // <Loader />
      <>
        <AuthorCardSkeleton />
        <h1 className='text-gray-400 text-center m-0 mb-8'>Browse</h1>
        <QuizCardSkeleton count={10} />
      </>
    );
  }

  if (quizzes.error || user.error) {
    return (
      <>
        <h1 className='text-gray-400 text-center m-0 mb-1'>Browse</h1>
        <h2 className='text-gray-400 text-center m-0 mb-8'>Could not load user profile.</h2>
      </>
    );
  }

  if (pageCount == 0) {
    return (
      <>
        <AuthorCard author={user.data} />
        <h1 className='text-gray-400 text-center m-0 mb-1'>Empty</h1>
      </>
    );
  }

  return (
    <>
      <AuthorCard author={user.data} />
      <h1 className='text-gray-400 text-center m-0 mb-8'>Browse</h1>
      {quizzes.data.data.map((quiz: any) =>
        <QuizCard key={quiz.id} id={quiz.id} title={quiz.title} author={quiz.author} questionsCount={quiz.questionsCount}>
          {quiz.description}
        </QuizCard>,
      )}
      <SimplePaginator url={`/users/${user.data.id}`} pageCount={pageCount} currentPage={Number(searchParams.get('page') as string)} />
    </>
  );
}

export default UserQuizzes;
