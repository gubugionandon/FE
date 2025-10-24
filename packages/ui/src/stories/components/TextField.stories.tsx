import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import TextField from '../../components/InputField/TextField';

const meta: Meta<typeof TextField> = {
  title: 'UI/TextField',
  component: TextField,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: { type: 'select' },
      options: ['text', 'password', 'email'],
      description: '입력 타입',
    },
    placeholder: {
      control: 'text',
      description: '플레이스홀더 텍스트',
    },
    className: {
      control: 'text',
      description: '추가 클래스',
    },
  },
  args: {
    type: 'text',
    placeholder: '입력하세요',
    className: '',
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

function TextFieldPlayground(args: React.ComponentProps<typeof TextField>) {
  const [value, setValue] = useState('');
  return (
    <div style={{ width: 360 }}>
      <TextField
        {...args}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </div>
  );
}

export const Playground: Story = {
  render: (args) => <TextFieldPlayground {...args} />,
};

export const Password: Story = {
  args: { type: 'password', placeholder: '비밀번호' },
  render: Playground.render,
};

export const WithFocusStyles: Story = {
  args: { className: 'focus:border-yellow-500 outline-none' },
  render: Playground.render,
};
