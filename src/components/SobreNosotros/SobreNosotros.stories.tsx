import React from 'react';
import type {Meta, StoryObj} from '@storybook/react';

import {SobreNosotros} from './SobreNosotros';

const meta: Meta<typeof SobreNosotros> = {
  component: SobreNosotros,
};

export default meta;

type Story = StoryObj<typeof SobreNosotros>;

export const Basic: Story = {args: {}};
