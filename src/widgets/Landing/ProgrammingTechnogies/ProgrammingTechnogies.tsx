import { classNames } from "@/shared/lib/classNames/classNames"
import styles from "./ProgrammingTechnogies.module.scss"

type ProgrammingTechnogiesProps = {
  className?: string
}

export const ProgrammingTechnogies = (props: ProgrammingTechnogiesProps) => {
  const { className } = props
  return <section className={classNames([className])}></section>
}
