import useFetch from '../hooks/useFetch';

export function useQuiz(quizId: string) {
  return useFetch(`/quizzes/${quizId}`);
}

export function useQuizzes(page: string, immediate: boolean = true) {
  if (!page) page = '1';
  return useFetch(`/quizzes?page=${page}`, { immediate: immediate });
}

export function useQuizResult(quizId: string, answers: any) {
  return useFetch(`/quizzes/${quizId}/result`, { method: 'PUT', requestData: answers });
}