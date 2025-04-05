import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import './styles.css';

const PeopleList = [
  {
    name: 'Dr. Barry Smith',
    title: 'Director of NCOR',
    initials: 'BS',
    image: '/img/people/barry_smith.jpeg',
    affiliation: 'University at Buffalo',
    profileLink: 'https://www.linkedin.com/in/barry-smith-ontology/',
  },
  {
    name: 'Dr. John Beverley',
    title: 'Vice President of NCOR',
    initials: 'JB',
    image: '/img/people/john_beverley.jpeg',
    affiliation: 'University at Buffalo',
    profileLink: 'https://www.linkedin.com/in/john-beverley-869445a0/',
  },
  {
    name: 'Mark Jensen',
    title: 'Data Scientist',
    initials: 'MB',
    image: '/img/people/mark_jensen.jpeg',
    affiliation: 'U.S. Customs and Border Protection',
    profileLink: 'https://www.linkedin.com/in/mark-jensen-022a98103/',
  },
  {
    name: 'J. Neil Otte',
    title: 'Senior Ontologist',
    initials: 'NO',
    image: '/img/people/neil_otte.jpeg',
    affiliation: 'Johns Hopkins University Applied Physics Laboratory',
    profileLink: 'https://www.linkedin.com/in/j-neil-otte-56286211a/',
  },
];

function PersonCard({name, title, initials, image, affiliation, profileLink}) {
  return (
    <div className="personCard">
      {image ? (
        <div className="avatarImage">
          <img src={image} alt={`${name} profile`} />
        </div>
      ) : (
        <div className="avatarCircle">
          {initials}
        </div>
      )}
      <h3 className="personName">{name}</h3>
      <div className="personTitle">{title}</div>
      <div className="personAffiliation">{affiliation}</div>
      <Link to={profileLink} className="viewProfileLink">
        View Profile <span style={{ marginLeft: '4px' }}>→</span>
      </Link>
    </div>
  );
}

export default function PeopleSection() {
  return (
    <section className="peopleSection">
      <div className="container">
        <div className="peopleHeader">
          <h2 className="peopleTitle">Our <span className="highlight">People</span></h2>
          <p className="peopleDescription">
            CCO is part of the NCOR Network Open Source Projects, bringing together leading researchers, 
            philosophers, and computer scientists dedicated to advancing ontological standards.
          </p>
        </div>
        
        <div className="peopleCards">
          {PeopleList.map((props, idx) => (
            <PersonCard key={idx} {...props} />
          ))}
        </div>
        
        <div className="joinSection">
          <div className="joinContent">
            <h3 className="joinTitle">Join Our Network</h3>
            <p className="joinDescription">
              Become part of our international community of researchers and 
              practitioners advancing the field of ontology.
            </p>
          </div>
          <div className="joinButtons">
            <Link className="button button--primary joinButton" to="#">
              Join NCOR
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
} 