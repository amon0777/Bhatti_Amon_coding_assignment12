import type { Meta, StoryObj } from '@storybook/react-webpack5';
import HeroImage from './HeroImage';

const meta: Meta<typeof HeroImage> = {
  title: 'Components/HeroImage',
  component: HeroImage,
  argTypes: {
    src: { control: 'text' },
    alt: { control: 'text' },
    text: { control: 'text' },
    disabled: { control: 'boolean' },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    src: 'https://via.placeholder.com/1200x400',
    alt: 'Hero banner image',
    text: 'Welcome to our site',
    disabled: false,
  },
};

export const Disabled: Story = {
  args: {
    src: 'https://via.placeholder.com/1200x400',
    alt: 'Hero banner image',
    text: 'This is a disabled hero image',
    disabled: true,
  },
};

export const ImageOnly: Story = {
  args: {
    src: 'https://via.placeholder.com/1200x400',
    alt: 'Hero banner image without text',
    text: '',
    disabled: false,
  },
};