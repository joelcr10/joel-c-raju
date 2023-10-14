import { Link } from "react-router-dom";
import {BsArrowRight, BsFillCircleFill} from 'react-icons/bs';
import {SiTensorflow} from 'react-icons/si'
import {BiLogoHtml5,BiLogoCss3,BiLogoJavascript,BiLogoReact,BiLogoMongodb,BiLogoNodejs,BiLogoFlutter,BiLogoFirebase, BiLogoPython,BiLogoPhp} from 'react-icons/bi';
import {SiExpress} from 'react-icons/si';
import shopkart from './assets/images/shopkart.png';
import dojoBlog from './assets/images/dojoBlog.png';
import socio from './assets/images/socio.png';
import lco from './assets/images/lco.png';
import swiftaid from "./assets/images/swiftaid.png";
import fruits from "./assets/images/fruits.png";
import adidas from "./assets/images/adidas.png";
const Projects = () => {
    return ( 
        <div className="projects">
            {/* project learnchess.online */}
            <div className="project-container">
                <div className="project-text">
                    <div className="project-left">
                        <h1><BsFillCircleFill className="circle yellow"/>learnchess</h1>
                        <label>STARTUP BUSINESS WEBSITE</label>
                        <div className="tech-stack">
                  
                            <BiLogoHtml5/>
                            <BiLogoJavascript/>
                            <BiLogoCss3/>
                            <BiLogoPhp/>
                        </div>
                    </div>
                    <div className="project-right">
                        <p>A Website developed for an Indian startup that teaches chess to 500+ children across 10+ countries.</p>
                        
                        <Link to={"https://learnchess.online/"} target="_blank">View Projects <BsArrowRight className="right-arrow yellow"/></Link>
                    </div>
                </div>
                <img src={lco} alt="" className="project-image" />
            </div>

            {/* project dojo blog */}
            <div className="project-container">
                <div className="project-text">
                    <div className="project-left">
                        <h1><BsFillCircleFill className="circle blue"/>Dojo Blog</h1>
                        <label>ONLINE BLOGGING WEBSITE</label>
                        <div className="tech-stack">
                            <BiLogoMongodb/>
                            <SiExpress/>
                            <BiLogoReact/>
                            <BiLogoNodejs/>
                            <BiLogoHtml5/>
                            <BiLogoJavascript/>
                            <BiLogoCss3/>
                            
                            
                            
                            
                        </div>
                    </div>
                    <div className="project-right">
                        <p>An interactive Web platform that offers Users the opportunity to Read, Write and Publish their blogs.</p>
                        
                        <Link to={"https://joelcr10.github.io/shopkart/"} target="_blank">View Projects <BsArrowRight className="right-arrow blue"/></Link>
                    </div>
                </div>
                <img src={dojoBlog} alt="" className="project-image" />
            </div>

            {/* project shopkart */}
            <div className="project-container">
                <div className="project-text">
                    <div className="project-left">
                        <h1><BsFillCircleFill className="circle orange"/>ShopKart</h1>
                        <label>FASHION E-COMMERCE WEBSITE</label>
                        <div className="tech-stack">
                            <BiLogoHtml5 alt="html5"/>
                            <BiLogoJavascript/>
                            <BiLogoCss3/>
                            <BiLogoReact/>
                        </div>
                    </div>
                    <div className="project-right">
                        <p>An elegantly designed React-based e-commerce platform specializing in the retail of fashionable apparel and accessories.</p>
                        
                        <Link to={"https://joelcr10.github.io/shopkart/"} target="_blank">View Projects <BsArrowRight className="right-arrow orange"/></Link>
                    </div>
                </div>
                <img src={shopkart} alt="" className="project-image" />
            </div>

            {/* project fruits */}
            <div className="project-container">
                <div className="project-text">
                    <div className="project-left">
                        <h1><BsFillCircleFill className="circle light-blue"/>E-Rot Detector</h1>
                        <label>ROTTEN FRUITS DETECTION WEBAPP</label>
                        <div className="tech-stack">
                            <BiLogoFlutter/>
                            <BiLogoFirebase/>
                            <BiLogoReact/>
                            <BiLogoHtml5/>
                            <BiLogoCss3/>
                            <BiLogoPython/>
                            <SiTensorflow/>
                        </div>
                    </div>
                    <div className="project-right">
                        <p>A web application employing image classification technology for the identification of spoiled fruits, with a Raspberry Pi-based gas sensor system for real-time monitoring of emitted gases.</p>
                        
                        <Link to={"https://github.com/joelcr10/fruits-spoilage-detection"} target="_blank">View Projects <BsArrowRight className="right-arrow light-blue"/></Link>
                    </div>
                </div>
                <img src={fruits} alt="" className="project-image" />
            </div>
        
            {/* project socio */}
            <div className="project-container">
                <div className="project-text">
                    <div className="project-left">
                        <h1><BsFillCircleFill className="circle green"/>Socio</h1>
                        <label>SOCIAL NETWORKING PLATFORM</label>
                        <div className="tech-stack">
                            <BiLogoReact/>
                            <BiLogoHtml5/>
                            <BiLogoJavascript/>
                            <BiLogoCss3/>
                        </div>
                    </div>
                    <div className="project-right">
                        <p>A social networking platform tailored for individuals to share their visual narratives exclusively with close associates and peers.</p>
                        
                        <Link to={"https://joelcr10.github.io/socio/"} target="_blank">View Projects <BsArrowRight className="right-arrow green"/></Link>
                    </div>
                </div>
                <img src={socio} alt="" className="project-image" />
            </div>

            
            {/* project swiftaid */}
            <div className="project-container">
                <div className="project-text">
                    <div className="project-left">
                        <h1><BsFillCircleFill className="circle dark-blue"/>SwiftAid</h1>
                        <label>EMERGENCY MOBILE APPLICATION</label>
                        <div className="tech-stack">
                            <BiLogoFlutter/>
                            <BiLogoFirebase/>
                        </div>
                    </div>
                    <div className="project-right">
                        <p>An advanced mobile application designed to connect users with nearby medical professionals in urgent situations, ensuring prompt access to healthcare services.</p>
                        
                        <Link to={"https://github.com/joelcr10/Swiftaid"} target="_blank">View Projects <BsArrowRight className="right-arrow dark-blue"/></Link>
                    </div>
                </div>
                <img src={swiftaid} alt="" className="project-image" />
            </div>

            {/* project adidas */}
            <div className="project-container">
                <div className="project-text">
                    <div className="project-left">
                        <h1><BsFillCircleFill className="circle red"/>Speedflow-X</h1>
                        <label>PRODUCT LANDING PAGE</label>
                        <div className="tech-stack">
                            <BiLogoHtml5/>
                            <BiLogoJavascript/>
                            <BiLogoCss3/>
    
                        </div>
                    </div>
                    <div className="project-right">
                        <p>Designed and Developed a landing page website for showcasing the newly launched Adidas football boots</p>
                        
                        <Link to={"https://joelcr10.github.io/Adidas-x-Speedflow--Landing-Page-/"} target="_blank">View Projects <BsArrowRight className="right-arrow red"/></Link>
                    </div>
                </div>
                <img src={adidas} alt="" className="project-image" />
            </div>


        </div>
     );
}
 
export default Projects;