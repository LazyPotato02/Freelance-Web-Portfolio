import './Main.css'
import logo from './img/logo.png'
import background from './img/background.png'
import shape1 from './img/left_bottom_shape.png'
import shape2 from './img/middle_shape.png'
import shape3 from './img/bottom_right_shape.png'
import React, {useEffect} from 'react';


function mainRender() {
    // eslint-disable-next-line react-hooks/rules-of-hooks
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
        <section>
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
            <main>
                <div className="vignette"></div>
                <img src={background} alt="" className={'parallax bg-img'} data-speed='0.3' data-distance="-200"/>
                <img src={shape1} alt="" className={'parallax shape-1'} data-speed='0.1' data-distance="-500"/>
                <img src={shape2} alt="" className={'parallax shape-2'} data-speed='0.1' data-distance="-500"/>
                <img src={shape3} alt="" className={'parallax shape-3'} data-speed='0.1' data-distance="-500"/>
                <img src={shape2} alt="" className={'shape-4'}/>
                <div className={'text'}>
                    <h1>TRIDIGITAL</h1>
                </div>
            </main>
        </section>
    )
}

export default mainRender