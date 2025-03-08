import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import UserClass from "./UserClass";
import { UserFunction } from "./UserFunction";
import Header from "./Header";
import { Routes, Route } from "react-router-dom";
// import { Button } from "bootstrap";
function App() {
  const [count, setCount] = useState(0);
  console.log("In App constructor");
  return (
    <>
      {console.log("In app render return ")}
      <Header />
      <h1>In App {count}</h1>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Apps Button
      </button>

      <Routes>
        <Route
          path="/UserClass"
          element={<UserClass />}
          errorElement={<h1>Ops! not a correct Path</h1>}
        />
        <Route
          path="/"
          element={<UserFunction />}
          errorElement={<h1>Ops! not a correct Path</h1>}
        />
      </Routes>

      {/* <UserClass /> */}
    </>
  );
}

export default App;
