import { AppBar, Badge, Box, Button, Toolbar, Typography } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Header = () => {
    const count = useSelector(state => state.counter.value)
    
  return (
    <AppBar position="static">
        <Toolbar>
        <Typography sx={{flexGrow : 1}} variant="h6" >My App</Typography>
      <Box sx={{display : 'flex'}} >
      <Badge badgeContent={count} color="secondary">
          <Button variant="contained" component={Link} to="/" disableElevation disableFocusRipple>Counter</Button>
        </Badge>
          <Button variant="contained" component={Link} to="/todo" disableElevation >Todo List</Button>
          <Button variant="contained" component={Link} to="/user" disableElevation >User Data</Button>
      </Box>

        </Toolbar>
    </AppBar>
  );
};

export default Header;
