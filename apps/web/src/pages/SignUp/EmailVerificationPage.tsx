import { Button } from '@ui/Button/Button';
import EmailHeroSection from './components/EmailHeroSection';
import ResendSection from './components/ResendSection';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { useEffect } from 'react';
import {
  ResendVerifyEmailRequest,
  useResendVerifyEmailMuation,
  useVerifyEmailMutation,
} from '../../api/signup/verifyEmail';
import { useEmailStore } from '../../store/useSignUpStore';

const EmailVerificationPage = () => {
  const [searchParams] = useSearchParams();
  const verifyEmailMutation = useVerifyEmailMutation();
  const resendverifyEmailMutation = useResendVerifyEmailMuation();
  const email = useEmailStore((state) => state.email);
  const navigate = useNavigate();

  useEffect(() => {
    const token = searchParams.get('token');
    if (token) {
      verifyEmailMutation.mutate(token);
    }
  }, [searchParams]);

  const onSubmit = () => {
    resendverifyEmailMutation.mutate({ email: email, callbackUrl: '' });
  };

  return (
    <main className="hbp:min-h-[calc(100vh-75px)] flex min-h-[calc(100vh-60px)] flex-col items-center justify-center">
      <div className="hbp:mx-auto hbp:max-w-screen-lg hbp:px-10 relative w-full overflow-visible">
        <section className="= flex w-full flex-col items-center justify-center px-7">
          <EmailHeroSection />
          <Button
            onClick={() => navigate('/auth/login')}
            text="로그인"
            className="text-body-xl-medium h-[49px] w-[440px]"
          />
          <ResendSection onClick={onSubmit} />
        </section>
      </div>
    </main>
  );
};

export default EmailVerificationPage;
