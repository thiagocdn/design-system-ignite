import type { StoryObj, Meta } from '@storybook/react'
import { Heading, HeadingProps } from '@ignite-ui-thiagocdn/react'

export default {
  title: 'Typography/Heading',
  component: Heading,
  args: {
    children: 'Heading',
  },
} as Meta<HeadingProps>

export const Primary: StoryObj<HeadingProps> = {}

export const CustomTag: StoryObj<HeadingProps> = {
  args: {
    children: 'H1 Heading',
    as: 'h1',
  },
  parameters: {
    docs: {
      description: {
        story:
          'As default heading will always be `h2`, but it can be overwritten with the `as` property.',
      },
    },
  },
}
