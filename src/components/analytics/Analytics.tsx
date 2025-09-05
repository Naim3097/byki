'use client'

import { useEffect } from 'react'

// Google Analytics Component
export function GoogleAnalytics({ ga_id }: { ga_id: string }) {
  useEffect(() => {
    // Load Google Analytics
    const script1 = document.createElement('script')
    script1.async = true
    script1.src = `https://www.googletagmanager.com/gtag/js?id=${ga_id}`
    document.head.appendChild(script1)

    const script2 = document.createElement('script')
    script2.innerHTML = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', '${ga_id}', {
        page_title: document.title,
        page_location: window.location.href,
      });
    `
    document.head.appendChild(script2)

    return () => {
      document.head.removeChild(script1)
      document.head.removeChild(script2)
    }
  }, [ga_id])

  return null
}

// Core Web Vitals tracking
export function WebVitals() {
  useEffect(() => {
    import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
      getCLS(console.log)
      getFID(console.log)
      getFCP(console.log)
      getLCP(console.log)
      getTTFB(console.log)
    })
  }, [])

  return null
}
