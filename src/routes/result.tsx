import React, { useEffect } from 'react';

import { useLocation, useNavigate, useParams } from 'react-router-dom';

import Box from '../components/Box';
import ProgressRing from '../components/ProgressRing';
import QuestionPanel from '../components/QuestionPanel';
import { Question } from '../interfaces/quiz.interface';
import { useQuiz, useQuizResult } from '../services/quiz.service';

function QuizResultPage() {
  const params = useParams();
  const location = useLocation();
  const navigate = useNavigate();

  // Redirect to quiz page if no answers are present
  useEffect(() => {
    if (location.state == null) {
      navigate(`/quizzes/${params.quizId}`);
    }
  }, [location]);

  const quiz = useQuiz(params.quizId as string);
  const results = useQuizResult(params.quizId as string, { answers: location.state });

  if (quiz.isLoading || results.isLoading) {
    return (
      <>
        <h1 className='text-gray-400 text-center m-0 mb-8'>Results</h1>
        
        {/* Result box skeleton. Transition won't work if moved into it's own component */}
        <Box>
          <div className='flex flex-col items-center'>
            <div className='w-32 h-6 my-4 bg-gray-200 animate-pulse' />
            <ProgressRing radius={90} progress={0} />
            <div className='w-64 h-4 my-4 bg-gray-200 animate-pulse' />
          </div>
        </Box>
      </>
    );
  }

  if (quiz.error || quiz.data == null || results.error || results.data == null) {
    return (
      <>
        <h1 className='text-gray-400 text-center m-0 mb-1'>Results</h1>
        <h2 className='text-gray-400 text-center m-0 mb-8'>Could not load results.</h2>
      </>
    );
  }

  return (
    <>
      <h1 className='text-gray-400 text-center m-0 mb-8'>Results</h1>
      
      <Box border>
        <div className='flex flex-col items-center'>
          <h2>{quiz.data.title}</h2>
          <ProgressRing radius={90} progress={Math.round((results.data.pointsScored / results.data.pointsMax) * 100)} />
          <h4>You got {results.data.pointsScored} out of {results.data.pointsMax} points</h4>
        </div>
      </Box>

      <Box border>
        <h2 className='text-center'>Your answers</h2>
        <ul className='flex flex-col divide-y list-none'>
          {results.data.questions.map((question: Question) => 
            <li key={question.id} className='py-6 first:pt-0 last:pb-0'>
              <QuestionPanel question={question} readOnly />
            </li>,
          )}
        </ul>
      </Box>
    </>
  );
}

export default QuizResultPage;
