# Common Core Ontologies (CCO) Website

![CCO Banner](website/static/img/cco-banner.png)

This repository contains the official website for the Common Core Ontologies (CCO), an international standard providing the semantic foundation for trusted AI systems, unambiguous data exchange, and knowledge representation across critical domains.

## Overview

The Common Core Ontologies (CCO) is a suite of eleven ontologies which, collectively, comprise a mid-level ontology framework. This website serves as the central hub for documentation, resources, and community information related to CCO.

## Quick Start

### Prerequisites

- Node.js ≥ 18.0.0
- Yarn

### Development

Clone the repository and install dependencies:

```bash
# Clone the repository
git clone https://github.com/CommonCoreOntology/cco-webpage.git
cd cco-webpage

# Install dependencies
yarn install

# Start the development server
yarn start
```

The site will be available at http://localhost:3000/

### Build

To build the static site:

```bash
yarn build
```

To preview the build:

```bash
yarn serve
```

## Project Structure

```
website/
├── docs/            # Documentation markdown files
├── src/             # React components and custom CSS
│   ├── components/  # Reusable components
│   ├── css/         # Custom CSS styles
│   └── pages/       # Custom React pages
├── static/          # Static assets (images, etc.)
└── docusaurus.config.js  # Main configuration
```

## Deployment

The website is automatically deployed to GitHub Pages when changes are pushed to the main branch. The deployment is handled by a GitHub Action defined in `.github/workflows/deploy.yml`.

## Contributing

We welcome contributions to improve the CCO website! Please follow these steps:

1. Fork the repository
2. Create a new branch for your feature (`git checkout -b feature/amazing-feature`)
3. Make your changes
4. Commit your changes (`git commit -m 'Add some amazing feature'`)
5. Push to the branch (`git push origin feature/amazing-feature`)
6. Open a Pull Request

### Documentation Guidelines

- Place new documentation in the `website/docs/` directory
- Use appropriate frontmatter for each document (title, sidebar_position, etc.)
- Include descriptive images where helpful
- Follow markdown best practices

## License

This project is licensed under the BSD-3 License - see the LICENSE file for details.

## Contact

For questions about CCO, please contact the team at info@ncor.org or visit the [Board of Directors](https://commoncoreontology.github.io/docs/about/board) page.

## Acknowledgments

- Common Core Ontologies were initiated by CUBRC, Inc. in 2010 under an IARPA Knowledge Discovery and Dissemination grant
- CCO development is overseen by The Common Core Board of Directors

---

Built with [Docusaurus](https://docusaurus.io/)
