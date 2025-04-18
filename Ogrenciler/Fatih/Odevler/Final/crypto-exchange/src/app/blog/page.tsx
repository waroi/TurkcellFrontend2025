import React from "react";
import BlogFilterTabs from "@/components/molecules/BlogFilterTabs";
import BlogGrid from "@/components/organisms/BlogGrid";
import LoadMoreButton from "@/components/atoms/LoadMoreButton";
import PageHeader from "@/components/molecules/PageHeader";

const BlogPage = () => {
  return (
    <>
      <PageHeader title="Blog" subtitle="Home / Blog" />
      <div className="container py-5">
        <BlogFilterTabs />
        <BlogGrid />
        <LoadMoreButton />
      </div>
    </>
  );
};

export default BlogPage;
