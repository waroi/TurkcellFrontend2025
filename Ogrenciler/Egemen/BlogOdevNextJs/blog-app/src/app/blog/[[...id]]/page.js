"use client";
import { useParams } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getBlog } from "../../redux/slices/blogSlice";

const Page = () => {
    const params = useParams();
    const dispatch = useDispatch();
    const blog = useSelector((state) => state.blog.blog);
    const [blogId, setBlogId] = useState(null);

    useEffect(() => {
        if (params?.id) {
            setBlogId(params.id);
            dispatch(getBlog(params.id));
        }
    }, [params, dispatch]);

    if (!blogId) {
        return <div>Geçersiz Blog ID</div>;
    }

    return (
        <div>
            <h1>Blog ID: {blogId}</h1>
            <pre>{blog ? JSON.stringify(blog, null, 2) : "Yükleniyor..."}</pre>
        </div>
    );
};

export default Page;
