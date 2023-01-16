import { classNames } from "@/shared/lib/classNames/classNames"
import { PropsWithChildren } from "react"
import styles from "./AccordionBorder.module.scss"

type AccordionBorderProps = {
  open?: boolean
}

export const AccordionBorder = (props: AccordionBorderProps) => {
  const { open } = props
  return (
    <svg
      width="703"
      height={open ? "166" : "62"}
      viewBox={open ? "0 0 703 166" : "0 0 703 62"}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={styles.AccordionBorder}
    >
      {open ? (
        <>
          <path
            d="M0 158V31.6623L31.6623 0H695C699.418 0 703 3.58172 703 8V129.418L666.418 166H7.99998C3.58171 166 0 162.418 0 158Z"
            fill="white"
            fill-opacity="0.05"
          />
          <path
            d="M0.5 158V31.8694L31.8694 0.5H695C699.142 0.5 702.5 3.85786 702.5 8V129.211L666.211 165.5H7.99998C3.85785 165.5 0.5 162.142 0.5 158Z"
            stroke="url(#paint0_linear_655_56)"
            stroke-opacity="0.7"
          />
        </>
      ) : (
        <>
          <path
            d="M0 54V27.6623L26.6623 0H695C699.418 0 703 3.58172 703 8V35.418L673.418 62H7.99998C3.58171 62 0 58.4183 0 54Z"
            fill="white"
            fill-opacity="0.05"
          />
          <path
            d="M0.5 54V27.864L26.8748 0.5H695C699.142 0.5 702.5 3.85786 702.5 8V35.1951L673.226 61.5H7.99998C3.85785 61.5 0.5 58.1421 0.5 54Z"
            stroke="url(#paint0_linear_655_56)"
            stroke-opacity="0.7"
          />
        </>
      )}

      <defs>
        <linearGradient
          id="paint0_linear_655_56"
          x1="77.33"
          y1="15.6259"
          x2="105.409"
          y2="240.589"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#15BFFD" />
          <stop offset="1" stop-color="#9C37FD" />
        </linearGradient>
      </defs>
    </svg>
  )
}
