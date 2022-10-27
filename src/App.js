import { Route, Routes, Navigate } from "react-router-dom";
import Welcome from "./pages/Welcome";
import MainHeader from "./components/MainHeader";
import { UsersPage } from "./pages/UsersPage";
import { Gallery } from "./pages/Gallery";

function App() {
  return (
    <div>
      <MainHeader />
      <main>
        <Routes>
          <Route path="/" element={<Navigate replace to="/welcome" />} />
          <Route path="/welcome" element={<Welcome />}>
            <Route path="new-user" element={<UsersPage />}></Route>
          </Route>
          <Route path="users" element={<Gallery />}>
            <Route
              path="get-users"
              element={<h1>Need more Details about users?</h1>}
            ></Route>
          </Route>
          <Route path="gallery" element={<Gallery />}>
            <Route
              path="get-users"
              element={<h1>Need more Details about users?</h1>}
            ></Route>
          </Route>

          <Route path="*" element={<h1>404 Page not found</h1>} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
