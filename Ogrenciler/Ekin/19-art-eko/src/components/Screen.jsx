import { startGame } from "@/firebase";
import useGameStore from "@/store/gameStore";

export default function Screen() {
  const { host, phase } = useGameStore();
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
              <p>You are the host.</p>
              <button onClick={startGame}>
                <i className="fa-solid fa-fire-flame-curved"></i> Start
              </button>
            </>
          )
        ) : phase == "drawing" ? (
          "SOMEONE IS DRAWING / selectword"
        ) : phase == "skip" ? (
          "SOMEONE SKIPPED"
        ) : phase == "interval" ? (
          "THE WORD WAS STH SOME PEOPLE GUESSED"
        ) : phase == "end" ? (
          "SCOREBOARD"
        ) : (
          ""
        )}
      </div>
    );
}
