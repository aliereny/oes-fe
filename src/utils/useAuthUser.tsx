import { useAuthStore } from '../store/AuthStore';

export const useAuthUser = () => {
  const { user } = useAuthStore();
  return user();
};
