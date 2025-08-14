import type { Meta, StoryObj } from '@storybook/react-webpack5';
import Text from './Text';

const meta: Meta<typeof Text> = {
  title: 'Components/Text',
  component: Text,
  argTypes: {
    text: { control: 'text' },
    disabled: { control: 'boolean' },
    size: {
      control: { type: 'select', options: ['small', 'medium', 'large'] },
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    text: 'This is a default text component.',
    size: 'medium',
    disabled: false,
  },
};

export const Disabled: Story = {
  args: {
    text: 'This is disabled text.',
    size: 'medium',
    disabled: true,
  },
};

export const LargeText: Story = {
  args: {
    text: 'This is a large text.',
    size: 'large',
    disabled: false,
  },
};

export const SmallText: Story = {
  args: {
    text: 'This is a small text.',
    size: 'small',
    disabled: false,
  },
};