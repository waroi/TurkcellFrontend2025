// import { doc, getDoc, updateDoc, setDoc } from 'firebase/firestore';
// import { db } from './firebase';
// import { fetchCoinPrice } from './coinApi';

// export const buyCoin = async (uid: string, coinId: string, amountInUsd: number) => {
//     const userRef = doc(db, 'users', uid);
//     const userSnap = await getDoc(userRef);

//     if (!userSnap.exists()) throw new Error('Kullanıcı bulunamadı.');

//     const userData = userSnap.data();
//     const balance = userData.balance || 0;

//     if (amountInUsd > balance) throw new Error('Yetersiz bakiye.');

//     const coinPrice = await fetchCoinPrice(coinId);
//     const coinAmount = amountInUsd / coinPrice;

//     const wallet = userData.wallet || {};

//     if (wallet[coinId]) {
//         wallet[coinId].amount += coinAmount;
//     } else {
//         wallet[coinId] = {
//             amount: coinAmount,
//             priceAtPurchase: coinPrice
//         };
//     }

//     await updateDoc(userRef, {
//         balance: Number((balance - amountInUsd).toFixed(2)),
//         wallet
//     });
// };
