import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Avatar } from './Avatar'

export default {
  title: 'shared/Avatar',
  component: Avatar,
} as ComponentMeta<typeof Avatar>

const Template: ComponentStory<typeof Avatar> = (args) => (
  <Avatar {...args}></Avatar>
)

export const Default = Template.bind({})
Default.args = {}