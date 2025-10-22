import HeroSection from './components/HeroSection';
import LoginForm from './components/Loginforrm';

const LoginPage = () => {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <div className="relative w-full overflow-visible md:mx-auto md:max-w-screen-lg md:px-10">
        <section className="flex h-screen w-full flex-col items-center justify-center gap-5 md:gap-12">
          <HeroSection />
          <LoginForm />
        </section>
      </div>
    </main>
  );
};

export default LoginPage;
