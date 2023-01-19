import { classNames } from "@/shared/lib/classNames/classNames"
import styles from "./Avatar.module.scss"
import { ShapedBorder } from "@/shared/ui/ShapedBorder/ShapedBorder"

type AvatarProps = {
  src?: string
}

const emptyImg =
  "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"

export const Avatar = (props: AvatarProps) => {
  const { src = emptyImg } = props

  return (
    <ShapedBorder circle borderWidth="4">
      <img className={classNames([styles.avatar])} alt="" src={src} />
    </ShapedBorder>
  )
}
