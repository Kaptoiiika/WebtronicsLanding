import { classNames } from "@/shared/lib/classNames/classNames"
import { HStack, VStack } from "@/shared/ui/Stack"
import styles from "./Footer.module.scss"
import LogoWebtronics from "@/shared/assets/icons/logoWebtronics.svg"
import {
  Typography,
  TypographyVariants,
} from "@/shared/ui/Typography/Typography"
import Link from "next/link"

export const Footer = () => {
  return (
    <footer className={styles.Footer}>
      <div className={styles.footerGrid}>
        <VStack gap="16">
          <LogoWebtronics />
          <Typography>
            Wisconsin Ave, Suite 700
            <br />
            Chevy Chase, Maryland 20815
          </Typography>
        </VStack>

        <div className={styles.linksGrid}>
          <Typography
            className={styles.linksGroup}
            bold
            variant={TypographyVariants.P1}
          >
            Company
          </Typography>
          <Link href={"#about"}>
            <Typography variant={TypographyVariants.P2}>About</Typography>
          </Link>
          <Link href={"#steps"}>
            <Typography variant={TypographyVariants.P2}>Steps</Typography>
          </Link>
          <Link href={"#programs"}>
            <Typography variant={TypographyVariants.P2}>Programs</Typography>
          </Link>
          <Link href={"#questions"}>
            <Typography variant={TypographyVariants.P2}>FAQs</Typography>
          </Link>
          <Link href={"#Review"}>
            <Typography variant={TypographyVariants.P2}>Review</Typography>
          </Link>
          <Link href={"#Gallery"}>
            <Typography variant={TypographyVariants.P2}>Gallery</Typography>
          </Link>
        </div>

        <VStack gap="16">
          <Typography bold variant={TypographyVariants.P1}>
            Social media
          </Typography>
        </VStack>
      </div>
    </footer>
  )
}
