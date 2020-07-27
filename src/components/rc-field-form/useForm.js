import React, { useRef } from "react";

class FormStore {}

export default (form) => {
  const formRef = useRef();
  if (!formRef.current) {
    const formStore = new formStore();
  }
  return [formRef.current];
};
