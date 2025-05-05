import React from 'react';
import './About.css';

function About() {
    return (
        <div className="about-container">
            <div className="about-left">
                <h1>Hi, I’m <span className="highlight">Ebebe Esther Adaeze</span></h1>
                <h2>Data Analyst | Biochemistry Graduate</h2>
                <p>
                    I'm a Biochemistry graduate experienced in data collection, facilitation, and humanitarian interventions. 
                    Skilled in data analysis, reporting, validation, and capacity building. 
                    I'm trustworthy, a team player, and committed to driving impactful outcomes through data.
                </p>

                <blockquote>
                    “Turning raw data into impactful insights.”
                </blockquote>

                <h3>Skills</h3>
                <ul className="skills-list">
                    <li>Data Analysis (Excel, Power BI, SQL, Python)</li>
                    <li>Report Writing & Visualization</li>
                    <li>Field Data Collection</li>
                    <li>Team Collaboration</li>
                </ul>

                <h3>Certifications</h3>
                <ul className="cert-list">
                    <li>Google Data Analytics Certificate</li>
                    <li>Humanitarian Response Training</li>
                </ul>

                <a
                href="https://drive.google.com/file/d/1LdN-GN2VcItZ4jAXYVhTxQbb4mK4KERO/view?usp=drivesdk"
                target="_blank"
                rel="noopener noreferrer"
                className="resume-btn"
                >
                  Download Resume
                </a>

                </div>

            <div className="about-right">
                <img src="/profile.jpeg" alt="Profile" className="about-img" />
            </div>
        </div>
    );
}

export default About;
