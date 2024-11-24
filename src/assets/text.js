// Images for "Experiences" section
import gsoc from './gsoc.png';
import dexcom_logo from './dexcom_logo.png';
import ucsd_seal from './ucsd_seal.png';
import ucsb_seal from './ucsb_seal.png';
import pramantha from './pramantha.png';
// Images for "Education" section
import ucsd from './ucsd.png';
import ucsb from './ucsb.png';
// Images for "Projects" section
import ct_scans from './ct_scans.jpg';
import integratable from './integratable.png';
import rapido from './rapido.png';
import nbc from './nbc_investigates.png';
import sbhacks_v from './sbhacks_v.jpg';
import cover from './cover.jpg';

const experiences = [
    {
        "employer": "Dexcom",
        "position": "Sr. Data Scientist/ML Engineer",
        "duration": "Jul. 2024 - Present",
        "location": "Remote",
        "image": dexcom_logo,
        "highlights": [
            {
                "name": "AI-based health features",
                "desc": "Developed and implemented products and tools powered by AI that support the wellbeing of millions of people living with diabetes and empower them in managing their condition."
            },
        ]
    },
    {
        "employer": "Würthwein-Yagil Group",
        "position": "Graduate Student Researcher",
        "duration": "Jan. 2020 - Jun. 2024",
        "location": "San Diego, CA",
        "image": ucsd_seal,
        "highlights": [
            {
                "name": "VBS Higgs Analyses",
                "desc": "Performed a variety of searches for anomalous Higgs boson couplings via the production of a Higgs and vector boson(s) by vector boson scattering. Wrote performant C++ analysis code to down-select petabytes of CMS proton-proton collision data to the megabytes relevant to analysis. Leveraged Python-based data science tools to turn that data into physics insights. Synthesized results into technical presentations and scientific publications (in preparations) presented to an international audience of peers."
            },
            {
                "name": "Particle Tracking ML",
                "desc": "Explored and implemented machine learning (DNNs, GNNs) solutions for resolving particle tracks out of massive point clouds with large-throughput and high-efficiency. Designed ML training pipeline, compared performance against existing track quality selections, and successfully incorporated ML into a highly parallelizable prototype."
            },
            {
                "name": "Rucio-SENSE Interoperation",
                "desc": "Pioneered the interoperation of exascale software-defined networking (SENSE) with the data management software (Rucio) used at the LHC. Prototyped keystone software in Python for Rucio-SENSE interoperation. Deployed project testbed via Kubernetes."
            },
            {
                "name": "XRootD HTTPS Benchmarking",
                "desc": "Helped benchmark XRootD file-transfer performance when using HTTPS in order to show that it can provide the 500 Gb/s transfer speeds needed for the HL-LHC."
            },
            {
                "name": "US-CMS Tier 2 Data Manager",
                "desc": "Helped manage 3 petabytes of CMS data stored at the UCSD Tier 2 computing facility which services thousands of scientists. Assisted in transfer of this data to a new system."
            },
        ]
    },
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
        "employer": "Campagnari Group",
        "position": "Undergraduate Student Researcher",
        "duration": "Dec. 2016 - Jun. 2019",
        "location": "Santa Barbara, CA",
        "image": ucsb_seal,
        "highlights": [
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
        "degree": "M.S. Physics, PhD. Physics",
        "duration": "Sep. 2019 - Jun. 2024",
        "location": "San Diego, CA",
        "image": ucsd,
        "highlights": [
            {
                "name": "GPA",
                "desc": "3.83"
            },
            {
                "name": "Thesis Topic",
                "desc": "Measurements of the Higgs Boson through Vector Boson Scattering and Software and Computing for Exascale Data Science"
            },
            {
                "name": "Relevant Coursework",
                "desc": "Mathematical Methods in Physics, Classical Mechanics, Computational Physics"
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
        "name": "RAPIDO",
        "type": "C++ library",
        "image": rapido,
        "desc": "C++ framework for performing LHC data analysis with easy-to-use tools designed to build a clean and repeatable framework.",
        "href": "https://github.com/jkguiang/rapido"
    },
    {
        "name": "NBC 7 Investigates",
        "type": "News Article",
        "image": nbc,
        "desc": "Analyzed police employment data for the entire state of California for an NBC 7 Investigates article reporting on the outflux of San Diego police officers.",
        "href": "https://www.nbcsandiego.com/news/investigations/nbc-7-investigates-san-diego-police-officers-fleeing-the-force/2918582/"
    },
    {
        "name": "Radiology ML",
        "type": "Preliminary Work",
        "image": ct_scans,
        "desc": "Completed preliminary work towards developing convolutional deep-learning algorithms for analyzing CT scans of Covid-19 pneumonia and lung cancer towards clinical utility in collaboration with UCSD radiologists",
        "href": "https://github.com/sam-may/zephyr"
    },
    {
        "name": "Integratable",
        "type": "Web Application",
        "image": integratable,
        "desc": "A public tool that provides useful integrals on an interactive, modern platform. Uses a React-based frontend and evaluates known definite integrals using Javascript mathematics functions.",
        "href": "https://jkguiang.github.io/integratable"
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
