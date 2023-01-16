import { Inter } from "@next/font/google"
import { PropsWithChildren } from "react"
import styles from "./PageWrapper.module.scss"

const inter = Inter({ subsets: ["latin"] })

type PageWrapperProps = {} & PropsWithChildren

export const PageWrapper = (props: PageWrapperProps) => {
  const { children } = props

  return (
    <main className={inter.className}>
      <div className={styles.PageWrapper}>{children}</div>
    </main>
  )
}
