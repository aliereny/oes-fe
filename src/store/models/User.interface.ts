import { Role } from './Role.enum';

export interface User {
  id: string;
  name: string;
  email: string;
  password: string;
  phone: string;
  role: Role;
  enrolledCourses: string[];
  givenCourses: string[];
}
