import React from "react";
import BlogFilterTabs from "@/components/molecules/BlogFilterTabs";
import BlogGrid from "@/components/organisms/BlogGrid";
import LoadMoreButton from "@/components/atoms/LoadMoreButton";
import PageHeader from "@/components/molecules/PageHeader";
import styles from "./blog.module.css";

const BlogPage = () => {
  return (
    <div className={styles.wrapper}>
      <PageHeader title="Blog" subtitle="Home / Blog" />
      <div className="container py-5">
        <BlogFilterTabs />
        <BlogGrid />
        <LoadMoreButton />
      </div>
    </div>
  );
};

export default BlogPage;
