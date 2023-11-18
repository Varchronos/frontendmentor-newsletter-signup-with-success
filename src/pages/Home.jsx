import React, { useRef, useState } from 'react'
import listIcon from '../assets/icon-list.svg'
import banner from '../assets/banner.svg'
import './Home.css'
import { useNavigate } from 'react-router-dom'
const Home = () => {
    const [emailStatus, setEmailStatus] = useState(true);
    const email = useRef();
    const navigate = useNavigate();


    const submitHandeler = (event) => {
        event.preventDefault();
        if (email.current.value === '' || !email.current.value.includes('@')) {
            console.log('Form is invalid');
            setEmailStatus(false)
            return;
        }
        navigate('/success');
    }

    return (
        <>
            <div className="container">
                <div className="container_main">
                    <div className="container_main_text">
                        <h1>Stay Updated!</h1>
                        <p>Join 60,000+ product managers receiving monthly updates on:</p>
                        <ul>
                            <li>
                                <div className="container_main_listgroup">
                                    <img src={listIcon} alt="icon" />
                                    Product discovery and building what matters
                                </div>
                            </li>
                            <li>
                            <div className="container_main_listgroup">
                                <img src={listIcon} alt="icon" />
                                Measuring to ensure updates are a success
                            </div>
                            </li>
                            <li>
                            <div className="container_main_listgroup">
                                <img src={listIcon} alt="icon" />
                                And much more!
                            </div>
                            </li>
                        </ul>
                    </div>
                    <form className="container_main_form" onSubmit={submitHandeler}>
                        <div className="input_group">
                            <div className="label_group">
                                <label htmlFor="email">Email Address</label>
                                {!emailStatus && <span className='invalid_input'>Invalid Email!</span>}
                            </div>
                            <input type="text" name='email' id='email' className={`email_input ${emailStatus ? '' : 'invalid'}`} placeholder='email@company.com' ref={email} />
                            <button type='submit' >Subscribe to my monthly newsletter</button>

                        </div>
                    </form>
                </div>
                <div className="container_image">
                    <img src={banner} alt="banner" />
                </div>
            </div>
        </>
    )
}

export default Home