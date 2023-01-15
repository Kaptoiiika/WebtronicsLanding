import { classNames } from "@/shared/lib/classNames/classNames"
import styles from "./Avatar.module.css"
import borderWrapper from "@/shared/styles/BorderWrapper.module.css"

type AvatarProps = {
  src?: string
}

export const Avatar = (props: AvatarProps) => {
  const { src } = props
  return (
    <img
      className={classNames([borderWrapper["border-wrapper"], styles.avatar])}
      src={src}
    />
  )
}
