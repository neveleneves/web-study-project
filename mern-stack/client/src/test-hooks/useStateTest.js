import React, { useState } from "react";

export const useStateTest = () => {
  const [bar, setBar] = useState(0); //стандартный вызов useState()
  const [foo, setFoo] = useState(() => {
    // вызов useState с вычисляемым initState в callback
    return Math.trunc(Math.random() * 20); // для оптимизации
  });

  const onClickHandler = () => {
    // setBar(bar + 1); // Не сработает 2 раза подряд, так как выполняется асинхронно
    // setBar(bar + 1);

    // setBar((prev) => prev + 1); //Сработает, так как выполянется callback, основанный на предыдущем состоянии
    // setBar((prev) => prev + 1);
  };
};
