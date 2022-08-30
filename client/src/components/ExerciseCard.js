import { Link } from 'react-router-dom'
import { Stack, Typography } from '@mui/material'
import '../App.css'

function ExerciseCard({exercise}) {

    return (
        <Link className='exercise-card' to={`/exercise/${exercise.id}`}>
            <img src={exercise.gifUrl} alt={exercise.name} loading='lazy'/>
            <Typography ml='21px' color='#000' fontWeight='bold' mt='11px' textTransform='capitalize'>
                    {exercise.name}
                </Typography>
            <Stack direction="row" justifyContent='center'>
                <div className='buttonLabel'>
                    {exercise.bodyPart.charAt(0).toUpperCase() + exercise.bodyPart.slice(1)}
                </div>
                <div className='buttonLabel'>
                    {exercise.target.charAt(0).toUpperCase() + exercise.target.slice(1)}
                </div>
            </Stack>
        </Link>
    )
}

export default ExerciseCard