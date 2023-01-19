import { ComponentStory, ComponentMeta } from "@storybook/react"
import { FeedbackForm } from "./FeedbackForm"

export default {
  title: "features/FeedbackForm",
  component: FeedbackForm,
} as ComponentMeta<typeof FeedbackForm>

const Template: ComponentStory<typeof FeedbackForm> = (args) => (
  <FeedbackForm {...args}></FeedbackForm>
)

export const Default = Template.bind({})
Default.args = {}
