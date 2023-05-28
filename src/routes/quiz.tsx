import React, { useState } from 'react';

import { useNavigate, useParams } from 'react-router-dom';

import Box from '../components/Box';
import Loader from '../components/Loader';
import QuestionPanel from '../components/QuestionPanel';
import { useQuiz } from '../services/quiz.service';

function Quiz() {
  const params = useParams();
  const navigate = useNavigate();

  const quiz = useQuiz(params.quizId as string);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [userAnswers, setUserAnswers] = useState<any>({});

  const addAnswer = (questionId: number, answerId: number) => {
    const answers = userAnswers;
    answers[questionId] = answerId;
    setUserAnswers(answers);
  };

  if (quiz.isLoading) {
    return (
      <Loader />
    );
  }

  if (quiz.error || quiz.data == null) {
    return (
      <>
        <h1 className='text-gray-400 text-center m-0 mb-1'>Quiz</h1>
        <h2 className='text-gray-400 text-center m-0 mb-8'>Could not load quiz.</h2>
      </>
    );
  }

  const processAnswer = (answerId: number) => {
    addAnswer(quiz.data.questions[currentQuestion].id, answerId);
    if (currentQuestion < quiz.data.questionsCount - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      navigate('result', { state: userAnswers });
    }
  };

  return (
    <>
      <Box border>
        <div>
          <div className='flex justify-between'>
            <div>
              <h3 className='my-0'>{quiz.data.title}</h3>
              <span className='text-gray-400 font-light text-sm my-0'>by {quiz.data.author.username}</span>
            </div>
            <div>
              <span className='font-light'>Question {currentQuestion + 1} / {quiz.data.questionsCount}</span>
            </div>
          </div>
          <div className='my-6 h-3 border rounded bg-white'>
            <div className='bg-emerald-500 h-full transition-all duration-150 ease-in-out' style={{ width: `${((currentQuestion + 1) / quiz.data.questionsCount) * 100}%` }}></div>
          </div>
        </div>
        <QuestionPanel question={quiz.data.questions[currentQuestion]} onSendAnswer={processAnswer} isLastQuestion={currentQuestion == quiz.data.questionsCount - 1} />
      </Box>
    </>
  );
}

export default Quiz;
