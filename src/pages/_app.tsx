import type { AppProps } from "next/app"
import { Inter, Roboto } from "@next/font/google"
import localFont from "@next/font/local"
import "@/app/styles/index.scss"

const clashDisplay = localFont({
  src: "../shared/assets/fonts/clash-display-variable.ttf",
})
const inter = Inter({ subsets: ["latin"] })
const roboto = Roboto({
  weight: "700",
  subsets: ["latin"],
})
// "src/shared/assets/fonts/clash-display-variable.ttf"
export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      {/* eslint-disable-next-line react/no-unknown-property */}
      <style jsx global>{`
        :root {
          --font-clash-display: ${clashDisplay.style.fontFamily};
          --font-inter: ${inter.style.fontFamily};
          --font-roboto: ${roboto.style.fontFamily};
        }
      `}</style>
      <Component {...pageProps} />
    </>
  )
}
