import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { createAPIClient } from '../../index';
import { HashResponse } from '../types';

// 환경별 API 클라이언트 인스턴스 (지연 초기화)
let apiClient: ReturnType<typeof createAPIClient> | null = null;

function getApiClient() {
  if (!apiClient) {
    apiClient = createAPIClient();
  }
  return apiClient;
}

// Health check hook
export function useHealth() {
  return useQuery({
    queryKey: ['health'],
    queryFn: () => getApiClient().getHealth(),
    staleTime: 5 * 60 * 1000, // 5분
    retry: 3,
  });
}

// Version info hook
export function useVersion() {
  return useQuery({
    queryKey: ['version'],
    queryFn: () => getApiClient().getVersion(),
    staleTime: 10 * 60 * 1000, // 10분
    retry: 3,
  });
}

// Hash generation mutation hook
export function useHashMutation() {
  const queryClient = useQueryClient();

  return useMutation<HashResponse, Error, string>({
    mutationFn: (data: string) => getApiClient().generateHash(data),
    onSuccess: (data, variables) => {
      // 캐시 업데이트
      queryClient.setQueryData(['hash', variables], data);
    },
  });
}

// Batch hash generation hook
export function useBatchHash(dataList: string[]) {
  return useQuery({
    queryKey: ['batchHash', dataList],
    queryFn: () => getApiClient().generateBatchHash(dataList),
    enabled: dataList.length > 0,
    staleTime: 0,
  });
}

// Batch hash mutation hook
export function useBatchHashMutation() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (dataList: string[]) =>
      getApiClient().generateBatchHash(dataList),
    onSuccess: (data, variables) => {
      queryClient.setQueryData(['batchHash', variables], data);
    },
  });
}

// 환경 감지 hook
export function useEnvironment() {
  const isElectron =
    typeof window !== 'undefined' &&
    (window as unknown as { electronAPI: unknown }).electronAPI;

  return {
    isElectron,
    isWeb: !isElectron,
    platform: isElectron ? 'electron' : 'web',
  };
}
