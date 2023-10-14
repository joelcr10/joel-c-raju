import Lottie from "lottie-react";
import Projects from "./Projects";
import dev from './assets/images/dev.json';
import setup from './assets/images/setup.json';
import abstract from './assets/images/abstract background.json'
const Home = () => {
    return ( 
        <div>
            <div className="home">
            <Lottie className="home-background" animationData={abstract} loop={true}/>
            <Lottie className="dev-animation" animationData={setup} loop={true} />
            <div className="home-text">
                <h1 id="top-text"><span style={{color: "#317DCF"}}>Heyyyy</span> There!</h1>
                <h1 id="bottom-text">I'm Joel, a Software Engineer based in India</h1>
            </div>
            </div>
            <Projects />
        </div>
     );
}
 
export default Home;