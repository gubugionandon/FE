import { useQuery } from '@tanstack/react-query';
import { apiClient } from '../client/api-client';
import { QUERY_KEYS, API_CONFIG } from '../constants';

// Version Hook
export function useVersion() {
  return useQuery({
    queryKey: QUERY_KEYS.version,
    queryFn: () => apiClient.getVersion(),
    staleTime: API_CONFIG.STALE_TIME.VERSION,
    retry: 2,
  });
}

// Version Info Hook (computed)
export function useVersionInfo() {
  const { data: version, isLoading, error } = useVersion();

  return {
    version: version?.version,
    build: version?.build,
    environment: version?.environment,
    isLoading,
    error,
  };
}
