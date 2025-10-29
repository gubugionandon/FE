import { BrowserWindow } from 'electron';
import { join } from 'path';

async function createWindow() {
  const browserWindow = new BrowserWindow({
    show: false, // Use 'ready-to-show' event to show window
    webPreferences: {
      webviewTag: false, // The webview tag is not recommended. Consider alternatives like iframe or Electron's BrowserView. https://www.electronjs.org/docs/latest/api/webview-tag#warning
      preload: join(__dirname, '../../preload/dist/index.cjs'),
      nodeIntegration: false,
      contextIsolation: true,
      allowRunningInsecureContent: false,
    },
  });

  /**
   * If you install `show: true` then it can cause issues when trying to close the window.
   * Use `show: false` and listener events `ready-to-show` to fix these issues.
   *
   * @see https://github.com/electron/electron/issues/25012
   */
  browserWindow.on('ready-to-show', () => {
    browserWindow?.show();

    if (import.meta.env.DEV) {
      // browserWindow?.webContents.openDevTools();
    }
  });

  /**
   * URL for main window.
   * Web app dev server for development.
   * Production web app from bugi.co.kr
   */
  const pageUrl = import.meta.env.DEV
    ? 'http://localhost:3000/auth/signup' // Web app dev server
    : 'https://www.bugi.co.kr/'; // Production web app

  // Set Content Security Policy for renderer
  browserWindow.webContents.session.webRequest.onHeadersReceived(
    (details, callback) => {
      callback({
        responseHeaders: {
          ...details.responseHeaders,
          'Content-Security-Policy': [
            "default-src 'self' 'unsafe-inline' data: https://www.bugi.co.kr;",
            "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.bugi.co.kr;",
            "style-src 'self' 'unsafe-inline' https://www.bugi.co.kr;",
            "img-src 'self' data: https://www.bugi.co.kr;",
            "connect-src 'self' https://www.bugi.co.kr;",
            "font-src 'self' data: https://www.bugi.co.kr;",
            "object-src 'none';",
          ],
        },
      });
    },
  );

  await browserWindow.loadURL(pageUrl);

  return browserWindow;
}

/**
 * Restore existing BrowserWindow or Create new BrowserWindow
 */
export async function restoreOrCreateWindow() {
  let window = BrowserWindow.getAllWindows().find((w) => !w.isDestroyed());

  if (window === undefined) {
    window = await createWindow();
  }

  if (window.isMinimized()) {
    window.restore();
  }

  window.focus();
}
