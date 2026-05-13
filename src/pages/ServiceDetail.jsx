import { useParams, Link } from "react-router-dom";
import Layout from "@/components/Layout";
import ServicePage from "@/components/ServicePage";
import { isoServices } from "@/data/site";

export default function ServiceDetail() {
  const { slug } = useParams();
  const service = isoServices.find((s) => s.slug === slug);
  if (!service) {
    return (
      <Layout>
        <div className="container-x py-32 text-center">
          <h1 className="font-display text-4xl">Service not found</h1>
          <Link to="/" className="btn-primary mt-6 inline-block">
            Go home
          </Link>
        </div>
      </Layout>
    );
  }
  return (
    <Layout>
      <ServicePage service={service} />
    </Layout>
  );
}
