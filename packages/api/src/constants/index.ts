// API 설정 상수
export const API_CONFIG = {
  DEFAULT_TIMEOUT: 10000,
  DEFAULT_RETRIES: 3,
  STALE_TIME: {
    HEALTH: 30 * 1000, // 30초
    VERSION: 5 * 60 * 1000, // 5분
    HASH: 10 * 60 * 1000, // 10분
  },
  REFETCH_INTERVAL: {
    HEALTH: 60 * 1000, // 1분
  },
} as const;

// Query Keys 상수
export const QUERY_KEYS = {
  health: ['health'] as const,
  version: ['version'] as const,
  hash: (data: string) => ['hash', data] as const,
} as const;

// API 엔드포인트 상수
export const API_ENDPOINTS = {
  HEALTH: '/health',
  VERSION: '/version',
  HASH: '/hash',
  BATCH_HASH: '/hash/batch',
} as const;

// 에러 메시지 상수
export const ERROR_MESSAGES = {
  HASH_GENERATION_FAILED: 'Failed to generate hash',
  NETWORK_ERROR: 'Network request failed',
  TIMEOUT_ERROR: 'Request timeout',
  UNKNOWN_ERROR: 'An unknown error occurred',
} as const;

// 알고리즘 상수
export const HASH_ALGORITHMS = {
  SHA256: 'SHA-256',
  SHA1: 'SHA-1',
  SHA384: 'SHA-384',
  SHA512: 'SHA-512',
} as const;
