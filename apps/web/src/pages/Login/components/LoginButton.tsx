import { Button } from '@ui/Button/Button';

interface LoginButtonProps {
  type?: 'button' | 'submit' | 'reset';
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
}

export default function LoginButton({
  type = 'button',
  onClick,
  disabled = false,
  className = '',
}: LoginButtonProps) {
  return (
    <Button
      type={type}
      onClick={onClick}
      disabled={disabled}
      variant="primary"
      size="lg"
      className={`mt-[20px] w-full ${className}`}
    >
      로그인
    </Button>
  );
}
