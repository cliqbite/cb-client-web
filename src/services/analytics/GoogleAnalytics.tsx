import Script from 'next/script'
import * as gtag from './gtag'

const GoogleAnalytics = () => {
  return (
    <>
      <Script
        async
        strategy='afterInteractive'
        src={`https://www.googletagmanager.com/gtag/js?id=${gtag.GA_TRACKING_ID}`}
      />
      <Script id='google-analytics' strategy='afterInteractive'>
        {`
                      window.dataLayer = window.dataLayer || [];
                      function gtag(){dataLayer.push(arguments);}
                      gtag('js', new Date());
                      gtag('config', '${gtag.GA_TRACKING_ID}', {
                      page_path: window.location.pathname,
                      });
                    `}
      </Script>
    </>
  )
}

export default GoogleAnalytics
