import { HStack } from "@/shared/ui/Stack"
import LogoWebtronics from "@/shared/assets/icons/logoWebtronics.svg"
import Link from "next/link"
import {
  Typography,
  TypographyVariants,
} from "@/shared/ui/Typography/Typography"
import styles from "./Navbar.module.scss"

export const Navbar = () => {
  return (
    <header>
      <HStack className={styles.Navbar} justify="between">
        <LogoWebtronics />
        <nav className={styles.links}>
          <Link href={"#about"}>
            <Typography variant={TypographyVariants.P1}>About</Typography>
          </Link>
          <Link href={"#programs"}>
            <Typography variant={TypographyVariants.P1}>Programs</Typography>
          </Link>
          <Link href={"#steps"}>
            <Typography variant={TypographyVariants.P1}>Steps</Typography>
          </Link>
          <Link href={"#questions"}>
            <Typography variant={TypographyVariants.P1}>Questions</Typography>
          </Link>
          <Link href={"#getintouch"}>
            <Typography variant={TypographyVariants.P1}>
              Get in touch
            </Typography>
          </Link>
        </nav>
      </HStack>
    </header>
  )
}
