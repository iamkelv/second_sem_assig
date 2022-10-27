import React from "react";
import { Link } from "react-router-dom";
import classes from "./gallery.module.css";
const GalleryUser = ({ data, isLoading }) => {
  if (isLoading) {
    return <h1>Loading..</h1>;
  }
  return (
    <div
      style={{
        display: "flex",
        margin: "0 auto",
        justifyContent: "center",
        gap: "1rem",
        width: "100%",
        maxWidth: "900px",
        flexWrap: "wrap",
      }}
    >
      {data.map((user) => (
        <Link
          to={`/`}
          style={{
            textDecoration: "none",
            color: "gray",
            background: "white",
            boxShadow: "0 2px 8px rgba(0, 0, 0, 0.26)",
            borderRadius: "10px",
            position: "relative",
          }}
          key={user.email}
        >
          <div style={{ display: "flex", position: "relative" }}>
            <span>
              <span className={`${classes.overlay}`}>
                <div
                  style={{
                    color: "red",
                    fontWeight: "bolder",
                    opacity: "1",
                    fontSize: "1rem",
                    position: "relative",
                    bottom: "0",
                    background: "green",
                    margin: "auto 0 ",
                    height: "100%",
                  }}
                >
                  <span
                    style={{
                      position: "relative",
                      background: "yellow",
                      color: "black",
                      bottom: "0",
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    <div>
                      <span>Name:</span> <span>{user.name.first}</span>
                    </div>
                    <div>
                      {" "}
                      <span>Gender:</span> <span>{user.gender}</span>
                    </div>
                  </span>
                </div>
              </span>
              <img
                src={user.picture.large}
                style={{ minWidth: "200px", borderRadius: "5px" }}
                alt=""
              />
            </span>
          </div>
        </Link>
      ))}
    </div>
  );
};
export default GalleryUser;
