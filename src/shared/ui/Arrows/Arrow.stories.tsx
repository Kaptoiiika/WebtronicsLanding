import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Arrow } from './Arrow'

export default {
  title: 'shared/Arrow',
  component: Arrow,
} as ComponentMeta<typeof Arrow>

const Template: ComponentStory<typeof Arrow> = (args) => (
  <Arrow {...args}></Arrow>
)

export const Default = Template.bind({})
Default.args = {}