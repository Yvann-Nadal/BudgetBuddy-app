import { Box, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import authService from "../../setup/auth.service";
import TokenService from "../../setup/token.service";
import { useParams } from "react-router-dom";

const AccountPage = () => {
  const [user, setUser] = useState([]);
  const {token} = useParams();

  const getUser = async () => {
    const res = await fetch("http://localhost:8000/api/auth/profile", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const data = await res.json();
    setUser(data);
  }

  useEffect(() => {
    getUser();
  }, []);

  console.log("user", user);
  


  return (
    <Box>
      <Typography variant="h4">Account Page</Typography>
    </Box>
  );
};

export default AccountPage;
