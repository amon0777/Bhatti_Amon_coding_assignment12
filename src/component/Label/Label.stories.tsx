import type { Meta, StoryObj } from '@storybook/react-webpack5';
import Label from './Label';

const meta: Meta<typeof Label> = {
  title: 'Components/Label',
  component: Label,
  argTypes: {
    text: { control: 'text' },
    disabled: { control: 'boolean' },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    text: 'This is a default label',
    htmlFor: 'input-id',
    disabled: false,
  },
};

export const Disabled: Story = {
  args: {
    text: 'This is a disabled label',
    htmlFor: 'input-id',
    disabled: true,
  },
};