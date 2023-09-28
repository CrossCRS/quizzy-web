import { User } from './user.interface';

export interface Answer {
  id: number,
  text: string,
  isCorrect?: boolean,
  isChosen?: boolean,
}

export interface Question {
  id: number,
  text: string,
  points: number,
  answers: [Answer],
}

export interface Quiz {
  id: string,
  title: string,
  description: string,
  author: User,
  createdAt: string,
  questionsCount: number,
  questions?: [Question],
}