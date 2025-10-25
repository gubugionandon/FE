import { createBrowserRouter } from 'react-router-dom';
import Layout from '../layout/Layout';
import LoginPage from '../pages/Login/LoginPage';
import SignUpPage from '../pages/SignUp/SignUpPage';
import EmailVerificationPage from '../pages/SignUp/EmailVerificationPage';

export const router = createBrowserRouter([
  {
    element: <Layout />,
    path: '/auth',
    children: [
      { path: 'login', element: <LoginPage /> },
      { path: 'signup', element: <SignUpPage /> },
      { path: 'verify', element: <EmailVerificationPage /> },
    ],
  },
]);
