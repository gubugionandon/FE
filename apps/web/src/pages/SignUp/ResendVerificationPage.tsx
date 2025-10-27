import ResendEmailHerosection from './components/ResendEmailHeroSection';
import ResendSection from './components/ResendSection';
import VerifyAction from './components/VerifyAction';

const ResendVerificationPage = () => {
  return (
    <main className="hbp:min-h-[calc(100vh-75px)] flex min-h-[calc(100vh-60px)] flex-col items-center justify-center">
      <div className="hbp:mx-auto hbp:max-w-screen-lg hbp:px-10 relative w-full overflow-visible">
        <section className="= flex w-full flex-col items-center justify-center px-7">
          <ResendEmailHerosection />
          <VerifyAction />
          <ResendSection />
        </section>
      </div>
    </main>
  );
};

export default ResendVerificationPage;
