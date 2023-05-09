import React from "react";
import {IoBackspace} from "react-icons/io5";
type buttonProps = {
  type?: string;
  onClick: (label: string) => void;
  label: string | "delete";
  date?: string;
};

export const Button = ({label, onClick, type, date}: buttonProps) => {
  switch (label) {
    case "deleteOne":
      return (
        <button
          onClick={() => onClick(date ? date : label)}
          className={`button-container${type ? " " + type : ""}`}>
          <IoBackspace className="icon" />
        </button>
      );
    default:
      return (
        <button
          onClick={() => onClick(date ? date : label)}
          className={`button-container${type ? " " + type : ""}`}>
          {label}
        </button>
      );
  }
};
