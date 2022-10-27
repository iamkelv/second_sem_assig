// import React from "react";

// export const GalleryUsers = ({ data, isLoading }) => {
//   return (
//     <div
//       style={{
//         width: "100%",

//         justifyContent: "center",
//         alignItems: "center",
//       }}
//     >
//       <GalleryUser data={currentUser} isLoading={loading} />
//       <div
//         style={{
//           display: "flex",
//           margin: "0 auto",
//           width: "100%",
//           justifyContent: "center",
//           gap: "1rem",
//           marginTop: "1rem",
//           padding: "1rem",
//         }}
//       >
//         {!loading && (
//           <div style={{ display: "flex", gap: "1rem" }}>
//             {" "}
//             <Button onClick={() => nextPage()}>Prev</Button>
//             <Pagination
//               usersPerPage={usersPerPage}
//               pageNumber={paginated}
//               paginated={paginated}
//               data={currentUser}
//               totalUsers={data.length}
//             />
//             <Button onClick={() => prevPage()}>Next</Button>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };
