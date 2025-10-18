// 로깅 유틸리티
export class Logger {
  private static instance: Logger;
  private isDev: boolean;

  private constructor() {
    this.isDev =
      process.env.NODE_ENV === 'development' ||
      (typeof window !== 'undefined' &&
        window.location.hostname === 'localhost');
  }

  static getInstance(): Logger {
    if (!Logger.instance) {
      Logger.instance = new Logger();
    }
    return Logger.instance;
  }

  // API 요청 로깅
  logRequest(method: string, url: string, data?: unknown): void {
    if (this.isDev) {
      console.log(
        `🚀 API Request: ${method.toUpperCase()} ${url}`,
        data ? { data } : '',
      );
    }
  }

  // API 응답 로깅
  logResponse(status: number, url: string, data?: unknown): void {
    if (this.isDev) {
      const statusIcon = status >= 200 && status < 300 ? '✅' : '❌';
      console.log(
        `${statusIcon} API Response: ${status} ${url}`,
        data ? { data } : '',
      );
    }
  }

  // 에러 로깅
  logError(error: unknown, context?: string): void {
    if (this.isDev) {
      console.error(`❌ API Error${context ? ` (${context})` : ''}:`, error);
    }
  }

  // 성공 로깅
  logSuccess(message: string, data?: unknown): void {
    if (this.isDev) {
      console.log(`✅ ${message}`, data ? { data } : '');
    }
  }

  // 경고 로깅
  logWarning(message: string, data?: unknown): void {
    if (this.isDev) {
      console.warn(`⚠️ ${message}`, data ? { data } : '');
    }
  }
}

// 싱글톤 인스턴스
export const logger = Logger.getInstance();
