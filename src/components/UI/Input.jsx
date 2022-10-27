import React from "react";

export const Input = ({ type, label, value, onChange }) => {
  return (
    <>
      {" "}
      <label>{label}</label>
      <input
        style={{
          outline: "none",
          border: "none",
          padding: "5px 10px",
          borderRadius: "5px",
          marginLeft: "1rem",
        }}
        type={type}
        value={value}
        onChange={onChange}
        required
      />
    </>
  );
};
