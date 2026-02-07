import Stack from "@mui/material/Stack";
import "./App.css";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Feed from "./components/Feed";
import RightBar from "./components/RightBar";
import Box from "@mui/material/Box";

function App() {
  return (
    <>
    {/* <Box  position={'sticky'} top={0}> */}
      <Navbar />
    {/* </Box> */}
      
      <Stack direction={'row'} justifyContent={'space-between'} spacing={1}>
        <Sidebar/>
        <Feed/>
        <RightBar/>
      </Stack>
    </>
  );
}

export default App;
