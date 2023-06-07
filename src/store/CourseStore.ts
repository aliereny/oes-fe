import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';
import { v4 as uuid } from 'uuid';
import { Course } from './models/Course.interface';

type State = {
  courses: Course[];
  createCourse: (course: Omit<Course, 'id'>) => void;
  readCourse: (id: string) => Course | undefined;
  updateCourse: (id: string, course: Partial<Course>) => void;
  deleteCourse: (id: string) => void;
  addCourseInstructor: (courseId: string, userId: string) => void;
  addCourseStudent: (courseId: string, userId: string) => void;
};

export const useCourseStore = create<State>()(
  devtools(
    persist(
      (set, get) => ({
        courses: [],
        createCourse: (course) => {
          set((state) => ({
            courses: [
              ...state.courses,
              { ...course, id: uuid(), instructors: [], students: [], contents: [] },
            ],
          }));
        },
        deleteCourse: (id) =>
          set((state) => ({
            courses: state.courses.filter((course) => course.id !== id),
          })),
        readCourse: (id) => {
          const { courses } = get();
          return courses.find((course) => course.id === id);
        },
        updateCourse: (id, course) =>
          set((state) => ({
            courses: state.courses.map((c) => (c.id === id ? { ...c, ...course } : c)),
          })),
        addCourseInstructor: (courseId, userId) => {
          const { courses } = get();
          const [course] = courses.filter((item) => item.id === courseId);
          set((state) => ({
            courses: state.courses.map((c) =>
              c.id === courseId
                ? {
                    ...c,
                    instructors: [...course.instructors, userId],
                  }
                : c
            ),
          }));
        },
        addCourseStudent: (courseId, userId) => {
          const { courses } = get();
          const [course] = courses.filter((item) => item.id === courseId);
          set((state) => ({
            courses: state.courses.map((c) =>
              c.id === courseId
                ? {
                    ...c,
                    students: [...course.students, userId],
                  }
                : c
            ),
          }));
        },
      }),
      {
        name: 'course-storage',
      }
    )
  )
);
