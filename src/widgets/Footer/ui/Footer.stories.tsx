import { ComponentStory, ComponentMeta } from "@storybook/react"
import { Footer } from "./Footer"

export default {
  title: "widgets/Footer",
  component: Footer,
} as ComponentMeta<typeof Footer>

const Template: ComponentStory<typeof Footer> = () => <Footer />

export const Default = Template.bind({})
Default.args = {}
