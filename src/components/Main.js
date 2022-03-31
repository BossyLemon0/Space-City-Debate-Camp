import React, { useCallback } from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom'
import { CardActionArea } from '@mui/material';
import '../styles/Main.css'
import diffpic from '../images/alex.Moon.png'
import aboutPic from '../images/Ivana-cajina2.png'



export default function Main(props){
    const navigate = useNavigate();
    const toUnique = useCallback(()=> navigate('/Unique', {replace:true}), [navigate]);
    const toAboutCamp = useCallback(()=> navigate('/About', {replace:true}), [navigate]);

    return(
        <div className="main">
        <div className="introText">
            Speech and debate is an activity that cultivates young minds for success, no matter what path they choose. The issue is that many
            of the top speech and debate camps are overpriced and unaffordable for a vast majority of students looking to get into and further themselves
            in the activity. Click below to find out how Space City Debate Camp differs from the rest.
        </div>
        <div className="cards">
            <div className="cardL">
            <Card sx={{ maxWidth: 345, alignItems:"center" }}>
                <CardActionArea onClick={toUnique}>
                    <CardMedia
                        component="img"
                        height="170"
                        image = {diffpic}
                        // image="https://picsum.photos/400/300"
                        alt="green iguana"
                    />
                    <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        Why SCC?
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Find out why so many are choosing SCC over other camps.
                    </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
            </div>
            <div className="cardR" >
            <Card sx={{ maxWidth: 345 }}>
                <CardActionArea onClick={toAboutCamp}>
                    <CardMedia
                        component="img"
                        height="170"
                        image={aboutPic}
                        alt="about"
                    />
                    <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        About The Camp
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Learn more about what SCC has to offer in a wide variety of events. 
                    </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
            </div>
        </div>
        </div>
        //rando pic link 'https://picsum.photos/400/300'

    );
}