import React from 'react';
import type {Meta, StoryObj} from '@storybook/react';

import {Contacto} from './Contacto';

const meta: Meta<typeof Contacto> = {
  component: Contacto,
};

export default meta;

type Story = StoryObj<typeof Contacto>;

export const Basic: Story = {args: {}};
