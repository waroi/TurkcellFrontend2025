import { create } from "zustand";
import data from "../data/data.json";

const useBlogStore = create((set) => ({
  posts: [...data],
  id: 17,
  addPosts: (post) =>
    set((state) => ({
      posts: [...state.posts, { id: state.id, ...post }],
      id: state.id + 1,
    })),
  deletePost: (id) => set((state) => ({ 
   posts: state.posts.filter((post) => post.id !== id)
  })),
  updatePost: (id, blog) => set((state) => ({
    posts: state.posts.map((post) => post.id === id ? {...post, ...blog} : post)
  })),

}));

/**
 *! Arkadaşlar methodları yazdım delete ve update işlemleri için kullanabilirsiniz. 
 **Delete klasik mantıkta çalışıyor ID sini verdiğiniz postu siliyor. 
 *?Update ise ID sini verdiğiniz postu güncelliyor. İçerisine blog parametresinin alma sebebi ise güncellenecek postun içerisindeki verileri almak için. 
 *TODO post.id === id ? {...post, ...blog} : post olarak yazmamızın sebebi ise eğer id eşitse postun içerisindeki verileri alıp blog içerisindeki verileri de alıp bir araya getiriyoruz. Eğer id eşit değilse sadece postu döndürüyoruz.
 */

export default useBlogStore;
