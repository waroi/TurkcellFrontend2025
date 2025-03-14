import * as React from "react";

import Image from "next/image";
import { myLoader } from "@/utils/functions";
import apiFetch from "@/utils/services/service";
import BlogDetail from "./_components/BlogDetail";
import { getBlog } from "@/utils/services/helpers";

export async function generateMetadata({ params }) {
  const { id } = await params;
  const blog = await getBlog(id);
  console.log("params", params);

  return { title: blog?.title ? blog.title : "Göklerden düşen blog tanesi" };
}

async function Page({ params }) {
  const { id } = await params;

  const blog = await getBlog(id);

  return id !== undefined ? (
    blog && <BlogDetail blog={blog} />
  ) : (
    <p> Geçerli bir blog id bulunamadı.</p>
  );
}
export default Page;
