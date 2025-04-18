import React, { useEffect, useState } from "react";

const DataRender = ({ id, fetchFunction, render }) => {
  const [data, setData] = useState(null);

  const fetchData = async () => {
    const result = id ? await fetchFunction(id) : await fetchFunction();
    setData(result);
  };

  useEffect(() => {
    fetchData();
  }, [id, fetchFunction]);

  return <>{render(data)}</>;
};

export default DataRender;
