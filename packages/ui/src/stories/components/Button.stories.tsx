import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '../../components/Button/Button';

const meta: Meta<typeof Button> = {
  title: 'UI/Button',
  component: Button,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['primary'],
      description: 'The visual style of the button',
    },
    size: {
      control: { type: 'select' },
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
      description: 'How large should the button be?',
    },
    children: {
      control: { type: 'text' },
      description: 'Button contents',
    },
    onClick: { action: 'clicked', description: 'Optional click handler' },
  },
  args: {
    variant: 'primary',
    size: 'md',
    children: 'Button',
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {};

export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
      <Button style={{ width: 93 }} variant="primary" size="xs">
        XS
      </Button>
      <Button style={{ width: 109 }} variant="primary" size="sm">
        SM
      </Button>
      <Button style={{ width: 121 }} variant="primary" size="md">
        MD
      </Button>
      <Button style={{ width: 135 }} variant="primary" size="lg">
        LG
      </Button>
      <Button style={{ width: 143 }} variant="primary" size="xl">
        XL
      </Button>
    </div>
  ),
};
