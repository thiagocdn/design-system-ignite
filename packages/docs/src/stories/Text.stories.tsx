import type { StoryObj, Meta } from '@storybook/react'
import { Text, TextProps } from '@ignite-ui-thiagocdn/react'

export default {
  title: 'Typography/Text',
  component: Text,
  args: {
    children:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, delectus amet eveniet placeat, ex, deserunt eum iste quidem ratione sint porro dolore consequuntur repudiandae facere a earum necessitatibus quam dolor.',
  },
} as Meta<TextProps>

export const Primary: StoryObj<TextProps> = {}

export const CustomTag: StoryObj<TextProps> = {
  args: {
    children: 'Strong Text',
    as: 'strong',
  },
}
