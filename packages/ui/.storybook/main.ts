import type { StorybookConfig } from '@storybook/react-vite';

import { createRequire } from 'module';
import { dirname, join } from 'path';
/**
 * This function is used to resolve the absolute path of a package.
 * It is needed in projects that use Yarn PnP or are set up within a monorepo.
 */
const require = createRequire(import.meta.url);

function getAbsolutePath(value: string): any {
  return dirname(require.resolve(join(value, 'package.json')));
}
const config: StorybookConfig = {
  stories: [
    '../src/**/*.mdx',
    '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)',
    // Explicitly include nested stories under src/stories/components
    '../src/stories/components/**/*.mdx',
    '../src/stories/components/**/*.stories.@(js|jsx|mjs|ts|tsx)',
  ],
  addons: [
    getAbsolutePath('@chromatic-com/storybook'),
    getAbsolutePath('@storybook/addon-docs'),
    getAbsolutePath('@storybook/addon-onboarding'),
    getAbsolutePath('@storybook/addon-a11y'),
    getAbsolutePath('@storybook/addon-vitest'),
    getAbsolutePath('@storybook/addon-themes'),
  ],
  framework: {
    name: getAbsolutePath('@storybook/react-vite'),
    options: {},
  },
  async viteFinal(config) {
    config.plugins = config.plugins ?? [];
    // Correctly access the default export from the CJS-style require
    const tailwindcss = require('@tailwindcss/vite');
    config.plugins.push(
      tailwindcss.default({
        // Pass content paths to the tailwindcss plugin
        content: [
          '../src/components/**/*.{ts,tsx}',
          '../src/stories/**/*.{ts,tsx}',
        ],
      }),
    );
    return config;
  },
};
export default config;
