import React, { useState } from 'react';

import Button from './core/Button';
import RadioButton from './core/RadioButton';
import { Answer, Question } from '../interfaces/quiz.interface';

type SendAnswerHandler = (answerId: number) => void;

interface Props {
  question: Question,
  isLastQuestion?: boolean,
  readOnly?: boolean,
  onSendAnswer?: SendAnswerHandler,
}

function QuestionPanel(props: Props) {
  const [answerIsChosen, setAnswerIsChosen] = useState(false);
  const [chosenAnswerId, setChosenAnswerId] = useState(-1);

  const answerOnClick = (e: React.ChangeEvent<HTMLInputElement>) => {
    setChosenAnswerId(Number(e.target.value));
    setAnswerIsChosen(true);
  };

  const nextOnClick = (e: React.MouseEvent<Element, MouseEvent>) => {
    if (props.onSendAnswer !== undefined) {
      setAnswerIsChosen(false);
      props.onSendAnswer(chosenAnswerId);
    }
  };

  return (
    <>
      <p className='text-lg text-center'>{props.question.text}</p>
      <ul className='my-4 list-none'>
        {props.question.answers.map((answer: Answer) =>
          <li key={`a_${answer.id}`}>
            <RadioButton readOnly={props.readOnly} correct={answer.isCorrect} incorrect={answer.isChosen && !answer.isCorrect} id={`a_${answer.id}`} name={`q_${props.question.id}`} value={`${answer.id}`} onChange={answerOnClick}>
              {answer.text}
            </RadioButton>
          </li>,
        )}
      </ul>
      {!props.readOnly && <Button color='emerald' disabled={!answerIsChosen} onClick={nextOnClick}>{props.isLastQuestion ? 'Submit' : 'Next'}</Button>}
    </>
  );
}

export default QuestionPanel;