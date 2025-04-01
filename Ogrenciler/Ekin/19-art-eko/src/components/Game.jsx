import Players from "#/Players";
import Canvas from "#/Canvas";
import Chat from "#/Chat";

export default function Home({ setLoading }) {
  return (
    <>
      <Players />
      <Canvas />
      <Chat />
    </>
  );
}
