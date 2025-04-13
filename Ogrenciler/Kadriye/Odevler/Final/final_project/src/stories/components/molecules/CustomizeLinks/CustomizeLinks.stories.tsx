import type { Meta, StoryObj } from '@storybook/react';

import CustomizeLinks from './CustomizeLinks';

const meta = {
  component: CustomizeLinks,
} satisfies Meta<typeof CustomizeLinks>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {}
};