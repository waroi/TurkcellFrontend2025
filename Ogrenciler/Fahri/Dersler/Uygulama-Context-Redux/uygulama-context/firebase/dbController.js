import { useCollection } from "react-firebase-hooks/firestore";
import { collection, query } from "firebase/firestore";
import { db } from "../../../firebase/firebase";

const booksRef = collection(db, "users");
const [books] = useCollection(query(booksRef));

// const db = firebase.firestore();
// const collectionRef = db.collection("your_collection_name");

// const query = collectionRef.where("status", "==", "active");

// query
//   .get()
//   .then((snapshot) => {
//     snapshot.forEach((doc) => {
//       console.log(doc.id, "=>", doc.data());
//     });
//   })
//   .catch((error) => {
//     console.error("Error fetching filtered data:", error);
//   });
