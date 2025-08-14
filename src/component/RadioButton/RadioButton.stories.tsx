import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react-webpack5';
import RadioButton from './RadioButton';
import { RadioButtonProps } from './RadioButton.types';

const meta: Meta<typeof RadioButton> = {
  title: 'Components/RadioButton',
  component: RadioButton,
  argTypes: {
    disabled: { control: 'boolean' },
    label: { control: 'text' },
    value: { control: 'text' },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

// The args parameter is now explicitly typed using the imported props
// We use Partial because not all props are passed through the args object
const Template = (args: Partial<RadioButtonProps>) => {
  const [selectedValue, setSelectedValue] = useState('option1');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedValue(event.target.value);
  };

  return (
    <div>
      <RadioButton
        {...args}
        value="option1"
        label="Option 1"
        name="myRadioGroup" // Hardcoding name here as it's required for a radio group
        checked={selectedValue === 'option1'}
        onChange={handleChange}
      />
      <RadioButton
        {...args}
        value="option2"
        label="Option 2"
        name="myRadioGroup"
        checked={selectedValue === 'option2'}
        onChange={handleChange}
      />
      <RadioButton
        {...args}
        value="option3"
        label="Option 3"
        name="myRadioGroup"
        checked={selectedValue === 'option3'}
        onChange={handleChange}
      />
    </div>
  );
};

export const Default: Story = {
  render: Template,
  args: {
    // You can leave this empty because the template provides all required props
  },
};

export const Disabled: Story = {
  render: Template,
  args: {
    // This will pass the disabled prop to the template
    disabled: true,
  },
};