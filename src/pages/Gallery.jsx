import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { ErroBound } from "../boundaries/ErroBound";
import GalleryUser from "../components/Gallery";
import { Pagination } from "../components/Pagination";
import { Button } from "../components/UI/Button.";

import { API } from "../Config/API";
import { useHttp } from "../Hooks/UseHttp";

export const Gallery = () => {
  const { data, loading, error } = useHttp(API, "Error getting users");
  const [currentPage, setCurrentPage] = useState(1);
  const [usersPerPage] = useState(10);
  const indexOfLastUser = currentPage * usersPerPage; // 9
  const indexOfFirstUser = indexOfLastUser - usersPerPage; //0
  const currentUser = data.slice(indexOfFirstUser, indexOfLastUser); // 1 to 100,

  const paginated = (data) => {
    setCurrentPage(data);
  };
  const nextPage = () => {
    return setCurrentPage((prev) => prev + 1);
  };
  const prevPage = () => {
    setCurrentPage((prev) => prev - 1);
  };
  return (
    <div>
      <Link to="get-users">Get User</Link>
      <Outlet />
      {error && <ErroBound err={error} reload={true} isLoading={loading} />}
      {!error && (
        <div
          style={{
            width: "100%",

            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <GalleryUser data={currentUser} isLoading={loading} />
          <div
            style={{
              display: "flex",
              margin: "0 auto",
              width: "100%",
              justifyContent: "center",
              gap: "1rem",
              marginTop: "1rem",
              padding: "1rem",
            }}
          >
            {!loading && (
              <div style={{ display: "flex", gap: "1rem" }}>
                {" "}
                <Button onClick={() => nextPage()}>Prev</Button>
                <Pagination
                  usersPerPage={usersPerPage}
                  pageNumber={paginated}
                  paginated={paginated}
                  data={currentUser}
                  totalUsers={data.length}
                />
                <Button onClick={() => prevPage()}>Next</Button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
