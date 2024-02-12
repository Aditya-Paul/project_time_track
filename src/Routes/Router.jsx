import React from 'react';
import {createBrowserRouter} from "react-router-dom";
import Dashboard from '../Layout/Dashboard';
import Projects from '../Pages/Projects/Projects';
import CreateProjects from '../Pages/CreateProjects/CreateProjects';
import News from '../Pages/news';

const Router = createBrowserRouter([
    {
      path: "/",
      element: <Dashboard></Dashboard>,
      children:[
        {
            path:'/createprojects',
            element: <CreateProjects></CreateProjects>
        },
        {
            path:'/projects',
            element: <Projects></Projects>
        },
        {
            path:'/news/:paperName',
            element: <News></News>
        }
      ]
    },
  ]);

export default Router;