import React from 'react';
import * as ReactDOMClient from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import './styles/index.scss';
import { Router } from './router';

const rootContainer = document.getElementById('root');

if (rootContainer) {
  const root = ReactDOMClient.createRoot(rootContainer);
  root.render(<RouterProvider router={Router} />);
}
