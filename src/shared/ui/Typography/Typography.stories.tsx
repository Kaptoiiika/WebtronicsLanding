import { ComponentStory, ComponentMeta } from "@storybook/react"
import { Typography, TypographyVariants } from "./Typography"

export default {
  title: "shared/Typography",
  component: Typography,
} as ComponentMeta<typeof Typography>

const Template: ComponentStory<typeof Typography> = (args) => (
  <Typography {...args}>
    Minim sunt exercitation fugiat occaecat fugiat tempor sunt ipsum officia
    laboris eiusmod.
  </Typography>
)

export const Default = Template.bind({})
Default.args = {}

export const H1 = Template.bind({})
H1.args = { variant: TypographyVariants.H1 }

export const H2 = Template.bind({})
H2.args = { variant: TypographyVariants.H2 }

export const H3 = Template.bind({})
H3.args = { variant: TypographyVariants.H3 }

export const H4 = Template.bind({})
H4.args = { variant: TypographyVariants.H4 }

export const P1 = Template.bind({})
P1.args = { variant: TypographyVariants.P1 }

export const P2 = Template.bind({})
P2.args = { variant: TypographyVariants.P2 }
