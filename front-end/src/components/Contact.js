import React, {useEffect, useState} from 'react';

import axios from 'axios';
import background from "./img/background.png";
import './Contact.css'
import logo from "./img/logo.png";

function ContactForm() {
    const [formData, setFormData] = useState({name: '', email: '', message: ''});
    const [status, setStatus] = useState(null);


    useEffect(() => {
        let xValue = 0, yValue = 0;

        const handleElementManipulation = () => {

            const element = document.querySelectorAll('.parallax');
            if (element) {
                // Perform actions with the selected element
                window.addEventListener("mousemove", (e) => {
                    xValue = e.clientX - window.innerWidth / 2;
                    yValue = e.clientY - window.innerHeight / 2;
                    element.forEach(el => {
                        let speed = el.dataset.speed;
                        el.style.transform = `translateX(calc(-50% + ${xValue * speed}px)) translateY(calc(-50% + ${yValue * speed}px))`
                    })
                })
            }
        };
        handleElementManipulation();

    }, []);

    const handleChange = (event) => {
        setFormData({...formData, [event.target.name]: event.target.value});
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        fetch("https://discord.com/api/webhooks/1114563123672784906/ue04D6LJc17uARN8Yr99_hqLQkhIgi_18iAgJC1Fj8Lp63AjaorjKYaPf1h42YQxjCkK", {
            body: JSON.stringify({
                content: `Name: ${formData.name} Email: ${formData.email} Message: ${formData.message}`,
            }),
            headers: {
                "Content-Type": "application/json",
            },
            method: "POST",
        })
            .then(function (res) {
                document.getElementById("form").reset();
                console.log(res);
            })
            .catch(function (res) {
                console.log(res);
            });
    };
        return (
            <main>
                <header className={'header'}>
                    <nav>
                        <a href="/"> <img src={logo} alt="logo" className={'logo'}/></a>

                        <ul>
                            {/*<li>*/}
                            {/*    <a href="#">PROJECT</a>*/}
                            {/*</li>*/}
                            <li>
                                <a href="/team">TEAM</a>
                            </li>
                            <li>
                                <a href="/contact">CONTACT</a>
                            </li>
                        </ul>

                    </nav>
                </header>
                <img src={background} alt="" className={'parallax bg-img3'} data-speed='0.3' data-distance="-200"/>
                <h2 className={'contact-title'}>Contact Us</h2>

                <div className={'contact-wrapper'}>
                    <h1>Contact Form</h1>
                    {status === 'success' ? (
                        <p>Form submitted successfully!</p>
                    ) : (
                        <div className={'box'}>
                            <form className={'form'} onSubmit={handleSubmit}>
                                <div className={'inputBox'}>
                                    <input
                                        type="text"
                                        name="name"
                                        id="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                    />
                                    <span>Name:</span>
                                    <i></i>
                                </div>
                                <br/>
                                <div className={'inputBox'}>
                                    <input
                                        type="email"
                                        name="email"
                                        id="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                    />
                                    <span>Email:</span>
                                    <i></i>
                                </div>
                                <br/>
                                <div className={'inputBox'}>
                                    {/*<input*/}
                                    {/*    className={'resizable-input'}*/}
                                    {/*    type="text"*/}
                                    {/*    name="message"*/}
                                    {/*    id="message"*/}
                                    {/*    value={formData.message}*/}
                                    {/*    onChange={handleChange}*/}
                                    {/*    required*/}
                                    {/*/>*/}
                                    <textarea
                                        name="message"
                                        id="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                    ></textarea>
                                    <span>Message:</span>
                                    <i></i>

                                </div>
                                <br/>
                                <button type="submit">Submit</button>
                            </form>
                        </div>
                    )}
                </div>
            </main>
        );
    }

    export default ContactForm