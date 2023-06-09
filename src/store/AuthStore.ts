import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';
import { User } from './models/User.interface';
import { useUserStore } from './UserStore';

type State = {
  userId: string;
  user: () => User | undefined;
  loggedIn: boolean;
  login: (email: string, password: string) => boolean;
  signOut: () => void;
};

export const useAuthStore = create<State>()(
  devtools(
    persist(
      (set, get) => ({
        user: () => {
          const { userId } = get();
          const { users } = useUserStore.getState();
          const [user] = users.filter((item) => item.id === userId);
          if (userId && user) {
            return user;
          }
          return undefined;
        },
        userId: '',
        loggedIn: false,
        login: (email, password) => {
          const { users } = useUserStore.getState();
          const [user] = users.filter((item) => item.email === email);
          if (!user || user.password !== password) {
            return false;
          }
          set((state) => ({
            ...state,
            loggedIn: true,
            userId: user.id,
          }));
          return true;
        },
        signOut: () => set((state) => ({ ...state, loggedIn: false, user: undefined })),
      }),
      {
        name: 'auth-storage',
      }
    )
  )
);
