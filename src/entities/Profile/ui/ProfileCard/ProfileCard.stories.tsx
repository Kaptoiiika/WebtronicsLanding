import RobertFox from "@/shared/assets/images/Robert Fox.png"
import { ComponentStory, ComponentMeta } from "@storybook/react"
import { ProfileCard } from "./ProfileCard"

export default {
  title: "entities/Profile/Card",
  component: ProfileCard,
} as ComponentMeta<typeof ProfileCard>

const Template: ComponentStory<typeof ProfileCard> = (args) => (
  <ProfileCard
    {...args}
    profile={{
      //@ts-ignore надо подружить Nextwebpack с StoryBook 
      avatar: RobertFox,
      bio: "",
      name: "Robert Fox",
      status: "Front-end engineers work closely with designers",
    }}
  />
)

export const Default = Template.bind({})
Default.args = {}
