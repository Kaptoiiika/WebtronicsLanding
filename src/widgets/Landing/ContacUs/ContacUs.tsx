import { FeedbackForm } from "@/features/Feedback"
import { classNames } from "@/shared/lib/classNames/classNames"
import { ShapedBorder } from "@/shared/ui/ShapedBorder/ShapedBorder"
import { VStack } from "@/shared/ui/Stack"
import {
  Typography,
  TypographyVariants,
} from "@/shared/ui/Typography/Typography"
import styles from "./ContacUs.module.scss"

export const ContacUs = () => {
  return (
    <section className={styles.ContacUs}>
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
}
