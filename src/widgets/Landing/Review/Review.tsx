import { Carousel, CarouselItem } from "@/shared/ui/Carousel/Carousel"
import Man1 from "@/shared/assets/images/man 1.png"
import Man2 from "@/shared/assets/images/man 2.png"
import Woman1 from "@/shared/assets/images/woman 1.png"
import {
  Typography,
  TypographyVariants,
} from "@/shared/ui/Typography/Typography"
import { VStack } from "@/shared/ui/Stack"
import { LandingSections } from "../LandingSections"
import { memo } from "react"

const ReviewItems: CarouselItem[] = [
  {
    image: Man1,
    text: 'Good course, up to this point, still ongoing. The only downside, why I gave 4,5 stars, because the "teacher" sometimes feel like, he is lost, and takes up quite a time, to correct himself, and check back etc.',
    title: "Best courses ever",
  },
  {
    image: Man2,
    text: "I am really enjoying the experience of learning a new skill I used to believe that web design was way too complicated for me to learn but so far in this course I have been keeping up and having fun.",
    title: "Simple and easy",
  },
  {
    image: Woman1,
    text: "The explanation is crazy it really doesn't have a structure to go from point A to point B. He starts to explain something then he change his mind and start with another thing an so on. If you try to learn pro active by doing the same thing with him all along you will get confused and start to loose interest.",
    title: "Amazing teaching",
  },
]

export const Review = memo(() => {
  return (
    <section id={LandingSections.REVIEW}>
      <VStack align="center" gap="48">
        <Typography variant={TypographyVariants.H2}>Review</Typography>
        <Carousel items={ReviewItems} />
      </VStack>
    </section>
  )
})
