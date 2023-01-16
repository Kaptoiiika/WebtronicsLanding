import { DetailsHTMLAttributes, memo, ReactNode } from "react"
import { classNames, classNamesMods } from "@/shared/lib/classNames/classNames"
import styles from "./Flex.module.scss"

export type FlexJustify = "start" | "center" | "end" | "between"
export type FlexAlign = "start" | "center" | "end" | "stretch"
export type FlexDirection = "row" | "column"
export type FlexGap = "4" | "8" | "16" | "32"
export type FlexWrap = "wrap" | "nowrap"

const justifyClasses: Record<FlexJustify, string> = {
  start: styles.justifyStart,
  center: styles.justifyCenter,
  end: styles.justifyEnd,
  between: styles.justifyBetween,
}

const alignClasses: Record<FlexAlign, string> = {
  start: styles.alignStart,
  center: styles.alignCenter,
  end: styles.alignEnd,
  stretch: styles.alignStretch,
}

const directionClasses: Record<FlexDirection, string> = {
  row: styles.directionRow,
  column: styles.directionColumn,
}

const gapClasses: Record<FlexGap, string> = {
  4: styles.gap4,
  8: styles.gap8,
  16: styles.gap16,
  32: styles.gap32,
}

const wrapClasses: Record<FlexWrap, string> = {
  wrap: styles.wrap,
  nowrap: styles.nowrap,
}

type DivProps = DetailsHTMLAttributes<HTMLDivElement>

export interface FlexProps extends DivProps {
  className?: string
  children?: ReactNode
  justify?: FlexJustify
  align?: FlexAlign
  direction?: FlexDirection
  gap?: FlexGap
  wrap?: FlexWrap
  fullWidth?: boolean
}

export const Flex = (props: FlexProps) => {
  const {
    className,
    children,
    justify,
    align,
    direction,
    gap,
    wrap,
    fullWidth,
  } = props

  const classes = [
    className,
    styles.Flex,
    justify && justifyClasses[justify],
    align && alignClasses[align],
    direction && directionClasses[direction],
    gap && gapClasses[gap],
    wrap && wrapClasses[wrap],
  ]

  const mods: classNamesMods = {
    [styles.fullWidth]: fullWidth,
  }

  return <div className={classNames(classes, mods)}>{children}</div>
}
