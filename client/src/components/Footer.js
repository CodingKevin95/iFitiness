import '../style/Footer.css'
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

function Footer() {
    return (
        <div className='footer'>
            <div className='footerGap'>
                <a href='https://github.com/CodingKevin95' target="_blank" rel="noreferrer">
                    <GitHubIcon style={{width:'50px', height: '50px', color: 'black'}}/>
                </a>
                <a href='https://www.linkedin.com/in/kevins-on/' target="_blank" rel="noreferrer">
                    <LinkedInIcon style={{width:'50px', height: '50px', color: 'black'}}/>
                </a>
            </div>
        </div>
    )
}

export default Footer