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
    getHealth: () => Promise<{
      status: string;
      timestamp: string;
      version: string;
      uptime: number;
    }>;
    getVersion: () => Promise<{
      version: string;
      build: string;
      environment: string;
    }>;
    generateHash: (data: string) => Promise<{ hash: string }>;
    generateBatchHash: (dataList: string[]) => Promise<{ hash: string }[]>;
    getPlatform: () => Promise<{
      platform: string;
      arch: string;
      version: string;
      electron: string;
    }>;
  };
}
