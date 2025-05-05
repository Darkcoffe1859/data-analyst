import React from 'react';
import './Home.css';


function Home() {
    return (
        <div className="home-container">
            <div className="home-left">
                <h1>Hi, There!!! <br/>I'm Ebebe Esther Adaeze</h1>
                <p>
                    I am a graduate of Biochemistry, experienced in data collection and facilitation in
                    emergency response, humanitarian intervention and developmental interventions
                    Skilled in data analysis, reporting data validation and capacity building. Eager to find
                    position in your organization, trustworthy and also reliable, a team player who believes
                    in the synergy, overall success, friendliness, and strength and accomplishment in what life
                    and circumstances entails.

                </p>
                <button className="about-btn">More About Me</button>
            </div>
            <div className="home-right">
                <img src="/profile.jpeg" alt="Profile" className="profile-img" />
            </div>
        </div>
    );
}

export default Home;