import useFetch from '../hooks/useFetch';
import { Question, Quiz } from '../interfaces/quiz.interface';

export function useQuiz(quizId: string) {
  return useFetch<Quiz>(`/quizzes/${quizId}`);
}

export interface QuizzesResponse {
  pageIndex: number,
  pageSize: number,
  pageCount: number,
  itemCount: number,
  data: [Quiz],
  previousUrl: string,
  nextUrl: string,
}

export interface QuizResultResponse {
  id: string,
  title: string,
  description: string,
  pointsScored: number,
  pointsMax: number,
  questions: [Question],
}

export function useQuizzes(page: number, immediate: boolean = true, user: string | undefined = undefined) {
  if (!page) page = 1;
  if (user === undefined) {
    return useFetch<QuizzesResponse>(`/quizzes?pageIndex=${page - 1}`, { immediate: immediate });
  } else {
    return useFetch<QuizzesResponse>(`/quizzes?pageIndex=${page - 1}&authorUsername=${user}`, { immediate: immediate });
  }
}

export function useQuizResult(quizId: string, answers: any) {
  return useFetch<QuizResultResponse>(`/quizzes/${quizId}/result`, { method: 'PUT', requestData: answers });
}
