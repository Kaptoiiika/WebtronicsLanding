import { HStack, VStack } from "@/shared/ui/Stack"
import styles from "./Footer.module.scss"
import LogoWebtronics from "@/shared/assets/icons/logoWebtronics.svg"
import {
  Typography,
  TypographyVariants,
} from "@/shared/ui/Typography/Typography"
import Link from "next/link"
import { LandingSections } from "@/widgets/Landing"
import FacebookIcon from "@/shared/assets/icons/facebook.svg"
import TwitterIcon from "@/shared/assets/icons/twitter.svg"
import GitlabIcon from "@/shared/assets/icons/gitlab.svg"
import LinkedinIcon from "@/shared/assets/icons/linkedin.svg"

const Companylinks = [
  { path: `/#${LandingSections.ABOUT}`, title: "About us" },
  { path: `/#${LandingSections.STEPS}`, title: "Steps" },
  { path: `/#${LandingSections.FAQ}`, title: "FAQs" },
  { path: `/#${LandingSections.REVIEW}`, title: "Review" },
  { path: `/#${LandingSections.GALLERY}`, title: "Gallery" },
]

const SocialLinks = [
  { path: `/#Facebook`, title: <FacebookIcon /> },
  { path: `/#Twitter`, title: <TwitterIcon /> },
  { path: `/#Gitlab`, title: <GitlabIcon /> },
  { path: `/#Linkedin`, title: <LinkedinIcon /> },
]

export const Footer = () => {
  return (
    <footer className={styles.Footer}>
      <div className={styles.footerGrid}>
        <VStack gap="24">
          <LogoWebtronics />
          <Typography>
            Wisconsin Ave, Suite 700
            <br />
            Chevy Chase, Maryland 20815
          </Typography>
        </VStack>

        <VStack gap="24">
          <span className={styles.titleGroup}>Company</span>

          <ul className={styles.companyLinks}>
            {Companylinks.map((link) => (
              <li key={link.path}>
                <Link className={styles.link} href={link.path}>
                  <Typography variant={TypographyVariants.P2}>
                    {link.title}
                  </Typography>
                </Link>
              </li>
            ))}
          </ul>
        </VStack>

        <VStack gap="24">
          <span className={styles.titleGroup}>Social media</span>

          <HStack gap="24" align="center">
            {SocialLinks.map((link) => (
              <Link key={link.path} href={link.path}>
                {link.title}
              </Link>
            ))}
          </HStack>
        </VStack>
      </div>
    </footer>
  )
}
