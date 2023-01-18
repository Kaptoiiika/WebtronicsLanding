import { classNames } from "@/shared/lib/classNames/classNames"
import styles from "./Gallery.module.scss"

type GalleryProps = {
  className?: string
}

export const Gallery = (props: GalleryProps) => {
  const { className } = props
  return <section className={classNames([className])}></section>
}
