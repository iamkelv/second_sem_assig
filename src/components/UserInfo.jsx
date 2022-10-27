import React from "react";
import { Link } from "react-router-dom";

const AllUser = ({ data, isLoading }) => {
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
          <div style={{}}>
            <span>
              <img
                src={user.picture.medium}
                style={{ minWidth: "200px", borderRadius: "5px" }}
                alt=""
              />
            </span>
          </div>
          <div style={{}}>Name: {user.name.first} </div>
        </Link>
      ))}
    </div>
  );
};
export default AllUser;
