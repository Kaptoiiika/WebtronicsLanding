import { classNames } from "@/shared/lib/classNames/classNames"
import Image, { StaticImageData } from "next/image"
import { useCallback, useState } from "react"
import { Arrow } from "../Arrows/Arrow"
import { HStack, VStack } from "../Stack"
import { Typography, TypographyVariants } from "../Typography/Typography"
import styles from "./Carousel.module.scss"

export type CarouselItem = {
  text: string
  title: string
  image: StaticImageData
}

type CarouselProps = {
  items: CarouselItem[]
}

export const Carousel = (props: CarouselProps) => {
  const [currentIndex, setIndex] = useState(0)
  const { items } = props
  const itemsLength = items.length

  const hundleNextItem = useCallback(() => {
    setIndex((prev) => {
      if (itemsLength <= prev + 1) return 0
      return prev + 1
    })
  }, [itemsLength])

  const hundlePrevItem = useCallback(() => {
    setIndex((prev) => {
      if (0 > prev - 1) return itemsLength - 1
      return prev - 1
    })
  }, [itemsLength])

  return (
    <HStack gap="24">
      <VStack gap="16" className={styles.left}>
        <Typography variant={TypographyVariants.H4}>
          {items[currentIndex]?.title}
        </Typography>
        <Typography variant={TypographyVariants.P1}>
          {items[currentIndex]?.text}
        </Typography>
      </VStack>

      <VStack gap="16" align="stretch">
        <HStack align="center" justify="between">
          <HStack gap="8">
            <Typography variant={TypographyVariants.H4}>
              {currentIndex + 1}/
            </Typography>
            <Typography variant={TypographyVariants.P1}>
              {itemsLength}
            </Typography>
          </HStack>

          <HStack gap="24">
            <Arrow aria-label="previous" onClick={hundlePrevItem} />
            <Arrow aria-label="next" onClick={hundleNextItem} orientation="right" />
          </HStack>
        </HStack>

        <div className={styles.imageList}>
          {items.map((item, index) => (
            <div
              className={classNames(styles.imageContainer, {
                [styles.currentItem]: index === currentIndex,
              })}
              key={item.image.src}
            >
              <Image
                className={styles.image}
                src={item.image}
                alt={item.text}
              />
            </div>
          ))}
        </div>
      </VStack>
    </HStack>
  )
}
