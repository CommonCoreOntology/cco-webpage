import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';
import Link from '@docusaurus/Link';
import React from 'react';

const ModulesList = [
  {
    title: 'Geospatial Ontology',
    url: 'https://github.com/CommonCoreOntology/CommonCoreOntologies/blob/develop/src/cco-modules/GeospatialOntology.ttl',
    description: 'Designed to represent sites, spatial regions, and other entities, especially those that are located near the surface of Earth, as well as the relations that hold between them.',
    icon: '🌎',
  },
  {
    title: 'Information Entity Ontology',
    url: 'https://github.com/CommonCoreOntology/CommonCoreOntologies/blob/develop/src/cco-modules/InformationEntityOntology.ttl',
    description: 'Designed to represent generic types of information as well as the relationships between information and other entities.',
    icon: '📊',
  },
  {
    title: 'Event Ontology',
    url: 'https://github.com/CommonCoreOntology/CommonCoreOntologies/blob/develop/src/cco-modules/EventOntology.ttl',
    description: 'Designed to represent processual entities, especially those performed by agents, that occur within multiple domains.',
    icon: '⏰',
  },
  {
    title: 'Time Ontology',
    url: 'https://github.com/CommonCoreOntology/CommonCoreOntologies/blob/develop/src/cco-modules/TimeOntology.ttl',
    description: 'Designed to represent temporal regions and the relations that hold between them.',
    icon: '🕒',
  },
  {
    title: 'Agent Ontology',
    url: 'https://github.com/CommonCoreOntology/CommonCoreOntologies/blob/develop/src/cco-modules/AgentOntology.ttl',
    description: 'Designed to represent agents, especially persons and organizations, and their roles.',
    icon: '👥',
  },
  {
    title: 'Quality Ontology',
    url: 'https://github.com/CommonCoreOntology/CommonCoreOntologies/blob/develop/src/cco-modules/QualityOntology.ttl',
    description: 'Designed to represent a range of attributes of entities especially qualities, realizable entities, and process profiles.',
    icon: '✨',
  },
  {
    title: 'Units of Measure Ontology',
    url: 'https://github.com/CommonCoreOntology/CommonCoreOntologies/blob/develop/src/cco-modules/UnitsOfMeasureOntology.ttl',
    description: 'Designed to represent standard measurement units that are used when measuring various attributes of entities.',
    icon: '📏',
  },
  {
    title: 'Currency Unit Ontology',
    url: 'https://github.com/CommonCoreOntology/CommonCoreOntologies/blob/develop/src/cco-modules/CurrencyUnitOntology.ttl',
    description: 'Designed to represent the currencies that countries issue and use.',
    icon: '💵',
  },
  {
    title: 'Facility Ontology',
    url: 'https://github.com/CommonCoreOntology/CommonCoreOntologies/blob/develop/src/cco-modules/FacilityOntology.ttl',
    description: 'Designed to represent buildings and campuses that are designed to serve some specific purpose, and which are common to multiple domains.',
    icon: '🏢',
  },
  {
    title: 'Artifact Ontology',
    url: 'https://github.com/CommonCoreOntology/CommonCoreOntologies/blob/develop/src/cco-modules/ArtifactOntology.ttl',
    description: 'Designed to represent artifacts that are common to multiple domains along with their models, specifications, and functions.',
    icon: '🔧',
  },
  {
    title: 'Extended Relations Ontology',
    url: 'https://github.com/CommonCoreOntology/CommonCoreOntologies/blob/develop/src/cco-modules/ExtendedRelationOntology.ttl',
    description: 'Designed to represent many of the relations that hold between entities at the level of the mid-level Common Core Ontologies.',
    icon: '🔗',
  },
];

function Module({title, url, description, icon, index}) {
  // Add staggered animation delay
  const animationDelay = `${0.1 + (index * 0.05)}s`;
  
  return (
    <div 
      className={clsx('card', styles.moduleCard)} 
      style={{animationDelay}}
    >
      <div className={styles.moduleIconWrapper}>
        <span className={styles.moduleIcon}>{icon}</span>
      </div>
      <div className="card__header">
        <Heading as="h3" className={styles.moduleTitle}>
          <Link to={url} className={styles.moduleLink}>
            {title}
          </Link>
        </Heading>
      </div>
      <div className="card__body">
        <p className={styles.moduleDescription}>{description}</p>
      </div>
      <div className="card__footer">
        <Link
          className={clsx('button button--outline button--sm', styles.moduleButton)}
          to={url}>
          View Module
        </Link>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          <div className="col col--8 col--offset-2">
            <Heading as="h2" className={styles.modulesTitle}>
              Common Core Modules
            </Heading>
            <p className={styles.modulesSubtitle}>
              A comprehensive suite of interoperable ontology modules designed for semantic interoperability
            </p>
          </div>
        </div>
        <div className={styles.modulesWrapper}>
          <div className={styles.moduleContainer}>
            {ModulesList.map((props, idx) => (
              <Module key={idx} index={idx} {...props} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
