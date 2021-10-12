import { useMemo, useState } from "react";

export const useMemoTest = () => {
  const [num, setNum] = useState(1_000_000_000);
  const [color, setColor] = useState("red");

  const computing = (num) => {
    for (let i = 0; i < 1_000_000_000; i++) {}
    return num ** 3;
  };

  useMemo(() => computing(1_000_000_000), [num]);
  /*Обернули в useMemo и данный рендер независим от остальных
  и не будет замедлять работу других функций, которые не зависят от этой*/

  return {
    num,
    setNum,
    color,
    setColor,
  };
};
