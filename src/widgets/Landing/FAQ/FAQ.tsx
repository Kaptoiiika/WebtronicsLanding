import { classNames } from '@/shared/lib/classNames/classNames'
import styles from './FAQ.module.scss'

type FAQProps = {
  className?: string
}

export const FAQ = (props: FAQProps) => {
  const { className } = props
  return <section className={classNames([className])}></section>
}