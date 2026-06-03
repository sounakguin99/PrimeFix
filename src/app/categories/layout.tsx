import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "All Categories – Browse Car, Bike, Home & Engineering Services",
  description:
    "Explore all PrimeFix service categories: Car Repair, Bike Maintenance, Electrician, Plumbing, Cleaning, Painting & Carpentry. Find the perfect doorstep service for your needs. Filter by automotive or home services.",
  keywords: [
    "service categories",
    "car repair category",
    "bike service category",
    "home electrician",
    "plumbing services",
    "cleaning services",
    "painting services",
    "carpentry services",
    "PrimeFix categories",
  ],
  alternates: {
    canonical: "https://www.primefix.in/categories",
  },
  openGraph: {
    title: "All Categories – PrimeFix Service Catalogue",
    description:
      "Browse all professional doorstep service categories. Automotive, home maintenance, and specialty services.",
    url: "https://www.primefix.in/categories",
    images: ["/categories_hero_1780500355721.png"],
  },
};

export default function CategoriesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
