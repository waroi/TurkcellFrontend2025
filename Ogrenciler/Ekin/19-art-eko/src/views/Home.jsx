import { useState } from "react";

import { play as playFirebase } from "@/firebase";

import ImageInput from "#/ImageInput";
import Input from "#/Input";
import Button from "#/Button";

export default function Home() {
  const [profile, setProfile] = useState("");
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);

  function play(player) {
    setLoading(true);

    player = {
      id: Math.random().toString(36).substring(5),
      name,
      ...(profile && { profile }),
    };

    localStorage.setItem("player", JSON.stringify(player));

    playFirebase(player);
  }

  return (
    <section id="home" {...(loading && { className: "loading" })}>
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
    </section>
  );
}
