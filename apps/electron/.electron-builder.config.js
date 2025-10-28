if (process.env.VITE_APP_VERSION === undefined) {
  const now = new Date();
  process.env.VITE_APP_VERSION = `${now.getUTCFullYear() - 2000}.${
    now.getUTCMonth() + 1
  }.${now.getUTCDate()}-${now.getUTCHours() * 60 + now.getUTCMinutes()}`;
}

/**
 * @type {import('electron-builder').Configuration}
 * @see https://www.electron.build/configuration/configuration
 */
const config = {
  appId: 'com.yerba.electron',
  productName: 'Yerba',
  directories: {
    output: 'dist',
    buildResources: 'buildResources',
  },
  files: [
    'layers/main/dist/**',
    'layers/preload/dist/**',
    '../../apps/web/dist/**',
    'node_modules/**/*',
    'package.json',
  ],
  // 빌드 전에 필요한 파일들이 존재하는지 확인
  beforeBuild: async (context) => {
    const fs = require('fs');
    const path = require('path');

    const requiredFiles = [
      'layers/main/dist/index.cjs',
      'layers/preload/dist/index.cjs',
      '../../apps/web/dist/index.html',
    ];

    for (const file of requiredFiles) {
      if (!fs.existsSync(file)) {
        throw new Error(
          `Required file not found: ${file}. Run 'npm run build' first.`,
        );
      }
    }
  },
  extraMetadata: {
    version: process.env.VITE_APP_VERSION,
    main: 'layers/main/dist/index.cjs',
  },
  mac: {
    category: 'public.app-category.productivity',
    target: [
      {
        target: 'dmg',
        arch: ['x64', 'arm64'],
      },
      {
        target: 'zip',
        arch: ['x64', 'arm64'],
      },
    ],
    icon: 'buildResources/icon.icns',
    artifactName: '${productName}-${version}-${arch}.${ext}',
    hardenedRuntime: true,
    gatekeeperAssess: false,
    entitlements: 'buildResources/entitlements.mac.plist',
    entitlementsInherit: 'buildResources/entitlements.mac.plist',
    extendInfo: {
      NSCameraUsageDescription:
        '거부기린은 사용자의 자세를 실시간으로 분석하기 위해 카메라에 접근합니다.',
      NSMicrophoneUsageDescription:
        '거부기린은 사용자의 자세를 실시간으로 분석하기 위해 마이크에 접근합니다.',
    },
  },
  win: {
    target: [
      {
        target: 'nsis',
        arch: ['x64', 'ia32'],
      },
      {
        target: 'portable',
        arch: ['x64', 'ia32'],
      },
    ],
    icon: 'buildResources/icon.png',
    artifactName: '${productName}-${version}-${arch}.${ext}',
    publisherName: 'Yerba',
  },
  nsis: {
    oneClick: false,
    allowToChangeInstallationDirectory: true,
    createDesktopShortcut: true,
    createStartMenuShortcut: true,
  },
};

module.exports = config;
