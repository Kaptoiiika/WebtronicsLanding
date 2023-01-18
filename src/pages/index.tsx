import Head from "next/head"
import { PageWrapper } from "@/widgets/PageWrapper/ui/PageWrapper/PageWrapper"
import { Navbar } from "@/widgets/Navbar"
import {
  FrontEndDeveloper,
  AboutUs,
  FAQ,
  Gallery,
  ProgrammingTechnogies,
  Review,
  Steps,
} from "@/widgets/Landing"

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      <PageWrapper>
        <div style={{ display: "flex", flexDirection: "column", gap: "200px" }}>
          <FrontEndDeveloper />
          <AboutUs />
          <ProgrammingTechnogies />
          <Steps />
          <FAQ />
          <Review />
          <Gallery />
        </div>
      </PageWrapper>
    </>
  )
}
