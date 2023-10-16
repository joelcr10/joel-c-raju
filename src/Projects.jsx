import { Link } from "react-router-dom";
import {BsArrowRight, BsFillCircleFill} from 'react-icons/bs';
import React from "react";
import {SiTensorflow} from 'react-icons/si'
import {BiLogoHtml5,BiLogoCss3,BiLogoJavascript,BiLogoReact,BiLogoMongodb,BiLogoNodejs,BiLogoFlutter,BiLogoFirebase, BiLogoPython,BiLogoPhp,BiLogoTelegram} from 'react-icons/bi';
import {SiExpress} from 'react-icons/si';
import shopkart from './assets/images/shopkart.png';
import dojoBlog from './assets/images/dojoBlog.png';
import socio from './assets/images/socio.png';
import lco from './assets/images/lco.png';
import swiftaid from "./assets/images/swiftaid.png";
import fruits from "./assets/images/fruits.png";
import adidas from "./assets/images/adidas.png";
import codequest from "./assets/images/codequest.png";
import Footer from "./Footer";

function BuildProject(props){
    return(
        <div className="project-container">
                <div className="project-text">
                    <div className="project-left">
                        <h1><BsFillCircleFill className={`circle ${props.color}`}/>{props.project}</h1>
                        <label>{props.tagline}</label>
                        <div className="tech-stack">
                            {props.icons.map(icon => {
                            // Check if icon is a string or a React component
                                const IconComponent = icon;
                                return <IconComponent key={icon} />;
                            })}
                        </div>
                    </div>
                    <div className="project-right">
                        <p>{props.description}</p>
                        
                        <Link to={props.link} target="_blank">View Projects <BsArrowRight className={`right-arrow ${props.color}`}/></Link>
                    </div>
                </div>
                <img src={props.image} alt="" className="project-image" />
            </div>
    );
}
const Projects = () => {
    return ( 
        <div className="projects">
            <BuildProject 
                project = "learnchess"
                tagline = "STARTUP BUSINESS WEBSITE"
                description = "A Website developed for an Indian startup that teaches chess to 500+ children across 10+ countries."
                link = "https://learnchess.online/"
                image = {lco}
                color = 'yellow'
                icons = {[BiLogoHtml5,BiLogoJavascript,BiLogoCss3,BiLogoPhp]}
            />

            <BuildProject
                project = "Dojo Blog"
                tagline = "ONLINE BLOGGING WEBSITE"
                description = "An interactive Web platform that offers Users the opportunity to Read, Write and Publish their blogs."
                link = "https://joelcr10.github.io/dojo-blog/"
                image = {dojoBlog}
                color = "blue"
                icons = {[BiLogoMongodb,SiExpress,BiLogoReact,BiLogoNodejs,BiLogoHtml5,BiLogoJavascript,BiLogoCss3]}
            />

            <BuildProject
                project = "ShopKart"
                tagline = "FASHION E-COMMERCE WEBSITE"
                description = "An elegantly designed React-based e-commerce platform specializing in the retail of fashionable apparel and accessories."
                link = "https://joelcr10.github.io/shopkart/"
                image = {shopkart}
                color = "orange"
                icons = {[BiLogoReact,BiLogoHtml5,BiLogoJavascript,BiLogoCss3]}
            />

            <BuildProject
                project = "E-Rot Detector"
                tagline = "ROTTEN FRUITS DETECTION WEBAPP"
                description = "A web application employing image classification technology for the identification of spoiled fruits, with a Raspberry Pi-based gas sensor system for real-time monitoring of emitted gases."
                link = "https://github.com/joelcr10/fruits-spoilage-detection"
                image = {fruits}
                color = "light-blue"
                icons = {[BiLogoFlutter,BiLogoFirebase,BiLogoReact,BiLogoHtml5,BiLogoCss3,BiLogoPython,SiTensorflow]}
            />

            <BuildProject
                project = "Socio"
                tagline = "SOCIAL NETWORKING PLATFORM"
                description = "A social networking platform tailored for individuals to share their visual narratives exclusively with close associates and peers."
                link = "https://joelcr10.github.io/socio/"
                image = {socio}
                color = "green"
                icons = {[BiLogoReact,BiLogoHtml5,BiLogoJavascript,BiLogoCss3]}
            />

            <BuildProject
                project = "SwiftAid"
                tagline = "EMERGENCY MOBILE APPLICATION"
                description = "An advanced mobile application designed to connect users with nearby medical professionals in urgent situations, ensuring prompt access to healthcare services."
                link = "https://github.com/joelcr10/Swiftaid"
                image = {swiftaid}
                color = "dark-blue"
                icons = {[BiLogoFlutter,BiLogoFirebase]}
            />

            <BuildProject
                project = "Code Quest"
                tagline = "TREASURE HUNT GAME"
                description = "Designed and implemented a Treasure Hunt game on the Telegram platform for the Tech-fest 2023 event, streamlining score updates and facilitating seamless team progress tracking."
                link = "https://t.me/CodeQuestBot"
                image = {codequest}
                color = "purple"
                icons = {[BiLogoPython,BiLogoTelegram,BiLogoFirebase]}
            />  

            <BuildProject
                project = "Speedflow-X"
                tagline = "PRODUCT LANDING PAGE"
                description = "Designed and Developed a landing page website for showcasing the newly launched Adidas football boots."
                link = "https://joelcr10.github.io/Adidas-x-Speedflow--Landing-Page-/"
                image = {adidas}
                color = "red"
                icons = {[BiLogoCss3,BiLogoJavascript,BiLogoHtml5]}
            />
            <Footer />
        </div>
     );
}
 
export default Projects;