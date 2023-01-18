import { classNames } from "@/shared/lib/classNames/classNames"
import { VStack } from "@/shared/ui/Stack"
import {
  Typography,
  TypographyVariants,
} from "@/shared/ui/Typography/Typography"
import styles from "./Gallery.module.scss"
import developer1 from "@/shared/assets/images/developer 1.png"
import developer2 from "@/shared/assets/images/developer 2.png"
import developer3 from "@/shared/assets/images/developer 3.png"
import developer4 from "@/shared/assets/images/developer 4.png"
import Image from "next/image"

export const Gallery = () => {
  return (
    <section>
      <VStack align="center" gap="48">
        <Typography variant={TypographyVariants.H2}>Gallery</Typography>
        <div className={styles.galleryGrid}>
          <Typography
            className={styles.textTop}
            variant={TypographyVariants.P1}
          >
            By the end of this course, you will be able to develop and publish
            your very own Google Chrome extension! In this course we will focus
            on coding exercises and projects.
          </Typography>
          <Image
            className={classNames([styles.images, styles.bigimage])}
            src={developer1}
            alt="developer1"
          />
          <Image className={styles.images} src={developer2} alt="developer2" />
          <Image className={styles.images} src={developer3} alt="developer3" />
          <Image
            className={classNames([styles.images, styles.mediumimage])}
            src={developer4}
            alt="developer4"
          />
          <Typography
            className={styles.textBottom}
            variant={TypographyVariants.P1}
          >
            If you would like to learn web development and get a job in the tech
            industry, you are going to LOVE this course! Learn HTML, CSS,
            JavaScript, Bootstrap and more with over 15 hours of HD video
            tutorials! This course was designed to be extremely beginner
            friendly. We will begin with the very basics of HTML and build a
            simple web page.
          </Typography>
        </div>
      </VStack>
    </section>
  )
}
