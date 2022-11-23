import React from 'react';

import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import Root from './pages/Root';
import Main from './pages/Main';
import VideoDetail from './pages/VideoDetail';
import SearchList from './pages/SearchList';
import Error from './pages/Error';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      { index: true, element: <Main /> },
      { path: '/detail/:id', element: <VideoDetail /> },
      { path: '/search/:word', element: <SearchList /> },
    ],
    errorElement: <Error />,
  },
]);

const queryClient = new QueryClient();
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
}

export default App;
