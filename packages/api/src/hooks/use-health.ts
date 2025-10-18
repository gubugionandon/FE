import { useQuery } from '@tanstack/react-query';
import { apiClient } from '../client/api-client';
import { QUERY_KEYS, API_CONFIG } from '../constants';

// Health Check Hook
export function useHealth() {
  return useQuery({
    queryKey: QUERY_KEYS.health,
    queryFn: () => apiClient.getHealth(),
    staleTime: API_CONFIG.STALE_TIME.HEALTH,
    refetchInterval: API_CONFIG.REFETCH_INTERVAL.HEALTH,
    retry: API_CONFIG.DEFAULT_RETRIES,
    retryDelay: (attemptIndex) => Math.min(1000 * 2 ** attemptIndex, 30000),
  });
}

// Health Status Hook (computed)
export function useHealthStatus() {
  const { data: health, isLoading, error } = useHealth();

  return {
    isHealthy: health?.status === 'ok',
    isUnhealthy: health?.status === 'error',
    isLoading,
    error,
    uptime: health?.uptime,
    timestamp: health?.timestamp,
  };
}
