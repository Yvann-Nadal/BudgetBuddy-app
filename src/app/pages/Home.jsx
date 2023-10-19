import { Box, Button, FormControl, TextField, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const Home = () => {
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
        <Link to="/dashboard">
          <Button variant="contained" type="submit">
            Se connecter
          </Button>
        </Link>
      </FormControl>
    </Box>
  );
};

export default Home;
