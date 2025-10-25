import HeroSection from './components/HeroSection';

const EmailVerificationPage = () => {
  return (
    <main className="flex flex-col items-center">
      <div className="hbp:mx-auto hbp:max-w-screen-lg hbp:px-10 relative w-full overflow-visible">
        <section className="hbp:gap-15 hbp:px-20 hbp:h-[calc(100vh-75px)] hbp:gap-15 flex h-[calc(100vh-60px)] w-full flex-col items-center justify-center gap-12 px-7">
          <HeroSection />
        </section>
      </div>
    </main>
  );
};

export default EmailVerificationPage;
