import { Avatar } from "@/shared/ui/Avatar/Avatar"
import { VStack } from "@/shared/ui/Stack"
import {
  Typography,
  TypographyVariants,
} from "@/shared/ui/Typography/Typography"
import { ProfileModel } from "../../model/types/profileSchema"
import styles from "./ProfileCard.module.scss"

type ProfileCardProps = {
  profile: ProfileModel
}

export const ProfileCard = (props: ProfileCardProps) => {
  const { avatar, bio, name, status } = props.profile
  return (
    <VStack gap="16" className={styles.ProfileCard}>
      <Avatar src={avatar} />
      <VStack gap="4">
        <Typography variant={TypographyVariants.H4}>{name}</Typography>
        <Typography variant={TypographyVariants.P2}>{status}</Typography>
      </VStack>
    </VStack>
  )
}
