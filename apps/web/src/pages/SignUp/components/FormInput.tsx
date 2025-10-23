import React from 'react';
import TextField from '@ui/InputField/TextField';
import SuccessIcon from '@assets/auth/success_icon.svg?react';
import FailIcon from '@assets/auth/error_icon.svg?react';

interface FormInputProps {
  id: string;
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
  const borderClass = !value
    ? 'focus:border-yellow-500'
    : compareValue !== undefined
      ? value !== compareValue
        ? 'border-red-500'
        : 'border-green-500'
      : error
        ? 'border-red-500 focus:border-red-500'
        : 'focus:border-yellow-500';

  const showError = !!error && !successMessage;
  const showSuccess = !!successMessage && !error;

  return (
    <div className="flex flex-col gap-1">
      <TextField
        id={id}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={`hbp:text-body-xl-regular border outline-none ${borderClass} ${className}`}
      />

      {(showError || showSuccess) && (
        <div
          className={`text-caption-sm-regular mt-1 flex items-center gap-1.5 ${
            showSuccess ? 'text-green-500' : 'text-red-500'
          }`}
        >
          {showSuccess ? <SuccessIcon /> : <FailIcon />}
          <p className="mt-1 text-xs">{showSuccess ? successMessage : error}</p>
        </div>
      )}
    </div>
  );
}
