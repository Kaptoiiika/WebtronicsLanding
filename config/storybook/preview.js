import { addDecorator } from "@storybook/react"
import { ThemeDecorator } from "./decorators/ThemeDecorator"

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(color)$/i,
      date: /Date$/,
    },
  },
}

addDecorator(ThemeDecorator)
