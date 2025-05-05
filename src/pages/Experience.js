import React from 'react';
import './Experience.css';
import { Card, CardContent, Typography, Divider, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import { ChevronRight } from '@mui/icons-material';

const Experience = () => {
  const experiences = [
    {
      title: 'Data Analyst Intern (Remote)',
      company: 'Evergreen Digital Technology Solution Academy',
      location: '',
      date: 'Dec 1, 2023 – Present',
      responsibilities: [
        'Gathered relevant data from multiple sources.',
        'Cleaned and prepared data for analysis.',
        'Performed statistical analysis to extract insights.',
        'Created interactive dashboards using Power BI and Excel.',
        'Generated stakeholder reports.',
        'Collaborated with team members and mentors on data-driven projects.',
        'Engaged in continuous learning (Excel, Power BI, SQL).',
      ],
    },
    {
      title: 'Data Officer (Consultant)',
      company: 'Jhpiego (Johns Hopkins University Affiliate)',
      location: 'Bauchi State',
      date: 'Mar 20 – Apr 30, 2024',
      responsibilities: [
        'Extracted and validated health facility data using RedCap.',
        'Conducted structured interviews with healthcare staff.',
        'Implemented data quality control processes.',
        'Ensured ethical compliance and secure data storage.',
      ],
    },
    {
      title: 'Enumerator',
      company: 'TCDI in partnership with WFP',
      location: 'Machina & Nguru LGAs, Yobe State',
      date: 'Jul 28 – Sep 2024',
      responsibilities: [
        'Collected demographic data and biometric records using the SCOPE system.',
        'Verified and updated beneficiary records.',
        'Trained staff and ensured secure handling of participant data.',
        'Generated monitoring and evaluation reports.',
      ],
    },
    {
      title: 'Field Enumerator',
      company: 'Data-Lead Africa with Action Against Hunger',
      location: 'Monguno, Borno State',
      date: 'Sep 5 – Sep 14, 2024',
      responsibilities: [
        'Conducted surveys and KIIs using KoboCollect.',
        'Transcribed FGDs and IDIs with local stakeholders.',
        'Adhered to PSEAH and cultural sensitivity standards.',
        'Submitted daily field reports to the project team lead.',
      ],
    },
    {
      title: 'Data Analytics Tutor (Remote)',
      company: 'Japa Talent Technology School',
      location: '',
      date: 'Nov 8, 2024 – Jan 26, 2025',
      responsibilities: [
        'Delivered live and recorded training in Excel, Power BI, and data analysis.',
        'Created lesson plans and interactive learning materials.',
        'Provided technical support and personalized feedback to students.',
        'Developed a curriculum aligned with industry trends.',
      ],
    },
    {
      title: 'Data Entry Officer',
      company: 'Preston Associate with NCDC',
      location: '',
      date: 'Apr 1 – Nov 30, 2023',
      responsibilities: [
        'Collected quantitative and qualitative health data using SurveyCTO.',
        'Participated in FGDs and in-depth interviews.',
        'Compiled reports and maintained digital and paper-based records.',
        'Transcribed interviews and cleaned datasets for analysis.',
      ],
    },
    {
      title: 'Assistant Administrative Officer / Data Clerk (NYSC)',
      company: 'Delta State Waste Management Board',
      location: 'Delta State',
      date: 'Apr 2022 – Mar 2023',
      responsibilities: [
        'Provided administrative and data entry support.',
        'Maintained documents, correspondence, and schedules.',
        'Supported office budgeting and coordinated with external stakeholders.',
        'Prepared reports and managed office supplies inventory.',
      ],
    },
  ];

  return (
    <div className="experience-container">
      
      <Typography variant="h5" gutterBottom style={{ fontWeight: 'bold', marginBottom: '24px' }}>
        Professional Experience
      </Typography>
      
      {experiences.map((exp, index) => (
        <Card key={index} style={{ marginBottom: '20px', borderRadius: '12px', boxShadow: '0 4px 12px rgba(78, 156, 250, 0.1)' }}>
          <CardContent>
            <Typography variant="h6" style={{ fontWeight: '600', color: '#274C77' }}>
              {exp.title}
            </Typography>
            <Typography variant="body2" color="textSecondary">
              {exp.company} — {exp.location} <br />
              <span style={{ color: 'grey' }}>{exp.date}</span>
            </Typography>
            <Divider style={{ margin: '20px 0' }} />
            <List dense>
              {exp.responsibilities.map((item, i) => (
                <ListItem key={i}>
                  <ListItemIcon>
                    <ChevronRight color="primary" />
                  </ListItemIcon>
                  <ListItemText primary={item} />
                </ListItem>
              ))}
            </List>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default Experience;
