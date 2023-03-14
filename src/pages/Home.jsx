import { useState } from 'react';
import {Box,styled} from '@mui/material';
import Sunset from '../assets/images/bg.jpg';
import Form from '../components/form';
import Information from '../components/information';

const Component =styled(Box)({
    height:'100vh',
    display:'flex',
    alignItems:'center',
    width:'65%',
    margin:'0 auto'
})



const Image= styled(Box)({
backgroundImage:`url(${Sunset})`,
width:'27%',
height:'80%',
backgroundSize:'cover',

})

const Home=()=>{
const [result,setResult]= useState({})

    return(
   <Component>
    <Image></Image>
    <Box style= {{width:'73%',height:'80%',border:'1px solid black'}}>
        <Form setResult={setResult}/>
        <Information result={result}/>
    </Box>
   </Component>
    )
}

export default Home;