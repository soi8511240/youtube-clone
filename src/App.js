import React from 'react';

import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import Root from './pages/Root';
import Main from './pages/Main';
import Detail from './pages/Detail';
import Error from './pages/Error';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      { index: true, element: <Main /> },
      { path: '/detail/:id', element: <Detail /> },
    ],
    errorElement: <Error />,
  },
]);

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
