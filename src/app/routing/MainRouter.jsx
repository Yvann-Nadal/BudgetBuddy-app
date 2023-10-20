import { Route, Routes } from "react-router-dom";
import AccountPage from "../pages/AccountPage";
import { useEffect, useState } from "react";
import usersService from "../../setup/user.service";
import Signin from "../pages/connection/signin";
import Signup from "../pages/connection/signup";

const MainRouter = () => {
  const [users, setUsers] = useState([]);



  return (
    <Routes>
      <Route path="/" element={<Signup users={users} />} />
      <Route path="/signin" element={<Signin users={users} />} />
      <Route path="/account" element={<AccountPage users={users} />} />
    </Routes>
  );
};

export default MainRouter;
