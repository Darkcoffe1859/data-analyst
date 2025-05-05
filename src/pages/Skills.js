import React from 'react';
import './Skills.css';
import { FaCheckCircle } from 'react-icons/fa';

const skills = [
  "Respect for clients/respondents at all times",
  "Multilingual: English, Igbo, Hausa, and Pidgin",
  "Analytical thinking and technical report writing",
  "Facilitation of FGDs and Key Informant Interviews (KIIs)",
  "Proficient in Microsoft Word, Excel, Outlook, and PowerPoint",
  "Record keeping and basic report writing",
  "Ability to adapt and work under pressure",
  "Strong interpersonal and organizational skills",
  "Team player with flexibility",
  "Excellent oral and written communication",
  "Expert in community engagement techniques",
  "Leadership and detail-oriented approach",
  "Expert in electronic data collection tools: SurveyCTO, Kobo Collect, RedCap, ODK, SCOPE registration, CATI",
];

function Skills() {
  return (
    <div className="skills-wrapper">
      <div className="skills-header">
        <h1>Core Competencies</h1>
        <p>A comprehensive list of key skills and areas of expertise.</p>
      </div>
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div className="skill-item" key={index}>
            <FaCheckCircle className="skill-icon" />
            <span>{skill}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;
