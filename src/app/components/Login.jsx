import { Box, Button, FormControl, TextField, Typography } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";

const Login = ({ users }) => {
  const { id } = useParams();
  const navigate = useNavigate();

  const user = users.find(user => user._id === id);
  console.log(users, "zezeze");

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
        alignItems: "center"
      }}>
      <Typography variant="h1">BudgetBuddy</Typography>
      <FormControl
        component="form"
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "1rem"
        }}>
        <TextField required label="Adresse mail" variant="outlined" />
        <TextField required label="Mot de passe" variant="outlined" type="password" />
        <Button variant="contained" type="submit" onClick={() => navigate(`/account/${user.id}`)}>
          Se connecter
        </Button>
      </FormControl>
    </Box>
  );
};

export default Login;
