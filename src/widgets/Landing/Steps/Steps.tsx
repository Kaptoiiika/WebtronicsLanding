import { classNames } from "@/shared/lib/classNames/classNames"
import styles from "./Steps.module.scss"

type StepsProps = {
  className?: string
}

export const Steps = (props: StepsProps) => {
  const { className } = props
  return <section className={classNames([className])}></section>
}
