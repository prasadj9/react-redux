import { Box } from "@mui/material";
import "./App.css";

import Counter from "./components/Counter";
function App() {
  return(
    <>
    <Box sx={{ height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center', padding : 4 }}>
    <Counter/>
    </Box>
    </>
  )
}

export default App;
