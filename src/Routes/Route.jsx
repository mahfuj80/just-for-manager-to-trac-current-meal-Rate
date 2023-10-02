import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from '../Pages/Home';
import Root from '../components/Root';
import Entry from '../Pages/Entry';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root></Root>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
      },
      {
        path: '/entry',
        element: <Entry></Entry>,
      },
    ],
  },
]);

const Route = () => {
  return <RouterProvider router={router} />;
};

export default Route;
