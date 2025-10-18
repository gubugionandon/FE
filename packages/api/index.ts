// API 패키지 메인 익스포트
export * from './src/client/api-client';
export * from './src/constants';
export * from './src/types';
export * from './src/utils';

// 환경별 API 훅만 익스포트 (중복 방지)
export * from './src/hooks/use-environment-api';

// 타입 import
import { HashResponse } from './src/types';

// 기존 API 인터페이스 (하위 호환성)
export interface YerbaAPI {
  version: number;
  getVersion(): number;
  getHashedVersion(): Promise<string>;
}

export interface NodeCryptoAPI {
  sha256sum: (data: string) => Promise<string>;
}

// 웹 환경에서 사용할 API 구현
export class WebAPI implements YerbaAPI {
  version = 0.1;

  getVersion(): number {
    return this.version;
  }

  async getHashedVersion(): Promise<string> {
    // 웹 환경에서는 Web Crypto API 사용
    const encoder = new TextEncoder();
    const dataBuffer = encoder.encode(this.version.toString());
    const hashBuffer = await crypto.subtle.digest('SHA-256', dataBuffer);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    return hashArray.map((b) => b.toString(16).padStart(2, '0')).join('');
  }
}

// Electron 환경에서 사용할 API 구현
export class ElectronAPI implements YerbaAPI {
  version = 0.1;

  getVersion(): number {
    return this.version;
  }

  // Version info 메서드 추가
  async getVersionInfo() {
    return {
      version: this.version.toString(),
      build: new Date().toISOString(),
      environment:
        process.env.NODE_ENV === 'development' ? 'development' : 'production',
    };
  }

  async getHashedVersion(): Promise<string> {
    // Electron에서는 preload를 통해 Node.js crypto 사용
    if (
      typeof window !== 'undefined' &&
      (window as unknown as { nodeCrypto: NodeCryptoAPI }).nodeCrypto
    ) {
      const nodeCrypto = (window as unknown as { nodeCrypto: NodeCryptoAPI })
        .nodeCrypto as NodeCryptoAPI;
      return await nodeCrypto.sha256sum(this.version.toString());
    }
    throw new Error('NodeCrypto API not available');
  }

  // Health check 메서드 추가
  async getHealth() {
    // Electron 메인 프로세스에서는 직접 응답 생성
    return {
      status: 'ok',
      timestamp: new Date().toISOString(),
      version: this.version.toString(),
      uptime: Math.floor(process.uptime()),
    };
  }
}

// 환경에 따른 API 팩토리
export function createAPI(): YerbaAPI {
  // Electron 환경 감지
  if (
    typeof window !== 'undefined' &&
    (window as unknown as { nodeCrypto: NodeCryptoAPI }).nodeCrypto
  ) {
    return new ElectronAPI();
  }

  // 웹 환경
  return new WebAPI();
}

// 환경별 API 클라이언트 팩토리
export function createAPIClient() {
  const isElectron =
    typeof window !== 'undefined' &&
    (window as unknown as { electronAPI: unknown }).electronAPI;

  if (isElectron) {
    return new ElectronAPIClient();
  }

  return new WebAPIClient();
}

// Electron API 클라이언트
export class ElectronAPIClient {
  async getHealth() {
    if (
      typeof window !== 'undefined' &&
      (window as unknown as { electronAPI: unknown }).electronAPI
    ) {
      return await (
        window as unknown as {
          electronAPI: { getHealth: () => Promise<unknown> };
        }
      ).electronAPI.getHealth();
    }
    throw new Error('Electron API not available');
  }

  async getVersion() {
    if (
      typeof window !== 'undefined' &&
      (window as unknown as { electronAPI: unknown }).electronAPI
    ) {
      return await (
        window as unknown as {
          electronAPI: { getVersion: () => Promise<unknown> };
        }
      ).electronAPI.getVersion();
    }
    throw new Error('Electron API not available');
  }

  async generateHash(data: string): Promise<HashResponse> {
    if (
      typeof window !== 'undefined' &&
      (window as unknown as { electronAPI: unknown }).electronAPI
    ) {
      return await (
        window as unknown as {
          electronAPI: {
            generateHash: (data: string) => Promise<HashResponse>;
          };
        }
      ).electronAPI.generateHash(data);
    }
    throw new Error('Electron API not available');
  }

  async generateBatchHash(dataList: string[]): Promise<HashResponse[]> {
    if (
      typeof window !== 'undefined' &&
      (window as unknown as { electronAPI: unknown }).electronAPI
    ) {
      return await (
        window as unknown as {
          electronAPI: {
            generateBatchHash: (dataList: string[]) => Promise<HashResponse[]>;
          };
        }
      ).electronAPI.generateBatchHash(dataList);
    }
    throw new Error('Electron API not available');
  }
}

// 웹 API 클라이언트
export class WebAPIClient {
  private baseURL: string;

  constructor(baseURL: string = '/api') {
    this.baseURL = baseURL;
  }

  async getHealth() {
    const response = await fetch(`${this.baseURL}/health`);
    if (!response.ok) {
      throw new Error('Health check failed');
    }
    return await response.json();
  }

  async getVersion() {
    const response = await fetch(`${this.baseURL}/version`);
    if (!response.ok) {
      throw new Error('Version check failed');
    }
    return await response.json();
  }

  async generateHash(data: string): Promise<HashResponse> {
    const response = await fetch(`${this.baseURL}/hash`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ data }),
    });
    if (!response.ok) {
      throw new Error('Hash generation failed');
    }
    return await response.json();
  }

  async generateBatchHash(dataList: string[]): Promise<HashResponse[]> {
    const response = await fetch(`${this.baseURL}/hash/batch`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ dataList }),
    });
    if (!response.ok) {
      throw new Error('Batch hash generation failed');
    }
    return await response.json();
  }
}
