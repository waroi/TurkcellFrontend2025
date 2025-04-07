import { useEffect, useState } from "react";

export default function Players({ players }) {
  const [placement, setPlacement] = useState();
  const [profiles, setProfiles] = useState({});

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
        profiles[player.id] = `https://picsum.photos/seed/${Math.random()
          .toString(36)
          .substring(2)}/500`;

        return profiles;
      })
    );
  }, [players]);

  if (players && placement)
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
}
