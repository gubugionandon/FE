import { useMutation } from '@tanstack/react-query';
import api from '../api';

export interface SignupRequest {
  email: string;
  password: string;
  name: string;
  callbackUrl: string;
  avatar: string;
}

const duplicatedEmail = async (email: string) => {
  const response = await api.post('/auth/check-email', { email });
  return response.data;
};

export const useDuplicatedEmailMutation = () => {
  return useMutation({
    mutationFn: duplicatedEmail,
  });
};
