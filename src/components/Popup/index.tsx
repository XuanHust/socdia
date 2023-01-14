import React from "react";
import { memo } from "react";
import ReactDOM from "react-dom";

const Popup = ({
  children,
  closePopup,
  show,
  className,
}: {
  children: React.ReactNode;
  closePopup: Function;
  show: boolean;
  className?: string;
}): JSX.Element => {
  return ReactDOM.createPortal(
    <div
      className={`inset-0 fixed z-[201] transition-all duration-[400ms] ${show ? "opacity-100 visible" : "opacity-0 invisible"
        } ${className || ""}`}
    >
      <div
        className="fixed inset-0 bg-black bg-opacity-70 cursor-pointer"
        onClick={() => closePopup()}
      />
      {children}
    </div>,
    document.body
  );
};

export default memo(Popup);
