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
    <h1>Common Core Ontoloies (CCO)</h1>
    <p>The <a href="https://github.com/CommonCoreOntology" target="_blank">Common Core Ontologies (CCO)</a> is suite of eleven ontologies which, collectively, comprise a <a href="https://arxiv.org/pdf/2404.17757" target="_blank">mid-level ontology</a>. CCO - initiated by CUBRC, Inc. in 2010 under an IARPA Knowledge Discovery and Dissemination grant - is widely-used in defense and intelligence sectors to support data standardization, interoperability, reproducibility, and automated reasoning across numerous domains. Accordingly, CCO development and application was, for many years, conducted without much transparency. As of 2017, however, CCO has been available under a BSD-3 license with a public GitHub repository open to collaboration. Making CCO publicly available has led to significant increase of interest in CCO development. For example, in 2022 the Institute of Electrical and Electronics Engineers (IEEE) <a href="https://standards.ieee.org/ieee/3195/11025/" target="_blank">P3195 Standard for Requirements for a Mid-Level Ontology and Extensions working group</a> initiated a review of CCO to become the first mid-level ontology standard. More recently, in 2024 CCO was endorsed as a “baseline standard” for <a href="https://www.buffalo.edu/ubnow/stories/2024/03/smith-ontology-standard.html" target="_blank">formal ontology development across the Department of Defense and Intelligence Community</a>. 
     <div class="center-text"><img src="https://raw.githubusercontent.com/CommonCoreOntology/cco-webpage/main/docs/assets/logos/BFO-CCO.png" alt="Common Core Ontologies" style="width:50%;"></div>
<h1>Common Core Ontologies</h1>
    <table>
        <thead>
            <tr>
                <th>Common Core Module</th>
                <th>Scope</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td><a href="#">Geospatial Ontology</a></td>
                <td>Designed to represent sites, spatial regions, and other entities, especially those that are located near the surface of Earth, as well as the relations that hold between them.</td>
            </tr>
            <tr>
                <td><a href="#">Information Entity Ontology</a></td>
                <td>Designed to represent generic types of information as well as the relationships between information and other entities.</td>
            </tr>
            <tr>
                <td><a href="#">Event Ontology</a></td>
                <td>Designed to represent processual entities, especially those performed by agents, that occur within multiple domains.</td>
            </tr>
            <tr>
                <td><a href="#">Time Ontology</a></td>
                <td>Designed to represent temporal regions and the relations that hold between them.</td>
            </tr>
            <tr>
                <td><a href="#">Agent Ontology</a></td>
                <td>Designed to represent agents, especially persons and organizations, and their roles.</td>
            </tr>
            <tr>
                <td><a href="#">Quality Ontology</a></td>
                <td>Designed to represent a range of attributes of entities especially qualities, realizable entities, and process profiles.</td>
            </tr>
            <tr>
                <td><a href="#">Units of Measure Ontology</a></td>
                <td>Designed to represent standard measurement units that are used when measuring various attributes of entities.</td>
            </tr>
            <tr>
                <td><a href="#">Currency Unit Ontology</a></td>
                <td>Designed to represent currencies that are issued and used by countries.</td>
            </tr>
            <tr>
                <td><a href="#">Facility Ontology</a></td>
                <td>Designed to represent buildings and campuses that are designed to serve some specific purpose, and which are common to multiple domains.</td>
            </tr>
            <tr>
                <td><a href="#">Artifact Ontology</a></td>
                <td>Designed to represent artifacts that are common to multiple domains along with their models, specifications, and functions.</td>
            </tr>
            <tr>
                <td><a href="#">Extended Relations Ontology</a></td>
                <td>Designed to represent many of the relations that hold between entities at the level of the mid-level Common Core Ontologies.</td>
            </tr>
        </tbody>
    </table>
    <p>CCO modules are not intended to provide an exhaustive taxonomy of all possible entities within scope but instead provide guardrails for extending the top-level semantics of BFO into more specific domains. For example, the Artifact Ontology is a guide for extending the semantics of artifact into specific domains of interest, such as medical artifacts, scientific artifacts, military artifacts, and so on.</p>
</body>
</html>