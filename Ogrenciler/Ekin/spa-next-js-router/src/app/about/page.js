"use client";

import Layout from "@/components/Layout";
import { useRouter } from "next/navigation";

const About = () => {
  const router = useRouter();

  function goAnotherPage() {
    router.push("/");
  }

  return (
    <Layout parameter="about">
      <p>This is the about us. You can start building your app from here.</p>
      <button onClick={goAnotherPage}>RETURN</button>
    </Layout>
  );
};

export default About;
