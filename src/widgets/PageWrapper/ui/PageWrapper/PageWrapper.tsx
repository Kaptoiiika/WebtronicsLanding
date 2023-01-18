import { PropsWithChildren } from "react"
import styles from "./PageWrapper.module.scss"

type PageWrapperProps = {} & PropsWithChildren

export const PageWrapper = (props: PageWrapperProps) => {
  const { children } = props

  return (
    <main>
      <div className={styles.PageWrapper}>{children}</div>
    </main>
  )
}
