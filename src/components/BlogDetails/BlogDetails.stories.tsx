import type {Meta, StoryObj} from '@storybook/react';

import {BlogDetails} from './BlogDetails';

const meta: Meta<typeof BlogDetails> = {
  component: BlogDetails,
};

export default meta;

type Story = StoryObj<typeof BlogDetails>;

export const Basic: Story = {args: {}};
