"use client";

import Layout from "@/components/Layout";
import { useRouter } from "next/navigation";

const HomePage = () => {
  const router = useRouter();

  function goAnotherPage() {
    router.push("/about");
  }

  return (
    <Layout parameter="home">
      <h1>Welcome to My Next.js App!</h1>
      <p>This is the homepage. You can start building your app from here.</p>
      <button onClick={goAnotherPage}>CONTINUE</button>
    </Layout>
  );
};

export default HomePage;
