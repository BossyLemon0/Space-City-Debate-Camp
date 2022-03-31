import React from "react";
import Box from '@mui/material/Box';
import OutlinedInput from '@mui/material/OutlinedInput';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import axios from 'axios';


import "../styles/Register.css"
import { Alert } from "@mui/material";



const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};



const names = [
  'Extemp',
  'Original Oratory',
  'Informative',
  'Dramatic interp',
  'Program Oral interp',
  'Humorous interpretation',
  'Prose',
  'Poetry',
  'Worlds Schools',
  'Unsure',
];

var timeSubmitted = new Date();
console.log(timeSubmitted);

export default function SignUp(props){
    

    const [grade, setGrade] = React.useState('');
    const handleChange = (event) => {
        setGrade(event.target.value);
    };
    // const [timeStamp, setTimeStamp] = React.useState('');
    // const handleTimestamp = () => {
    //     setTimeStamp(timeSubmitted);
    // };
    const [fullName, setFullName] = React.useState('');
    const handleFullName = (event) => {
        setFullName(event.target.value);
    };
    const [school, setSchool] = React.useState('');
    const handleSchool = (event) => {
        setSchool(event.target.value);
    };
    const [pronouns, setPronouns] = React.useState('');
    const handlePronouns = (event) => {
        setPronouns(event.target.value);
    };
    const [email, setEmail] = React.useState('');
    const handleEmail = (event) => {
        setEmail(event.target.value);
    };
    const [phoneNumber, setPhoneNumber] = React.useState('');
    const handlePhoneNumber = (event) => {
        setPhoneNumber(event.target.value);
    };
    const [experience, setExperience] = React.useState('');
    const handleExeperience = (event) => {
        setExperience(event.target.value);
    };
      

    const [eventName, setEventName] = React.useState([]);

    const handleChange2 = (event) => {
    const {
          target: { value },
        } = event;
        setEventName(
          // On autofill we get a stringified value.
          typeof value === 'string' ? value.split(',') : value,
        );
      };

    const submit = () =>{
      // handleTimestamp();
        var signupEmail = `${fullName} ${school} (${pronouns}) who is a ${grade} has registered for SCC!
        Here's their info
        Phone: ${phoneNumber} 
        Email: ${email}
        Experience: ${experience}
        Events interested in: ${eventName}
        
        time submitted: ${timeSubmitted}`;
        console.log(signupEmail);
        let data = {
          Timestamp:timeSubmitted.toDateString(),
          Grade:grade,
          "Full Name":fullName,
          School:school,
          Email:email,
          "Phone number":phoneNumber,
          Pronouns:pronouns,
          Experience:experience,
          "Interested Events":eventName.toString()
        }
        console.log(data);
        
        axios.post('https://sheet.best/api/sheets/7b952730-d109-4ed8-b320-0baaee73469b', data).then((response) => {
          if(response){
            console.log(response);
            setGrade('');
            setFullName('');
            setSchool('');
            setEmail('');
            setPhoneNumber('');
            setPronouns('');
            setExperience('');
            setEventName([]);
          }
          else{
            Alert('Something went wrong, try again later. If the form stil does not work, contact the debate team at the social media or email listed.' )
          }
        })
    }

    return(
        <div className="register" >
            <div className="formCard">
 <Card sx={{ minWidth: 675}} >
 <div className="header">Register Now!</div>
 <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '35ch' },
      }}
      noValidate
      autoComplete="off"
    >

      <TextField id="outlined-basic" label="Full Name" variant="outlined" sx={{
        '& > :not(style)': { m: 1, width: '35ch' },
      }} value={fullName} onChange={handleFullName}/>
        <TextField id="outlined-basic" label="Pronouns" variant="outlined" sx={{
        '& > :not(style)': { m: 1, width: '35ch' },
      }} value={pronouns} onChange={handlePronouns}/>

      <div></div>

      <TextField id="outlined-basic" label="School Name" variant="outlined" sx={{
        '& > :not(style)': { m: 1, width: '35ch' },
      }} value={school} onChange={handleSchool}/>
        <TextField id="outlined-basic" label="Phone Number" variant="outlined" sx={{
        '& > :not(style)': { m: 1, width: '35ch' },
      }} value={phoneNumber} onChange={handlePhoneNumber}/>
      
  
    <div></div>
    <TextField id="outlined-basic" label="Email" variant="outlined" sx={{
        '& > :not(style)': { m: 1, width: '35ch' },
      }} value={email} onChange={handleEmail}/>
          <TextField id="outlined-basic" label="Prior experience" variant="outlined" sx={{
        '& > :not(style)': { m: 1, width: '35ch' },
      }} helperText="Brief overview of experience" value={experience} onChange={handleExeperience}/>

    <div></div>

    <FormControl sx={{ m: 1, minWidth: 320 }}>
    <InputLabel id="demo-multiple-checkbox-label">Events</InputLabel>
        <Select
          labelId="demo-multiple-checkbox-label"
          id="demo-multiple-checkbox"
          multiple
          value={eventName}
          onChange={handleChange2}
          input={<OutlinedInput label="Tag" />}
          renderValue={(selected) => selected.join(', ')}
          MenuProps={MenuProps}
        >
          {names.map((name) => (
            <MenuItem key={name} value={name}>
              <Checkbox checked={eventName.indexOf(name) > -1} />
              <ListItemText primary={name} />
            </MenuItem>
          ))}
        </Select>
        <FormHelperText>Select events interested</FormHelperText>
      </FormControl>

      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Grade Level</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={grade}
          label="Grade"
          onChange={handleChange}
        >
        <MenuItem value={"Other"}>Other</MenuItem>
          <MenuItem value={"Freshman"}>Freshman</MenuItem>
          <MenuItem value={"Sophmore"}>Sophmore</MenuItem>
          <MenuItem value={"Junior"}>Junior</MenuItem>
          <MenuItem value={"Senior"}>Senior</MenuItem>
        </Select>
      </FormControl>
      


    <CardActions>
        <Button size="small" onClick={submit}>Submit</Button>
    </CardActions>
    </Box>

    </Card>
    </div>
        </div>
    );
}