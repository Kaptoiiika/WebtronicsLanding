import { ProfileCard, ProfileModel } from "@/entities/Profile"
import { classNames } from "@/shared/lib/classNames/classNames"
import { HStack, VStack } from "@/shared/ui/Stack"
import {
  Typography,
  TypographyVariants,
} from "@/shared/ui/Typography/Typography"
import styles from "./AboutUs.module.scss"
import Trident from "./Trident.svg"
import FrontEndSvg from "./Front-End.svg"
import WadeWarren from "@/shared/assets/images/Wade Warren.png"
import KristinWatson from "@/shared/assets/images/Kristin Watson.png"
import RobertFox from "@/shared/assets/images/Robert Fox.png"

const ProfileList: ProfileModel[] = [
  {
    avatar: WadeWarren.src,
    bio: "",
    name: "Wade Warren",
    status: "Front-end engineers work closely with designers",
  },
  {
    avatar: KristinWatson.src,
    bio: "",
    name: "Kristin Watson",
    status: "Front-end engineers work closely with designers",
  },
  {
    avatar: RobertFox.src,
    bio: "",
    name: "Robert Fox",
    status: "Front-end engineers work closely with designers",
  },
]

export const AboutUs = () => {
  return (
    <section>
      <VStack align="center">
        <Typography variant={TypographyVariants.H2} className={styles.title}>About Us</Typography>

        <HStack align="stretch" gap="16">
          <VStack align="center">
            <Typography variant={TypographyVariants.H3}>Metors</Typography>
            <Trident />
            <HStack gap="24">
              {ProfileList.map((profile, index) => (
                <ProfileCard
                  className={classNames("", {
                    [styles.secondCard]: index === 1,
                  })}
                  key={profile.name}
                  profile={profile}
                />
              ))}
            </HStack>
          </VStack>

          <VStack className={styles.info}>
            <Typography variant={TypographyVariants.P1}>
              Front-end engineers work closely with designers to make websites
              beautiful, functional, and fast. This Career Path will teach you
              not only the necessary languages and technologies, but how to
              think like a front-end engineer, too.
            </Typography>
            <FrontEndSvg className={styles.infoFrontend} />
          </VStack>
        </HStack>
      </VStack>
    </section>
  )
}
