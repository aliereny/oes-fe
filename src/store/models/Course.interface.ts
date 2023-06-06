export interface Course {
  id: string;
  name: string;
  subject: string;
  level: string;
  description: string;
  syllabus: string;
  contents: { label: string; video: string }[];
  instructors: string[];
  students: string[];
}
