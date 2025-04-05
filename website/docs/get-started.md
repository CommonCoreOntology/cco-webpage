---
id: get-started
title: Get Started
sidebar_position: 1
slug: /get-started
description: Getting started with Common Core Ontologies (CCO)
---

# Get Started

Welcome to the Common Core Ontologies (CCO)! This guide will help you understand what CCO is, why you might want to use it, and how to get started implementing it in your projects.

## What is CCO?

The Common Core Ontologies (CCO) is a suite of eleven ontologies that provides a semantic foundation for:
- Data standardization and integration
- Knowledge representation across domains
- Unambiguous information exchange
- AI and machine learning systems

CCO serves as a "middle-level" ontology, bridging the gap between high-level abstract concepts and domain-specific implementations.

## Why Use CCO?

Organizations adopt CCO for several compelling reasons:

- **Standardization:** Establishes a common language for data across systems and departments
- **Interoperability:** Enables seamless data exchange between different applications
- **Semantic Clarity:** Reduces ambiguity in data representation
- **Reasoning Support:** Provides foundation for AI/ML systems that require semantic understanding
- **Community Backing:** Endorsed by major governmental and industry organizations
- **Proven Track Record:** Successfully implemented in defense, intelligence, healthcare, and other sectors

## Quick Start Guide

### 1. Install Required Tools

To work with CCO effectively, you'll need:

```bash
# Install Protégé for ontology visualization and editing
wget https://github.com/protegeproject/protege-distribution/releases/download/v5.5.0/Protege-5.5.0-linux.tar.gz
tar -xzf Protege-5.5.0-linux.tar.gz

# Or use another RDF/OWL tool of your choice
```

### 2. Get the CCO Files

```bash
# Clone the repository
git clone https://github.com/CommonCoreOntology/CommonCoreOntologies.git
cd CommonCoreOntologies
```

### 3. Choose Relevant Modules

CCO is modular by design. Choose the modules most relevant to your project:

| Core Module | When to Use |
|-------------|-------------|
| Geospatial Ontology | For applications involving locations, geographic features |
| Information Entity Ontology | For managing documents, data, and information objects |
| Agent Ontology | For representing people, organizations, and roles |
| Event Ontology | For tracking activities, processes, and events |
| Time Ontology | For temporal data and time-based relationships |

### 4. Import into Your Ontology

In your OWL file or using Protégé:

```xml
<owl:Ontology rdf:about="http://example.org/your-ontology">
    <owl:imports rdf:resource="https://raw.githubusercontent.com/CommonCoreOntology/CommonCoreOntologies/master/cco-merged.owl"/>
</owl:Ontology>
```

Or import specific modules as needed:
```xml
<owl:imports rdf:resource="https://raw.githubusercontent.com/CommonCoreOntology/CommonCoreOntologies/master/AgentOntology.owl"/>
```

## Common Implementation Patterns

CCO provides several design patterns to solve common modeling challenges:

- [Geospatial Tracking Pattern](/docs/design-patterns/geospatial-tracking) - For tracking objects in space
- [Information Entity Pattern](/docs/design-patterns/information) - For modeling documents and information artifacts

## Integration Examples

Here's an example of how you might extend CCO for a specific domain:

```turtle
@prefix : <http://example.org/healthcare#> .
@prefix cco: <https://github.com/CommonCoreOntology/CommonCoreOntologies/AgentOntology#> .
@prefix rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#> .
@prefix rdfs: <http://www.w3.org/2000/01/rdf-schema#> .
@prefix owl: <http://www.w3.org/2002/07/owl#> .

# Define a Healthcare Provider as a type of Organization from CCO
:HealthcareProvider rdf:type owl:Class ;
    rdfs:subClassOf cco:Organization ;
    rdfs:label "Healthcare Provider"@en .

# Define a Hospital as a type of Healthcare Provider
:Hospital rdf:type owl:Class ;
    rdfs:subClassOf :HealthcareProvider ;
    rdfs:label "Hospital"@en .
```

## Next Steps

Once you're familiar with the basics:

1. **Explore Design Patterns** - Learn about the [specific design patterns](/docs/design-patterns) CCO offers
2. **Join Working Groups** - Participate in [CCO working groups](/docs/support/working-groups)
3. **Attend Office Hours** - Get help at [scheduled office hours](/docs/support/office-hours)
4. **Review Documentation** - Dive deeper into the complete documentation

## Need Help?

- Check the [useful links](/docs/support/useful-links) for additional resources
- Explore the [GitHub repository](https://github.com/CommonCoreOntology/CommonCoreOntologies)
- Contact the CCO team through the [working groups](/docs/support/working-groups) 