import { classNames } from "@/shared/lib/classNames/classNames"
import { forwardRef, InputHTMLAttributes } from "react"
import { ShapedBorder } from "@/shared/ui/ShapedBorder/ShapedBorder"
import { VStack } from "../Stack"
import styles from "./Input.module.scss"

type InputProps = {
  className?: string
  error?: string
  disabled?: boolean
} & InputHTMLAttributes<HTMLInputElement>

export const Input = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  const { className, disabled, error, ...inputProps } = props

  return (
    <VStack gap="4">
      <ShapedBorder
        className={styles.border}
        color={error ? "red" : "gradient"}
      >
        <input
          {...inputProps}
          ref={ref}
          disabled={disabled}
          className={classNames([className, styles.input], {
            [styles.error]: !!error,
          })}
        />
      </ShapedBorder>
      {error && <label>{error}</label>}
    </VStack>
  )
})
