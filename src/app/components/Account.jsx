import { Box, Typography } from "@mui/material";
import { useParams } from "react-router-dom";

const Account = ({ users }) => {
  const { id } = useParams();
  const account = users.map(user => user.accounts.find(account => account._id === id));
  console.log(account, "ACCOUNT");
  return (
    <Box>
      <Typography variant="h4">{account[0].name}</Typography>
      <Typography variant="h5">{account[0].balance}</Typography>
    </Box>
  );
};

export default Account;
