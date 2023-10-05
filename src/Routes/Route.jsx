import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from '../Pages/Home';
import Root from '../components/Root';
import Entry from '../Pages/Entry';
import Details from '../Pages/Details';
import Error from '../components/Error';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root></Root>,
    errorElement: <Error></Error>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
      },
      {
        path: '/entry',
        element: <Entry></Entry>,
      },
      {
        path: '/details',
        element: <Details></Details>,
      },
    ],
  },
]);

const Route = () => {
  return <RouterProvider router={router} />;
};

export default Route;
