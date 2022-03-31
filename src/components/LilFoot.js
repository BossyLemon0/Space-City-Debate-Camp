import React from "react";
import '../styles/LilFoot.css'
import { AiOutlineMail} from "react-icons/ai";
import { BsInstagram } from "react-icons/bs";
import { IconContext } from "react-icons/lib";
// import { Provider } from "react";
// import { display, shadows } from "@mui/system";
// import { ClassNames } from "@emotion/react";
// import { Link } from "react-router-dom";




export default function LilFoot(props){

    return(
        <IconContext.Provider value={{ color:"white", size:"40px"}}>
        <div className="lilFoot">
            <>
            
            <a href={ "mailto:spacecitycamp@gmail.com"} >
                <div className="icons" >
                    <AiOutlineMail />
                </div>
            </a>
            <a target={"_blank"} href={'https://www.instagram.com/spacecitycamp/'} rel={"noreferrer"} >
                <div className="icons" >
                    <BsInstagram />
                </div>
            </a>
            </>
        </div>
        </IconContext.Provider>
    );
}