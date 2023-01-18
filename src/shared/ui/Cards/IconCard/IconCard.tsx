import styles from "./IconCard.module.scss"
import angular from "@/shared/assets/icons/angular.png"
import react from "@/shared/assets/icons/react.png"
import vue from "@/shared/assets/icons/vue.png"
import javascript from "@/shared/assets/icons/javascript.png"
import { VStack } from "@/shared/ui/Stack"
import {
  Typography,
  TypographyVariants,
} from "@/shared/ui/Typography/Typography"
import Image, { StaticImageData } from "next/image"
import IconCardBorder from "./IconCardBorder.svg"

export type IconType = "Angular" | "React" | "Vue.js" | "JavaScript"

const Icons: Record<IconType, StaticImageData> = {
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

  const CurrentIcon = Icons[icon]

  return (
    <div className={styles.wrapper}>
      <IconCardBorder />
      <VStack className={styles.IconCard} gap="16" align="center">
        <Image src={CurrentIcon} alt={icon} className={styles.icon} />
        <Typography variant={TypographyVariants.H4}>{icon}</Typography>
      </VStack>
    </div>
  )
}
