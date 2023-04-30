import useFetch from '../hooks/useFetch';

export function useQuiz(quizId: string) {
  return useFetch(`/quizzes/${quizId}`);
}

export function useQuizzes(page: number, immediate: boolean = true) {
  if (!page) page = 1;
  return useFetch(`/quizzes?pageIndex=${page - 1}`, { immediate: immediate });
}

export function useQuizResult(quizId: string, answers: any) {
  return useFetch(`/quizzes/${quizId}/result`, { method: 'PUT', requestData: answers });
}