import React from "react";

// Landing Page under Structure untill the Home Page is done

function Landing(){
    return (
        <>
            <div>
                <div className="landing-container">
                    <h1>Welcome to my Lab!</h1>
                    <p>Exciting things are coming soon. Stay tuned for updates!</p>

                    <div className="dots">
                        <div className="dot"></div>
                        <div className="dot"></div>
                        <div className="dot"></div>
                    </div>

                    <div className="social-icons flexy">
                        <h3 style={{ paddingTop: '1rem' }}>Visit my</h3>
                        <a href="https://linktr.ee/ColdByDefault" target="_blank" rel="noopener noreferrer">Link.tree</a>
                    </div>
                    <div>
                        <h4 className="text-4xl font-bold text-blue-400">ColdByDefault</h4>
                    </div>
                </div>
            </div>
            </>
    )
}

export default Landing;