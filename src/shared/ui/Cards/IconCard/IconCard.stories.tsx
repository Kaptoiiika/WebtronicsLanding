import { ComponentStory, ComponentMeta } from "@storybook/react"
import { IconCard } from "./IconCard"

export default {
  title: "shared/IconCard",
  component: IconCard,
} as ComponentMeta<typeof IconCard>

const Template: ComponentStory<typeof IconCard> = (args) => (
  <IconCard {...args}></IconCard>
)

export const Angular = Template.bind({})
Angular.args = {
  icon: "Angular",
}

export const JavaScript = Template.bind({})
JavaScript.args = {
  icon: "JavaScript",
}

export const Vue = Template.bind({})
Vue.args = {
  icon: "Vue.js",
}

export const React = Template.bind({})
React.args = {
  icon: "React",
}
