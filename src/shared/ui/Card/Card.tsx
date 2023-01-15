import { classNames } from "@/shared/lib/classNames/classNames"
import { VStack } from "../Stack"
import { Typography, TypographyVariants } from "../Typography/Typography"
import styles from "./Card.module.css"
import borderWrapper from "@/shared/styles/BorderWrapper.module.css"
import { CardStroke } from "./CardStroke"

type CardProps = {
  headerTitle: string
  title: string
  content: string
  reverse?: boolean
}

export const Card = (props: CardProps) => {
  const { headerTitle, title, content, reverse } = props

  return (
    <div className={styles.cardWrapper}>
      <CardStroke
        className={classNames(styles.cardStroke, { [styles.reverse]: reverse })}
      />
      <VStack
        gap="16"
        className={classNames([styles.card, borderWrapper["border-wrapper"]])}
      >
        <Typography variant={TypographyVariants.H4}>{headerTitle}</Typography>
        <Typography variant={TypographyVariants.H3}>{title}</Typography>
        <Typography className={styles.content} variant={TypographyVariants.P1}>
          {content}
        </Typography>
      </VStack>
    </div>
  )
}
