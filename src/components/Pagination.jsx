import { Button } from "./UI/Button.";

export const Pagination = ({ data, totalUsers, usersPerPage, paginated }) => {
  const pageNumber = [];
  for (let i = 1; i <= Math.ceil(totalUsers / usersPerPage); i++) {
    pageNumber.push(i);
  }

  return (
    <div style={{ display: "flex", gap: "5px" }}>
      {pageNumber.map((number) => (
        <Button key={number} onClick={() => paginated(number)}>
          {number}
        </Button>
      ))}
    </div>
  );
};
