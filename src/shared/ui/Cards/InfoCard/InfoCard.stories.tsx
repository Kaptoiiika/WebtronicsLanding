import { ComponentStory, ComponentMeta } from "@storybook/react"
import { InfoCard } from "./InfoCard"

export default {
  title: "shared/InfoCard",
  component: InfoCard,
} as ComponentMeta<typeof InfoCard>

const Template: ComponentStory<typeof InfoCard> = (args) => (
  <InfoCard
    {...args}
    content="Lorem ipsum dolor sit amet consectetur. Elit massa erat vitae non semper quis. "
    headerTitle="Step 1"
    title="Introduction to Front-End "
  ></InfoCard>
)

export const Default = Template.bind({})
Default.args = {}

export const Reversed = Template.bind({})
Reversed.args = {
  reverse: true,
}
