import { useState, lazy, Suspense } from "react";

import Loading from "#/Loading";
const Home = lazy(() => import("#/Home"));

export default function HomeView() {
  const [loading, setLoading] = useState(false);

  return (
    <section id="home" {...(loading && { className: "loading" })}>
      <Suspense fallback={<Loading />}>
        <Home setLoading={setLoading} />
      </Suspense>
    </section>
  );
}
