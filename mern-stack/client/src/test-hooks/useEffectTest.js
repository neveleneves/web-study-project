import React, { useEffect, useState } from "react";

export const useEffectTest = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    //Вызов всего 1 раз, при самой первой отрисовки комопнента
    // console.log("render without deps array");
  }, []);

  useEffect(() => {
    //Вызов каждый раз при изменении чего-либо в компоненте
    // console.log("render with deps array is empty");
  });

  useEffect(() => {
    //Вызов каждый раз, при изменении состояния data
    // console.log("render with deps array");
  }, [data]);

  return {
    data,
    setData,
  };
};
