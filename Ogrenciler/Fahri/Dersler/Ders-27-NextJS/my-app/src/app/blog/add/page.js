'use client';

import { useSession } from "next-auth/react";
import "./AddBlogForm.css";
import BackButton from "@/app/components/BackButton/BackButton";
import BlogFormFields from "@/app/components/BlogFormFields/BlogFormFields";
import { useBlogForm } from "@/app/utils/hooks/useBlogForm";

const AddBlogForm = () => {
  const { status } = useSession();
  const {
    title, setTitle,
    content, setContent,
    author, setAuthor,
    poster, setPoster,
    userInfo,
    handleSubmit,
    category, setCategory
  } = useBlogForm()

  if (status === "unauthenticated") {
    return <div className="container mt-5">Lütfen giriş yapın</div>;
  }

  return (
    <>
      <BackButton />
      <div className="blog-form-container">
        <form onSubmit={handleSubmit} className="blog-form">
          <h1 className="form-title">Yeni Blog Ekle</h1>

          <BlogFormFields
            title={title}
            setTitle={setTitle}
            content={content}
            setContent={setContent}
            author={author}
            poster={poster}
            setPoster={setPoster}
            setCategory={setCategory}
            category={category}
            userInfo={userInfo}
          />

          <button type="submit" className="submit-button">
            Blog Ekle
          </button>
        </form>
      </div>
    </>
  );
};

export default AddBlogForm