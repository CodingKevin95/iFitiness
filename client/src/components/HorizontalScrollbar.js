import { Box } from "@mui/material"
import BodyPart from "./BodyPart"
import "../App.css"


function HorizontalScrollbar({data, bodyPart, setBodyPart}) {
    return(
        <div className="boxes">
            {data.map((item) => (<Box 
            key={item.id || item}
            itemID={item.id || item}
            title={item.id || item}
            m="0 40px">
                <BodyPart item={item} setBodyPart={setBodyPart} bodyPart={bodyPart} />
            </Box> ))}
        </div>
    )
}

export default HorizontalScrollbar