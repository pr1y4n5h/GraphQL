import React from "react";
import { useInfo } from "../hooks/useInfo";

const CharInfo = () => {

  const { data, loading, error } = useInfo();
  console.log({data, loading, error});
  return <div>fsdfsf</div>;
};

export default CharInfo;
