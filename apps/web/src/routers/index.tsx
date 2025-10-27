import { createBrowserRouter } from 'react-router-dom';
import Layout from '../layout/Layout';
import LoginPage from '../pages/Login/LoginPage';
import SignUpPage from '../pages/SignUp/SignUpPage';
import EmailVerificationPage from '../pages/SignUp/EmailVerificationPage';
import ResendVerificationPage from '../pages/SignUp/ResendVerificationPage';

export const router = createBrowserRouter([
  {
    element: <Layout />,
    path: '/auth',
    children: [
      { path: 'login', element: <LoginPage /> },
      { path: 'signup', element: <SignUpPage /> },
      { path: 'verify', element: <EmailVerificationPage /> },
      { path: 'resend', element: <ResendVerificationPage /> },
    ],
  },
]);
