import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';
import React from 'react';
import Layout from './components/Layout';
import Home from './pages/Home';
import { ViewCourse } from './pages/Course/View/ViewCourse';
import { EditCourse } from './pages/Course/Edit/EditCourse';
import { CreateCourse } from './pages/Course/Create/CreateCourse';
import { ListCourses } from './pages/Course/List/ListCourses';

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
    </Route>
  )
);
