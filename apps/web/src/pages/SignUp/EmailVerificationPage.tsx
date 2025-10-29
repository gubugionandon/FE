import { Button } from '@ui/Button/Button';
import EmailHeroSection from './components/EmailHeroSection';
import ResendSection from './components/ResendSection';
import { useNavigate } from 'react-router-dom';

const EmailVerificationPage = () => {
  const navigate = useNavigate();

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
          <ResendSection />
        </section>
      </div>
    </main>
  );
};

export default EmailVerificationPage;
