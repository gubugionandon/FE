import { useMutation } from '@tanstack/react-query';
import api from '../api';
import { useNavigate } from 'react-router-dom';

export interface SignupRequest {
  email: string;
  password: string;
  name: string;
  callbackUrl: string;
  avatar?: string;
}

const duplicatedEmail = async (email: string) => {
  const response = await api.post('/auth/check-email', { email });
  return response.data;
};

const signupUser = async (data: SignupRequest) => {
  const response = await api.post(`/auth/sign-up`, {
    ...data,
    callbackUrl: `${window.location.origin}/auth/verify`,
  });
  const result = response.data;

  if (!result.success) {
    throw new Error(result || '회원가입 실패');
  }

  return response.data;
};

export const useDuplicatedEmailMutation = () => {
  return useMutation({
    mutationFn: duplicatedEmail,
  });
};

export const useSignupMutation = () => {
  const navigate = useNavigate();

  return useMutation({
    mutationFn: signupUser,
    onSuccess: (data) => {
      // 회원가입 성공 시, 인증 안내 페이지로 이동
      navigate('/auth/verify');
      console.log('✅ 회원가입 성공:', data);
    },
    onError: (error: unknown) => {
      console.error('❌ 회원가입 실패:', error);
      alert('회원가입에 실패했습니다. 잠시 후 다시 시도해주세요.');
    },
  });
};
