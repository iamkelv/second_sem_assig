import React from "react";
import { Button } from "../components/UI/Button.";

export const ErroBound = ({ err, reload, isLoading }) => {
  return (
    <div
      style={{
        width: "100%",
        maxWidth: "500px",
        display: "flex",
        flexDirection: "column",

        margin: "0 auto",
        minHeight: "200px",
        padding: "1rem",
        background: "white",
        boxShadow: "0 2px 8px rgba(0, 0, 0, 0.26)",
        borderRadius: "10px",
        fontWeight: "bolder",
        color: "gray",
        fontSize: "4rem",
        justifyContent: "center",
      }}
    >
      <div>
        {" "}
        {err}
        <br />
        💥
      </div>
      <div
        style={{ display: "flex", justifyContent: "center", marginTop: "1rem" }}
      >
        <Button onClick={() => window.location.reload()}>Try Again 😢</Button>
      </div>
    </div>
  );
};
