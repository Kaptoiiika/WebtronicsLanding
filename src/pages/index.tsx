import Head from "next/head"
import {
  Typography,
  TypographyVariants,
} from "@/shared/ui/Typography/Typography"
import { Button } from "@/shared/ui/Button/Button"
import { Arrow } from "@/shared/ui/Arrows/Arrow"
import { Input } from "@/shared/ui/Input/Input"
import { Card } from "@/shared/ui/Card/Card"
import { VStack } from "@/shared/ui/Stack"
import { Avatar } from "@/shared/ui/Avatar/Avatar"
import { ProfileCard } from "@/entities/Profile/ui/ProfileCard/ProfileCard"

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main
        style={{
          backgroundColor: "var(--color-bg)",
          color: "white",
          padding: 16,
        }}
      >
        <VStack gap="32">
          <div>
            <Typography variant={TypographyVariants.H1}>
              TypographyVariants.H1
            </Typography>
            <Typography variant={TypographyVariants.H2}>
              TypographyVariants.H2
            </Typography>
            <Typography variant={TypographyVariants.H3}>
              TypographyVariants.H3
            </Typography>
            <Typography variant={TypographyVariants.H4}>
              TypographyVariants.H4
            </Typography>
            <Typography variant={TypographyVariants.P1}>
              TypographyVariants.P1
            </Typography>
            <Typography variant={TypographyVariants.P2}>
              TypographyVariants.P2
            </Typography>
          </div>
          <div>
            <Button>default</Button>
            <Button>hover</Button>
            <Button>active</Button>
            <Button disabled>disabled</Button>
          </div>
          <div>
            <Arrow />
            <Arrow orientation="right" />
            <Arrow orientation="bottom" />
            <Arrow orientation="top" />
          </div>
          <div>
            <Input defaultValue={"asdasd"} />
            <Input defaultValue={"asdasd"} error="error" />
            <Input defaultValue={"asdasd"} disabled />
          </div>
          <div>
            <Card
              headerTitle="Step1"
              title="Introduction to Front-End"
              content="Lorem ipsum dolor sit amet consectetur. Elit massa erat vitae non semper quis. "
            />
            <Card
              headerTitle="Step2"
              title="Introduction to Front-End"
              content="Lorem ipsum dolor sit amet consectetur. Elit massa erat vitae non semper quis. "
              reverse
            />
          </div>
          <div>
            <ProfileCard
              profile={{
                avatar:
                  "https://sun9-15.userapi.com/impg/hh-8JPnmbdZz9j-OHt_WlEtz__lYcqMxnT3ThQ/OD-iGwjEDB0.jpg?size=2048x2048&quality=95&sign=f1fe2958e4f67c5252116b5071de8333&type=album",
                name: "Robert Fox",
                status: "Front-end engineers work closely with designers",
                bio: "Minim sunt exercitation fugiat occaecat fugiat tempor sunt ipsum officia laboris eiusmod.",
              }}
            />
          </div>
        </VStack>
      </main>
    </>
  )
}
