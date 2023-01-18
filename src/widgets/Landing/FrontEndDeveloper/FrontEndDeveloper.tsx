import { Button } from "@/shared/ui/Button/Button"
import { HStack, VStack } from "@/shared/ui/Stack"
import {
  Typography,
  TypographyVariants,
} from "@/shared/ui/Typography/Typography"
import styles from "./FrontEndDeveloper.module.scss"
import programmerWorking from "@/shared/assets/images/programmer-working.png"
import Image from "next/image"
import { memo } from "react"

export const FrontEndDeveloper = memo(() => {
  return (
    <VStack className={styles.container}>
      <HStack align="end">
        <Typography className={styles.FrontEnd} variant={TypographyVariants.H1}>
          Front-end
        </Typography>
        <Typography className={styles.slogan} variant={TypographyVariants.P1}>
          Make UIs and websites beautiful, functional, and fast. Cover all the
          topics that expensive bootcamps teach (and more).
        </Typography>
      </HStack>

      <HStack className={styles.developer} gap="24" align="center">
        <Button>Start my career change</Button>
        <Typography variant={TypographyVariants.H1}>Developer</Typography>
      </HStack>

      <HStack fullWidth justify="end">
        <Typography className={styles.courses} variant={TypographyVariants.H3}>
          Courses
        </Typography>
      </HStack>

      <Image
        alt="programmerWorking"
        className={styles.background}
        src={programmerWorking}
      />
    </VStack>
  )
})
