// Button.stories.tsx
import type { Meta, StoryObj } from "@storybook/react-webpack5";
import Button from "./Button";

const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
  argTypes: {
    backgroundColor: { control: "color" },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: "Click Me",
    backgroundColor: "#007BFF",
  },
};

export const Disabled: Story = {
  args: {
    label: "Disabled",
    backgroundColor: "#007BFF",
    disabled: true,
  },
};