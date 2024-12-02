import {
  Card,
  CardContent,
  Typography,
} from "@mui/material";
import React from "react";

const UserCard = ({ user }) => {
  return (
    <Card variant="elevation" sx={{minWidth : 225, padding :1}}>
      <CardContent>
        <Typography variant="h5" gutterBottom>
          {user.firstName} {user.lastName}
        </Typography>
        <Typography variant="body2">Gender : {user.gender}</Typography>
        <Typography variant="body2">Age : {user.age}</Typography>
        <Typography variant="body2">Phone : {user.phone}</Typography>
      </CardContent>
    </Card>
  );
};

export default UserCard;
