import tree from "../src/assets/images/tree.png";
import Tilt from 'react-parallax-tilt';
import hacktoberfest from "../src/assets/images/hacktoberfest.png";
import hackerrank from "../src/assets/images/hackerrank.png";
import conf from "../src/assets/images/conf.png";
import sports from "../src/assets/images/sports.png";
import acm from "../src/assets/images/acm.png";
import council from "../src/assets/images/council.png";
import ccp from "../src/assets/images/certified-cloud-practitioner.png";
import { useState } from "react";
const Achievements = () => {
    
    const [hover,setHover] = useState(false);
    
    const hoverOn = (title) =>{
        console.log(title);
        
        setHover(true);
    }
    const hoverOff = () =>{
        console.log("hover off");
        setHover(false);
    }

    const achContainer = {
        width: "350px",
        height: "400px",
        postion: "relative",
        // marginLeft: "50px"
    }

    const achImage = {
        width: "100%",
        height: "100%",
        postion: "absolute",
        WebkitTransition: 'all ease-in 2s',
        MozTransition: "all ease-in 2s",
        transition: "all ease-in 2s",
        filter: "drop-shadow(5px 5px 5px rgba(0, 0, 0, 0.5))",
        filter: hover? "brightness(20%)":"brightness(100%)",
    }

    const achText = {
        display : hover? "block":"none",
        position: "absolute",
        top: "10px",
        left: "20px",
        color: "white",
        textAlign: "left",
        width: "80%"
        
    }


    function AchievementBuilder(props){
        return(
            <div className="ache">
                {/* <Tilt tiltAngleXInitial={0} className="ach">  */}
                <div style={achContainer}>
                    <Tilt tiltAngleXInitial={0} className="ach" glareEnable> 
                        <img src={props.image} alt="" style={achImage} />
                    </Tilt>
                </div>
                <div className="ach-texts">
                    <h1>{props.title}</h1>
                    <p>{props.desc}</p>
                </div>
                {/* </Tilt> */}
                
            </div>
        );
    }
    
    return ( 
        <div className="achievement-container" id="achievements">
            <h1 className="ach-heading">Accolades</h1>
            <div className="achievements">
                {/* <h1>Achievements</h1> */}

                <AchievementBuilder
                    title = "AWS Certified Cloud Practitioner"
                    desc = "Cleared the AWS Certified Cloud Practitioner Exam on Feb 2025. Gained knowledge of AWS services, cloud concepts, security, pricing, and architecture"
                    image = {ccp}
                />

                <AchievementBuilder
                    title = "Conference Paper"
                    desc = 'Published a conference paper on IEEE xplore on the topic "Fruit Freshness Detection using IoT and Deep learning" for International conference on circuit power and computing technologies(ICCPCT).'
                    image = {conf}
                />

                <AchievementBuilder
                title = "Student Council Member"
                desc = "As a Student Council Member at Amal Jyothi College of Engineering, I ensured effective representation, amplifying the voices of fellow students and organizing diverse college-level events."
                image = {council}
                />
                <AchievementBuilder
                    title = "Tree Planted"
                    desc = "Awarded with a tree planted in my Honor for being among the first 50,000 developers to contribute to open-source projects during hacktoberfest 2023."
                    image = {tree}
                    
                />
                <AchievementBuilder
                title = "Web Master"
                desc = "As the Web Master for ACM AJCE, I lead the development and management of the official website. Additionally, I played a vital role in organizing successful events, contributing to their execution."
                image = {acm}
                />
                {/* <AchievementBuilder
                    title = "Hacktoberfest"
                    desc = "Contributed to Open-source project and successfully submitted 4 Pull Requests that were accepted during Hacktoberfest."
                    image = {hacktoberfest}
                /> */}
                
                <AchievementBuilder
                    title = "Sports & Atheletics"
                    desc = "Received several awards in football and 100m Racing events. Participated in several football tournaments representing School, college and church."
                    image = {sports}
                />
            </div> 
        </div>
    );
}
 
export default Achievements;