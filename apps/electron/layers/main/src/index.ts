import { ElectronAPI } from 'api';
import { app, ipcMain } from 'electron';
import './security-restrictions';
import { restoreOrCreateWindow } from '/@/mainWindow';

// Create API instance
const electronAPI = new ElectronAPI();

/**
 * Setup API handlers for IPC communication
 */
function setupAPIHandlers() {
  // Remove existing handlers first
  ipcMain.removeAllListeners('api:health');
  ipcMain.removeAllListeners('api:version');
  ipcMain.removeAllListeners('api:hash');
  ipcMain.removeAllListeners('api:hash:batch');
  ipcMain.removeAllListeners('api:platform');

  // Health check handler
  ipcMain.handle('api:health', async () => {
    try {
      return await electronAPI.getHealth();
    } catch (error) {
      console.error('Health check failed:', error);
      throw error;
    }
  });

  // Version info handler
  ipcMain.handle('api:version', async () => {
    try {
      return await electronAPI.getVersionInfo();
    } catch (error) {
      console.error('Version check failed:', error);
      throw error;
    }
  });

  // Hash generation handler
  ipcMain.handle('api:hash', async () => {
    try {
      return await electronAPI.getHashedVersion();
    } catch (error) {
      console.error('Hash generation failed:', error);
      throw error;
    }
  });

  // Batch hash generation handler
  ipcMain.handle('api:hash:batch', async (_event, dataList: string[]) => {
    try {
      // For batch processing, we'll process each item individually
      const results = await Promise.all(
        dataList.map(async () => {
          return await electronAPI.getHashedVersion();
        }),
      );
      return results;
    } catch (error) {
      console.error('Batch hash generation failed:', error);
      throw error;
    }
  });

  // Platform info handler
  ipcMain.handle('api:platform', () => {
    return {
      platform: process.platform,
      arch: process.arch,
      version: process.version,
      electron: process.versions.electron,
    };
  });
}

/**
 * Prevent multiple instances
 */
const isSingleInstance = app.requestSingleInstanceLock();
if (!isSingleInstance) {
  app.quit();
  process.exit(0);
}
app.on('second-instance', restoreOrCreateWindow);

/**
 * Disable Hardware Acceleration for more power-save
 */
app.disableHardwareAcceleration();

/**
 * Shout down background process if all windows was closed
 */
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

/**
 * @see https://www.electronjs.org/docs/v14-x-y/api/app#event-activate-macos Event: 'activate'
 */
app.on('activate', restoreOrCreateWindow);

/**
 * Create app window when background process will be ready
 */
app
  .whenReady()
  .then(restoreOrCreateWindow)
  .then(() => {
    /**
     * Install React & Redux devtools in development mode only
     */
    if (import.meta.env.DEV) {
      try {
        // 동적 import로 devtools 설치 (프로덕션에서 오류 방지)
        import('electron-devtools-installer').then(({ default: installExtension, REACT_DEVELOPER_TOOLS, REDUX_DEVTOOLS }) => {
          installExtension([REACT_DEVELOPER_TOOLS, REDUX_DEVTOOLS])
            .then((name) => console.log(`Added Extensions:  ${name}`))
            .catch((err) => console.log('An error occurred installing extensions: ', err));
        }).catch((error) => {
          console.log('DevTools installation skipped:', error);
        });
      } catch (error) {
        console.log('DevTools installation skipped:', error);
      }
    } else {
      console.log('DevTools installation skipped in production mode');
    }

    /**
     * Setup API handlers
     */
    setupAPIHandlers();
  })
  .catch((e) => console.error('Failed during app startup:', e));

/**
 * Check new app version in production mode only
 */
if (import.meta.env.PROD) {
  app
    .whenReady()
    .then(() => import('electron-updater'))
    .then(({ autoUpdater }) => autoUpdater.checkForUpdatesAndNotify())
    .catch((e) => console.error('Failed check updates:', e));
}
