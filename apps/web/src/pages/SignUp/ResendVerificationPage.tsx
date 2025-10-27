import ResendEmailHerosection from './components/ResendEmailHeroSection';
import VerifyAction from './components/VerifyAction';

const ResendVerificationPage = () => {
  return (
    <main className="hbp:min-h-[calc(100vh-75px)] flex min-h-[calc(100vh-60px)] flex-col items-center justify-center">
      <div className="hbp:mx-auto hbp:max-w-screen-lg hbp:px-10 relative w-full overflow-visible">
        <section className="= flex w-full flex-col items-center justify-center px-7">
          <ResendEmailHerosection />
          <VerifyAction />
          <p className="text-caption-sm-regular text-grey-300 mt-8 flex flex-row gap-4">
            이메일을 못받으셨나요?
            <span className="text-yellow-500 underline">
              이메일 다시 보내기
            </span>
          </p>
        </section>
      </div>
    </main>
  );
};

export default ResendVerificationPage;
