import { addDoc, collection, doc, getDoc, getDocs, updateDoc, deleteDoc } from "firebase/firestore";
import { db } from "../firebase/config";

export class RecipeService {
    static async addRecipe(recipe) {
        try {
            if (!recipe) throw new Error("Geçersiz tarif verisi")

            const docRef = await addDoc(collection(db, "recipes"), recipe);

            return { success: true, message: "Tarif başarıyla eklendi", docId: docRef.id }
        } catch (error) {
            console.error("Tarif ekllenirken hata oluştu:", error)
            return { success: false, message: error }
        }
    }

    static async getAllRecipes() {
        try {
            const querySnapshot = await getDocs(collection(db, "recipes"))
            return querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }))
        } catch (error) {
            return console.error("Tarifler getirilirken hata oluştu:", error)
        }
    }

    static async getRecipeById(recipeId) {
        try {
            const docRef = doc(db, "recipes", recipeId)
            const docSnap = await getDoc(docRef)
            console.log("sadassa")
            if (docSnap.exists()) {
                return { id: docSnap.id, ...docSnap.data() }
            } else {
                return null
            }
        } catch (error) {
            return console.error("Tarif getirilirken hata oluştu:", error)
        }
    }

    static async updateRecipe(recipeId, updatedData) {
        try {
            const docRef = doc(db, "recipes", recipeId);
            await updateDoc(docRef, { ...updatedData, updatedAt: new Date() });
            return { success: true, message: "Tarif başarıyla güncellendi" };
        } catch (error) {
            console.error("Tarif güncellenirken hata oluştu:", error);
            return { success: false, message: error.message };
        }
    }

    static async deleteRecipe(recipeId) {
        try {
            const docRef = doc(db, "recipes", recipeId)
            await deleteDoc(docRef)
            return { success: true, message: "Tarif başarıyla silindi" }
        } catch (error) {
            console.error("Tarif silinirken hata oluştu:", error)
            return { success: false, message: error }
        }
    }

    static async viewRecipe(recipeId, userId) {
        try {
            const docRef = doc(db, "recipes", recipeId)
            const docSnap = await getDoc(docRef)

            if (docSnap.exists()) {
                const currentData = docSnap.data()
                const currentViewedBy = Array.isArray(currentData.viewedBy) ? currentData.viewedBy : []

                if (!currentViewedBy.includes(userId)) {
                    await updateDoc(docRef, {
                        viewedAt: new Date(),
                        viewedBy: [...currentViewedBy, userId]
                    })
                } else {
                    await updateDoc(docRef, {
                        viewedAt: new Date()
                    })
                }

                return { success: true, message: "Tarif görüntüleme kaydedildi" }
            }
            throw new Error("Tarif bulunamadı")
        } catch (error) {
            console.error("Tarif görüntüleme kaydedilirken hata oluştu:", error)
            return { success: false, message: error.message }
        }
    }

    static async getUserRecipes(userId) {
        try {
            const querySnapshot = await getDocs(collection(db, "recipes"))
            return querySnapshot.docs
                .map(doc => ({ id: doc.id, ...doc.data() }))
                .filter(recipe => recipe.authorId === userId)
        } catch (error) {
            console.error("Kullanıcı tarifleri getirilirken hata oluştu:", error)
            throw error
        }
    }
}
