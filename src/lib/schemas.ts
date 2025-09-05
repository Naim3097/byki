export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "BYKI Malaysia",
  "description": "Malaysia's most advanced automotive diagnostic platform",
  "url": "https://byki.my",
  "logo": "https://byki.my/logo.png",
  "sameAs": [
    "https://facebook.com/bykimalaysia",
    "https://twitter.com/bykimalaysia",
    "https://instagram.com/bykimalaysia"
  ],
  "address": {
    "@type": "PostalAddress",
    "addressCountry": "MY",
    "addressRegion": "Kuala Lumpur"
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+60-3-1234-5678",
    "contactType": "customer service",
    "email": "support@byki.my"
  }
};

export const softwareApplicationSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "BYKI App",
  "applicationCategory": "UtilitiesApplication",
  "operatingSystem": "iOS, Android",
  "description": "Professional automotive diagnostic app for Malaysian drivers",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "MYR"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.8",
    "ratingCount": "50000"
  }
};

export const productSchema = {
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "SXAN OBD2 Diagnostic Device",
  "description": "Professional OBD2 diagnostic device with 99.7% accuracy and universal compatibility",
  "brand": {
    "@type": "Brand",
    "name": "BYKI"
  },
  "offers": {
    "@type": "Offer",
    "price": "59",
    "priceCurrency": "MYR",
    "availability": "https://schema.org/InStock"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "ratingCount": "1200"
  }
};
