import { classNames } from "@/shared/lib/classNames/classNames"
import { type } from "os"
import React, { Component, Fragment, PropsWithChildren } from "react"
import styles from "./ShapedBorder.module.scss"

export type bordersWidth = "1" | "4"
export type borderColor = "red" | "gradient"

const borderWidthClasses: Record<bordersWidth, string> = {
  1: styles.borderWidth1,
  4: styles.borderWidth4,
}

const borderColorClasses: Record<borderColor, string> = {
  red: styles.borderColorRed,
  gradient: styles.borderColorGradient,
}

type ShapedBorderProps = {
  className?: string
  circle?: boolean
  borderWidth?: bordersWidth
  color?: borderColor
} & PropsWithChildren

export const ShapedBorder = (props: ShapedBorderProps) => {
  const {
    className,
    children,
    circle,
    borderWidth = "1",
    color = "gradient",
  } = props

  const classes = [
    className,
    styles.ShapedBorder,
    borderWidthClasses[borderWidth],
    borderColorClasses[color],
  ]

  return (
    <div
      className={classNames(classes, {
        [styles.circle]: circle,
      })}
    >
      {children}
    </div>
  )
}
