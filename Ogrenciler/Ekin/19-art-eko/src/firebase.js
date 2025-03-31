import { initializeApp } from "firebase/app";
import {
  getDatabase,
  ref,
  get as getFirebase,
  set as setFirebase,
} from "firebase/database";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

initializeApp({
  apiKey: "AIzaSyBbuG1mYgyN4F3XUpk1ISOfFrg2djgSanY",
  authDomain: "art-eko.firebaseapp.com",
  databaseURL: "https://art-eko-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "art-eko",
  storageBucket: "art-eko.firebasestorage.app",
  messagingSenderId: "1085608056582",
  appId: "1:1085608056582:web:79de611752da8277317087",
});

const database = getDatabase();
const firestore = getFirestore();

const get = (reference) =>
  getFirebase(ref(database, reference)).then((snapshot) => snapshot.val());

const set = (reference, value) => setFirebase(ref(database, reference), value);

export const play = ({ id, name, profile }) =>
  (profile
    ? getDoc(doc(firestore, "players", id)).then(
        (snaphot) =>
          !snaphot.exists() &&
          setDoc(doc(firestore, "players", id), { profile })
      )
    : Promise.resolve()
  ).then(() =>
    get("players").then((players) =>
      players && Object.keys(players).includes(id)
        ? set(`players/${id}/online`, new Date().getTime())
        : set(`players/${id}`, {
            name,
            online: new Date().getTime(),
          })
    )
  );
