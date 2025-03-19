"use client"

import { useSession } from "next-auth/react";
import "./BlogDetail.css";
import BlogDetailContent from "@/app/components/BlogDetail/Content/BlogContent";
import BlogActions from "@/app/components/BlogDetail/Actions/Actions";
import BlogDetailHeader from "@/app/components/BlogDetail/Header/BlogHeader";
import { useBlogDetail } from "@/app/utils/hooks/useBlogDetail";

const BlogDetail = ({ params }) => {
  const { status } = useSession()
  const { blogContent, userInfo, handleDelete, formatDate, router } = useBlogDetail(params.id)

  if (!blogContent) {
    return <div className="loading-message">Blog yükleniyor veya bulunamadı...</div>
  }

  const formattedDate = formatDate(blogContent.pushedAt)
  return (
    <div className="blog-detail-container">
      <div className="blog-detail-card">
        <BlogDetailHeader blog={blogContent} formattedDate={formattedDate} />

        <div className="blog-detail-content">
          <BlogDetailContent blog={blogContent} />

          <BlogActions
            blog={blogContent}
            userInfo={userInfo}
            onDelete={handleDelete}
            onEdit={() => router.push(`/blog/edit/${blogContent.id}`)}
          />
        </div>
      </div>
    </div>
  )
}

export default BlogDetail