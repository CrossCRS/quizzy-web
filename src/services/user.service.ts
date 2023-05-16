import useFetch from '../hooks/useFetch';

export function useUser(userId: string) {
  return useFetch(`/users/${userId}`);
}
