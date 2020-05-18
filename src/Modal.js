import React, { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

const modalRoot = document.getElementById("modal");

const Modal = ({ children }) => {
  const elRef = useRef(null);
  if (!elRef.current) {
    elRef.current = document.createElement("div");
  }

  // creating a modal, using useRef -
  // avoided unnecessary creation and deletion of dom object

  useEffect(() => {
    modalRoot.appendChild(elRef.current);
    return () => modalRoot.removeChild(elRef.current);
  }, []);
  // grabbe the model, and destroy it when model is closed.
  return createPortal(<div>{children}</div>, elRef.current);
  //render it to a different part of dom 
};

export default Modal;