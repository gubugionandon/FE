import { useState } from 'react';
import TextInput from '@ui/InputField/TextField';
import VisibleIcon from '@assets/auth/visible_icon.svg?react';
import InvisibleIcon from '@assets/auth/invisible_icon.svg?react';

interface PasswordFieldProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  className?: string;
}

const PasswordField = ({
  value,
  onChange,
  placeholder = '비밀번호',
  className = '',
}: PasswordFieldProps) => {
  /* 비밀번호 보이기/숨기기 */
  const [isVisible, setIsVisible] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

  const toggleVisibility = () => setIsVisible((prev) => !prev);
  const handleFocus = () => setIsFocused(true);
  const handleBlur = () => setIsFocused(false);

  return (
    <div className="relative w-full">
      <TextInput
        type={isVisible ? 'text' : 'password'}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
        className={`hbp:text-body-lg-regular aspect-[44/6] outline-none ${className}`}
      />
      {isFocused && (
        <button
          type="button"
          onMouseDown={(e) => e.preventDefault()}
          onClick={toggleVisibility}
          className="absolute top-1/2 right-6 -translate-y-1/2 p-1 hover:bg-gray-100"
        >
          {isVisible ? (
            <InvisibleIcon className="hbp:h-6 h-5 w-5 w-6" />
          ) : (
            <VisibleIcon className="hbp:h-6 h-5 w-5 w-6" />
          )}
        </button>
      )}
    </div>
  );
};

export default PasswordField;
