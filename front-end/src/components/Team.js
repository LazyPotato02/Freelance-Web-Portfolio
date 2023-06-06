import './Team.css'
import React, {useEffect} from 'react';
import background from "./img/background.png";
import logo from "./img/logo.png";
import misho from "./img/misho.png"
import georgi from "./img/georgi.png"
import stoyan from "./img/stoyan.png"
function TeamHandler() {
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

    return (
        <main>
            <img src={background} alt="" className={'parallax bg-img2'} data-speed='0.3' data-distance="-200"/>
            <header className={'header'}>
                <nav>
                    <a href="/"> <img src={logo} alt="logo" className={'logo'}/></a>

                    <ul>
                        {/*<li>*/}
                        {/*    <a href="#">PROJECT</a>*/}
                        {/*</li>*/}
                        <li>
                            <a href="/team">TEAM</a>
                            {/*<i className="far fa-users"></i>*/}
                        </li>
                        <li>
                            <a href="/contact">CONTACT</a>
                            {/*<i className="far fa-users"></i>*/}
                        </li>
                    </ul>

                </nav>
            </header>
            <h1 className={'teamTitle'}>Our Team</h1>

            <section className={'teamHero'}>
                <article className={'team-article'}>
                    <img src={stoyan} alt=""/>
                    <h2>Name: Stoyan Kanev</h2>
                    <p>Software Engineer</p>
                    <h3>Experience: 4 years</h3>
                    <h4>Contact: email@email.com</h4>
                </article>
                <article className={'team-article'}>
                    <img src={misho} alt=""/>
                    <h2>Name: Mihail Punov</h2>
                    <p>Marketing Expert</p>
                    <h3>Experience: 2 years</h3>
                    <h4>Contact: email@email.com</h4>
                </article>
                <article className={'team-article'}>
                    <img src={georgi} alt=""/>
                    <h2>Name: Georgi Gushev</h2>
                    <p>Graphic Designer</p>
                    <h3>Experience: 3 years</h3>
                    <h4>Contact: email@email.com</h4>
                </article>
            </section>
        </main>
    )
}

export default TeamHandler