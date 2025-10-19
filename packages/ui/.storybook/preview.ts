import { withThemeByClassName } from '@storybook/addon-themes';
import type { Preview } from '@storybook/react';
import '../src/styles/globals.css';

// 시스템 다크 기본값을 따르고 싶다면:
const prefersDark =
  typeof window !== 'undefined' &&
  window.matchMedia?.('(prefers-color-scheme: dark)').matches;

const preview: Preview = {
  decorators: [
    withThemeByClassName({
      // html 요소에 해당 클래스를 토글해줌
      themes: {
        light: 'light', // light일 때 html.classList.add('light')
        dark: 'dark',   // dark일 때 html.classList.add('dark')
      },
      defaultTheme: prefersDark ? 'dark' : 'light', // 원하면 'light'로 고정
      parentSelector: 'html', // ★ html에 붙이기 (중요)
    }),
  ],
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    a11y: { test: 'todo' },
  },
};

export default preview;
