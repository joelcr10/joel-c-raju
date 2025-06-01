import { Link } from "react-router-dom";
import { React, useState } from "react";
import Achievements from "./Achievements";
// icons
import { BsArrowRight, BsFillCircleFill } from "react-icons/bs";
import { SiTensorflow, SiRaspberrypi, SiExpress } from "react-icons/si";
import {
  BiLogoHtml5,
  BiLogoCss3,
  BiLogoJavascript,
  BiLogoRedux,
  BiLogoReact,
  BiLogoPostgresql,
  BiLogoMongodb,
  BiLogoNodejs,
  BiLogoFlutter,
  BiLogoFirebase,
  BiLogoPython,
  BiLogoPhp,
  BiLogoTelegram,
  BiLogoJquery,
} from "react-icons/bi";
// images
import shopkart from "./assets/images/shopkart.png";
import dojoBlog from "./assets/images/dojoBlog.png";
import socio from "./assets/images/socio.png";
import lco from "./assets/images/lco.png";
import swiftaid from "./assets/images/swiftaid.png";
import fruits from "./assets/images/fruits.png";
import codequest from "./assets/images/codequest.png";
import connect from "./assets/images/connect.png";
import snap from "./assets/images/snap.png";
import Footer from "./Footer";
import SmallProjects from "./SmallProject";
import imdb from "./assets/images/imdb.png";
import ilpex from "./assets/images/ilpex.png";

function BuildProject(props) {
  const [isHover, setIsHover] = useState(false);
  const [bgColor, setBgColor] = useState("None");

  const projectBackground = {
    overflow: "hidden",
    position: "relative",
    maxHeight: isHover ? "1000px" : "400px",
    transition: "max-height 2s ease-in-out",
    paddingTop: "20px",
    marginTop: "0px",
    borderTop: "1px solid rgba(59, 59, 59, 0.12)",
    boxShadow: "inset 0 -4px 6px -4px rgba(0, 0, 0, 0.3)",
    zIndex: "2",
  };

  const sphere = {
    position: "absolute",
    WebkitTransition: "all ease-in 2s",
    MozTransition: "all ease-in 2s",
    transition: "all ease-in 2s",
    left: isHover ? "-20%" : "6%",
    borderRadius: isHover ? "0%" : "50%",
    zIndex: "-1",
    fontSize: isHover ? "5000px" : "30px",
    opacity: 0.7,
  };

  const projectImage = {
    width: "100%",
    height: "auto",
    margin: "0",
    filter: isHover ? "drop-shadow(3px 5px 5px rgb(0 0 0 / 0.8))" : "",
    transform: isHover
      ? "scale(1) translateY(20px)"
      : "scale(0.8) translateY(-30px)",
    transition: "filter 2s ease-in-out, transform 2s ease-in-out",
    // position: "relative",
  };

  const projectEnter = (color) => {
    if (color === "orange") {
      setBgColor("rgb(240,127,20)");
    } else if (color === "blue") {
      setBgColor("rgb(14, 109, 209)");
    } else if (color === "light-blue") {
      setBgColor("rgb(85,178,248)");
    } else if (color === "green") {
      setBgColor("rgb(95,187,128)");
    } else if (color === "yellow") {
      setBgColor("rgb(215, 212, 23)");
    } else if (color === "dark-blue") {
      setBgColor("rgb(35,47,71)");
    } else if (color === "red") {
      setBgColor("rgb(246, 67, 67)");
    } else if (color === "purple") {
      setBgColor("rgb(109,86,255)");
    } else if (color === "tangerine") {
      setBgColor("rgb(255,193,7)");
    } else if (color === "violet") {
      setBgColor("rgb(106,19,204)");
    }

    setIsHover(true);
  };

  const projectLeave = () => {
    setBgColor("None");
    setIsHover(false);
  };

  function scrollEffect() {
    console.log("scrolling");
  }

  return (
    <div
      style={projectBackground}
      onMouseEnter={() => projectEnter(props.color)}
      onMouseLeave={() => projectLeave()}
      onScroll={() => scrollEffect()}
    >
      <div className="project-container">
        <div className="project-text">
          <div className="project-left">
            <h1>
              <BsFillCircleFill className={`${props.color}`} style={sphere} />
              {props.project}
            </h1>
            {/* <h1><span style={sphere} className={props.color}></span>{props.project}</h1> */}
            <label>{props.tagline}</label>
            <div className="tech-stack">
              {props.icons.map((icon) => {
                // Check if icon is a string or a React component
                const IconComponent = icon;
                return <IconComponent key={icon} />;
              })}
            </div>
          </div>
          <div className="project-right">
            <p>{props.description}</p>

            <Link to={props.link} target="_blank">
              View Projects{" "}
              <BsArrowRight className={`right-arrow ${props.color}`} />
            </Link>
          </div>
        </div>
        <img src={props.image} alt="" style={projectImage} />
      </div>
    </div>
  );
}
const Projects = () => {
  return (
    <div className="projects">
      <BuildProject
        project="ILPex"
        tagline="E-LEARNING TRACKING MOBILE APPLICATION"
        description="A React-Native mobile application that is used by L&D team to track the performance and progress of trainees in the E-Learning phase."
        link=""
        image={ilpex}
        color="purple"
        icons={[BiLogoReact, BiLogoNodejs, BiLogoPostgresql, BiLogoRedux]}
      />
      <BuildProject
        project="IMDb-Clone"
        tagline="MOVIES, TV SHOWS & CELEBS"
        description="A React website that uses TMDB API to fetch the latest Movies and TV shows, where users can rate and write review about any movie/tv-show."
        link="https://github.com/joelcr10/imdb/tree/dev"
        image={imdb}
        color="orange"
        icons={[BiLogoHtml5, BiLogoJavascript, BiLogoCss3, BiLogoFirebase]}
      />
      <BuildProject
        project="learnchess"
        tagline="STARTUP BUSINESS WEBSITE"
        description="A Website developed for an Indian startup that teaches chess to 500+ children across 10+ countries."
        link="https://learnchess.online/"
        image={lco}
        color="yellow"
        icons={[BiLogoHtml5, BiLogoJavascript, BiLogoCss3, BiLogoPhp]}
      />

      <BuildProject
        project="Dojo Blog"
        tagline="ONLINE BLOGGING WEBSITE"
        description="An interactive Web platform that offers Users the opportunity to Read, Write and Publish their blogs."
        link="https://joelcr10.github.io/dojo-blog/"
        image={dojoBlog}
        color="blue"
        icons={[
          BiLogoMongodb,
          SiExpress,
          BiLogoReact,
          BiLogoNodejs,
          BiLogoHtml5,
          BiLogoJavascript,
          BiLogoCss3,
        ]}
      />
      <BuildProject
        project="Snap URL"
        tagline="URL SHORTENING WEBSITE"
        description="Contributed to an Open-Source project by adding a feature that generates QR code for shortened link and also Designed and developed the github contributers page."
        link="https://app.snapurl.in/"
        image={snap}
        color="violet"
        icons={[
          BiLogoMongodb,
          SiExpress,
          BiLogoReact,
          BiLogoNodejs,
          BiLogoHtml5,
          BiLogoJavascript,
          BiLogoCss3,
        ]}
      />

      <BuildProject
        project="ShopKart"
        tagline="FASHION E-COMMERCE WEBSITE"
        description="An elegantly designed React-based e-commerce platform specializing in the retail of fashionable apparel and accessories."
        link="https://joelcr10.github.io/shopkart/"
        image={shopkart}
        color="orange"
        icons={[BiLogoReact, BiLogoHtml5, BiLogoJavascript, BiLogoCss3]}
      />

      <BuildProject
        project="E-Rot Detector"
        tagline="ROTTEN FRUITS DETECTION WEBAPP"
        description="A web application employing image classification technology for the identification of spoiled fruits, with a Raspberry Pi-based gas sensor system for real-time monitoring of emitted gases."
        link="https://github.com/joelcr10/fruits-spoilage-detection"
        image={fruits}
        color="light-blue"
        icons={[
          BiLogoFlutter,
          BiLogoFirebase,
          BiLogoReact,
          BiLogoHtml5,
          BiLogoCss3,
          BiLogoPython,
          SiTensorflow,
          SiRaspberrypi,
        ]}
      />

      <BuildProject
        project="Socio"
        tagline="SOCIAL NETWORKING PLATFORM"
        description="A social networking platform tailored for individuals to share their visual narratives exclusively with close associates and peers."
        link="https://joelcr10.github.io/socio/"
        image={socio}
        color="green"
        icons={[BiLogoReact, BiLogoHtml5, BiLogoJavascript, BiLogoCss3]}
      />

      <BuildProject
        project="SwiftAid"
        tagline="EMERGENCY MOBILE APPLICATION"
        description="An advanced mobile application designed to connect users with nearby medical professionals in urgent situations, ensuring prompt access to healthcare services."
        link="https://github.com/joelcr10/Swiftaid"
        image={swiftaid}
        color="dark-blue"
        icons={[BiLogoFlutter, BiLogoFirebase]}
      />

      <BuildProject
        project="Code Quest"
        tagline="TREASURE HUNT GAME"
        description="Designed and implemented a Treasure Hunt game on the Telegram platform for the Tech-fest 2023 event, streamlining score updates and facilitating seamless team progress tracking."
        link="https://t.me/CodeQuestBot"
        image={codequest}
        color="purple"
        icons={[BiLogoPython, BiLogoTelegram, BiLogoFirebase]}
      />

      {/* <BuildProject
                project = "Speedflow-X"
                tagline = "PRODUCT LANDING PAGE"
                description = "Designed and Developed a landing page website for showcasing the newly launched Adidas football boots."
                link = "https://joelcr10.github.io/Adidas-x-Speedflow--Landing-Page-/"
                image = {adidas}
                color = "red"
                icons = {[BiLogoCss3,BiLogoJavascript,BiLogoHtml5]}
            /> */}
      <BuildProject
        project="Connect Four"
        tagline="JAVASCRIPT MULTIPLAYER GAME"
        description="A multiplayer JavaScript game where two players aim to align four colored dots either horizontally, vertically, or diagonally for victory"
        link="https://joelcr10.github.io/Connect-4-Game/"
        image={connect}
        color="red"
        icons={[BiLogoCss3, BiLogoJavascript, BiLogoHtml5, BiLogoJquery]}
      />

      {/* <SmallProjects /> */}
      <Achievements />
      <Footer />
    </div>
  );
};

export default Projects;
