import { useParams, Link } from "react-router-dom";
import Layout from "@/components/Layout";
import InfoPage from "@/components/InfoPage";
import { infoPages } from "@/data/site";

export default function InfoPageDetail() {
  const { slug } = useParams();
  const page = infoPages.find((p) => p.slug === slug);
  if (!page) {
    return (
      <Layout>
        <div className="container-x py-32 text-center">
          <h1 className="font-display text-4xl">Page not found</h1>
          <Link to="/" className="btn-primary mt-6 inline-block">
            Go home
          </Link>
        </div>
      </Layout>
    );
  }
  return (
    <Layout>
      <InfoPage page={page} />
    </Layout>
  );
}
