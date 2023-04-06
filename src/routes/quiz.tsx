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
      <h1 className='text-gray-400 text-center m-0 mb-8'>{quiz.data.title}</h1>
      <Box>
        <QuestionPanel question={quiz.data.questions[currentQuestion]} onSendAnswer={processAnswer} isLastQuestion={currentQuestion == quiz.data.questionsCount - 1} />
      </Box>
    </>
  );
}

export default Quiz;
