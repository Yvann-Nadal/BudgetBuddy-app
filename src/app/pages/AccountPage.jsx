import { Box, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import authService from "../../setup/auth.service";
import TokenService from "../../setup/token.service";
import { useParams } from "react-router-dom";

const AccountPage = () => {
  const [account, setAccount] = useState([]);
  const { id } = useParams();
  const [user, setUser] = useState([]);
  const [userConnected, setUserConnected] = useState([]);

  useEffect(() => {
    getUserConnected();
    // getUser();
  }  , []);

  useEffect(() => {
    getUser();
  }, [userConnected]);


  const  getUserConnected = async () => {
    const token = TokenService.getTokenFromLocalStorage();
    const res = await fetch(`http://localhost:8000/api/auth/profile`, {
      method: "GET",
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
    });
    const data = await res.json();
    setUserConnected(data);
  }

  console.log("userConnected", userConnected);



  const getUser = async () => {
    const token = TokenService.getTokenFromLocalStorage();
    const res = await fetch(`http://localhost:8000/api/users/${userConnected.sub}`, {
      method: "GET",
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
    });
    const data = await res.json();
    setUser(data);
  };
  
  console.log("user", user);



  


  return (
    <Box>
      <Typography variant="h4">Account Page</Typography>
    </Box>
  );
};

export default AccountPage;
