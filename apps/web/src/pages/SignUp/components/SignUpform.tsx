import React, { useState } from 'react';
import { Button } from 'ui/Button';
import TextField from 'ui/TextField';
import { validateName, validatePasswordMatch } from '../utils/validation';
import FormInput from './FormInput';
import PasswordField from '../../Login/components/PasswordField';

interface SignUpFormData {
  email: string;
  password: string;
  confirmPassword: string;
  name: string;
}

interface FormErrors {
  email: string;
  password: string;
  confirmPassword: string;
  name: string;
}

const SignUpForm = () => {
  const [formData, setFormData] = useState<SignUpFormData>({
    email: '',
    password: '',
    confirmPassword: '',
    name: '',
  });

  const [errors, setErrors] = useState<FormErrors>({
    email: '',
    password: '',
    confirmPassword: '',
    name: '',
  });

  /* 입력 상태 변화 */
  const handleInputChange =
    (field: keyof SignUpFormData) =>
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value;
      setFormData((prev) => ({
        ...prev,
        [field]: value,
      }));
      if (field === 'name') {
        setErrors((prev) => ({ ...prev, name: validateName(value) }));
      }

      if (field === 'password' || field === 'confirmPassword') {
        setErrors((prev) => ({
          ...prev,
          confirmPassword: validatePasswordMatch(
            field === 'password' ? value : formData.password,
            field === 'confirmPassword' ? value : formData.confirmPassword,
          ),
        }));
      }
    };

  return (
    <form className="hbp:w-[550px] hbp:gap-[75px] flex w-110 flex-col gap-15">
      {/*이메일 섹션*/}
      <div className="hbp:gap-[12.5px] flex w-full flex-col gap-[10px]">
        <label
          htmlFor="email"
          className="text-body-lg-semibold hbp:text-headline-2xl-semibold text-grey-600"
        >
          이메일 <span className="text-red-500">*</span>
        </label>
        <div className="hbp:gap-[12.5px] flex w-full flex-row items-center justify-center gap-[10px]">
          <TextField
            id="email"
            type="email"
            placeholder="이메일을 입력해주세요."
            value={formData.email}
            onChange={handleInputChange('email')}
            className={`hbp:text-body-xl-regular aspect-[338/60] flex-1 outline-none focus:border-yellow-500 ${errors.email ? 'border-red-500' : ''}`}
          />
          <Button
            text="중복확인"
            size="sm"
            className="hbp:w-[115px] hbp:h-[50px] hbp:text-body-xl-medium w-[92px] whitespace-nowrap"
          ></Button>
        </div>
        {errors.email && (
          <p className="mt-1 text-xs text-red-500">{errors.email}</p>
        )}
      </div>

      {/* 비밀번호 섹션 */}
      <div className="hbp:gap-1.5 flex flex-col gap-1">
        <label
          htmlFor="password"
          className="text-body-lg-semibold hbp:text-headline-2xl-semibold text-grey-600"
        >
          비밀번호 <span className="text-red-500">*</span>
        </label>
        <p className="hbp:mb-[7.5px] text-caption-sm-medium hbp:text-body-md-medium text-grey-300 mb-[6px]">
          영문, 숫자, 특수문자를 조합하여 8-16글자로 입력해주세요.
        </p>
        <PasswordField
          className="focus:border-yellow-500"
          value={formData.password}
          onChange={handleInputChange('password')}
        />

        {/*비밀번호 재입력 섹션 */}
        <FormInput
          id="confirmPassword"
          type="password"
          placeholder="비밀번호를 재입력해주세요."
          value={formData.confirmPassword}
          onChange={handleInputChange('confirmPassword')}
          compareValue={formData.password}
          successMessage={
            formData.confirmPassword &&
            formData.password === formData.confirmPassword
              ? '비밀번호가 일치합니다.'
              : undefined
          }
          error={
            formData.confirmPassword &&
            formData.password !== formData.confirmPassword
              ? '비밀번호가 일치하지 않습니다.'
              : undefined
          }
        />
      </div>

      {/* 이름 섹션 */}
      <div className="hbp:gap-1.5 flex flex-col gap-1">
        <label
          htmlFor="name"
          className="text-body-lg-semibold hbp:text-headline-2xl-semibold text-grey-600"
        >
          이름 <span className="text-red-500">*</span>
        </label>
        <p className="hbp:mb-[7.5px] text-caption-sm-medium hbp:text-body-md-medium text-grey-300 mb-[6px]">
          최대 10글자 이내로 작성해주세요.
        </p>
        <FormInput
          id="name"
          type="text"
          placeholder="이름을 입력해주세요."
          value={formData.name}
          onChange={handleInputChange('name')}
          error={errors.name}
        />
      </div>

      {/* 완료 버튼 */}
      <Button text="완료" size="xl" disabled={true} />
    </form>
  );
};

export default SignUpForm;
