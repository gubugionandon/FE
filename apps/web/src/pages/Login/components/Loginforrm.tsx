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
      <form className="flex w-[440px] flex-col items-center gap-3">
        <div className="w-full">
          <TextInput
            type="text"
            placeholder="이메일"
            value={formData.email}
            onChange={(e) => handleInputChange('email', e.target.value)}
            className="outline-none focus:border-yellow-500"
          />
        </div>

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
            className="outline-none focus:border-yellow-500"
          />
          {isPasswordFocused && (
            <button
              type="button"
              onMouseDown={(e) => e.preventDefault()}
              onClick={togglePasswordVisibility}
              className="absolute top-1/2 right-6 -translate-y-1/2 p-1 hover:bg-gray-100"
            >
              {isPasswordVisible ? (
                <InvisibleIcon className="h-5 w-5" />
              ) : (
                <VisibleIcon className="h-5 w-5" />
              )}
            </button>
          )}
        </div>

        <div className="text-caption-sm-regular text-grey-400 mt-[4px] flex w-full justify-start gap-3">
          <label className="flex cursor-pointer items-center gap-2">
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

        <LoginButton type="submit" />
      </form>

      <div className="text-grey-300 text-caption-sm-regular flex flex-row gap-[20px]">
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
