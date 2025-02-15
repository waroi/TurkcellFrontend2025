import { useState } from "react";

const Count = () => {
  const [count, setCount] = useState(0);

  return (
    <>
      <p>{count}</p>
      <button onClick={() => setCount((prevState) => prevState + 1)}>
        Artır
      </button>
      <button onClick={() => setCount((prevState) => prevState - 1)}>
        Azalt
      </button>
    </>
  );
};

export default Count;
