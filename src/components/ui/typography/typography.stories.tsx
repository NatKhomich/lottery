import type { Meta, StoryObj } from '@storybook/react'

import { Typography } from '@/components/ui/typography/typography'

const meta = {
  argTypes: {
    variant: {
      control: { type: 'radio' },
      options: ['title', 'subtitle1', 'subtitle2'],
    },
  },
  component: Typography,
  tags: ['autodocs'],
  title: 'Components/Typography',
} satisfies Meta<typeof Typography>

export default meta
type Story = StoryObj<typeof meta>

export const Title: Story = {
  args: {
    children: 'Title',
    variant: 'title',
  },
}

export const Subtitle1: Story = {
  args: {
    children: 'Subtitle',
    variant: 'subtitle1',
  },
}

export const Subtitle2: Story = {
  args: {
    children: 'Subtitle',
    variant: 'subtitle2',
  },
}
