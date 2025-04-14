import { useEffect, useRef } from "react";

import { guess } from "@/firebase";
import useGameStore from "@/store/gameStore";

export default function Chat({ player, name }) {
  const gameStore = useGameStore();

  const chatRef = useRef();
  const guessRef = useRef();

  useEffect(() => {
    chatRef.current.scrollTo(0, chatRef.current.scrollHeight);
  }, [gameStore.chat]);

  function chat() {
    if (!guessRef.current.value) return;

    guess(player, name, guessRef.current.value);
    guessRef.current.value = "";
  }

  return (
    <div id="chat">
      <div ref={chatRef}>
        {Object.keys(gameStore.chat ?? {})
          .map((key) => gameStore.chat[key])
          .map((message, key) =>
            message.type == "message" ? (
              <p key={key}>
                <b>{message.name}:</b>
                {" " + message.content}
              </p>
            ) : player == message.player ? (
              message.type == "close" ? (
                <p className="guess-close" key={key}>
                  You are close!
                </p>
              ) : (
                <p className="guess-correct" key={key}>
                  You guessed the word <b>{gameStore.turns[0].word}</b>!
                </p>
              )
            ) : message.type == "correct" ? (
              <p className="guess-correct-other" key={key}>
                <b>{message.name}</b> guessed the word.
              </p>
            ) : (
              ""
            )
          )}
      </div>
      <div>
        <input
          type="text"
          placeholder="Guess"
          onKeyDown={(event) => event.code == "Enter" && chat()}
          ref={guessRef}
          disabled={
            gameStore.turns &&
            (player == gameStore.turns[0].player ||
              (gameStore.turns[0].players &&
                gameStore.turns[0].players[player]))
          }
        />
        <button onClick={chat}>
          <i className="fa-solid fa-paper-plane"></i>
        </button>
      </div>
    </div>
  );
}
