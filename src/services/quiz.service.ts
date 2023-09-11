import useFetch from '../hooks/useFetch';

export function useQuiz(quizId: string) {
  return useFetch(`/quizzes/${quizId}`);
}

export function useQuizzes(page: number, immediate: boolean = true, user: string | undefined = undefined) {
  if (!page) page = 1;
  if (user === undefined) {
    return useFetch(`/quizzes?pageIndex=${page - 1}`, { immediate: immediate });
  } else {
    return useFetch(`/quizzes?pageIndex=${page - 1}&authorUsername=${user}`, { immediate: immediate });
  }
}

export function useQuizResult(quizId: string, answers: any) {
  return useFetch(`/quizzes/${quizId}/result`, { method: 'PUT', requestData: answers });
}
