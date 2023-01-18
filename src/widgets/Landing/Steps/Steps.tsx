import { classNames } from "@/shared/lib/classNames/classNames"
import { InfoCard } from "@/shared/ui/Cards"
import styles from "./Steps.module.scss"
import ArrowAndCircle from "./ArrowAndCircle.svg"
import {
  Typography,
  TypographyVariants,
} from "@/shared/ui/Typography/Typography"
import { HStack, VStack } from "@/shared/ui/Stack"

const StepsList = [
  ["Step 1", "Step 2"],
  ["Step 3", "Step 4"],
  ["Step 5", "Step 6"],
]

export const Steps = () => {
  return (
    <section>
      <VStack align="center">
        <Typography variant={TypographyVariants.H2}>Steps</Typography>
        <div className={styles.line}>
          {StepsList.map((step) => (
            <>
              <HStack
                className={classNames([styles.card, styles.left])}
                key={step[0]}
                align="center"
                gap="24"
              >
                <InfoCard
                  headerTitle={step[0]}
                  title="Introduction to Front-End "
                  content="Lorem ipsum dolor sit amet consectetur. Elit massa erat vitae non semper quis."
                  reverse
                />
                <ArrowAndCircle />
              </HStack>
              <HStack
                className={classNames([styles.card, styles.right])}
                key={step[1]}
                align="center"
                gap="24"
              >
                <InfoCard
                  headerTitle={step[1]}
                  title="Introduction to Front-End "
                  content="Lorem ipsum dolor sit amet consectetur. Elit massa erat vitae non semper quis."
                />
                <ArrowAndCircle className={styles.reverseArrow} />
              </HStack>
            </>
          ))}
        </div>
      </VStack>
    </section>
  )
}
