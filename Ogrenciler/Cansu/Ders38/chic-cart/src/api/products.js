import { collection, getDocs, query, where, orderBy, limit } from 'firebase/firestore';
import { db } from '@/firebase/firebaseConfig';

export const getBestSellers = async () => {
  try {

    const bestSellersQuery = query(
      collection(db, 'products'),
      where('salesCount', '>', 0),
      orderBy('salesCount', 'desc'),
      limit(50)
    );

    const snapshot = await getDocs(bestSellersQuery);
    
 
    if (snapshot.empty) {
      console.log('No products with salesCount > 0 found, fetching all products');
      const allProductsQuery = query(
        collection(db, 'products'),
        limit(50)
      );
      
      const allProductsSnapshot = await getDocs(allProductsQuery);
      
      if (allProductsSnapshot.empty) {
        return [];
      }
      
      return allProductsSnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
    }
    
    return snapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));
  } catch (error) {
    console.error('Error fetching best sellers:', error);
    throw error;
  }
};

export const getProductById = async (productId) => {
  try {
    const doc = await db.collection('products').doc(productId).get();
    if (!doc.exists) {
      throw new Error('Ürün bulunamadı');
    }
    return {
      id: doc.id,
      ...doc.data()
    };
  } catch (error) {
    console.error('Error fetching product:', error);
    throw error;
  }
};

export const searchProducts = async (searchTerm) => {
  try {
    const productsRef = collection(db, 'products');
    const q = query(
      productsRef,
      where('name', '>=', searchTerm),
      where('name', '<=', searchTerm + '\uf8ff'),
      limit(10)
    );

    const snapshot = await getDocs(q);
    return snapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));
  } catch (error) {
    console.error('Error searching products:', error);
    throw error;
  }
};

export const getProductsByCategory = async (category) => {
  try {
    const productsRef = collection(db, 'products');
    const q = query(
      productsRef,
      where('category', '==', category),
      limit(20)
    );

    const snapshot = await getDocs(q);
    return snapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));
  } catch (error) {
    console.error('Error fetching products by category:', error);
    throw error;
  }
};