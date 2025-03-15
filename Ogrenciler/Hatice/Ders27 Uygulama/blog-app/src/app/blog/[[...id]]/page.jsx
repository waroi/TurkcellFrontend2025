import * as React from "react";
import BlogDetail from "./_components/BlogDetail";
import { getBlog } from "@/utils/services/helpers";

export async function generateMetadata({ params }) {
  const { id } = await params;
  const blog = await getBlog(id);

  return { title: blog?.title ? blog.title : "Göklerden düşen blog tanesi" };
}

async function Page({ params }) {
  const { id } = await params;

  const blog = await getBlog(id);

  return id === undefined ? (
    <p> Geçerli bir blog id bulunamadı.</p>
  ) : (
    blog && <BlogDetail blog={blog} />
  );
}
export default Page;
