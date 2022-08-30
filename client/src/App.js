import './App.css';
import {useNavigate} from "react-router-dom"
import { Box } from '@mui/material';
import SearchExercise from './components/SearchExercise'
import Exercises from './components/Exercises'
import { useState } from 'react';
import Footer from './components/Footer';

function App() {

const navigate = useNavigate();
const [exercises, setExercises] = useState([]);
const [bodyPart, setBodyPart] = useState('all')

console.log(bodyPart)

  return (
    <div className="App">
      <Box>
        <SearchExercise setExercises={setExercises} bodyPart={bodyPart} setBodyPart={setBodyPart} />
        <Exercises setExercises={setExercises} bodyPart={bodyPart} exercises={exercises} />
      </Box>
      <Footer />
    </div>
  );
}

export default App;