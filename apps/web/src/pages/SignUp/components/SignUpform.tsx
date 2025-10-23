import React, { useState } from 'react';
import { Button } from 'ui/Button';
import TextField from 'ui/TextField';
import SuccessIcon from '@assets/auth/success_icon.svg?react';
import FailIcon from '@assets/auth/error_icon.svg?react';

interface SignUpFormData {
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

  const [errors, setErrors] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    name: '',
  });

  /* 입력 상태 변화 */
  const handleInputChange =
    (field: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value;
      setFormData((prev) => ({
        ...prev,
        [field]: value,
      }));
      if (field === 'name') {
        if (/\s/.test(value)) {
          setErrors((prev) => ({
            ...prev,
            name: '띄어쓰기 없이 붙여 작성해주세요.',
          }));
          return;
        }

        if (value.length > 10) {
          setErrors((prev) => ({
            ...prev,
            name: '최대 글자수를 초과했습니다.',
          }));
          return;
        }

        setErrors((prev) => ({ ...prev, name: '' }));
      }
      if (field === 'password' || field === 'confirmPassword') {
        const newPassword = field === 'password' ? value : formData.password;
        const newConfirm =
          field === 'confirmPassword' ? value : formData.confirmPassword;

        if (newConfirm && newPassword !== newConfirm) {
          setErrors((prev) => ({
            ...prev,
            confirmPassword: '비밀번호가 일치하지 않습니다.',
          }));
        } else {
          setErrors((prev) => ({
            ...prev,
            confirmPassword: '비밀번호가 일치합니다.',
          }));
        }
      }
    };

  return (
    <form className="hbp:w-[550px] hbp:gap-[75px] flex w-110 flex-col gap-15">
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
        <TextField
          id="password"
          type="password"
          placeholder="비밀번호를 입력해주세요."
          value={formData.password}
          onChange={handleInputChange('password')}
          className={
            'hbp: hbp:text-body-xl-regular mb-[8px] mb-[9px] outline-none focus:border-yellow-500'
          }
        />
        <TextField
          type="password"
          placeholder="비밀번호를 재입력해주세요."
          value={formData.confirmPassword}
          onChange={handleInputChange('confirmPassword')}
          className={`hbp:text-body-xl-regular border outline-none ${
            !formData.confirmPassword
              ? 'focus:border-yellow-500'
              : formData.password !== formData.confirmPassword
                ? 'border-red-500'
                : 'border-green-500'
          }`}
        />
        {formData.confirmPassword && (
          <div
            className={`text-caption-sm-regular mt-1 flex items-center gap-1.5 ${
              errors.confirmPassword === '비밀번호가 일치합니다.'
                ? 'text-green-500'
                : 'text-red-500'
            }`}
          >
            {errors.confirmPassword === '비밀번호가 일치합니다.' ? (
              <SuccessIcon />
            ) : (
              <FailIcon />
            )}
            <p>{errors.confirmPassword}</p>
          </div>
        )}
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
        <TextField
          id="name"
          type="text"
          placeholder="이름을 입력해주세요."
          value={formData.name}
          onChange={handleInputChange('name')}
          className={`hbp:text-body-xl-regular border outline-none ${
            errors.name
              ? 'border-red-500 focus:border-red-500'
              : 'focus:border-yellow-500'
          } `}
        />
        {errors.name && (
          <div className="r hbp:gap-[7.5px] text-caption-sm-regular mt-1 flex flex-row items-center gap-1.5">
            <FailIcon />
            <p className="mt-1 text-xs text-red-500">{errors.name}</p>
          </div>
        )}
      </div>

      {/* 완료 버튼 */}
      <Button text="완료" size="xl" disabled={true} />
    </form>
  );
};

export default SignUpForm;
