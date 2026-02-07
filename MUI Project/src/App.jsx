import './App.css'
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';

function App() {

  const MyButton = styled(Button)({
    backgroundColor:''
  })

  return (
 <>
  <Button variant="contained" color='secondary' sx={{
    bgcolor:'secondary',
    '&:hover': {
     bgcolor:'blue'
    }
  }}
   startIcon={<DeleteIcon/>}
  >Contained</Button>
  <MyButton>hello</MyButton>
  <Typography variant='h2'>
    hello world
  </Typography>
 </>
  )
}

export default App
