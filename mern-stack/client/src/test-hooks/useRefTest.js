import React, { useEffect, useRef } from "react";

export const useRefTest = () => {
  const valueRef = useRef(""); // Похож на useState, но изменяется без перерендара
  // возвращает объект с свойством current, которое содержит состояние
  // также, все элементы JTX имеют атрибут ref, который принимает объект useRef
  // и может быть использован для воздействий на элементы DOM (не рекомендуется)
  const inputElemRef = useRef(null);

  useEffect(() => {
    //Состояние будет измененно, но useRef не вызовит рендер
    valueRef.current++;
  });

  return {
    inputElemRef,
  };
};
