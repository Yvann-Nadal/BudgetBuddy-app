import { Route, Routes } from "react-router-dom";
import LoginPage from "../pages/LoginPage";
import AccountPage from "../pages/AccountPage";
import { useEffect, useState } from "react";
import usersService from "../../setup/user.service";

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
      <Route path="/" element={<LoginPage users={users} />} />
      <Route path="/account/:id" element={<AccountPage users={users} />} />
    </Routes>
  );
};

export default MainRouter;
