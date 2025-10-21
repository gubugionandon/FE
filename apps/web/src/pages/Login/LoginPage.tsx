import HeroSection from './components/HeroSection';

const LoginPage = () => {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <div className="relative w-full overflow-visible md:mx-auto md:max-w-screen-lg md:px-10">
        <section className="flex h-screen w-full flex-col items-center justify-center gap-10 md:gap-[50px]">
          <HeroSection />
        </section>
      </div>
    </main>
  );
};

export default LoginPage;
