import { ComponentStory, ComponentMeta } from "@storybook/react"
import { IconCard } from "./IconCard"

export default {
  title: "shared/IconCard",
  component: IconCard,
} as ComponentMeta<typeof IconCard>

const Template: ComponentStory<typeof IconCard> = (args) => (
  <IconCard {...args}></IconCard>
)

export const FrameworkAngular = Template.bind({})
FrameworkAngular.args = {
  icon: "Angular",
}

export const FrameworkJavaScript = Template.bind({})
FrameworkJavaScript.args = {
  icon: "JavaScript",
}

export const FrameworkVue = Template.bind({})
FrameworkVue.args = {
  icon: "Vue.js",
}

export const FrameworkReact = Template.bind({})
FrameworkReact.args = {
  icon: "React",
}
