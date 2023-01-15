import { classNames } from "@/shared/lib/classNames/classNames"
import { ButtonHTMLAttributes } from "react"
import styles from "./Button.module.css"

type ButtonProps = {
  className?: string
  disabled?: boolean
} & ButtonHTMLAttributes<HTMLButtonElement>

export const Button = (props: ButtonProps) => {
  const { className, children, disabled, ...buttonProps } = props
  return (
    <button
      {...buttonProps}
      className={classNames([className, styles.button])}
      disabled={disabled}
    >
      {children}
    </button>
  )
}
