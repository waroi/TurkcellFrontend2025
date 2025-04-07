import { useEffect, useState } from "react";

export default function Players({ players }) {
  const [placement, setPlacement] = useState([]);
  const [profiles, setProfiles] = useState({});

  useEffect(() => {
    setPlacement([
      ...players
        .sort((current, next) => next.score - current.score)
        .map((player, placement) => ({ ...player, placement })),
    ]);

    players.map((player) =>
      setProfiles((profiles) => {
        profiles[player.id] = `https://picsum.photos/seed/${Math.random()
          .toString(36)
          .substring(2)}/500`;

        return profiles;
      })
    );
  }, [players]);

  return (
    <div id="players">
      <div>
        {placement.map((player) => (
          <div key={player.id} style={{ top: player.placement * 5.75 + "rem" }}>
            <span>{player.placement + 1}</span>
            <img src={profiles[player.id]} />
            <span>
              {player.name}
              {player.placement < 3 ? (
                <i
                  class={`fa-solid fa-medal placement-${player.placement + 1}`}
                ></i>
              ) : (
                ""
              )}
            </span>
            <span>
              <i class="fa-solid fa-palette"></i> {player.score}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
