import React from "react";
import {Link} from "react-router-dom";
import adidas from "./assets/images/adidas.png";
import lco from "./assets/images/lco.png";
import tictac from "./assets/images/tictac.png";
import connect from "./assets/images/connect.png";
import {BsArrowRight, BsFillCircleFill} from 'react-icons/bs';
import {BiLogoHtml5,BiLogoCss3,BiLogoJquery,BiLogoJavascript,BiLogoReact,BiLogoMongodb,BiLogoNodejs,BiLogoFlutter,BiLogoFirebase, BiLogoPython,BiLogoPhp,BiLogoTelegram} from 'react-icons/bi';


const SmallProjects = () => {
    
    function BuildSmallProject(props){
        return(
            <div className="sp-container">
                <img src={props.image} alt="" className="sp-image"/>
                <h1 className={`title ${props.color}`}>{props.project}</h1>
                <div className="tech-stack">
                            {props.icons.map(icon => {
                            // Check if icon is a string or a React component
                                const IconComponent = icon;
                                return <IconComponent key={icon} />;
                            })}
                </div>
                <p className="sp-description">{props.description}</p>
                <Link to={props.link} target="_blank">View Projects <BsArrowRight className={`right-arrow ${props.color}`}/></Link>

            </div>
        );
    }
    return ( 
        <div className="small-projects">
            <BuildSmallProject 
                image = {connect}
                project = "Connect Four"
                icons = {[BiLogoCss3,BiLogoJavascript,BiLogoHtml5,BiLogoJquery]}
                description = "A multiplayer JavaScript game where two players aim to align four colored dots either horizontally, vertically, or diagonally for victory"
                color = "black"
                link = "https://joelcr10.github.io/Connect-4-Game/"
            />
            <BuildSmallProject 
                image = {tictac}
                project = "Tic-Tac-Toe"
                icons = {[BiLogoCss3,BiLogoJavascript,BiLogoHtml5,BiLogoJquery]}
                description = "A multiplayer JavaScript game wherein two players aim to align identical symbols either horizontally, vertically, or diagonally."
                color = "black"
                link = "https://joelcr10.github.io/Tic-Tac-Toe/"

            />
            

        </div>
     );
}
 
export default SmallProjects;