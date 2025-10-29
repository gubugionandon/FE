import { useMutation } from '@tanstack/react-query';
import api from '../api';
import { useNavigate } from 'react-router-dom';

export interface ResendVerifyEmailRequest {
  email: string;
  callbackUrl: string;
}

const verifyEmail = async (token: string) => {
  const response = await api.post('/auth/verify-email', { token });
  const result = response.data;

  if (!result.success) {
    throw new Error(result || '인증 실패');
  }

  return response.data;
};

const resendVerifyEmail = async (data: ResendVerifyEmailRequest) => {
  const response = await api.post('/auth/resend-verification-email', {
    ...data,
    callbackUrl: `${window.location.origin}/auth/resend`,
  });

  const result = response.data;

  if (!result.success) {
    console.log(result);
    throw new Error(result || '다시 보내기 실패');
  }

  return response.data;
};

export const useVerifyEmailMutation = () => {
  return useMutation({
    mutationFn: verifyEmail,

    onSuccess: (data) => {
      console.log('✅ 이메일 인증 성공:', data);
    },
    onError: (error: unknown) => {
      console.error('❌ 인증 실패:', error);
    },
  });
};

export const useResendVerifyEmailMuation = () => {
  const navigate = useNavigate();

  return useMutation({
    mutationFn: resendVerifyEmail,

    onSuccess: (data) => {
      navigate('/auth/resend');
      console.log('✅ 인증 다시 보내기 성공:', data);
    },
    onError: (error: unknown) => {
      console.error('❌ 인증 다시 실패:', error);
    },
  });
};
