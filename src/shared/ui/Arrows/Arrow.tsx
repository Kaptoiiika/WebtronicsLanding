import { classNames } from "@/shared/lib/classNames/classNames"
import { ButtonHTMLAttributes } from "react"
import { ShapedBorder } from "../ShapedBorder/ShapedBorder"
import styles from "./Arrow.module.scss"

type ArrowOrientation = "left" | "top" | "right" | "bottom"

type ArrowProps = {
  orientation?: ArrowOrientation
} & ButtonHTMLAttributes<HTMLButtonElement>

export const Arrow = (props: ArrowProps) => {
  const { className, orientation = "left", ...buttonProps } = props

  return (
    <ShapedBorder>
      <button
        className={classNames([className, styles.arrow, styles[orientation]])}
        {...buttonProps}
      >
        {/* arrow svg */}
        <svg
          width="40"
          height="40"
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            style={{ transform: "translate3d(14.5px, 10px, 0)" }}
            d="M10 20L0 10L10 0"
            stroke="white"
          />
        </svg>
      </button>
    </ShapedBorder>
  )
}
