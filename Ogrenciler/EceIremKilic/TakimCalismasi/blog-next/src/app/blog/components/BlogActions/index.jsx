import React from "react";
import Link from "next/link";
import CustomButton from "@/components/CustomButton";

export const BlogActions = ({ blogId, onDelete }) => (
  <div className="d-flex mb-3">
    <CustomButton
      buttonText="Sil"
      variant="danger"
      className="me-3"
      onClick={() => onDelete(blogId)}
    />
    <Link href={`edit/${blogId}`}>
      <CustomButton buttonText="Güncelle" variant="warning" />
    </Link>
  </div>
);
