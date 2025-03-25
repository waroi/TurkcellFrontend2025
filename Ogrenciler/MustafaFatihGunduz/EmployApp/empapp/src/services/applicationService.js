import { db } from "../../firebase_config";
import { collection, getDocs, addDoc, query, where } from "firebase/firestore";
import { doc, updateDoc } from "firebase/firestore";

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

export const saveUser = async (newApplication) => {
  try {
    const docRef = await addDoc(collection(db, "applications"), newApplication);
    console.log("Başvuru başarıyla kaydedildi, ID:", docRef.id);
  } catch (error) {
    console.error("Başvuru kaydedilirken hata oluştu:", error);
    throw error;
  }
};

//! kullanıcı başvurularını görüntüleme fonksiyonu
export const fetchUserApplication = async (userEmail) => {
  try {
    const q = query(
      collection(db, "applications"),
      where("email", "==", userEmail)
    );
    const querySnapshot = await getDocs(q);
    const applications = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    return applications || null;
  } catch (error) {
    console.error("Kullanıcı başvurusu çekilirken hata oluştu:", error);
    return null;
  }
};

//! Başvuru durumlarını güncelleme fonksiyonu
export const updateApplicationStatus = async (applicationId, updateData) => {
  try {
    const applicationRef = doc(db, "applications", applicationId);
    await updateDoc(applicationRef, updateData);
  } catch (error) {
    console.error("Status güncelleme hatası:", error);
    throw error;
  }
};

//! Test sonuçlarını kaydetme fonksiyonu
export const updateTestResults = async (applicationId, testResults) => {
  try {
    const applicationRef = doc(db, "applications", applicationId);
    await updateDoc(applicationRef, {
      testResults,
      testPassed: testResults.correctAnswers >= 4,
    });
  } catch (error) {
    console.error("Test sonucu güncelleme hatası:", error);
    throw error;
  }
};
