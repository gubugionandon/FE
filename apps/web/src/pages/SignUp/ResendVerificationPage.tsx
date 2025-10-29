import { useEffect } from 'react';
import ResendEmailHerosection from './components/ResendEmailHeroSection';
import ResendSection from './components/ResendSection';
import VerifyAction from './components/VerifyAction';
import { useSearchParams } from 'react-router-dom';
import { useResendVerifyEmailMuation } from '../../api/signup/verifyEmail';
import { useEmailStore } from '../../store/useSignUpStore';

const ResendVerificationPage = () => {
  const [searchParams] = useSearchParams();
  const resendverifyEmailMutation = useResendVerifyEmailMuation();
  const email = useEmailStore((state) => state.email);

  useEffect(() => {
    const token = searchParams.get('token');
    if (token) {
      resendverifyEmailMutation.mutate({ token, email });
    }
  }, [searchParams]);

  return (
    <main className="hbp:min-h-[calc(100vh-75px)] flex min-h-[calc(100vh-60px)] flex-col items-center justify-center">
      <div className="hbp:mx-auto hbp:max-w-screen-lg hbp:px-10 relative w-full overflow-visible">
        <section className="= flex w-full flex-col items-center justify-center px-7">
          <ResendEmailHerosection />
          <VerifyAction email={email} />
          <ResendSection />
        </section>
      </div>
    </main>
  );
};

export default ResendVerificationPage;
