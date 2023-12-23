import type { StorybookConfig } from '@storybook/nextjs'

const config: StorybookConfig = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  staticDirs: ['../public'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-onboarding',
    '@storybook/addon-interactions',
    '@storybook/addon-mdx-gfm'
  ],
  framework: {
    name: '@storybook/nextjs',
    options: {
      builder: {
        useSWC: true // Enables SWC support
      }
    }
  },
  docs: {
    autodocs: 'tag'
  }
}
export default config
