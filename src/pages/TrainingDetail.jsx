import { useParams, Link } from "react-router-dom";
import Layout from "@/components/Layout";
import TrainingPage from "@/components/TrainingPage";
import { trainings } from "@/data/site";

export default function TrainingDetail() {
  const { slug } = useParams();
  const training = trainings.find((t) => t.slug === slug);
  if (!training) {
    return (
      <Layout>
        <div className="container-x py-32 text-center">
          <h1 className="font-display text-4xl">Course not found</h1>
          <Link to="/" className="btn-primary mt-6 inline-block">
            Go home
          </Link>
        </div>
      </Layout>
    );
  }
  return (
    <Layout>
      <TrainingPage training={training} />
    </Layout>
  );
}
