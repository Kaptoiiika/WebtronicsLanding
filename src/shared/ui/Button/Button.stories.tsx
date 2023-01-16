import { ComponentStory, ComponentMeta } from "@storybook/react"
import { Button } from "./Button"

export default {
  title: "shared/Button",
  component: Button,
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = (args) => (
  <Button {...args}>don&rsquo;t touch me!</Button>
)

export const Default = Template.bind({})
Default.args = {}

export const Disabled = Template.bind({})
Disabled.args = {
  disabled: true,
}
