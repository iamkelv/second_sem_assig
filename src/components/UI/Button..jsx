import React from "react";

export const Button = ({ children, onClick }) => {
  return (
    <button
      onClick={onClick}
      style={{
        display: "flex",
        padding: "10px 15px ",
        borderRadius: "5px",
        border: "none",
      }}
    >
      {children}
    </button>
  );
};
