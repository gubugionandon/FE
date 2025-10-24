interface TextFieldProps {
  id?: string;
  type?: string;
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onFocus?: () => void;
  onBlur?: () => void;
  className?: string;
}

export default function TextField({
  id,
  type = 'text',
  placeholder = '이름을 입력하세요',
  value,
  onChange,
  onFocus,
  onBlur,
  className = '',
}: TextFieldProps) {
  return (
    <input
      id={id}
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      onFocus={onFocus}
      onBlur={onBlur}
      className={`flex aspect-[44/6] w-full cursor-pointer flex-row rounded-full border border-[#E3E1DF] bg-[#ffffff] px-6 ${className}`}
    />
  );
}
