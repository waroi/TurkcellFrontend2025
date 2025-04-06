import Players from "#/Players";
import Canvas from "#/Canvas";
import Chat from "#/Chat";

export default function Home({ setLoading }) {
  return (
    <>
      <Players
        players={[
          {
            id: "bilmemne",
            name: "Ekin Aslan",
            score: 17,
          },
        ]}
      />
      <Canvas word="geçenşağı" />
      <Chat />
    </>
  );
}
