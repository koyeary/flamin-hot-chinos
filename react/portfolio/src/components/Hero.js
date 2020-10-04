import React from 'react'
import AboutMe from './AboutMe'

function Hero() {

    return (
        <div>
            <div className="hero-section">
                <div className="grid-container grid-x align-middle">
                    <div className="cell">
                        <div className="typewriter align-left">Hi, I'm Kat Yeary.</div>
                        <p class="align-left">I'm a software engineer in Los Angeles, CA.</p>
                        <div className="delay-visibility align-center">
                            <a className="button large hero-buttons" href="#aboutme">About Me</a>

                        </div>
                    </div>
                </div>

            </div>
        </div>)
}


export default Hero;