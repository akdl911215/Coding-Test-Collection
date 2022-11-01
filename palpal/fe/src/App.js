import "./App.css";
import { Route, Routes } from "react-router-dom";
import Signup from "./webapp/user/componenet/Signup";
import Signin from "./webapp/user/componenet/Signin";
import Home from "./webapp/layout/component/Home";
import BoardList from "./webapp/board/component/BoardList";
import BoardModify from "./webapp/board/component/BoardModify";
import BoardRead from "./webapp/board/component/BoardRead";
import BoardRegister from "./webapp/board/component/BoardRegister";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/users_signup" element={<Signup />} />
        <Route path="/users_signin" element={<Signin />} />

        <Route path="/board_list" element={<BoardList />} />
        <Route path="/board_modify" element={<BoardModify />} />
        <Route path="/board_read" element={<BoardRead />} />
        <Route path="/board_register" element={<BoardRegister />} />
      </Routes>
    </>
  );
}

export default App;
