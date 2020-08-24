import React, { Component } from 'react'

class Hero extends Component {

    render() {
        return (

            <div className="hero-section">
                    <div className="grid-container grid-x align-middle align-left">
                        <div className="cell">
                            <div className="typewriter">Hi, I'm Kat Yeary.</div>
                            <p>I'm a software engineer in Los Angeles, CA.</p>
                            <div className="delay-visibility">
                                <a className="button large hero-buttons align-center" href="#aboutme">About Me</a>

                            </div>
                        </div>
                    </div>

            </div> )
}
}

export default Hero;