import type { Meta, StoryObj } from '@storybook/react';

import NavLinks from './NavLinks';

const meta = {
  component: NavLinks,
  tags: ['autodocs'],
} satisfies Meta<typeof NavLinks>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};