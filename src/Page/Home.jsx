/* eslint-disable no-unused-vars */
import "./Page.css";
import PIC1 from "./H1.png";
import LOGO from "./LOGO.png";
import CONTACT from "./CONTACT.png";
import QR from "./QR.png";
import S1 from "./S1.jpg";
import S2 from "./S2.jpg";
import S3 from "./S3.jpg";
import S4 from "./S4.jpg";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useForm, ValidationError } from '@formspree/react';
import PDF from "./PDF.pdf"
import C from "./C.png";
import WA from "./WA.png";
const Home = () => {
    const A1=()=>toast.warning("ALL FIELDS ARE MANDATORY!");
    const A3=()=>toast.warning("INVALID EMAIL!");
    const A2=()=>toast.success("RESPONSE SEND");
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    const [data,setData]=useState({
        email:"",
        suggestion:"",
    });
    const handleData=(e)=>{
        const {name,value}=e.target;
        setData({
            ...data,
            [name]:value
        });
    }
    const [state, setState] = useForm("xnnaqoap");
    const submitData=async(e)=>{
        e.preventDefault();
        let eCheck=emailRegex.test(data.email);
        if(data.email===""||data.suggestion===""){
            return A1();
        }
        else if(!eCheck){
            return A3(); 
        }
        else{
            try{
                setState({
                    errors:null,
                    email:data.email,
                    result:data.suggestion,
                    succeeded:true,
                    submitting:true
                })
                setData({email:"",suggestion:""});
                return A2();
            }
            catch(err){
                console.log(err);
            }
        }
    }
return (
    <>
    <ToastContainer theme="dark"/>
    
    <div className="home">
    <div className="h1">
    <div className="h1-logo">
    <img src={LOGO} alt="HOLIK LOGO"></img>
    <img src={C} alt="LOGO"></img>
    </div>
    <div className="h1-content">
    <h2>Your favorites are back!</h2>
    <p>Holik Enterprise: Your Trusted Source for Premium <span>Wholesale</span> T-Shirts</p>
    </div>
    </div>
    <div className="h2">
    <img src={PIC1} alt="MODEL"></img>
    </div>
    </div>
    <div className="collect">
    <div className="collect-1">
    <h2>ABOUT US</h2>
    <p>Holik Enterprise is your go-to source for premium t-shirts in wholesale quantities. We deliver exceptional quality at competitive prices, catering to retailers and resellers. We sell ready made printed t-shirts and plane t-shirts. Send your requirements on our WhatsApp now.</p>
    <a href="https://api.whatsapp.com/send?phone=7987311881&text=Hello%2C+I+saw+your+ad+in+Instagram%2C+I+want+premium+drop+shoulder+t-shirts+for+reselling%21"><button>CHAT NOW</button></a>
    <p>OR</p>
    <img src={QR} alt="QR CODE"></img>
    </div>
    <div className="collect-2">
    <div className="col-1">
    <div className="slider">
    <img src={S1} alt="CLOTHES"></img>
    <h2>Premium drop shoulder T-shirts(XL 40)</h2>
    <NavLink to="/Section1"><button>EXPLORE</button></NavLink>
    </div>
    <div className="slider">
    <img src={S2} alt="CLOTHES"></img>
    <h2>Black drop shoulder T-shirts Anime Prints(L 38)</h2>
    <NavLink to="/Section2"><button>EXPLORE</button></NavLink>
    </div>
    </div>
    <div className="col-1">
    <div className="slider">
    <img src={S3} alt="CLOTHES"></img>
    <h2>Premium drop shoulder T-shirts(L 38)</h2>
    <NavLink to="/Section3"><button>EXPLORE</button></NavLink>
    </div>
    <div className="slider">
    <img src={S4} alt="CLOTHES"></img>
    <h2>Premium drop shoulder T-shirts(M 36)</h2>
    <NavLink to="/Section4"><button>EXPLORE</button></NavLink>
    </div>
    </div>
    </div>
    </div>
    <div className="contact">
    <div className="c1">
    <img src={CONTACT} alt="CONTACT CARD"></img>
    </div>
    <div className="c2">
    <h2>CONTACT DETAILS</h2>
    <a href="tel:7987311881"><button>CALL US</button></a>
    <a href="mailto:holikindustries@gmail.com"><button>EMAIL US</button></a>
    <a href={PDF} download="HOLIK INDUSTRIES"><button>CONTACT CARD</button></a>
    <form onSubmit={submitData}>
    <p>YOUR REQUIREMENTS</p>
    <input type="text" placeholder="ENTER YOUR EMAIL" autoComplete="off" name="email" onChange={handleData} value={data.email}></input>
    <input type="text" placeholder="ENTER YOUR REQUIREMENTS" autoComplete="off" name="suggestion" onChange={handleData} value={data.suggestion}></input>
    <button type="submit">SUBMIT</button>
    </form>
    </div>
    </div>
    <div className="container">
    <a href="https://api.whatsapp.com/send?phone=7987311881&text=Hello%2C+I+saw+your+ad+in+Instagram%2C+I+want+premium+drop+shoulder+t-shirts+for+reselling%21"><img src={WA} alt="WHATSAPP" className="WA" title="OPEN WHATSAPP"></img></a>
    </div>
    </>
)
}
export default Home;