import { useState } from 'react';
import {Box,InputBase,Button,styled} from '@mui/material';
import { getWeather } from '../services/api';

const Container= styled(Box)`
background:#445A6F;
padding:10px;
`
const Input = styled(InputBase)`
color:#FFF;
marginRight:20px;
fontSize:18px;
`

const GetButton= styled(Button)`
background:#e67e22;
`

const Form = ({setResult})=>{
const [data,setData]= useState({city:'',country:''})


const handlechange=(e)=>{
    setData({...data,[e.target.name]:e.target.value})
    console.log(data)

}

const getWeatherInfo= async ()=>{
let response = await getWeather(data.city,data.country);
setResult(response);
}


    return(
  <Container>
<Input
placeholder='City'
onChange={(e)=>handlechange(e)} name='city'
/>
<Input
placeholder='Country' onChange={(e)=>handlechange(e)} name='country'
/>
<GetButton variant='contained' 
onClick={()=>getWeatherInfo()}
>Get Weather</GetButton>
  </Container>
    )
}
export default Form;