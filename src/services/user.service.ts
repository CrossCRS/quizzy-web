import useFetch from '../hooks/useFetch';
import { User } from '../interfaces/user.interface';

export function useUser(userId: string) {
  return useFetch<User>(`/users/${userId}`);
}
