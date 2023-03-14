import {Box, Typography,styled} from '@mui/material';
import {LocationOn,SettingsBrightness,Opacity,Brightness5,Brightness6,Cloud} from '@mui/icons-material';

const Row = styled(Typography)`
padding:10px;
font-size:20px;
letter-spacing:2px;
`

const Information = ({result})=>{
    return(
result && Object.keys(result).length > 0 ?
<Box style={{margin:'30px 60px',}} >
<Row><LocationOn/>Location:{result.name},{result.sys.country}</Row>
<Row><SettingsBrightness/>Temperature:{result.main.temp}</Row>
<Row><Opacity/>Humidity:{result.main.humidity}%</Row>
<Row><Brightness5/>Sun Rise:{new Date(result.sys.sunrise*1000).toLocaleTimeString()}</Row>
<Row><Brightness6/>Sun Set:{new Date(result.sys.sunset*1000).toLocaleTimeString()}</Row>
<Row><Cloud/>Clouds:{result.clouds.all}%</Row>

</Box>
: null
    )
}
export default Information;