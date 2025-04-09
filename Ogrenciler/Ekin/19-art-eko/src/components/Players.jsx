import { useEffect, useState } from "react";

import useGameStore from "@/store/gameStore";

export default function Players() {
  const gameStore = useGameStore();

  const [players, setPlayers] = useState([]);
  const [placement, setPlacement] = useState();
  const [profiles, setProfiles] = useState({});

  useEffect(() => {
    if (!gameStore.players) return;

    setPlayers(
      Object.keys(gameStore.players).map((id) => ({
        ...gameStore.players[id],
        id,
      }))
    );
  }, [gameStore.players]);

  useEffect(() => {
    setPlacement(
      players
        .sort((current, next) => next.score - current.score)
        .reduce(
          (placement, player, index) => ({ ...placement, [player.id]: index }),
          {}
        )
    );

    players.map((player) =>
      setProfiles((profiles) => {
        profiles[
          player.id
        ] = `https://api.dicebear.com/9.x/fun-emoji/svg?size=64&backgroundColor=8484a5,ff8d8d,ffc880,ffe880,53ff53,9295e8,cc7de4&seed=${player.id}`;

        return profiles;
      })
    );
  }, [players]);

  if (players && placement && Object.keys(placement).length)
    return (
      <div id="players">
        <div>
          {players.map((player) => (
            <div
              key={player.id}
              style={{
                top: placement[player.id] * 5.75 + "rem",
                zIndex: 100 - placement[player.id],
              }}
            >
              <span>{placement[player.id] + 1}</span>
              <img src={profiles[player.id]} />
              <span>
                {player.name}
                {placement[player.id] < 3 ? (
                  <i
                    className={`fa-solid fa-medal placement-${
                      placement[player.id] + 1
                    }`}
                  ></i>
                ) : (
                  ""
                )}
              </span>
              <span>
                <i className="fa-solid fa-palette"></i> {player.score}
              </span>
            </div>
          ))}
        </div>
      </div>
    );
  else return <div id="players"></div>;
}
