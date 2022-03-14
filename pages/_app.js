import Head from "next/head"
import { useRouter } from "next/router"
import Script from "next/script"
import { useEffect } from "react"
import { AppContextProvider } from "utils/AppContext"

import * as gtag from "../lib/gtag"

import "../styles/tailwind/tailwind.css"
import "../styles/theme/global.scss"

function MyApp({ Component, pageProps }) {
  const router = useRouter()

  useEffect(() => {
    const handleRouteChange = (url) => {
      gtag.pageview(url)
    }
    router.events.on("routeChangeComplete", handleRouteChange)
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange)
    }
  }, [router.events])

  return (
    <>
      <Head>
        <title>Politicamente Informados</title>

        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />

        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta
          name="application-name"
          content={process.env.NEXT_PUBLIC_SITE_NAME}
        />
        <meta
          name="apple-mobile-web-app-title"
          content={process.env.NEXT_PUBLIC_SITE_NAME}
        />
        <meta name="theme-color" content={process.env.NEXT_PUBLIC_SITE_COLOR} />
        <meta
          name="msapplication-navbutton-color"
          content={process.env.NEXT_PUBLIC_SITE_COLOR}
        />
        <meta
          name="apple-mobile-web-app-status-bar-style"
          content="black-translucent"
        />

        <meta name="msapplication-TileColor" content="#FFFFFF" />
        <meta
          name="msapplication-TileImage"
          content={"/favicon/mstile-144x144.png"}
        />
        <meta
          name="msapplication-square70x70logo"
          content={"/favicon/mstile-70x70.png"}
        />
        <meta
          name="msapplication-square150x150logo"
          content={"/favicon/mstile-150x150.png"}
        />
        <meta
          name="msapplication-wide310x150logo"
          content={"/favicon/mstile-310x150.png"}
        />
        <meta
          name="msapplication-square310x310logo"
          content={"/favicon/mstile-310x310.png"}
        />

        <link href="//www.google-analytics.com" rel="dns-prefetch" />

        <link
          rel="apple-touch-icon-precomposed"
          sizes="57x57"
          href={"/favicon/apple-touch-icon-57x57.png"}
        />
        <link
          rel="apple-touch-icon-precomposed"
          sizes="114x114"
          href={"/favicon/apple-touch-icon-114x114.png"}
        />
        <link
          rel="apple-touch-icon-precomposed"
          sizes="72x72"
          href={"/favicon/apple-touch-icon-72x72.png"}
        />
        <link
          rel="apple-touch-icon-precomposed"
          sizes="144x144"
          href={"/favicon/apple-touch-icon-144x144.png"}
        />
        <link
          rel="apple-touch-icon-precomposed"
          sizes="60x60"
          href={"/favicon/apple-touch-icon-60x60.png"}
        />
        <link
          rel="apple-touch-icon-precomposed"
          sizes="120x120"
          href={"/favicon/apple-touch-icon-120x120.png"}
        />
        <link
          rel="apple-touch-icon-precomposed"
          sizes="76x76"
          href={"/favicon/apple-touch-icon-76x76.png"}
        />
        <link
          rel="apple-touch-icon-precomposed"
          sizes="152x152"
          href={"/favicon/apple-touch-icon-152x152.png"}
        />
        <link
          rel="icon"
          type="image/png"
          href={"/favicon/favicon-196x196.png"}
          sizes="196x196"
        />
        <link
          rel="icon"
          type="image/png"
          href={"/favicon/favicon-96x96.png"}
          sizes="96x96"
        />
        <link
          rel="icon"
          type="image/png"
          href={"/favicon/favicon-32x32.png"}
          sizes="32x32"
        />
        <link
          rel="icon"
          type="image/png"
          href={"/favicon/favicon-16x16.png"}
          sizes="16x16"
        />
        <link
          rel="icon"
          type="image/png"
          href={"/favicon/favicon-128.png"}
          sizes="128x128"
        />
        <link rel="icon" href={"/favicon/favicon.ico"} />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin={true}
        />
        <link
          href="https://fonts.googleapis.com/css2?family=League+Spartan:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </Head>
      {/* Global Site Tag (gtag.js) - Google Analytics */}
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${gtag.GA_TRACKING_ID}`}
      />
      <Script
        id="gtag-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${gtag.GA_TRACKING_ID}', {
              page_path: window.location.pathname,
            });
          `
        }}
      />
      <AppContextProvider>
        <Component {...pageProps} />
      </AppContextProvider>
    </>
  )
}

export default MyApp
