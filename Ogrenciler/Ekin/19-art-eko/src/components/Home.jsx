import { useEffect, useState } from "react";
import { useNavigate } from "react-router";

import { play as playFirebase } from "@/firebase";
import useGameStore from "@/store/gameStore";

import ImageInput from "#/ImageInput";
import Input from "#/Input";
import Button from "#/Button";

export default function Home({ setLoading }) {
  const navigate = useNavigate();
  const { set } = useGameStore();

  const [profile, setProfile] = useState("");
  const [name, setName] = useState("");

  useEffect(() => {
    if (localStorage.getItem("player"))
      play(JSON.parse(localStorage.getItem("player")));
  }, []);

  function play(player) {
    setLoading(true);

    if (!player) {
      player = {
        id: Math.random().toString(36).substring(5),
        name,
        ...(profile && { profile }),
      };

      localStorage.setItem("player", JSON.stringify(player));
    }

    set("player", player);
    playFirebase(player);

    setTimeout(() => navigate("/game"), 200);
  }

  return (
    <div>
      <h1>Art Eko</h1>
      <h2>“Art for guesser's sake.”</h2>
      <ImageInput value={profile} onChange={setProfile} />
      <Input placeholder="Name" value={name} onChange={setName} />
      <div className="button">
        <Button disabled={!name} onClick={play}>
          <i className="fa-solid fa-palette"></i> Play
        </Button>
      </div>
    </div>
  );
}
