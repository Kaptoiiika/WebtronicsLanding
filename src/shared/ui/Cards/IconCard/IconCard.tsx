import { classNames } from "@/shared/lib/classNames/classNames"
import styles from "./IconCard.module.css"
import angular from "@/shared/assets/icons/angular.png"
import react from "@/shared/assets/icons/react.png"
import vue from "@/shared/assets/icons/vue.png"
import javascript from "@/shared/assets/icons/javascript.png"
import { VStack } from "@/shared/ui/Stack"
import {
  Typography,
  TypographyVariants,
} from "@/shared/ui/Typography/Typography"
import { StaticImageData } from "next/image"
import { ShapedBorder } from "@/shared/ui/ShapedBorder/ShapedBorder"

export type IconType = "Angular" | "React" | "Vue.js" | "JavaScript"

const IconSrc: Record<IconType, StaticImageData> = {
  Angular: angular,
  React: react,
  JavaScript: javascript,
  "Vue.js": vue,
}

type IconCardProps = {
  icon: IconType
}

export const IconCard = (props: IconCardProps) => {
  const { icon } = props

  const { src } = IconSrc[icon]

  return (
    <ShapedBorder>
      <VStack className={styles.IconCard} gap="16" align="center">
        <img src={src} alt={icon} className={styles.icon} />
        <Typography variant={TypographyVariants.H4}>{icon}</Typography>
      </VStack>
    </ShapedBorder>
  )
}
