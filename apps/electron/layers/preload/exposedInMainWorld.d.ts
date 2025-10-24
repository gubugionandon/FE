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
    getHealth: () => Promise<unknown>;
    getVersion: () => Promise<unknown>;
    generateHash: (data: string) => Promise<unknown>;
    generateBatchHash: (dataList: string[]) => Promise<unknown>;
    getPlatform: () => Promise<unknown>;
  };
}
