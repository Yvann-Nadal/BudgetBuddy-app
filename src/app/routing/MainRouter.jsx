import { Route, Routes } from "react-router-dom";
import AccountPage from "../pages/AccountPage";
import { useEffect, useState } from "react";
import usersService from "../../setup/user.service";
import Signin from "../pages/connection/signin";
import Signup from "../pages/connection/signup";

const MainRouter = () => {
  const [users, setUsers] = useState([]);

  const fetchUsers = async () => {
    try {
      const response = await usersService.getAllUsers();
      setUsers(response);
    } catch (error) {
      console.log(error);
    }
  };

  console.log(users, "USERS");

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <Routes>
      <Route path="/signup" element={<Signup users={users} />} />
      <Route path="/signin" element={<Signin users={users} />} />
      <Route path="/account" element={<AccountPage users={users} />} />
    </Routes>
  );
};

export default MainRouter;
