import { initializeApp } from "firebase/app";
import {
  getDatabase,
  ref,
  get as getFirebase,
  set as setFirebase,
  onValue,
} from "firebase/database";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

import words from "@/util/words";
import { shuffle } from "@/util/random";
import { minimumEditDistance } from "@/util/levenshtein";

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

export const sync = (set) =>
  onValue(ref(database, "/"), (snapshot) => set(snapshot.val()));

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

export const startGame = () => {
  get("players")
    .then((players) => {
      Object.keys(players).map((player) => set(`players/${player}/score`, 0));
      return players;
    })
    .then((players, now = new Date(), random = shuffle([...words])) =>
      Object.keys(players)
        .filter((id) => now - players[id].online < 15000)
        .map((player, index) => ({
          player,
          word: random[index],
          hint: "?".repeat(random[index].length),
        }))
    )
    .then((turns) => set("turns", turns))
    .then(() => {
      set("phase", "game");
      set("canvas", "");
    });
};

export const online = (id) => set(`players/${id}/online`, new Date().getTime());

export const image = (canvas) => set("canvas", canvas);

export const hint = () =>
  get("turns/0/").then(({ word, hint }, index) => {
    index = shuffle(
      hint
        .split("")
        .reduce(
          (possibles, character, index) =>
            character == "?" ? [...possibles, index] : possibles,
          []
        )
    )[0];

    index >= 0 &&
      set(
        "turns/0/hint",
        hint.replace(new RegExp(`^(.{${index}}).`), `$1${word[index]}`)
      );
  });

export const guess = (player, name, guess) => {
  get("turns/0").then((turn, similarity, id) => {
    similarity = minimumEditDistance(
      guess.toLocaleLowerCase("tr-TR"),
      turn.word
    );

    id = `${new Date().getTime()}:${player}`;

    if (similarity == 0) {
      set(`chat/${id}`, { type: "correct", player, name });
      set(`turns/0/players/${player}`, true);

      get(`players/${player}`).then(({ score }) =>
        set(
          `players/${player}/score`,
          score + Math.max(10 - Object.keys(turn.players ?? {}).length, 6)
        )
      );

      get(`players/${turn.player}`).then(({ score }) =>
        set(
          `players/${turn.player}/score`,
          score +
            ((length) => (length ? Math.max(6 - length, 1) : 10))(
              Object.keys(turn.players ?? {}).length
            )
        )
      );
    } else if (similarity <= 3) {
      set(`chat/${id}`, { type: "close", player });
    } else {
      set(`chat/${id}`, { type: "message", name, content: guess });
    }
  });
};

//! REMOVE 15SEC CONTROL ON TOP TO CREATE CONTROL FUNCTION
