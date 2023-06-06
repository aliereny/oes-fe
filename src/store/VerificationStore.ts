import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';
import axios from 'axios';
import { User } from './models/User.interface';
import { generateSixDigitNumber } from '../utils/PasswordUtil';

type State = {
  code: string;
  phone: string;
  sendMessage: (phone: string) => void;
  user?: User;
  setUser: (user: User) => void;
};

export const useVerificationStore = create<State>()(
  devtools(
    persist(
      (set, get) => ({
        user: undefined,
        code: '',
        phone: '',
        sendMessage: (phone) => {
          const code = generateSixDigitNumber();
          set((state) => ({ ...state, phone, code }));
          const { user } = get();
          axios.post('http://127.0.0.1:3000/sendSMS', {
            name: user?.name,
            code,
            phoneNumber: phone,
          });
        },
        setUser: (user) => set((state) => ({ ...state, user })),
      }),
      {
        name: 'verification-storage',
      }
    )
  )
);
