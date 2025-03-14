import React from 'react';
import type {Meta, StoryObj} from '@storybook/react';

import {Navbar} from './MyNavbar';

const meta: Meta<typeof Navbar> = {
  component: Navbar,
};

export default meta;

type Story = StoryObj<typeof Navbar>;

export const Basic: Story = {args: {}};
