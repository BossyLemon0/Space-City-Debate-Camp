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
            setDescription('NEW!')
        }
        if(event.target.innerText === "Original Oratory"){
            setTitle('Original Oratory')
            setDescription('')
        }
        if(event.target.innerText === "Informative"){
            setTitle('Informative')
            setDescription('')
        }
        if(event.target.innerText === "Dramatic Interp"){
            setTitle('Dramatic Interp')
            setDescription('')
        }
        if(event.target.innerText === "Program Oral Interp"){
            setTitle('Program Oral Interp')
            setDescription('')
        }
        if(event.target.innerText === "Prose"){
            setTitle('Prose')
            setDescription('')
        }
        if(event.target.innerText === "Poetry"){
            setTitle('Poetry')
            setDescription('')
        }
        if(event.target.innerText === "Worlds Schools"){
            setTitle('Worlds Schools')
            setDescription('')
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