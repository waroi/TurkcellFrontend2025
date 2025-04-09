import { useState, lazy, Suspense } from "react";

import Loading from "#/Loading";
const Game = lazy(() => import("#/Game"));

export default function HomeView() {
  const [loading, setLoading] = useState(false);

  return (
    <section id="game" {...(loading && { className: "loading" })}>
      <Suspense fallback={<Loading />}>
        <Game setLoading={setLoading} />
      </Suspense>
    </section>
  );
}
