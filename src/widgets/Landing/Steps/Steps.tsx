import { classNames } from "@/shared/lib/classNames/classNames"
import { InfoCard } from "@/shared/ui/Cards"
import styles from "./Steps.module.scss"
import ArrowAndCircle from "./ArrowAndCircle.svg"
import {
  Typography,
  TypographyVariants,
} from "@/shared/ui/Typography/Typography"
import { HStack, VStack } from "@/shared/ui/Stack"
import { Fragment, memo } from "react"
import { LandingSections } from "../LandingSections"

const StepsList = [
  ["Step 1", "Step 2"],
  ["Step 3", "Step 4"],
  ["Step 5", "Step 6"],
]

export const Steps = memo(() => {
  return (
    <section id={LandingSections.STEPS}>
      <VStack align="center">
        <Typography variant={TypographyVariants.H2}>Steps</Typography>
        <div className={styles.line}>
          {StepsList.map((step) => (
            <Fragment key={step[0] + step[1]}>
              <HStack className={styles.card} align="center" gap="24">
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
            </Fragment>
          ))}
        </div>
      </VStack>
    </section>
  )
})
