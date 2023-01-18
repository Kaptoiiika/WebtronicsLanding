import { IconCard } from "@/shared/ui/Cards"
import { HStack, VStack } from "@/shared/ui/Stack"
import {
  Typography,
  TypographyVariants,
} from "@/shared/ui/Typography/Typography"
import { memo } from "react"
import { LandingSections } from "../LandingSections"
import styles from "./ProgrammingTechnogies.module.scss"

export const ProgrammingTechnogies = memo(() => {
  return (
    <section id={LandingSections.PROGRAMMINGTECH}>
      <pre className={styles.title}>
        <VStack align="center" gap="16">
          <Typography variant={TypographyVariants.H2}>
            {`Programming\ntechnologies`}
          </Typography>
          <Typography variant={TypographyVariants.P1}>
            {`By the end, you’ll have the portfolio and interview skills\nyou need to start your new career.`}
          </Typography>
        </VStack>
      </pre>

      <HStack className={styles.cards} justify="center" gap="24">
        <IconCard icon="Angular" />
        <IconCard icon="React" />
        <IconCard icon="Vue.js" />
        <IconCard icon="JavaScript" />
      </HStack>
    </section>
  )
})
