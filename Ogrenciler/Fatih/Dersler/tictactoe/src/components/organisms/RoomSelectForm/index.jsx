import React, { useState } from "react";
import { useNavigate } from "react-router";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../../services/firebase";
import Input from "../../atoms/Input";
import Button from "../../atoms/Button";
import Text from "../../atoms/Text";

function RoomSelectForm() {
  const [joinId, setJoinId] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const createRoom = () => {
    const newId = crypto.randomUUID();
    navigate(`/game/${newId}`);
  };

  const joinRoom = async () => {
    if (!joinId) return;

    const gameRef = doc(db, "games", joinId);
    const gameSnap = await getDoc(gameRef);

    if (gameSnap.exists()) {
      navigate(`/game/${joinId}`);
    } else {
      setError("Oda bulunamadı.");
    }
  };

  return (
    <div className="card border-0 shadow-lg rounded-4 bg-white bg-opacity-75 p-4">
      <div className="text-center mb-4">
        <Text as="h2" color="primary">
          Odaya Katıl / Oluştur
        </Text>
        <Text color="muted">
          Yeni bir oyun başlat ya da mevcut bir odaya katıl
        </Text>
      </div>

      <Button onClick={createRoom} className="w-100 mb-4" variant="success">
        Yeni Oda Oluştur
      </Button>

      <Text className="mb-2 fw-semibold">Oda ID'si ile Katıl</Text>
      <div className="input-group mb-3">
        <Input
          type="text"
          value={joinId}
          onChange={(e) => setJoinId(e.target.value)}
          placeholder="Oda ID girin"
        />
        <Button onClick={joinRoom} variant="primary">
          Katıl
        </Button>
      </div>

      {error && <Text color="danger">{error}</Text>}
    </div>
  );
}

export default RoomSelectForm;
