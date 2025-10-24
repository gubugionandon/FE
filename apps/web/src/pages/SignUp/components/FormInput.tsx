import React from 'react';
import TextField from '@ui/InputField/TextField';
import SuccessIcon from '@assets/auth/success_icon.svg?react';
import FailIcon from '@assets/auth/error_icon.svg?react';
import PasswordField from '../../Login/components/PasswordField';

interface FormInputProps {
  id?: string;
  type?: string;
  placeholder?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
  successMessage?: string;
  compareValue?: string;
  className?: string;
}

export default function FormInput({
  id,
  type = 'text',
  placeholder,
  value,
  onChange,
  error,
  successMessage,
  compareValue,
  className = '',
}: FormInputProps) {
  /* 입력 필드 유효성에 따른 테두리 색상 조건부 적용 */
  const borderClass = !value
    ? 'focus:border-yellow-500'
    : compareValue !== undefined
      ? value !== compareValue
        ? 'border-red-500 '
        : 'border-green-500'
      : error
        ? 'border-red-500 focus:border-red-500'
        : 'focus:border-yellow-500';

  /* 회원가입 입력 필드 유효성 검사 메시지 */
  const showError = !!error && !successMessage;
  const showSuccess = !!successMessage && !error;

  return (
    <div className="flex flex-col gap-1">
      {/* password 타입일 때 PasswordField 적용 */}
      {type === 'password' ? (
        <PasswordField
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className={`border ${borderClass} ${className}`}
        />
      ) : (
        <TextField
          id={id}
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className={`hbp:text-body-xl-regular border outline-none ${borderClass} ${className}`}
        />
      )}

      {/* 회원가입 입력 필드 유효성 검사 메시지 */}
      {(showError || showSuccess) && (
        <div
          className={`text-caption-sm-regular mt-1 flex items-center gap-1.5 ${
            showSuccess ? 'text-green-500' : 'text-red-500'
          }`}
        >
          {showSuccess ? <SuccessIcon /> : <FailIcon />}
          <p className="text-caption-sm-regular mt-1">
            {showSuccess ? successMessage : error}
          </p>
        </div>
      )}
    </div>
  );
}
