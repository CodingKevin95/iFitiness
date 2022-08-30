import '../App';
import { Box } from '@mui/material';
import SearchExercise from '../components/SearchExercise'
import Exercises from '../components/Exercises'
import { useState } from 'react';
import '../App.css'

function Home() {
const [exercises, setExercises] = useState([]);
const [bodyPart, setBodyPart] = useState('all')

console.log(bodyPart)

  return (
    <div className="App">
      <Box>
        <SearchExercise setExercises={setExercises} bodyPart={bodyPart} setBodyPart={setBodyPart} />
        <Exercises setExercises={setExercises} bodyPart={bodyPart} exercises={exercises} />
      </Box>
    </div>
  );
}

export default Home;
