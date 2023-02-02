import React from "react";
import "../styles/MiscPages.css"
import { Card, Box } from "@mui/material";

export default function Different(props){

    return(
        <div className="different">
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
                        <div>
                        Space City Camp(SCC) aims to expand equity and opportunity amongst underprivileged debaters from humble beginnings.
                        In order for the stars to truly align, access to resources, coaching, and experience are vital for invigorating
                        new legacies of success amongst marganilized communities. At SCC you can expect the best there is to offer, competing
                        with traditionally well known camps who have curated a rich pipeline between decorated alumni, coaches and educators, 
                        to young debaters. Here at SCC, we work to provide that same environment at no cost to any and all who wish to begin
                        their pathway in the world of forensics.
                        </div>
                </Box>
            </Card>
            </div>
        </div>
    );
}