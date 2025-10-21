import HeroSection from './components/HeroSection';
import TextInput from '@ui/InputField/TextField';
import SaveIdIcon from '@assets/auth/saveid_inactive.svg?react';
import LoginButton from '@ui/Button/LoginButton';

const LoginPage = () => {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <div className="relative w-full overflow-visible md:mx-auto md:max-w-screen-lg md:px-10">
        <section className="flex h-screen w-full flex-col items-center justify-center gap-5 md:gap-12">
          <HeroSection />
          <div className="flex w-[440px] flex-col items-center gap-3">
            <TextInput />
            <TextInput />
            <div className="jutify-start text-caption-sm-regular text-grey-400 mt-[4px] flex w-full gap-3">
              <SaveIdIcon className="" />
              <span>아이디 저장</span>
            </div>
            <LoginButton />
          </div>
          <div className="text-grey-300 text-caption-sm-regular flex flex-row gap-[20px]">
            <span>회원가입</span>
            <span>|</span>
            <span>비밀번호 찾기</span>
          </div>
        </section>
      </div>
    </main>
  );
};

export default LoginPage;
