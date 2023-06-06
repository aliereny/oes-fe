import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';
import React from 'react';
import Layout from './components/Layout';
import Home from './pages/Home';
import { ViewCourse } from './pages/Course/View/ViewCourse';
import { EditCourse } from './pages/Course/Edit/EditCourse';
import { CreateCourse } from './pages/Course/Create/CreateCourse';
import { ListCourses } from './pages/Course/List/ListCourses';
import { ListUsers } from './pages/User/List/ListUsers';
import { ViewUser } from './pages/User/View/ViewUser';
import { CreateUser } from './pages/User/Create/CreateUser';
import { EditUser } from './pages/User/Edit/EditUser';
import { VerifyPhone } from './pages/Auth/VerifyPhone';

export const Router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route index element={<Home />} />
      <Route path='courses'>
        <Route index element={<ListCourses />} />
        <Route path='create' element={<CreateCourse />} />
        <Route path=':id' element={<ViewCourse />} />
        <Route path='edit/:id' element={<EditCourse />} />
      </Route>
      <Route path='users'>
        <Route index element={<ListUsers />} />
        <Route path='create' element={<CreateUser />} />
        <Route path=':id' element={<ViewUser />} />
        <Route path='edit/:id' element={<EditUser />} />
      </Route>
      <Route path='verify'>
        <Route index element={<VerifyPhone />} />
      </Route>
    </Route>
  )
);
