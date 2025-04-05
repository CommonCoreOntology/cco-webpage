// @ts-check

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.

 @type {import('@docusaurus/plugin-content-docs').SidebarsConfig}
 */
const sidebars = {
  docs: [
    'get-started',
    {
      type: 'category',
      label: 'About',
      link: {
        type: 'doc',
        id: 'about/mission',
      },
      items: [
        'about/mission',
        'about/board',
        'about/affiliates',
        'about/users',
        'about/publications'
      ]
    },
    {
      type: 'category',
      label: 'Design Patterns',
      link: {
        type: 'doc',
        id: 'design-patterns/geospatial-tracking',
      },
      items: [
        'design-patterns/geospatial-tracking',
        'design-patterns/information'
      ]
    },
    {
      type: 'category',
      label: 'Support',
      link: {
        type: 'doc',
        id: 'support/office-hours',
      },
      items: [
        'support/office-hours',
        'support/working-groups',
        'support/useful-links'
      ]
    }
  ]
};

export default sidebars;
