import FitnessCenterRoundedIcon from '@mui/icons-material/FitnessCenterRounded';
import { Stack, Typography } from '@mui/material'
import "../App.css"

function BodyPart({item, setBodyPart, bodyPart}) {
    return(
        <Stack
        type= "button"
        className='bodyPart-card'
        alignItems='center'
        justifyContent= 'center'
        sx={{
            // borderTop: bodyPart === item ? '4px solid #ff2625' : '',
            backgroundColor: 'ivory',
            // border: 'lightblue solid 1px',
            width: '270px',
            height: '280px',
            padding: '100px'
        }}
        onClick={() => {
            setBodyPart(item);
        }}
        >
            <div></div>
                <FitnessCenterRoundedIcon style={{width:'100px', height: '100px'}}/>
            <Typography fontSize='24px' fontWeight='bold' textTransform='capitalize'>{item}</Typography>
        </Stack>
    )
}

export default BodyPart