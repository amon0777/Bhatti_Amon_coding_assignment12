import type { Meta, StoryObj } from '@storybook/react-webpack5';
import Card from './Card';

const meta: Meta<typeof Card> = {
  title: 'Components/Card',
  component: Card,
  argTypes: {
    imageUrl: { control: 'text' },
    imageAlt: { control: 'text' },
    title: { control: 'text' },
    description: { control: 'text' },
    disabled: { control: 'boolean' },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    imageUrl: 'https://via.placeholder.com/300x200',
    imageAlt: 'A beautiful landscape',
    title: 'Example Card Title',
    description: 'This is a description for the example card, providing some brief details about the content.',
    disabled: false,
  },
};

export const Disabled: Story = {
  args: {
    imageUrl: 'https://via.placeholder.com/300x200',
    imageAlt: 'A disabled card image',
    title: 'Disabled Card',
    description: 'This card is currently disabled and cannot be interacted with.',
    disabled: true,
  },
};