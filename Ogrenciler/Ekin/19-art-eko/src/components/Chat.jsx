import { useEffect, useRef, useState } from "react";

export default function Chat() {
  const [chat, setChat] = useState([]);

  const chatRef = useRef();
  const guessRef = useRef();

  useEffect(() => {
    chatRef.current.scrollTo(0, chatRef.current.scrollHeight);
  }, [chat]);

  function DEBUGADD() {
    if (!guessRef.current.value) return;

    let num = Math.random();

    if (num < 0.6) {
      setChat((c, v) => {
        v = [
          ...c,
          {
            type: "message",
            name: "Ekin",
            content: guessRef.current.value,
          },
        ];
        guessRef.current.value = "";
        return v;
      });
    } else if (num < 0.7) {
      setChat((c) => [
        ...c,
        {
          type: "close",
        },
      ]);
    } else if (num < 0.8) {
      setChat((c) => [
        ...c,
        {
          type: "correct",
          word: "geçenşağı",
        },
      ]);
    } else {
      setChat((c) => [
        ...c,
        {
          type: "correct-other",
          name: "Someone",
          word: "geçenşağı",
        },
      ]);
    }
  }

  return (
    <div id="chat">
      <div ref={chatRef}>
        {chat.map((message, key) =>
          message.type == "message" ? (
            <p key={key}>
              <b>{message.name}:</b>
              {" " + message.content}
            </p>
          ) : message.type == "close" ? (
            <p className="guess-close" key={key}>
              You are close!
            </p>
          ) : message.type == "correct" ? (
            <p className="guess-correct" key={key}>
              You guessed the word <b>{message.word}</b>!
            </p>
          ) : (
            <p className="guess-correct-other" key={key}>
              <b>{message.name}</b> guessed the word.
            </p>
          )
        )}
      </div>
      <div>
        <input
          type="text"
          placeholder="Guess"
          onKeyDown={(event) => event.code == "Enter" && DEBUGADD()}
          ref={guessRef}
        />
        <button onClick={DEBUGADD}>
          <i className="fa-solid fa-paper-plane"></i>
        </button>
      </div>
    </div>
  );
}
