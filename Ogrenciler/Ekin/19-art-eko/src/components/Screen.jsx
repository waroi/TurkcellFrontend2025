import { startGame } from "@/firebase";
import useGameStore from "@/store/gameStore";

export default function Screen() {
  const { host, phase, turns } = useGameStore();
  const player = JSON.parse(localStorage.getItem("player"))?.id;

  if (player && host)
    return (
      <div id="screen" className={phase != "game" ? "active" : ""}>
        {phase == "start" ? (
          player != host ? (
            <>
              <i className="fa-solid fa-hourglass fa-spin"></i>
              <p>Waiting for host.</p>
            </>
          ) : (
            <>
              <i className="fa-solid fa-wrench fa-bounce"></i>
              <p>You are the host.</p>
              <button onClick={startGame}>
                <i className="fa-solid fa-fire-flame-curved"></i> Start
              </button>
            </>
          )
        ) : phase == "interval" ? (
          <>
            <i className="fa-solid fa-book fa-bounce"></i>
            <p>
              The word was
              <span className="interval-word">{" " + turns[0].word}</span>
            </p>
          </>
        ) : phase == "end" ? (
          "SCOREBOARD"
        ) : (
          ""
        )}
      </div>
    );
  else return <div id="screen"></div>;
}
