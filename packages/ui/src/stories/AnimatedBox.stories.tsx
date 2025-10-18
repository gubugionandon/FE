import type { Meta, StoryObj } from '@storybook/react';
import { AnimatedBox } from '../components/AnimatedBox/AnimatedBox';

const meta: Meta<typeof AnimatedBox> = {
  title: 'UI/AnimatedBox',
  component: AnimatedBox,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
