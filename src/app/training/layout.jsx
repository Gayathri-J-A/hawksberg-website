import { createPageMetadata } from "@/lib/siteMetadata";

export const metadata = createPageMetadata("/training", {
  title: "Online Training Portal",
  description:
    "Access Hawksberg International training videos and course learning materials.",
});

export default function TrainingLayout({ children }) {
  return children;
}