import { ComponentStory, ComponentMeta } from "@storybook/react"
import { ShapedBorder } from "./ShapedBorder"

export default {
  title: "shared/ShapedBorder",
  component: ShapedBorder,
} as ComponentMeta<typeof ShapedBorder>

const Template: ComponentStory<typeof ShapedBorder> = (args) => (
  <ShapedBorder {...args}>
    <div style={{ width: 50, height: 50 }}></div>
  </ShapedBorder>
)

export const Default = Template.bind({})
Default.args = {}
