import HomePage from "@/components/HomePage";

export const metadata = {
  title: {
    absolute: "ISO Consultant & Certification Training - Hawksberg International",
  },
  description:
    "Hawksberg International provides ISO consultancy, certification support and training services to help businesses meet international standards and requirements.",
  keywords: ["ISO Consultant", "ISO Certification Training", "ISO Certification"],
  robots: { index: true, follow: true },
};

export default function Home() {
  return (
    <>
      <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
      <meta name="language" content="English" />
      <HomePage />
    </>
  );
}