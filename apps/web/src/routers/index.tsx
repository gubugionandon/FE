import { createBrowserRouter } from 'react-router-dom';
import LoginPage from '../pages/Login/LoginPage';

export const router = createBrowserRouter([
  {
    path: '/auth',
    children: [{ path: 'login', element: <LoginPage /> }],
  },
]);
