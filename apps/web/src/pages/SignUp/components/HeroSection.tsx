import EmailIcon from '@assets/auth/email_icon.svg?react';

export default function HeroSection() {
  return (
    <div className="hbp:gap-[57px] flex flex-col items-center gap-[46px]">
      <EmailIcon className="hbp:w-[250px] hbp:h-[250px]" />
      <div className="hbp:gap-7.5 flex flex-col items-center justify-center gap-6">
        <p className="text-title-4xl-bold">이메일 인증</p>
        <p className="text-headline-2xl-regular text-center">
          본인 인증 메일을 귀하의
          <span className="text-yellow-500"> boogririn@gmail.com </span>
          보냈습니다.
          <br />
          받은 메일함에서 인증 메일을 열고 본인인증을 클릭하면 회원가입이
          완료됩니다.
        </p>
      </div>
    </div>
  );
}
