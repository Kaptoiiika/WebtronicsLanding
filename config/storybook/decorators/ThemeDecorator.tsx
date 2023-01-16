import { Story } from "@storybook/react"
import "../../../src/app/styles/index.scss"

export const ThemeDecorator = (StoryComponent: Story) => {
  return (
    <div style={{ display: "flex" }}>
      <StoryComponent />
    </div>
  )
}
