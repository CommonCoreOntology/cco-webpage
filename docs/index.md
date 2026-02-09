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
Common Core Ontologies (CCO) is a suite of eleven interoperable ontologies that together form a mid-level ontology. CCO is designed to provide a shared semantic foundation for representing entities, processes, qualities, and information across domains, supporting data standardization, interoperability, reproducibility, and automated reasoning.
<br><br>
Originally initiated by <a href="https://www.cubrc.org/data-science-information-fusion/specialized-data-ontology-development/" target="_blank">CUBRC, Inc.</a> in 2010 under an IARPA Knowledge Discovery and Dissemination grant, CCO has been widely used within defense and intelligence contexts to support large-scale data integration and analysis. For many years, development and application occurred primarily in closed or mission-specific environments.
<br><br>
Since becoming publicly available under a BSD-3 license in 2017, with an open <a href="https://github.com/CommonCoreOntology" target="_blank">GitHub repository</a>, CCO has seen growing adoption and external engagement across research, engineering, and scientific communities. This increased visibility has supported broader collaboration and evaluation of CCO as a reusable semantic foundation.
<br><br>
In 2022, the Institute of Electrical and Electronics Engineers (IEEE) <a href="https://standards.ieee.org/ieee/3195/11025/" target="_blank">P3195 working group</a> initiated a review of CCO as part of an effort to define requirements for mid-level ontologies. More recently, in 2024, CCO was endorsed as a baseline standard for formal ontology development across the <a href="https://www.buffalo.edu/ubnow/stories/2024/03/smith-ontology-standard.html" target="_blank">U.S. Department of Defense and Intelligence Community</a>.
</p>
    <h2>Status and Scope</h2>
<p>
CCO is a maintained, modular mid-level ontology suite intended to support reuse, extension, and alignment across domain ontologies and ontology-driven systems. The core modules are designed to remain stable over time, while domain extensions and application-specific ontologies evolve to meet emerging use cases. Development is ongoing and community-informed, with public documentation and discussion supporting transparent adoption and use.
</p>

<p>
The diagram below illustrates the structure of CCO and its core modules, showing how they extend from Basic Formal Ontology and support domain-specific extensions.
</p>
<h1>Common Core Ontologies</h1>     
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
