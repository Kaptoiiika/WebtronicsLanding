import { classNames } from "@/shared/lib/classNames/classNames"
import borderWrapper from "@/shared/styles/BorderWrapper.module.css"
import { InputHTMLAttributes } from "react"
import { VStack } from "../Stack"
import styles from "./Input.module.css"

type InputProps = {
  className?: string
  error?: string
  disabled?: boolean
} & InputHTMLAttributes<HTMLInputElement>

export const Input = (props: InputProps) => {
  const { className, disabled, error, ...inputProps } = props
  return (
    <VStack>
      <input
        {...inputProps}
        disabled={disabled}
        className={classNames(
          [className, styles.input, borderWrapper["border-wrapper"]],
          {
            [styles.error]: !!error,
          }
        )}
      />
      {error && <label>{error}</label>}
    </VStack>
  )
}
