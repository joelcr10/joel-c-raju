import {BsArrowRight, BsFillCircleFill} from 'react-icons/bs';
import {Link} from "react-router-dom";

const Footer = () => {
    return ( 
        <div className="footer">
            <h1><BsFillCircleFill className="circle red"/>Contact</h1>
            <div className="contact">
                <Link to={"https://www.linkedin.com/in/jcr2000/"}>Linkedln</Link>
                <Link to={"https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=joelcraju@gmail.com"} target='_blank'>Email</Link>
                <Link to={"./assets/Joel_C_Raju_Resume2.pdf"} target='_blank' download>Resume</Link>
            </div>
        </div>
     );
}
 
export default Footer;