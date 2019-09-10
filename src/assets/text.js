// Images for "Experiences" section
import gsoc from './gsoc.png';
import ucsb_physics from './ucsb_physics.jpg';
import pramantha from './pramantha.png';
// Images for "Education" section
import ucsd from './ucsd.png';
import ucsb from './ucsb.png';
// Images for "Projects" section
import integrals from './integrals.jpg';
import sbhacks_v from './sbhacks_v.jpg';
import cover from './cover.jpg';

const experiences = [
    {
        "employer": "Google Summer of Code",
        "position": "Student Developer",
        "duration": "May 2019 - Aug. 2019",
        "location": "San Diego, CA",
        "image": gsoc,
        "highlights": [
            {
                "name": "Overview",
                "desc": "Developed open source software for CERN-HSF with funding from Google Summer of Code."
            },
            {
                "name": "TUDA",
                "desc": "Tools for Understanding (CMS) Data Access. Produced a set of tools for cleansing, extracting, and visualizing cache access pattern data. Analyzed and presented insights provided by these tools in order to demonstrate their effectiveness."
            },
        ]
    },
    {
        "employer": "UC Santa Barbara",
        "position": "Undergraduate Student Researcher",
        "duration": "Dec. 2016 - Jun. 2019",
        "location": "Santa Barbara, CA",
        "image": ucsb_physics,
        "highlights": [
            {
                "name": "Overview",
                "desc": "Worked on a number of projects for a CMS High Energy research group led by Dr. Claudio Campagnari. Developed a number of experimentalist skills from circuit design and hardware construction to software development and data analysis."
            },
            {
                "name": "Search for Rare Higgs Decays",
                "desc": "Novel search for H to rho/phi+gamma decays using events from a sample of proton-proton collisions collected with the CMS detector to probe Higgs couplings to light, flavored quarks."
            },
            {
                "name": "MTD Simulation",
                "desc": "Developed software for optimizing the design for the MIP Timing Detector to be constructed for the HL-LHC upgrade. Used simulated particle kinematics in addition to a tunable OpenSCAD 3D model of the sensor layout to measure the efficiency and other response characteristics of the detector in direct collaboration with the team responsible for its construction."
            },
            {
                "name": "AutoDQM",
                "desc": "Conceptualized, designed, and implemented a statistical tool for data quality management with an online graphical interface for ease of use. Continued collaboration with another student in Switzerland to further improve the platform and market it to other research groups."
            },
        ]
    },
    {
        "employer": "Pramantha Solutions",
        "position": "Consultant",
        "duration": "Aug. 2016 - Dec. 2016",
        "location": "San Diego, CA",
        "image": pramantha,
        "highlights": [
            {
                "name": "Overview",
                "desc": "Designed intuitive user interfaces for proof of concept images used in professional presentations and prototype applications."
            }
        ]
    },
];

const universities = [
    {
        "university": "UC San Diego",
        "degree": "PhD. Physics",
        "duration": "Sep. 2019 - Present",
        "location": "San Diego, CA",
        "image": ucsd,
        "highlights": [
            {
                "name": "GPA",
                "desc": "N/A (Incoming)"
            },
            {
                "name": "Thesis Topic",
                "desc": "(To be announced)"
            },
            {
                "name": "Relevant Coursework",
                "desc": "N/A (Incoming)"
            },
            {
                "name": "Fellowships/Awards",
                "desc": "Sloan Scholar Fellowship, Physics Excellence Award"
            }
        ]
    },
    {
        "university": "UC Santa Barbara",
        "degree": "B.S. Physics",
        "duration": "Sep. 2015 - Jun. 2019",
        "location": "Santa Barbara, CA",
        "image": ucsb,
        "highlights": [
            {
                "name": "GPA",
                "desc": "3.73"
            },
            {
                "name": "Relevant Coursework",
                "desc": "Particle Physics, Analog Electronics, Quantum Mechanics, Electromagnetism, Advanced Classical Mechanics, Linear Algebra, Complex Analysis"
            },
            {
                "name": "Awards",
                "desc": "Highest Academic Honors, Research Excellence Award, Distinction in the Major"
            },
            {
                "name": "Activities",
                "desc": "Robotics Club, Bachelor's Honors Senior Thesis"
            }
        ]
    }
];

const projects = [
    {
        "name": "Integratable",
        "type": "Web Application",
        "image": integrals,
        "desc": "A public tool that provides useful integrals on an interactive, modern platform. Uses a React-based frontend and evaluates known definite integrals using Javascript mathematics functions.",
        "href": "https://github.com/jkguiang/integratable"
    },
    {
        "name": "ChompChapp",
        "type": "SB Hacks V",
        "image": sbhacks_v,
        "desc": "Selected as one of the top six projects of the event. Made intelligent restaurant suggestions based on subconscious user preference. Javascript/JQuery webpage served by Flask/Celery on a Redis server. Powered by a Python backend with Tensorflow and Keras ML models.",
        "href": "https://devpost.com/software/chompchap"
    },
    {
        "name": "This Website",
        "type": "Website",
        "image": cover,
        "desc": "The simple, sleek, one-page website you are currently perusing. Uses React and assets from Bootstrap and Fontawesome. Hosted by Github Pages.",
        "href": "https://github.com/jkguiang/jguiang.com"
    }
];

export { experiences, universities, projects };
