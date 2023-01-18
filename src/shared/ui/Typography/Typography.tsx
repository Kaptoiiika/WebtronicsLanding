import { memo, PropsWithChildren } from "react"
import { classNames } from "@/shared/lib/classNames/classNames"
import styles from "./Typography.module.scss"

export const enum TypographyTypes {
  TEXT = "text",
  ERROR = "error",
}

export const enum TypographyAlign {
  LEFT = "align-left",
  RIGHT = "align-right",
  CENTER = "align-center",
}

export const enum TypographyVariants {
  H1 = "variantH1",
  H2 = "variantH2",
  H3 = "variantH3",
  H4 = "variantH4",
  P1 = "variantP1",
  P2 = "variantP2",
}

type HeaderTagType = "h1" | "h2" | "h3" | "h4" | "p"

const mapVariantToHeaderTag: Record<TypographyVariants, HeaderTagType> = {
  [TypographyVariants.H1]: "h1",
  [TypographyVariants.H2]: "h2",
  [TypographyVariants.H3]: "h3",
  [TypographyVariants.H4]: "h4",
  [TypographyVariants.P1]: "p",
  [TypographyVariants.P2]: "p",
}

type TypographyProps = {
  className?: string
  oneLine?: boolean
  bold?: boolean
  variant?: TypographyVariants
} & PropsWithChildren

export const Typography = memo((props: TypographyProps) => {
  const {
    className,
    children,
    variant = TypographyVariants.P1,
    oneLine,
    bold,
  } = props

  const HeaderTag = mapVariantToHeaderTag[variant]

  return (
    <HeaderTag
      className={classNames([className, styles[variant]], {
        [styles.oneLine]: oneLine,
        [styles.bold]: bold,
      })}
      title={oneLine ? String(children) : undefined}
    >
      {children}
    </HeaderTag>
  )
})
