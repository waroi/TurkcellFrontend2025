import { useState } from "react";
import { setDoc, doc } from "firebase/firestore";
import { auth, db } from "@/firebase/firebaseConfig"; 
import { getAuth } from "firebase/auth";


const convertToBase64 = (file) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => resolve(reader.result); 
    reader.onerror = reject;
  });
};

const ProfileUpdate = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setSelectedFile(file);
  };

  const handleSubmit = async () => {
    if (!selectedFile) {
      setError("Lütfen bir resim seçin.");
      return;
    }

    setLoading(true);

    try {

      const base64Image = await convertToBase64(selectedFile);

   
      const auth = getAuth();
      const user = auth.currentUser;

      if (!user) {
        setError("Kullanıcı giriş yapmamış");
        setLoading(false);
        return;
      }

     
      await setDoc(doc(db, "users", user.uid), {
        email: user.email,
        role: "user", 
        profilePic: base64Image, 
        createdAt: new Date(),
      });

      setLoading(false);
      alert("Profil güncellendi!");
    } catch (err) {
      setLoading(false);
      setError("Bir hata oluştu: " + err.message);
    }
  };

  return (
    <div className="container">
      <h2>Profil Resmini Güncelle</h2>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleSubmit} disabled={loading}>
        {loading ? "Yükleniyor..." : "Resmi Yükle"}
      </button>
      {error && <p className="text-danger">{error}</p>}
    </div>
  );
};

export default ProfileUpdate;
