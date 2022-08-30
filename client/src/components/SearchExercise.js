import { useEffect, useState } from "react"
import { Box, Stack, TextField, Typography } from "@mui/material"
import { Button } from "react-bootstrap"
import { exerciseOptions, fetchData } from '../utils/fetchData'
import HorizontalScrollbar from "./HorizontalScrollbar"

function SearchExercise({setExercises, bodyPart, setBodyPart}) {

const [search, setSearch] = useState('');
const [bodyParts, setBodyParts] = useState([]);
// const [exercises, setExercises] = useState([]);

useEffect(() => {
    const fetchExercisesData = async () => {
        const bodyPartData = await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList', exerciseOptions)

        setBodyParts(['all', ...bodyPartData])
    }
    fetchExercisesData();
}, [])

const handleSearch = async () => {
    if (search) {
        const exercisesData = await fetchData('https://exercisedb.p.rapidapi.com/exercises', 
        exerciseOptions)
        
        const searchedExercises = exercisesData.filter(
        (exercise) => exercise.name.toLowerCase().includes(search)
            || exercise.target.toLowerCase().includes(search)
            || exercise.equipment.toLowerCase().includes(search)
            || exercise.bodyPart.toLowerCase().includes(search),
        );

        setSearch('');
        setExercises(searchedExercises);
    }
}

    return (
        <Stack alignItems="Center" mt= "37px"
        justifyContent='center' p='20px' >
            <Typography fontWeight={700} sx={{
                fontSize: {lg:'44px', xs: "30px"}}}
                mt='25px' textAlign="center" fontFamily='consolas'>
                What exercise do you want to learn?
            </Typography>
            <Box position="relative" mb="72px">
                <input placeholder="Search exercise" value={search} onChange={(event) => setSearch(event.target.value.toLowerCase())}/>
                <Button className="search-btn" onClick={handleSearch}>
                    Search
                </Button>
            </Box>
            <Box xs={{ position: 'relative', width: '100%', p: '20px'}} >
                <HorizontalScrollbar data={bodyParts} bodyParts setBodyPart={setBodyPart} bodyPart={bodyPart} />
            </Box>
        </Stack>
    )
}

export default SearchExercise