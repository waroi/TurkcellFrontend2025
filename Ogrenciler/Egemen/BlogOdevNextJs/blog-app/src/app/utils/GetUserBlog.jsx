// "use client";
// import { getUserBlogs } from "../../../firebase/dbController";
// import { addAllBlog, searchBlogs } from "../redux/slices/blogSlice";

// export async function fetchBlog(dispatch, searchTerm) {
//   if (searchTerm === "") {
//     const data = await getUserBlogs();
//     if (data) {
//       dispatch(addAllBlog(data));
//       return true;
//     }
//   } else {
//     dispatch(searchBlogs(searchTerm));
//     return true;
//   }
//   return false;
// }
