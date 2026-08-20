export const metadata = { title: { absolute: "ISO 27001 Consulting Services, ISMS Implementation & Certification" }, description: "Implement ISO 27001 with expert consulting, ISMS documentation, risk assessment, gap analysis, internal audits and certification readiness support.", keywords: "ISO 27001 certification, ISO Expert", robots: "index, follow", other: { language: "English", title: "ISO 27001 Consulting Services, ISMS Implementation & Certification" }, alternates: { canonical: "/services/iso-27001" } };
export default function Layout({ children }) {
  return (
    <>
      {/* React 19 hoists title/meta/link tags rendered anywhere in the tree into <head> */}
      <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
      {children}
    </>
  );
}