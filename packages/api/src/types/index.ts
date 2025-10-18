// API 응답 타입 정의
export interface HealthResponse {
  status: 'ok' | 'error';
  timestamp: string;
  version: string;
  uptime: number;
}

export interface VersionResponse {
  version: string;
  build: string;
  environment: 'development' | 'production';
}

export interface HashResponse {
  original: string;
  hash: string;
  algorithm: string;
}

// API 요청 타입 정의
export interface HashRequest {
  data: string;
}

export interface BatchHashRequest {
  dataList: string[];
}

// API 클라이언트 설정 타입
export interface ApiClientConfig {
  baseURL?: string;
  timeout?: number;
  retries?: number;
}

// React Query 키 타입
export interface QueryKeys {
  health: readonly ['health'];
  version: readonly ['version'];
  hash: (data: string) => readonly ['hash', string];
}

// 에러 타입
export interface ApiError {
  message: string;
  code?: string;
  status?: number;
}

// 기존 API 인터페이스 (하위 호환성)
export interface YerbaAPI {
  version: number;
  getVersion(): number;
  getHashedVersion(): Promise<string>;
}

export interface NodeCryptoAPI {
  sha256sum: (data: string) => Promise<string>;
}
