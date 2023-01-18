import { classNames } from "@/shared/lib/classNames/classNames"
import styles from "./Review.module.scss"

type ReviewProps = {
  className?: string
}

export const Review = (props: ReviewProps) => {
  const { className } = props
  return <section className={classNames([className])}></section>
}
