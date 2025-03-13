"use client"
import { useEffect, useState } from "react";
import { getBlogs } from "../../api/Api";
import PostCard from "../../components/PostCard";
import { auth , db} from "../../api/firebaseAuth";
import { doc, getDoc } from "firebase/firestore";

const UserBlogs = () => {
  const [user, setUser] = useState(null);
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (currentUser) => {
      if (!currentUser) return;

      const userRef = doc(db, "users", currentUser.uid);
      const userSnap = await getDoc(userRef);

      if (userSnap.exists()) {
        const userData = userSnap.data();
        setUser(userData);

        const allBlogs = await getBlogs();
        if (allBlogs) {
          const userBlogs = allBlogs.filter(
            (blog) => blog.author.name === userData.publisher
          );
          setBlogs(userBlogs);
        }
      }
    });

    return () => unsubscribe();
  }, []);

  return (
    <div className="container mt-4">
      <h2 className="text-center fw-bold">Kendi Blogların</h2>
      {blogs.length > 0 ? (
        <div className="row">
          {blogs.map((blog) => (
            <PostCard key={blog.id} blog={blog} />
          ))}
        </div>
      ) : (
        <p>Henüz blog yazınız bulunmamaktadır.</p>
      )}
    </div>
  );
};

export default UserBlogs;
