import React from 'react';
import type {Meta, StoryObj} from '@storybook/react';

import {Equipo} from './Equipo';

const meta: Meta<typeof Equipo> = {
  component: Equipo,
};

export default meta;

type Story = StoryObj<typeof Equipo>;

export const Basic: Story = {args: {}};
