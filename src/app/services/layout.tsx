import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "All Services – Car Repair, Bike Service, Electrician, Plumber & More",
  description:
    "Browse PrimeFix's complete catalogue of professional doorstep services. Car repair, bike maintenance, electrician, plumbing, cleaning, painting, carpentry & more. Filter by category, sort by price. Book online with transparent pricing.",
  keywords: [
    "all doorstep services",
    "car repair services",
    "bike maintenance services",
    "electrician services",
    "plumbing services",
    "home cleaning services",
    "painting services",
    "carpentry services",
    "PrimeFix services catalogue",
    "book service online India",
  ],
  alternates: {
    canonical: "https://www.primefix.in/services",
  },
  openGraph: {
    title: "All Services – PrimeFix Professional Doorstep Services",
    description:
      "Browse our complete catalogue of professional doorstep services. Car, bike, electrical, plumbing, cleaning, painting & carpentry.",
    url: "https://www.primefix.in/services",
    images: ["/services_hero_1780500369943.png"],
  },
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
