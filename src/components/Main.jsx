import React from 'react';
import './Main.css'
import { Link } from 'react-router-dom';

function Main() {
    return (
        <>
            <section className="NavSection">
                <div className="container">
                        <h1>Fast Accessibility Solution<br /> For WCAG & ADA<br />Compliance</h1>
                        <p>Wide Web by people with physical<br/>
                     disabilities,situational disabilities.</p> 
                    <div className="buttons">
                        <Link to='/sign-up'>
                        <button className="button1">Free Trial</button>
                        </Link> 
                        <button className="button2">Get Demo</button>
                    </div>
                </div>
            </section>
            <section className="cardSection">
                <h1>WEBACCESSIFY PROVIDES EASY ACCESSIBILITY</h1>
                <div className="flex-container">
                    <div className="cards">
                        <div className="image">
                            <img src="../images/card1-removebg-preview.png" alt="Avatar" />
                            <h2>Compliance With WCAG & ADA </h2>
                        </div>
                      
                        <p>WebAccessify is the platform that helps you to overcome digital barriers and get WCAG and ADA
                            Compliance easily from our best accessibility solutions.</p>
                    </div>
                    <div className="cards">
                        <div className="image">
                            <img src="../images/card2.png" alt="Avatar" />
                            <h2>Reduce Legal Risks</h2>
                        </div>
                        <p>Risk Mitigation to avoid lawsuits related to web accessibility is essential. WebAccessify can help
                            organizations of all sizes stay compliant with web accessibility standards, ensuring they are not
                            exposed to legal risk as a result.
                        </p>
                    </div>
                    <div className="cards">
                        <div className="image">
                            <img src="../images/card3-removebg-preview.png" alt="Avatar" />
                            <h2>Improve Usability & UI/UX</h2>
                        </div>
                        <p>WebAccessify improves your site’s accessibility, user experience, and usability. Easily navigate with
                            voice Navigation to improve accessibility for all users including those who are blind or visually
                            impaired while boosting SEO.</p>
                    </div>
                </div>
            </section>
            <section className="goalsSection">
                <div className="goalsContainer">
                    <h1>Web Accessibility for All, regardless of Ability</h1>
                    <div className="Img-container">
                        <img src="./images/Key.png" alt="" />
                        <div className="text-box">
                            <p>We understand that accessibility is something that should be cared about and that’s why we make
                                it our goal to provide the best accessibility solutions for users with disabilities, according
                                to WCAG standards.<br />
                                We are a team of experts working to provide accessibility solutions for disabled people. We are
                                always striving to make our solutions more responsive to user needs.</p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="imagesSection">
                <div className="images-container">
                    <div className="images"><img src="../images/img1.png" alt="" /></div>
                    <div className="images"><img src="../images/2nd img.png" alt="" /></div>
                    <div className="images"><img src="../images/img3.png" alt="" /></div>
                    <div className="images"><img src="../images/img4.png" alt="" /></div>
                </div>
            </section>
            <section className="priorities">
                <div className="img"></div>
                <div className="bg-text">
                    <h1><b>Website's Security & User's<br />
                        Privacy are top Priority</b> </h1>
                    <p>Our Widget is accessible to users with disabilities, making it easier for them to browse
                        <br /> through all the information. We are committed to protecting our customer’s data and
                        <br />maintaining the compliance level with WCAG, ADA, and GDPR compliance. Your data stays
                        <br /> private all the time.
                    </p>
                    <div>
                        <button className="button"><b>More on Security</b></button>
                    </div>
                </div>
            </section>
            <div className="text-container">
                <h1>Why is Web Accessibility so Important? </h1>
                <p>There are 2 billion people in the world who are disabled. Accessibility is the basic right of
                    <br />people with disabilities to use web in a way that others perceive, understand, and use.
                    <br />Accessibility is a lot more than the ability to see content on your screen. It’s a principle
                    <br /> that ensures all people with disabilities can interactin a way that communicates effectively
                    <br />and safely with a computer, software, and web application. Unfortunately, many sites are
                    <br /> not accessible and many people are not aware of it. We can make the world a better place for
                    <br />everyone by making websites accessible.
                </p>

            </div>
            <section className="ReasonSection">
                <h1>Why Choosing WEBAccessify ?</h1>
                <div className="flex-container">
                    <div className="features-cards">
                        <h2>Accessibility Features</h2>
                        <div className="content">
                            <img src="../images/imagee1.png" alt="Avatar" />
                            <p>Making the internet accessible is about leveling the playground for 20% of the world's
                                population.</p>
                        </div>
                    </div>
                    <div className="features-cards">
                        <h2>Fast , Secure and Reliable</h2>
                        <div className="content">
                            <img src="../images/imagee2.png" alt="Avatar" />
                            <p>Making the internet accessible is about leveling the playground for 20% of the world's
                                population.</p>
                        </div>
                    </div>
                    <div className="features-cards">
                        <h2>Stability</h2>
                        <div className="content">
                            <img src="../images/imagee3.png" alt="Avatar" />
                            <p>Making the internet accessible is about leveling the playground for 20% of the world's
                                population.</p>
                        </div>
                    </div>
                    <div className="features-cards">
                        <h2>Prices</h2>
                        <div className="content">
                            <img src="../images/imagee4.png" alt="Avatar" />
                            <p>Making the internet accessible is about leveling the playground for 20% of the world's
                                population.</p>
                        </div>
                    </div>
                </div>

            </section>
        </>
    )
}

export default Main
