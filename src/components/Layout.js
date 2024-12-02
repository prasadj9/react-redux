import { Box } from "@mui/material";
import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";

const Layout = () => {
  return (
    <>
      <Box sx={{ height: "100%", display: "flex", flexDirection: "column" }}>
        <Header />
        <Box
          sx={{
            flexGrow: 1,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Outlet />
        </Box>
      </Box>
    </>
  );
};

export default Layout;
