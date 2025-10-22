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
  disabled = true,
  className = '',
}: LoginButtonProps) {
  return (
    <Button
      type={type}
      onClick={onClick}
      disabled={disabled}
      variant="primary"
      size="xl"
      className={`hbp:mt-7 mt-5 w-full ${className} hbp:h-[74px] text-headline-2xl-medium`}
    >
      로그인
    </Button>
  );
}
