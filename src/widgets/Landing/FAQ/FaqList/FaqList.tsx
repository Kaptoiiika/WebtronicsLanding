import { Accordion } from "@/shared/ui/Accordion"
import { VStack } from "@/shared/ui/Stack"
import { useState, useCallback } from "react"

type FAQModel = {
  title: string
  details: string
}

const faq = new Array<FAQModel>(5).fill({
  title: "What is the price?",
  details:
    "Front-end engineers work closely with designers to make websites beautiful, functional, and fast. This Career Path will teach you not only the necessary languages and technologies, but how to think like a front-end engineer, too.",
})

export const FaqList = () => {
  const [indexOpen, setIndexOpen] = useState(0)

  const hundleOpen = useCallback(
    (index: number) => () => setIndexOpen(index),
    [setIndexOpen]
  )

  return (
    <VStack gap="24">
      {faq.map((faq, index) => (
        <Accordion
          open={indexOpen === index}
          onOpen={hundleOpen(index)}
          key={index}
          title={faq.title}
          details={faq.details}
        />
      ))}
    </VStack>
  )
}
