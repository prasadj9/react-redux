import { getUsers } from "../redux/features/user/userSlice";
import { useDispatch, useSelector } from "react-redux";
import { Box, Button, CircularProgress, Grid, Typography } from "@mui/material";
import UserCard from "./UserCard";

const UserData = () => {
  const dispatch = useDispatch();
  const { data, status, isLoading, error } = useSelector(
    (state) => state.users
  );

  const handleclick = () => {
    dispatch(getUsers());
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        height: "100%",
        width: "100%",
        padding: 2,
      }}
    >
      <Typography variant="h5" >
        userData 
      </Typography>
      {/* Get status */}
      <Typography variant="body1">
        <b>Status :</b>
        {status}
      </Typography>
      {/* Button to fetch users */}
      <Button onClick={handleclick} variant="contained" color="secondary"> 
        Get data
      </Button>

      {/* handle Loading and Error */}
      {isLoading && <CircularProgress variant="indeterminate" />}
      {error && (
        <Typography variant="body1" color="error" gutterBottom>
          {error}
        </Typography>
      )}

      {/* Show user data */}
      {!error && !isLoading && (
        <Grid container spacing="20px" sx={{ marginTop : 1.5, justifyContent : 'center', alignItems : 'center'}}>
        {data?.map((user) => (
          <Grid item key={user.id}>
            <UserCard user={user} />
          </Grid>
        ))}
      </Grid>
      )}

    </Box>
  );
};

export default UserData;
