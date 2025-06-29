import React,{useState,useRef} from 'react';
import axios from 'axios'
import './styles/ContactUs.css'
import ReCAPTCHA from "react-google-recaptcha";

const RECAPTCHA_SITE_KEY ='6Lea5l0rAAAAALGmyxN6KsvCbfIwcU8ieKgNl3G1';

export default function ContactUs(){
    const [form,setForm]=useState({name:'',email:'',phone:'',topic:'',message:''});
    const [msg,setMsg]=useState('');
    const [captchaToken, setCaptchaToken] = useState('');
    const recaptchaRef = useRef();

    const handleChange=(event)=>{
        const name=event.target.name;
        const value=event.target.value;
        setForm((prev)=>({...prev,[name]:value}));
    };

    const handleSubmit=async (event)=>{
        event.preventDefault();
        if (!captchaToken) return alert("Please verify you're not a robot.");
        try{
            console.log('good to go');
            const res=await axios.post(`${process.env.REACT_APP_API_BASE_URL}/api/contact`,{...form,token: captchaToken});
            console.log('submitted successfully');
            setForm({ name: '', email: '', phone: '', topic: '', message: '' });
            setMsg(<pre>{`${res.data}\n\nReload the page to send the message again`}</pre>);
            recaptchaRef.current.reset();
        }
        catch(error){
            console.log('error');
            console.log(error.message);
            setMsg("Submission failed. Please try again.");
        }
        
    }

    return (
        <form onSubmit={handleSubmit}>
            <h2>Contact Us</h2>
            <input type="text" name="name" placeholder="Your Name" onChange={handleChange} />
            <input type="email" name="email" placeholder="Your Email" onChange={handleChange} required/>
            <input type="text" name="phone" placeholder="Your mobile number (optional)" onChange={handleChange} />
            <select name="topic" onChange={handleChange}>
                <option value="">Select a Topic</option>
                <option value="General Inquiry">General Inquiry</option>
                <option value="Support">Support</option>
                <option value="Feedback">Feedback</option>
            </select>
            <div>
                <textarea name="message" placeholder="Your Message" onChange={handleChange} required/>
            </div>
            <ReCAPTCHA 
            sitekey={RECAPTCHA_SITE_KEY}
            onChange={token => setCaptchaToken(token)}
            ref={recaptchaRef}
            />
            <button type="submit">Submit</button>
            <p>{msg}</p>
        </form>
    );
}
