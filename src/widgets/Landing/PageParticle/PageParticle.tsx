import styles from "./PageParticle.module.scss"
import bg from "@/shared/assets/images/backgroundParticles.png"
import Image from "next/image"

export const PageParticle = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <Image src={bg} alt="" />
      </div>
    </div>
  )
}
