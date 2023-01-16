import { HStack } from "@/shared/ui/Stack"
import LogoWebtronics from "@/shared/assets/icons/logoWebtronics.svg"
import Link from "next/link"
import {
  Typography,
  TypographyVariants,
} from "@/shared/ui/Typography/Typography"

type NavbarProps = {
  className?: string
}

export const Navbar = (props: NavbarProps) => {
  return (
    <header>
      <HStack justify="between">
        <LogoWebtronics />
        <HStack gap="48" align="center">
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
        </HStack>
      </HStack>
    </header>
  )
}
