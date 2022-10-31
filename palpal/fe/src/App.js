import "./App.css";
import { Route, Routes } from "react-router-dom";
import Signup from "./webapp/user/componenet/Signup";
import Signin from "./webapp/user/componenet/Signin";
import Home from "./webapp/layout/component/Home";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/users_signup" element={<Signup />} />
        <Route path="/users_signin" element={<Signin />} />
      </Routes>
    </>
  );
}

export default App;
