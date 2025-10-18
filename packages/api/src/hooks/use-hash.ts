import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { apiClient } from '../client/api-client';
import { QUERY_KEYS, API_CONFIG } from '../constants';

// Hash Generation Hook
export function useHash(data: string) {
  return useQuery({
    queryKey: QUERY_KEYS.hash(data),
    queryFn: () => apiClient.generateHash(data),
    enabled: !!data, // data가 있을 때만 실행
    staleTime: API_CONFIG.STALE_TIME.HASH,
    retry: 1,
  });
}

// Hash Mutation Hook
export function useHashMutation() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: string) => apiClient.generateHash(data),
    onSuccess: (data, variables) => {
      // 캐시 업데이트
      queryClient.setQueryData(QUERY_KEYS.hash(variables), data);
    },
    onError: (error) => {
      console.error('Hash generation failed:', error);
    },
  });
}

// Batch Hash Mutation Hook
export function useBatchHashMutation() {
  return useMutation({
    mutationFn: (dataList: string[]) => apiClient.generateBatchHash(dataList),
    onError: (error) => {
      console.error('Batch hash generation failed:', error);
    },
  });
}
