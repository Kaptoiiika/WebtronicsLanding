import { classNames } from "@/shared/lib/classNames/classNames"
import { Accordion } from "@/shared/ui/Accordion"
import { HStack, VStack } from "@/shared/ui/Stack"
import {
  Typography,
  TypographyVariants,
} from "@/shared/ui/Typography/Typography"
import { useCallback, useState } from "react"
import styles from "./FAQ.module.scss"
import QuestionSign from "./QuestionSign.svg"

type FAQModel = {
  title: string
  details: string
}

const FaqList = new Array<FAQModel>(5).fill({
  title: "What is the price?",
  details:
    "Front-end engineers work closely with designers to make websites beautiful, functional, and fast. This Career Path will teach you not only the necessary languages and technologies, but how to think like a front-end engineer, too.",
})

export const FAQ = () => {
  const [indexOpen, setIndexOpen] = useState(0)

  const hundleOpen = useCallback(
    (index: number) => () => setIndexOpen(index),
    [setIndexOpen]
  )

  return (
    <section>
      <VStack align="center">
        <pre className={styles.title}>
          <Typography variant={TypographyVariants.H2}>
            {`Frequently Asked\nQuestions`}
          </Typography>
        </pre>

        <HStack>
          <VStack justify="between">
            <pre>
              <Typography>{`Do you have any kind of questions?\nWe are here to help.`}</Typography>
            </pre>

            <QuestionSign className={styles.QuestionSign} />
          </VStack>
          <VStack gap="24">
            {FaqList.map((faq, index) => (
              <Accordion
                open={indexOpen === index}
                onOpen={hundleOpen(index)}
                key={index}
                title={faq.title}
                details={faq.details}
              />
            ))}
          </VStack>
        </HStack>
      </VStack>
    </section>
  )
}
