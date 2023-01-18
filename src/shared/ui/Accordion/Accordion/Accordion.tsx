import { classNames } from "@/shared/lib/classNames/classNames"
import { memo, MouseEvent, useCallback } from "react"
import { HStack, VStack } from "@/shared/ui/Stack"
import Minus from "@/shared/assets/icons/minus.svg"
import Plus from "@/shared/assets/icons/plus.svg"
import {
  Typography,
  TypographyVariants,
} from "@/shared/ui/Typography/Typography"
import styles from "./Accordion.module.scss"
import { AccordionBorder } from "../AccordionBorder/AccordionBorder"

type AccordionProps = {
  title: string
  details: string
  open?: boolean
  onOpen?: (e: MouseEvent<HTMLDivElement | HTMLButtonElement>) => void
}

export const Accordion = memo((props: AccordionProps) => {
  const { details, title, open, onOpen } = props

  const collapseHundle = useCallback(
    (e: MouseEvent<HTMLDivElement | HTMLButtonElement>) => {
      e.stopPropagation()
      onOpen?.(e)
    },
    [onOpen]
  )

  return (
    <div className={styles.wrapper}>
      <AccordionBorder open={open} />
      <VStack
        className={classNames(styles.Accordion, {
          [styles.open]: open,
        })}
        gap="16"
      >
        <HStack
          onClick={collapseHundle}
          fullWidth
          className={styles.title}
          justify="between"
        >
          <Typography variant={TypographyVariants.H4}>{title}</Typography>
          <button className={styles.toggleButton} onClick={collapseHundle}>
            {open ? <Minus /> : <Plus />}
          </button>
        </HStack>

        <Typography className={styles.details} variant={TypographyVariants.P1}>
          {details}
        </Typography>
      </VStack>
    </div>
  )
})
