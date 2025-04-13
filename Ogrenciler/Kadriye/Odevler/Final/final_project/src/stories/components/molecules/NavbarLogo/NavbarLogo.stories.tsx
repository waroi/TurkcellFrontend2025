import type { Meta, StoryObj } from '@storybook/react';

import NavbarLogo from './NavbarLogo';

const meta = {
  component: NavbarLogo,
  tags: ['autodocs'],
} satisfies Meta<typeof NavbarLogo>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    src: "/assets/images/logo.svg",
    text: "Rocket"
  }
};