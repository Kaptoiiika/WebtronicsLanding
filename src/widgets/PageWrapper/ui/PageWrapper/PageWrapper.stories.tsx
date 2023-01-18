import { ComponentStory, ComponentMeta } from "@storybook/react"
import { PageWrapper } from "./PageWrapper"

export default {
  title: "widgets/PageWrapper",
  component: PageWrapper,
} as ComponentMeta<typeof PageWrapper>

const Template: ComponentStory<typeof PageWrapper> = (args) => (
  <PageWrapper {...args}>
    <div>SomeContent</div>
  </PageWrapper>
)

export const Default = Template.bind({})
Default.args = {}
