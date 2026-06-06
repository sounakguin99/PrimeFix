import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/global/Header";
import Footer from "@/components/global/Footer";
import { AuthProvider } from "@/context/AuthContext";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const SITE_URL = "https://www.primefix.in";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#2563EB",
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default:
      "PrimeFix – Doorstep Car Repair, Bike Service & Home Maintenance | Book Online",
    template: "%s | PrimeFix",
  },
  description:
    "PrimeFix is India's trusted doorstep service platform. Book certified mechanics for car repair, bike servicing, electrician, plumbing, painting, carpentry & cleaning. Transparent pricing, genuine parts, service warranty. Available in Nanded, Kolkata & 10+ cities.",
  keywords: [
    "doorstep car repair",
    "bike service at home",
    "book mechanic online",
    "car battery replacement",
    "car alternator check",
    "bike maintenance service",
    "home electrician near me",
    "plumber near me",
    "sofa cleaning service",
    "home painting service",
    "furniture assembly service",
    "PrimeFix",
    "doorstep vehicle service India",
    "on-demand mechanic",
    "car repair at home",
    "mobile mechanic India",
    "home maintenance services",
    "certified mechanic booking",
    "professional plumbing services",
    "electrical repair at home",
    "Nanded car service",
    "Kolkata home repair",
  ],
  authors: [{ name: "PrimeFix", url: SITE_URL }],
  creator: "PrimeFix",
  publisher: "PrimeFix",
  applicationName: "PrimeFix",
  generator: "Next.js",
  referrer: "origin-when-cross-origin",
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: SITE_URL,
    siteName: "PrimeFix",
    title: "PrimeFix – Doorstep Car Repair, Bike Service & Home Maintenance",
    description:
      "Book certified mechanics & professionals for car repair, bike servicing, electrician, plumbing, painting & more. Transparent pricing & service warranty. Available in 10+ Indian cities.",
    images: [
      {
        url: "/primefix_logo.png",
        width: 512,
        height: 512,
        alt: "PrimeFix – Professional Doorstep Engineering Services",
      },
      {
        url: "/car_engine_banner_1780416961037.png",
        width: 1200,
        height: 630,
        alt: "PrimeFix Car Repair Service Banner",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "PrimeFix – Doorstep Car Repair, Bike Service & Home Maintenance",
    description:
      "India's trusted doorstep service platform. Book certified mechanics for car, bike, electrical, plumbing & more. Transparent pricing & genuine parts.",
    images: ["/car_engine_banner_1780416961037.png"],
    creator: "@primefix",
  },
  alternates: {
    canonical: SITE_URL,
  },
  category: "Home Services",
  verification: {
    google: "your-google-verification-code",
  },
};

// JSON-LD Structured Data for SEO
const jsonLdWebsite = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "PrimeFix",
  url: SITE_URL,
  description:
    "India's trusted doorstep service platform for car repair, bike servicing, electrician, plumbing, painting, carpentry & cleaning services.",
  potentialAction: {
    "@type": "SearchAction",
    target: `${SITE_URL}/services?q={search_term_string}`,
    "query-input": "required name=search_term_string",
  },
};

const jsonLdLocalBusiness = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "PrimeFix",
  image: `${SITE_URL}/primefix_logo.png`,
  url: SITE_URL,
  telephone: "+91 98765 43210",
  email: "support@mrtecy.com",
  description:
    "PrimeFix offers professional doorstep car repair, bike service, electrician, plumbing, cleaning, painting and carpentry services across India with transparent pricing and certified experts.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "123 Tech Park Avenue",
    addressLocality: "Kolkata",
    addressRegion: "West Bengal",
    postalCode: "700001",
    addressCountry: "IN",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 22.5726,
    longitude: 88.3639,
  },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    ],
    opens: "08:00",
    closes: "21:00",
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    bestRating: "5",
    ratingCount: "15000",
  },
  priceRange: "₹199 - ₹5000",
  areaServed: [
    { "@type": "City", name: "Nanded" },
    { "@type": "City", name: "Kolkata" },
  ],
  sameAs: [
    "https://www.facebook.com/primefix",
    "https://www.twitter.com/primefix",
    "https://www.instagram.com/primefix",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLdWebsite),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLdLocalBusiness),
          }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-background relative overflow-x-hidden">
        <AuthProvider>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </AuthProvider>
      </body>
    </html>
  );
}
