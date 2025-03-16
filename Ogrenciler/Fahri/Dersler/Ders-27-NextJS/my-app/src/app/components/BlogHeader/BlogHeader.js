import Link from "next/link";
import { signOut } from "next-auth/react";

const BlogHeader = ({ status }) => {
    return (
        <div className="blog-list-header">
            <h1 className="blog-list-title fw-bold fst-italic">PESPEMBE BLOG</h1>
            {status !== "authenticated" ? (
                <div className="d-flex gap-3">
                    <Link href={'/login'} className="add-blog-link">
                        Giriş Yap
                    </Link>
                    <Link href={"/register"} className="add-blog-link">
                        Kayıt Ol
                    </Link>
                </div>
            ) : (
                <div className="d-flex gap-3">
                    <Link href={"/blog"} onClick={signOut} className="add-blog-link">
                        Çıkış Yap
                    </Link>
                    <Link href={"/blog/add"} className="add-blog-link">
                        Blog Ekle
                    </Link>
                </div>
            )}
        </div>
    );
};

export default BlogHeader;