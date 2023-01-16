import { classNames } from "@/shared/lib/classNames/classNames"
import styles from "./InfoCard.module.css"
import { CardStroke } from "./InfoCardStroke"
import { VStack } from "@/shared/ui/Stack"
import {
  Typography,
  TypographyVariants,
} from "@/shared/ui/Typography/Typography"
import { ShapedBorder } from "../../ShapedBorder/ShapedBorder"

type InfoCardProps = {
  headerTitle: string
  title: string
  content: string
  reverse?: boolean
}

export const InfoCard = (props: InfoCardProps) => {
  const { headerTitle, title, content, reverse } = props

  return (
    <div className={styles.cardWrapper}>
      <CardStroke
        className={classNames(styles.cardStroke, { [styles.reverse]: reverse })}
      />
      <ShapedBorder className={styles.cardBorder}>
        <VStack gap="16" className={styles.card}>
          <Typography variant={TypographyVariants.H4}>{headerTitle}</Typography>
          <Typography variant={TypographyVariants.H3}>{title}</Typography>
          <Typography
            className={styles.content}
            variant={TypographyVariants.P1}
          >
            {content}
          </Typography>
        </VStack>
      </ShapedBorder>
    </div>
  )
}
