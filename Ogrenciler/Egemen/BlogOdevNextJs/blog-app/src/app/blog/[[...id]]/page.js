"use client";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { getBlog } from "../../../../firebase/dbController";
import Card from "@/app/components/molecules/card/Card";

const Page = () => {
  const params = useParams();
  const [blog, setBlog] = useState();
  useEffect(() => {
    async function blog() {
      setBlog(await getBlog(`${params.id}`));
    }
    blog();
  }, [params.id]);
  return (
    blog && (
      <div className="container">
        <Card card={blog} d_button="d-none" />
      </div>
    )
  );
};

export default Page;
