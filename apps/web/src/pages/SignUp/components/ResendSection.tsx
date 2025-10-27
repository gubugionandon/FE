import { useNavigate } from 'react-router-dom';

export default function ResendSection() {
  const navigate = useNavigate();

  const handleResendClick = () => {
    navigate('/auth/resend');
  };

  return (
    <p className="text-caption-sm-regular text-grey-300 mt-8 flex flex-row gap-3">
      이메일을 못받으셨나요?
      <span
        onClick={handleResendClick}
        className="cursor-pointer text-yellow-500 underline"
      >
        이메일 다시 보내기
      </span>
    </p>
  );
}
