import { FeedbackForm } from "@/features/Feedback"
import { ShapedBorder } from "@/shared/ui/ShapedBorder/ShapedBorder"
import { VStack } from "@/shared/ui/Stack"
import {
  Typography,
  TypographyVariants,
} from "@/shared/ui/Typography/Typography"
import { memo } from "react"
import { LandingSections } from "../LandingSections"
import styles from "./ContacUs.module.scss"

export const ContacUs = memo(() => {
  return (
    <section id={LandingSections.CONTACTUS} className={styles.ContacUs}>
      <ShapedBorder className={styles.border}>
        <VStack className={styles.form} align="stretch" gap="24">
          <VStack align="center" gap="16">
            <Typography variant={TypographyVariants.H2}>Contact us</Typography>
            <Typography variant={TypographyVariants.P1}>
              Do you have any kind of help please contact with us.
            </Typography>
          </VStack>
          <FeedbackForm />
        </VStack>
      </ShapedBorder>
    </section>
  )
})
