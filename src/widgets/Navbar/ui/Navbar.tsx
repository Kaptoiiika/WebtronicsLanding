import { HStack } from "@/shared/ui/Stack"
import LogoWebtronics from "@/shared/assets/icons/logoWebtronics.svg"
import Link from "next/link"
import {
  Typography,
  TypographyVariants,
} from "@/shared/ui/Typography/Typography"
import styles from "./Navbar.module.scss"
import { LandingSections } from "@/widgets/Landing"

const links = [
  { path: `/#${LandingSections.ABOUT}`, title: "About" },
  { path: `/#${LandingSections.PROGRAMMINGTECH}`, title: "Programs" },
  { path: `/#${LandingSections.STEPS}`, title: "Steps" },
  { path: `/#${LandingSections.FAQ}`, title: "Questions" },
  { path: `/#${LandingSections.CONTACTUS}`, title: "Get in touch" },
]

export const Navbar = () => {
  return (
    <header>
      <HStack className={styles.Navbar} justify="between">
        <LogoWebtronics />

        <nav className={styles.links}>
          {links.map((link) => (
            <Link key={link.path} href={link.path}>
              <Typography variant={TypographyVariants.P1}>
                {link.title}
              </Typography>
            </Link>
          ))}
        </nav>
      </HStack>
    </header>
  )
}
