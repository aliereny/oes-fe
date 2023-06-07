import React from 'react';
import { Button } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { useCourseStore } from '../../../store/CourseStore';
import { CourseCard } from '../../../components/CourseCard/CourseCard';
import { Role } from '../../../store/models/Role.enum';
import { useAuthUser } from '../../../utils/useAuthUser';

export function ListCourses() {
  const { courses } = useCourseStore();
  // const { user } = useAuthStore();
  // const [list, setList] = useState<Course[]>([]);
  //
  // useEffect(() => {
  //   if (user?.role === Role.STUDENT) {
  //     setList(courses.filter(item => user.enrolledCourses.includes(item.id)));
  //   } else {
  //     setList(courses);
  //   }
  // }, []);

  const authUser = useAuthUser();

  return (
    <div className='bg-blue-50'>
      {authUser && authUser.role === Role.ADMIN && (
        <Button variant='contained' endIcon={<AddIcon />} href='/courses/create'>
          Create
        </Button>
      )}

      <div className='w-auto grid grid-cols-1 md:grid-cols-2 mx-auto justify-center items-center'>
        {courses.map((item) => (
          <CourseCard key={item.id} className='mx-auto' course={item} />
        ))}
      </div>
    </div>
  );
}
