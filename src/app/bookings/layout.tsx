import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "My Bookings – PrimeFix",
  description:
    "View your upcoming and past bookings for car repair, bike service, and home maintenance with PrimeFix.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function BookingsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
