<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Common Core Ontologies (CCO)</title>
        <style>
        table {
            width: 100%;
            border-collapse: collapse;
            margin-bottom: 20px;
        }
        th, td {
            padding: 10px;
            border: 1px solid #ddd;
            text-align: left;
        }
        th {
            background-color: #f4f4f4;
        }
    </style>
</head>
<body>
<h1>Common Core Ontologies (CCO)</h1>

<p>
  <strong>The Common Core Ontologies (CCO) are</strong> a modular suite of eleven interoperable ontologies that together provide a shared semantic framework for modeling entities, processes, qualities, and information across domains.
  <br><br>

  CCO enables different data systems to speak the same language, supporting consistent integration, reuse, and automated reasoning across applications and domains.
  <br><br>

  Originally initiated by
  <a href="https://www.cubrc.org/data-science-information-fusion/specialized-data-ontology-development/" target="_blank" rel="noopener noreferrer">CUBRC, Inc.</a>
  in 2010 under an IARPA Knowledge Discovery and Dissemination grant, CCO has been widely used within defense and intelligence contexts to support large-scale data integration and analysis. For many years, development and application occurred primarily in closed or mission-specific environments, shaped by operational requirements and mission-driven use cases.
  <br><br>

  Since becoming publicly available under a BSD-3 license in 2017, with an open
  <a href="https://github.com/CommonCoreOntology" target="_blank" rel="noopener noreferrer">GitHub repository</a>,
  CCO has seen growing adoption and external engagement across research, engineering, and scientific communities. This increased visibility has supported broader collaboration, independent evaluation, and reuse of CCO as a general-purpose semantic foundation.
  <br><br>

  In 2022, the Institute of Electrical and Electronics Engineers (IEEE) initiated the
  <a href="https://standards.ieee.org/project/3195.html" target="_blank" rel="noopener noreferrer">P3195 mid-level ontology standards project</a>,
  including formal review of CCO as part of its evaluation process. More recently, in 2024, CCO was endorsed as a baseline standard for formal ontology development across the
  <a href="https://www.buffalo.edu/ubnow/stories/2024/03/smith-ontology-standard.html" target="_blank" rel="noopener noreferrer">U.S. Department of Defense and Intelligence Community</a>.
</p>

<h2>Status and Scope</h2>

<p>
  CCO is a maintained, modular mid-level ontology suite designed to support reuse, extension, and alignment across domain ontologies and ontology-driven systems.
  <br><br>

  The core modules are intended to remain stable over time, providing a reliable semantic backbone for modeling entities, processes, qualities, and information. Domain extensions and application-specific ontologies are designed to evolve in response to new requirements and emerging use cases.
  <br><br>

  Development of CCO is ongoing and community-informed. Ontology updates are supported by open documentation, public discussion, and structured engagement activities that promote transparency in design decisions and practical application.
  <br><br>

  This approach allows CCO to remain stable at its core while continuing to evolve in response to new domains, emerging requirements, and interoperability challenges.
</p>

<h2>Community and Use in Practice</h2>

<p>
  The Common Core Ontologies are not only a formal ontology suite, but also the focus of active community engagement aimed at supporting practical use.
  <br><br>

  CCO is developed, discussed, and refined through open standards efforts, technical development groups, and user-facing forums. These activities are structured to support multiple levels of engagement.
  <br><br>

  New users often begin by attending office hours or consulting documentation to understand how CCO is applied in practice. More experienced users may participate in working groups or developer discussions focused on extending CCO, aligning it with related ontologies, or contributing to standards initiatives.
  <br><br>

  Across these activities, emphasis is placed on practical modeling questions, reuse of established design patterns, and transparency in architectural decisions.
</p>

<h1>Common Core Ontologies</h1>
<p>
The diagram below illustrates the structure of CCO and its core modules, showing how they extend from Basic Formal Ontology and support domain-specific extensions.
</p>
    <div class="center-text"><img src="https://raw.githubusercontent.com/CommonCoreOntology/cco-webpage/main/docs/assets/logos/BFO-CCO.png" alt="Common Core Ontologies" style="width:75%;"></div>
<h1>List of Common Core Modules</h1>
<p>
The table below lists the core CCO modules and summarizes the scope of each, illustrating how the suite provides reusable, domain-neutral building blocks for applied ontology development.
</p>
<table>
        <thead>
            <tr>
                <th>Common Core Module</th>
                <th>Scope</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td><a href="https://github.com/CommonCoreOntology/CommonCoreOntologies/blob/develop/src/cco-modules/GeospatialOntology.ttl" target="_blank">Geospatial Ontology</a></td>
                <td>Designed to represent sites, spatial regions, and other entities, especially those that are located near the surface of Earth, as well as the relations that hold between them.</td>
            </tr>
            <tr>
                <td><a href="https://github.com/CommonCoreOntology/CommonCoreOntologies/blob/develop/src/cco-modules/InformationEntityOntology.ttl" target="_blank">Information Entity Ontology</a></td>
                <td>Designed to represent generic types of information as well as the relationships between information and other entities.</td>
            </tr>
            <tr>
                <td><a href="https://github.com/CommonCoreOntology/CommonCoreOntologies/blob/develop/src/cco-modules/EventOntology.ttl" target="_blank">Event Ontology</a></td>
                <td>Designed to represent processual entities, especially those performed by agents, that occur within multiple domains.</td>
            </tr>
            <tr>
                <td><a href="https://github.com/CommonCoreOntology/CommonCoreOntologies/blob/develop/src/cco-modules/TimeOntology.ttl" target="_blank">Time Ontology</a></td>
                <td>Designed to represent temporal regions and the relations that hold between them.</td>
            </tr>
            <tr>
                <td><a href="https://github.com/CommonCoreOntology/CommonCoreOntologies/blob/develop/src/cco-modules/AgentOntology.ttl" target="_blank">Agent Ontology</a></td>
                <td>Designed to represent agents, especially persons and organizations, and their roles.</td>
            </tr>
            <tr>
                <td><a href="https://github.com/CommonCoreOntology/CommonCoreOntologies/blob/develop/src/cco-modules/QualityOntology.ttl" target="_blank">Quality Ontology</a></td>
                <td>Designed to represent a range of attributes of entities especially qualities, realizable entities, and process profiles.</td>
            </tr>
            <tr>
                <td><a href="https://github.com/CommonCoreOntology/CommonCoreOntologies/blob/develop/src/cco-modules/UnitsOfMeasureOntology.ttl" target="_blank">Units of Measure Ontology</a></td>
                <td>Designed to represent standard measurement units that are used when measuring various attributes of entities.</td>
            </tr>
            <tr>
                <td><a href="https://github.com/CommonCoreOntology/CommonCoreOntologies/blob/develop/src/cco-modules/CurrencyUnitOntology.ttl" target="_blank">Currency Unit Ontology</a></td>
                <td>Designed to represent the currencies that countries issue and use.</td>
            </tr>
            <tr>
                <td><a href="https://github.com/CommonCoreOntology/CommonCoreOntologies/blob/develop/src/cco-modules/FacilityOntology.ttl" target="_blank">Facility Ontology</a></td>
                <td>Designed to represent buildings and campuses that are designed to serve some specific purpose, and which are common to multiple domains.</td>
            </tr>
            <tr>
                <td><a href="https://github.com/CommonCoreOntology/CommonCoreOntologies/blob/develop/src/cco-modules/ArtifactOntology.ttl" target="_blank">Artifact Ontology</a></td>
                <td>Designed to represent artifacts that are common to multiple domains along with their models, specifications, and functions.</td>
            </tr>
            <tr>
                <td><a href="https://github.com/CommonCoreOntology/CommonCoreOntologies/blob/develop/src/cco-modules/ExtendedRelationOntology.ttl" target="_blank">Extended Relations Ontology</a></td>
                <td>Designed to represent many of the relations that hold between entities at the level of the mid-level Common Core Ontologies.</td>
            </tr>
        </tbody>
    </table>
</body>
</html>
