import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Buttons from './components/Buttons'
import UploadFile from './components/UploadFile'
import SearchBar from './components/SearchBar'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { green, orange } from '@mui/material/colors';
import CssBaseline from '@mui/material/CssBaseline'
import Navbar from './components/Navbar'
import ThemeSwitch from './components/ThemeSwitch'


function App() {

  const [lightMode,setLightMode] = useState(false)
    const theme = createTheme({
  palette: {
   mode: lightMode ? 'light' : 'dark'
  },
});
  return (
   <div>
     <ThemeProvider theme={theme}>
      <CssBaseline/>
      <Navbar/>
      <ThemeSwitch setLightMode={setLightMode}/>
    <Buttons/>
    <UploadFile/>
    <SearchBar/>
    </ThemeProvider>
   </div>
  )
}

export default App
