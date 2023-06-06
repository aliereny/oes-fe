import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';
import { v4 as uuid } from 'uuid';
import { User } from './models/User.interface';
import { Role } from './models/Role.enum';

type State = {
  users: User[];
  createUser: (user: Omit<User, 'id'>) => void;
  readUser: (id: string) => User | undefined;
  updateUser: (id: string, user: Partial<User>) => void;
  deleteUser: (id: string) => void;
  getAdmins: () => User[];
  getInstructors: () => User[];
  getStudents: () => User[];
};

export const useUserStore = create<State>()(
  devtools(
    persist(
      (set, get) => ({
        users: [],
        getAdmins: () => {
          const { users } = get();
          return users.filter((item) => item.role === Role.ADMIN);
        },
        getInstructors: () => {
          const { users } = get();
          return users.filter((item) => item.role === Role.INSTRUCTOR);
        },
        getStudents: () => {
          const { users } = get();
          return users.filter((item) => item.role === Role.STUDENT);
        },
        createUser: (user) => {
          set((state) => ({
            users: [...state.users, { ...user, id: uuid(), enrolledCourses: [], givenCourses: [] }],
          }));
        },
        deleteUser: (id) =>
          set((state) => ({
            users: state.users.filter((user) => user.id !== id),
          })),
        readUser: (id) => {
          const { users } = get();
          return users.find((user) => user.id === id);
        },
        updateUser: (id, user) =>
          set((state) => ({
            users: state.users.map((c) => (c.id === id ? { ...c, ...user } : c)),
          })),
      }),
      {
        name: 'user-storage',
      }
    )
  )
);
