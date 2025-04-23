import React from "react";
import AuthContaner from "@/components/components/AuthContainer";
import Button from "@/components/components/Button";
import SearchInput from "@/components/SearchInput/SearchInput";
import BlogCard from "../../components/BlogCard/BlogCard";

const BlogPage = () => {
  return (
    <div>
      <AuthContaner authType={"Blog"} />
      <div className="container my-21">
        <div className="d-flex mb-13 justify-content-between align-items-center">
          <div className="d-flex align-items-center justify-content-center">
            <Button
              color="primary"
              label="View All"
              padding="py-98 px-97"
              isBold={true}
            />
            <Button
              color="white"
              textColor="text-secondary"
              label="Metaverse"
              padding="py-98 px-97"
              isBold={true}
            />
            <Button
              color="white"
              textColor="text-secondary"
              label="Entertainment"
              padding="py-98 px-97"
              isBold={true}
            />
            <Button
              color="white"
              textColor="text-secondary"
              label="Energy"
              padding="py-98 px-97"
              isBold={true}
            />
            <Button
              color="white"
              textColor="text-secondary"
              label="NFT"
              padding="py-98 px-97"
              isBold={true}
            />
            <Button
              color="white"
              textColor="text-secondary"
              label="Gaming"
              padding="py-98 px-97"
              isBold={true}
            />
            <Button
              color="white"
              textColor="text-secondary"
              label="Music"
              padding="py-98 px-97"
              isBold={true}
            />
          </div>
          <SearchInput placeholder="Search Post" />
        </div>
        <div className="row">
          <BlogCard />
          <BlogCard />
          <BlogCard />
        </div>
        <div className="row">
          <BlogCard />
          <BlogCard />
          <BlogCard />
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
