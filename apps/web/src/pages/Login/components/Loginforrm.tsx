import { useState } from 'react';
import TextInput from '@ui/InputField/TextField';
import SaveIdIcon from '@assets/auth/saveid_icon.svg?react';
import VisibleIcon from '@assets/auth/visible_icon.svg?react';
import InvisibleIcon from '@assets/auth/invisible_icon.svg?react';
import LoginButton from './LoginButton';

interface LoginFormData {
  email: string;
  password: string;
  saveId: boolean;
}

const LoginForm = () => {
  const [formData, setFormData] = useState<LoginFormData>({
    email: '',
    password: '',
    saveId: false,
  });

  /* 비밀번호 보이기/숨기기 */
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isPasswordFocused, setIsPasswordFocused] = useState(false);

  const handleInputChange = (
    field: keyof LoginFormData,
    value: string | boolean,
  ) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  return (
    <>
      {/* 이메일 부분 */}
      <form className="hbp:w-[550px] flex w-[440px] flex-col items-center gap-3">
        <div className="w-full">
          <TextInput
            type="text"
            placeholder="이메일"
            value={formData.email}
            onChange={(e) => handleInputChange('email', e.target.value)}
            className="hbp:text-body-lg-regular aspect-[44/6] outline-none focus:border-yellow-500"
          />
        </div>
        {/* 비밀번호 부분 */}
        <div className="relative w-full">
          <TextInput
            type={isPasswordVisible ? 'text' : 'password'}
            placeholder="비밀번호"
            value={formData.password}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              handleInputChange('password', e.target.value)
            }
            onFocus={() => setIsPasswordFocused(true)}
            onBlur={() => setIsPasswordFocused(false)}
            className="hbp:text-body-lg-regular aspect-[44/6] outline-none focus:border-yellow-500"
          />
          {isPasswordFocused && (
            <button
              type="button"
              onMouseDown={(e) => e.preventDefault()}
              onClick={togglePasswordVisibility}
              className="absolute top-1/2 right-6 -translate-y-1/2 p-1 hover:bg-gray-100"
            >
              {isPasswordVisible ? (
                <InvisibleIcon className="hbp:h-6 h-5 w-5 w-6" />
              ) : (
                <VisibleIcon className="hbp:h-6 h-5 w-5 w-6" />
              )}
            </button>
          )}
        </div>
        {/* id 저장 부분 */}
        <div className="text-caption-sm-regular hbp:text-body-lg-regular text-grey-400 mt-1 flex w-full justify-start gap-3">
          <label className="hbp:gap-2.5 flex cursor-pointer items-center gap-2">
            <input
              type="checkbox"
              checked={formData.saveId}
              onChange={(e) => handleInputChange('saveId', e.target.checked)}
              className="sr-only"
            />
            <SaveIdIcon
              className={formData.saveId ? '[&>rect]:fill-yellow-400' : ''}
            />
            <span>아이디 저장</span>
          </label>
        </div>
        {/* 로그인 버튼 컴포넌트 */}
        <LoginButton
          type="submit"
          disabled={!formData.email || !formData.password}
        />
      </form>
      {/* 회원가입 / 비밀번호 찾기 */}
      <div className="text-grey-300 text-caption-sm-regular hbp:text-body-lg-regular hbp:mt-[-20px] hbp:gap-[25px] mt-[-16px] flex flex-row gap-5">
        <span className="hover:text-grey-200 cursor-pointer">회원가입</span>
        <span>|</span>
        <span className="hover:text-grey-200 cursor-pointer">
          비밀번호 찾기
        </span>
      </div>
    </>
  );
};

export default LoginForm;
