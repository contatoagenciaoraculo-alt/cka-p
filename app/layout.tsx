import type React from "react"
import type { Metadata } from "next"
import { Poppins, Nunito } from "next/font/google"
import { Suspense } from "react"
import "./globals.css"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
})

const nunito = Nunito({
  subsets: ["latin"],
  weight: ["400", "600"],
  variable: "--font-nunito",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Crochê Kids Academy — Modelos infantis fáceis de vender",
  description:
    "Aprenda a criar modelos infantis com a Crochê Kids Academy e fature até R$ 3.000 por mês. Mesmo que você tenha pouco tempo e só saiba os pontos básicos.",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <script src="https://fast.wistia.com/player.js" async></script>
        <script src="https://fast.wistia.com/embed/wuuxq1vwg0.js" async type="module"></script>
        <style
          dangerouslySetInnerHTML={{
            __html: `
            wistia-player[media-id='wuuxq1vwg0']:not(:defined) { 
              background: center / contain no-repeat url('https://fast.wistia.com/embed/medias/wuuxq1vwg0/swatch'); 
              display: block; 
              filter: blur(5px); 
              padding-top:177.78%; 
            }
          `,
          }}
        />
        <script
          src="https://cdn.utmify.com.br/scripts/utms/latest.js"
          data-utmify-prevent-xcod-sck
          data-utmify-prevent-subids
          async
          defer
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
            window.pixelId = "68ba7a6094e8f240591215c3";
            var a = document.createElement("script");
            a.setAttribute("async", "");
            a.setAttribute("defer", "");
            a.setAttribute("src", "https://cdn.utmify.com.br/scripts/pixel/pixel.js");
            document.head.appendChild(a);
          `,
          }}
        />
      </head>
      <body className={`${nunito.variable} ${poppins.variable} font-sans antialiased`}>
        <Suspense fallback={null}>{children}</Suspense>
      </body>
    </html>
  )
}
