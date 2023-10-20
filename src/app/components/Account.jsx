import { Box, Typography } from "@mui/material";
import { useParams } from "react-router-dom";

const Account = ({ users }) => {
  const { id } = useParams();
  const account = users.map(account => account._id === id);
  console.log(account, "ACCOUNT");
  return (
    <Box>
      <Typography variant="h4">oefef</Typography>
    </Box>
  );
};

export default Account;
