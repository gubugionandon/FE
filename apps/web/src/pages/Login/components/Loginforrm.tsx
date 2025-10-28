import { useForm } from 'react-hook-form';
import TextInput from '@ui/InputField/TextField';
import SaveIdIcon from '@assets/auth/saveid_icon.svg?react';
import LoginButton from './LoginButton';
import PasswordField from './PasswordField';
import { useNavigate } from 'react-router-dom';

interface LoginFormData {
  email: string;
  password: string;
  saveId: boolean;
}

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { isValid },
  } = useForm<LoginFormData>({
    mode: 'onChange',
    defaultValues: {
      email: '',
      password: '',
      saveId: false,
    },
  });

  const navigate = useNavigate();

  const onSubmit = (data: LoginFormData) => {
    console.log('로그인 시도:', data);
  };

  const password = watch('password');

  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="hbp:w-[550px] flex w-[440px] flex-col items-center gap-3"
      >
        {/* 이메일 */}
        <TextInput
          type="text"
          placeholder="이메일"
          {...register('email')}
          className="hbp:text-body-lg-regular aspect-[44/6]"
        />

        {/* 비밀번호 */}
        <PasswordField {...register('password')} hasValue={!!password} />

        {/* 아이디 저장 */}
        <div className="text-caption-sm-regular hbp:text-body-lg-regular text-grey-400 mt-1 flex w-full justify-start gap-3">
          <label className="hbp:gap-2.5 flex cursor-pointer items-center gap-2">
            <input
              type="checkbox"
              {...register('saveId')}
              className="sr-only"
            />
            <SaveIdIcon
              className={watch('saveId') ? '[&>rect]:fill-yellow-400' : ''}
            />
            <span>아이디 저장</span>
          </label>
        </div>

        {/* 버튼 */}
        <LoginButton type="submit" disabled={!isValid} />
      </form>

      {/* 회원가입 / 비밀번호 찾기 */}
      <div className="text-grey-300 text-caption-sm-regular hbp:text-body-lg-regular hbp:mt-[-20px] hbp:gap-[25px] mt-[-16px] flex flex-row gap-5">
        <span
          onClick={() => navigate('/auth/signup')}
          className="hover:text-grey-200 cursor-pointer"
        >
          회원가입
        </span>
        <span>|</span>
        <span className="hover:text-grey-200 cursor-pointer">
          비밀번호 찾기
        </span>
      </div>
    </>
  );
};

export default LoginForm;
