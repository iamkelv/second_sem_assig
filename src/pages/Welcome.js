import { useState } from "react";
import { Link, Navigate, Outlet } from "react-router-dom";
import { LoginBound } from "../boundaries/LoginBound";
import { Button } from "../components/UI/Button.";
import { Input } from "../components/UI/Input";
import { AuthAPI } from "../Config/API";

const Welcome = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [login, setLogin] = useState(true);
  const [setIsLogged] = useState(false);
  const [setRegistration] = useState(false);
  const [isLoading, setIsLoading] = useState(null);
  const [setTokenId] = useState(null);
  const userIsAuthenticated = localStorage.getItem("token");
  const [iserror, setIsError] = useState(false);

  const switchHandler = (event) => {
    event.preventDefault();
    return setLogin((prevState) => !prevState);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    if (login) {
      setIsLoading(true);
      fetch(AuthAPI.signIn, {
        method: "POST",
        body: JSON.stringify({
          email: email,
          password: password,
          returnSecureToken: true,
        }),
      })
        .then((res) => {
          if (!res.ok) {
            return;
          } else {
            setIsLogged(true);
            setIsLoading(false);

            return res.json();
          }
        })
        .then((data) => {
          if (!data) {
            setIsError(true);
            return console.log("something went wrong");
          }
          <Navigate replace to="/welcome" />;
          setTokenId(data.idToken);
          localStorage.setItem("token", "1");
        })
        .catch((err) => console.log(err))
        .finally((loading) => {
          setIsLoading(false);
          <Navigate replace to="/welcome" />;
        });
    } else {
      setIsLoading(true);
      fetch(AuthAPI.signUp, {
        method: "POST",
        body: JSON.stringify({
          email: email,
          password: password,
          returnSecureToken: true,
        }),
      })
        .then((res) => {
          if (!res.ok) {
            return console.log("something went wrong");
          }
          console.log("registration successful");
          setRegistration(true);
        })
        .catch((err) => console.log("something went wrong"))
        .finally(() => setIsLoading(false));
    }
  };

  return (
    <section>
      <div
        style={{
          display: "flex",
          margin: "0 auto",
          justifyContent: "center",
        }}
      >
        {!userIsAuthenticated && (
          <>
            <form
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "1rem",
              }}
              onSubmit={submitHandler}
            >
              <div>
                {login && "Enter your credentials to login"}

                {!login && "Enter your credentials to Signup"}
              </div>
              <div>
                <Input
                  type="email"
                  label="Email"
                  onChange={(event) => setEmail(event.target.value)}
                  value={email}
                />
              </div>
              <div>
                <Input
                  type="password"
                  onChange={(event) => setPassword(event.target.value)}
                  label="Password"
                  value={password}
                />
              </div>
              {iserror && <LoginBound errMessage={`Invalid Login`} />}
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <Button>
                  {login && !isLoading && "Login"}
                  {isLoading && "Loading..."}
                  {!login && "Sign-up"}
                </Button>
                <br />

                <div
                  style={{ textDecoration: "underline", cursor: "pointer" }}
                  onClick={switchHandler}
                >
                  <div>
                    <Link to="/gallery">Guest Mode</Link>
                  </div>
                </div>
              </div>

              <p
                style={{ textDecoration: "underline", cursor: "pointer" }}
                onClick={switchHandler}
              >
                {login && "Create Account"}

                {!login && "Do have an account?"}
              </p>
            </form>
          </>
        )}
      </div>

      {userIsAuthenticated && (
        <>
          <h1>The Welcome Page </h1>
          <Link to="new-user">Get Users</Link>
        </>
      )}

      <Outlet />
    </section>
  );
};

export default Welcome;
