import { useEffect } from 'react';
import ResendEmailHerosection from './components/ResendEmailHeroSection';
import ResendSection from './components/ResendSection';
import VerifyAction from './components/VerifyAction';
import { useSearchParams } from 'react-router-dom';
import {
  useResendVerifyEmailMuation,
  useVerifyEmailMutation,
} from '../../api/signup/verifyEmail';
import { useEmailStore } from '../../store/useSignUpStore';

const ResendVerificationPage = () => {
  const [searchParams] = useSearchParams();
  const verifyEmailMutation = useVerifyEmailMutation();
  const resendverifyEmailMutation = useResendVerifyEmailMuation();
  const email = useEmailStore((state) => state.email);

  /* 토큰 여부에 따른 이메일 인증 */
  useEffect(() => {
    const token = searchParams.get('token');
    if (token) {
      verifyEmailMutation.mutate(token);
    }
  }, [searchParams]);

  /* 이메일 다시 보내기 */
  const onResendClick = () => {
    resendverifyEmailMutation.mutate({ email: email, callbackUrl: '' });
  };

  return (
    <main className="hbp:min-h-[calc(100vh-75px)] flex min-h-[calc(100vh-60px)] flex-col items-center justify-center">
      <div className="hbp:mx-auto hbp:max-w-screen-lg hbp:px-10 relative w-full overflow-visible">
        <section className="= flex w-full flex-col items-center justify-center px-7">
          <ResendEmailHerosection />
          <VerifyAction email={email} />
          <ResendSection onClick={onResendClick} />
        </section>
      </div>
    </main>
  );
};

export default ResendVerificationPage;
