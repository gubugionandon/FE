import {
  HealthResponse,
  VersionResponse,
  HashResponse,
  ApiClientConfig,
} from '../types';
import { generateHash } from '../utils/crypto';
import { logger } from '../utils/logger';
import { API_CONFIG } from '../constants';

// API 클라이언트 클래스
export class ApiClient {
  private config: ApiClientConfig;

  constructor(config: ApiClientConfig = {}) {
    this.config = {
      baseURL: '/api',
      timeout: API_CONFIG.DEFAULT_TIMEOUT,
      retries: API_CONFIG.DEFAULT_RETRIES,
      ...config,
    };
  }

  // Health Check - 클라이언트에서 직접 처리
  async getHealth(): Promise<HealthResponse> {
    logger.logRequest('GET', '/health');

    const response: HealthResponse = {
      status: 'ok',
      timestamp: new Date().toISOString(),
      version: '0.1.0',
      uptime: Math.floor(performance.now() / 1000),
    };

    logger.logResponse(200, '/health', response);
    return response;
  }

  // Version 정보 - 클라이언트에서 직접 처리
  async getVersion(): Promise<VersionResponse> {
    logger.logRequest('GET', '/version');

    const response: VersionResponse = {
      version: '0.1.0',
      build: '2024-01-16T14:30:00Z',
      environment:
        process.env.NODE_ENV === 'development' ? 'development' : 'production',
    };

    logger.logResponse(200, '/version', response);
    return response;
  }

  // 해시 생성 - Web Crypto API 사용
  async generateHash(data: string): Promise<HashResponse> {
    logger.logRequest('POST', '/hash', { data });

    try {
      const hash = await generateHash(data);
      const response: HashResponse = {
        original: data,
        hash,
        algorithm: 'SHA-256',
      };

      logger.logResponse(200, '/hash', response);
      return response;
    } catch (error) {
      logger.logError(error, 'Hash generation');
      throw error;
    }
  }

  // 배치 해시 생성 - Web Crypto API 사용
  async generateBatchHash(dataList: string[]): Promise<HashResponse[]> {
    logger.logRequest('POST', '/hash/batch', { dataList });

    try {
      const results = await Promise.all(
        dataList.map(async (data) => {
          const hash = await generateHash(data);
          return {
            original: data,
            hash,
            algorithm: 'SHA-256',
          };
        }),
      );

      logger.logResponse(200, '/hash/batch', results);
      return results;
    } catch (error) {
      logger.logError(error, 'Batch hash generation');
      throw error;
    }
  }
}

// 싱글톤 인스턴스
export const apiClient = new ApiClient();
