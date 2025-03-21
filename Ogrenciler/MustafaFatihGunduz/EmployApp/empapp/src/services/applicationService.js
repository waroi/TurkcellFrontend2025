import { db } from "../../firebase_config";
import { collection, getDocs, query, setDoc } from "firebase/firestore";

export const fetchApplications = async () => {
  try {
    const querySnapshot = await getDocs(collection(db, "applications"));
    return querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
  } catch (error) {
    console.error("Başvurular çekilirken hata oluştu:", error);
    return [];
  }
};

export const saveApplication = async (application) => {
  try {
    const q = query(collection(db, "applications"));
    const newApp = await setDoc(q, {
      adressFirst: application.adressFirst,
      adressSecond: application.adressSecond,
      birthday: application.birthday,
      city: application.city,
      country: application.country,
      email: application.email,
      isGraduate: application.isGraduate,
      isTurkish: application.isTurkish,
      lastName: application.lastName,
      name: application.name,
      phoneNumber: application.phoneNumber,
      postCode: application.postCode,
      province: application.province,
      university: application.university,
      skills: application.skills,
    });
    console.log(newApp);
  } catch (error) {
    console.log("SaveApplication Error", error);
  }
};
