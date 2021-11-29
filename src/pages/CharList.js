import React from "react";
import { useChar } from "../hooks/useChar";

const CharList = () => {
  const { loading, data, error } = useChar();
  // console.log({ data, loading, error });
  if (loading) {
    return <h1> Loading... </h1>;
  }

  if (error) {
    return <h1> Something went wrong!</h1>;
  }

  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-between",
      }}
    >
      {data?.characters?.results?.map((char) => (
        <div key={char.id}>
          <img src={char.image} alt={char.name} />
          <h3> {char.name} </h3>
        </div>
      ))}
    </div>
  );
};

export default CharList;
