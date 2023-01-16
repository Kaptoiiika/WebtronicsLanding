import { ComponentStory, ComponentMeta } from "@storybook/react"
import { Accordion } from "./Accordion"

export default {
  title: "shared/Accordion",
  component: Accordion,
} as ComponentMeta<typeof Accordion>

const Template: ComponentStory<typeof Accordion> = (args) => (
  <Accordion
    {...args}
    title="What is the price?"
    details="Front-end engineers work closely with designers to make websites beautiful, functional, and fast. This Career Path will teach you not only the necessary languages and technologies, but how to think like a front-end engineer, too."
  ></Accordion>
)

export const Default = Template.bind({})
Default.args = {}

export const Open = Template.bind({})
Open.args = {
  open: true,
}
