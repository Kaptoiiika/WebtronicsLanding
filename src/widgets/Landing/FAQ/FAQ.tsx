import { HStack, VStack } from "@/shared/ui/Stack"
import {
  Typography,
  TypographyVariants,
} from "@/shared/ui/Typography/Typography"
import { memo } from "react"
import { LandingSections } from "../LandingSections"
import styles from "./FAQ.module.scss"
import { FaqList } from "./FaqList/FaqList"
import QuestionSign from "./QuestionSign.svg"

export const FAQ = memo(() => {
  return (
    <section id={LandingSections.FAQ}>
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

          <FaqList />
        </HStack>
      </VStack>
    </section>
  )
})
