import type {Meta, StoryObj} from '@storybook/react';
import {MyNavbar} from './MyNavbar';

const meta: Meta<typeof MyNavbar> = {
  component: MyNavbar,
};

export default meta;

type Story = StoryObj<typeof MyNavbar>;

export const Basic: Story = {args: {}};
