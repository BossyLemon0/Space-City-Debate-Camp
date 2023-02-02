import React from "react";
import "../styles/MiscPages.css"
import { Card, Box } from "@mui/material";
import { Modal } from "react-bootstrap";
import { useState } from "react";

export default function CampInfo(props){
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const handleShow = (event) =>{ 
        console.log(event.target.innerText)
        if(event.target.innerText === "Extemp"){
            setTitle('Extemp')
            setDescription(`An extemporaneous speech is a spoken presentation of an argument,
             narration, or explanation on a subject that has not been previously outlined extensively, sometimes not at all.
              The extemporaneous speech focuses on persuading or informing an audience about a particular topic.
               There is limited prep time in this activity.`)
        }
        if(event.target.innerText === "Original Oratory"){
            setTitle('Original Oratory')
            setDescription(`Original Oratory is a speech written by the student with the intent to inform or persuade the audience on a topic of significance.
             Oratory gives students the unique opportunity to showcase their voice and passion for their topic.`)
        }
        if(event.target.innerText === "Informative"){
            setTitle('Informative')
            setDescription(`Informative speaking generally centers on talking about people, events, processes, places, or things.
             Informing an audience about one of these subjects without being persuasive is often a difficult task to complete.`)
        }
        if(event.target.innerText === "Dramatic Interp"){
            setTitle('Dramatic Interp')
            setDescription(`Interprets and presents a piece of literature using voice,
             body and facial expression. Usually the material is almost exclusively dialogue with almost no narration.`)
        }
        if(event.target.innerText === "Program Oral Interp"){
            setTitle('Program Oral Interp')
            setDescription(` A program of thematically-linked selections,
             chosen from two or three different genres of competitive interpretation (prose/poetry/drama).
              A primary focus of this event should be on the development of the theme through the use of narrative/story,
               language, and/or characterization.`)
        }
        if(event.target.innerText === "Prose"){
            setTitle('Prose')
            setDescription(`A fiction or non-fiction performance piece, which may be drawn from a short story, essay, or novel.
             The focus of this event is on the development of the narrative/story.`)
        }
        if(event.target.innerText === "Poetry"){
            setTitle('Poetry')
            setDescription(`Characterized by writing that conveys ideas, experiences, and emotions through language and expression.
             The performance centralizes on the ability to convey the message of the story through body, tone, and expressions.`)
        }
        if(event.target.innerText === "Worlds Schools"){
            setTitle('Worlds Schools')
            setDescription(`3 v 3 format of debate with teams of 3-5. Emphasis on logical,
             intuitive argumentation with reasonable interpretations of the world, systems, and interactions.`)
        }
        setShow(true)
        ;}

    return(
        <>
        <div className="abtEvents">
            <div className="difCard">
            <Card sx={{ background: "#0C0F30", color:'white', minWidth: 575, display:"flex",
             justifyContent:"center", alignItems:"center"}}>
                <Box
                      component="form"
                      sx={{
                        '& > :not(style)': { m: 3, width: '55ch', fontSize:"25px", fontWeight:"bold"},
                      }}
                      noValidate
                      autoComplete="off">
                        <div className="header">
                            There's a multitude of events that Space City has to offer, check down below to learn a little more about each event:
                        </div>
                        <div className="list">
                        <div className="lItem" onClick={handleShow}>Extemp</div>
                        <div className="lItem2" onClick={handleShow}>Original Oratory</div>
                        <div className="lItem2" onClick={handleShow}>Informative</div>
                        <div className="lItem2" onClick={handleShow}>Dramatic Interp</div>
                        <div className="lItem2" onClick={handleShow}>Program Oral Interp</div>
                        <div className="lItem2" onClick={handleShow}>Prose</div>
                        <div className="lItem2" onClick={handleShow}>Poetry</div>
                        <div className="lItem2" onClick={handleShow}>Worlds Schools</div>
                        </div>
                </Box>
            </Card>
            </div>
        </div>
        <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        centered
        >
        <Modal.Header closeButton  >
          <Modal.Title style={{fontSize:35}}>{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body style={{fontSize:29, fontWeight:"regular"}}>
          <div>{description}</div>
        
        </Modal.Body>
        </Modal>
        </>
    );
}