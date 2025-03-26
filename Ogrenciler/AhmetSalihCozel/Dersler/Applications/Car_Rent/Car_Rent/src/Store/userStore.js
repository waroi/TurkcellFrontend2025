import { create } from 'zustand';
import { initializeApp } from "firebase/app";
import { getFirestore, doc, getDoc, updateDoc } from "firebase/firestore"; 

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID,
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const useUserStore = create((set) => ({
    user: {},
    cars: [],
    isLoggedIn: false,
    rentedCars:[],
    fetchUser: async (userId) => {
        const userRef = doc(db, "users", userId);
        const userSnap = await getDoc(userRef);
        set({ user: userSnap.data() });
    },
    
    setLogIn: ()=> set({isLoggedIn: true}),
    getCars: async () => {
      const docRef = doc(db, "cars", "kW0oGpik6LcikXCJfJ2p");
      const docSnap = await getDoc(docRef);
      set({ cars: docSnap.data().cars || [] });
    },
    rentCar: async (carId,userId) => {
      try {
        const carRef = doc(db, "cars", "kW0oGpik6LcikXCJfJ2p");
        const carSnap = await getDoc(carRef);
        const userRef = doc(db, "users", userId);
        const userSnap = await getDoc(userRef);
        console.log(userSnap.data())

        
        if (userSnap.exists()){
          const userData = userSnap.data();
          const rentedCars = userData.rentedCars
          console.log(rentedCars)
          if(!rentedCars.includes(carId)){
            set({ rentedCars:[...rentedCars,carId] })
            await updateDoc(userRef, { rentedCars: [...rentedCars,carId] });
            console.log(`Kiralık araçlara ${carId} eklendi`);
          }
        }
        
        if (carSnap.exists()) {
          const carData = carSnap.data();
          const userData = userSnap.data();
          const updatedCars = carData.cars.map((car) =>
            car.carId === carId ? { ...car, isRented: true, rentedBy:localStorage.getItem("user"), rentedByName:userData.userName  } : car
          );
          set({ cars: updatedCars });
          await updateDoc(carRef, { cars: updatedCars });
          console.log(`Araç ${carId} başarıyla güncellendi!`);
        } else {
          console.log("Araç verisi bulunamadı!");
        }
      } catch (error) {
        console.error("Araç kiralama durumu güncellenirken hata oluştu:", error);
      }
    },
    cancelRentCar: async (carId,userId) => {
      try {
        const carRef = doc(db, "cars", "kW0oGpik6LcikXCJfJ2p");
        const carSnap = await getDoc(carRef);
        const userRef = doc(db, "users", userId);
        const userSnap = await getDoc(userRef);
        console.log(userSnap.data())

        
        if (userSnap.exists()){
          const userData = userSnap.data();
          console.log(userData.rentedCars)
          const updatedRentedCars = userData.rentedCars.filter((id) => id !== carId);
          console.log(updatedRentedCars)
          set({ rentedCars:updatedRentedCars })
          await updateDoc(userRef, { rentedCars: updatedRentedCars });
          console.log(`Kiralık araçlara ${carId} eklendi`);
        }

        if (carSnap.exists()) {
          const carData = carSnap.data();
          const userData = userSnap.data();
          const updatedCars = carData.cars.map((car) =>
            
            car.carId === carId ? { ...car, isRented: false, rentedBy:"", rentedByName:"" } : car
          );
          set({ cars: updatedCars });
          await updateDoc(carRef, { cars: updatedCars });
          console.log(`Araç ${carId} başarıyla güncellendi!`);
        } else {
          console.log("Araç verisi bulunamadı!");
        }
      } catch (error) {
        console.error("Araç kiralama durumu güncellenirken hata oluştu:", error);
      }
    }
}));

export default useUserStore;
