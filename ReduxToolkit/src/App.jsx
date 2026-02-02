import { useDispatch, useSelector } from 'react-redux'
import './App.css'
import Counter from './components/Counter'
import { changeName } from './store/features/counter/counterSlice';
import Users from './components/Users';

function App() {
  const dispatch = useDispatch();
  // const state = useSelector(state=>state.counter.name)
  // console.log(state)

  return (
   <>
   <Counter/>
   <input
   className='border'
    type="text"
     onChange={(e)=>dispatch(changeName(e.target.value))} />
     <Users/>
   </>
  )
}

export default App
