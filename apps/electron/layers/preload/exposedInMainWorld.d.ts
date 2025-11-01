// Electron API 타입 정의
interface HealthResponse {
  status: string;
  timestamp: number;
}

interface VersionResponse {
  version: string;
  build: string;
}

interface HashResponse {
  hash: string;
}

interface BatchHashResponse {
  hashes: string[];
}

interface PlatformResponse {
  platform: string;
  arch: string;
}

interface Window {
  readonly yerba: { version: number };
  /**
   * Safe expose crypto API
   * @example
   * window.nodeCrypto.sha256sum('data')
   */
  readonly nodeCrypto: { sha256sum: (data: string) => Promise<string> };
  /**
   * Expose API functionality to renderer
   * @example
   * window.electronAPI.getHealth()
   */
  readonly electronAPI: {
    getHealth: () => Promise<HealthResponse>;
    getVersion: () => Promise<VersionResponse>;
    generateHash: (data: string) => Promise<HashResponse>;
    generateBatchHash: (dataList: string[]) => Promise<BatchHashResponse>;
    getPlatform: () => Promise<PlatformResponse>;
    writeLog: (
      data: string,
      filename?: string,
    ) => Promise<{ success: boolean; path: string }>;
  };
}
