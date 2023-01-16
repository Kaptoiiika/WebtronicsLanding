import { classNames } from "@/shared/lib/classNames/classNames"
import styles from "./Avatar.module.css"
import { ShapedBorder } from "@/shared/ui/ShapedBorder/ShapedBorder"

type AvatarProps = {
  src?: string
}

export const Avatar = (props: AvatarProps) => {
  const { src } = props
  return (
    <ShapedBorder circle borderWidth="4">
      <img className={classNames([styles.avatar])} src={src} />
    </ShapedBorder>
  )
}
