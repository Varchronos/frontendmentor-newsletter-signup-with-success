import React from 'react'
import successIcon from '../assets/icon-success.svg'
import './Success.css'
import { useNavigate } from 'react-router-dom'
const Success = () => {
    const navigate = useNavigate();
    const buttonHandeler = ()=>{
        navigate('..')
    }

    return (
        <>
            <div className="container_success">
                <div className="container_success_body">
                <div className="icon_place">
                    <img src={successIcon} alt="success" />
                </div>
                <div className="container_success_main">
                    <h1>Thanks for subscribing!</h1>
                    <p>A confirmation email has been sent to
                        <span> ash@loremcompany.com</span>. Please open it and click
                        the button inside to confirm your subscription.</p>
                    <button onClick={buttonHandeler}>Dismiss message</button>
                </div>
                </div>
            </div>
        </>
    )
}

export default Success