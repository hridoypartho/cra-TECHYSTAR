import React from 'react'
import vg from "../assets/2.webp"
import { AiFillGoogleCircle, AiFillAmazonCircle, AiFillYoutube, AiFillInstagram } from "react-icons/ai"
const Home = () => {
    return (
        <>
            <div className='home' id='home'>
                <main>
                    <h1>TechyStar</h1>
                    <p>Solution to all your problems</p>
                </main>
            </div>
            <div className="home2">
                <img src={vg} alt="Graphics" />
                <div>
                    <p>
                        We ar you one and onlyh solution to the tech problems you face every day. We are leading tech company whose aim is to increase th problem solving ability in children.
                    </p>
                </div>
            </div>
            <div className="home3" id='about'>
                <div>
                    <h1>Who we are?</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum rem unde iste accusantium ipsa architecto vitae dicta eligendi dignissimos sint dolorem veritatis sit odio ea, earum quasi perspiciatis dolore impedit magnam debitis mollitia. Temporibus ducimus earum id veniam, delectus a numquam ipsa? Magnam earum deserunt officia saepe, minima necessitatibus. Ex.</p>
                </div>
            </div>
            <div className="home4" id='brands'>
                <div>
                    <h1>Brands</h1>
                    <article>
                        <div style={{
                            animationDelay: "0.3s",
                        }}>
                            <AiFillGoogleCircle />
                            <p>Google</p>
                        </div>
                        <div style={{
                            animationDelay: "0.5s",
                        }}>
                            <AiFillAmazonCircle />
                            <p>Amazon</p>
                        </div>
                        <div style={{
                            animationDelay: "0.7s",
                        }}>
                            <AiFillYoutube />
                            <p>Youtube </p>
                        </div>
                        <div style={{
                            animationDelay: "1s",
                        }}>
                            <AiFillInstagram />
                            <p>Instagram </p>
                        </div>
                    </article>
                </div>
            </div>
        </>
    )
}

export default Home