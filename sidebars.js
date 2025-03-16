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
  // Collection sidebar
  collectionSidebar: [
    {
      type: 'category',
      label: 'Collection',
      link: {
        type: 'doc',
        id: 'collection/collection',
      },
      items: [
        // Digital Assets section
        {
          type: 'category',
          label: 'Digital Assets',
          link: {
            type: 'doc',
            id: 'collection/digital-assets/digital-assets',
          },
          items: [
            'collection/digital-assets/apex-dieties',
            'collection/digital-assets/cublyx',
            'collection/digital-assets/soul-tokens',
            'collection/digital-assets/holy-shit',
          ],
        },
        // Removed AI with UP section as it's now at the top level
      ],
    },
  ],

  // AI with 🆙 sidebar
  aiWithUpSidebar: [
    {
      type: 'category',
      label: 'AI with Universal Profiles',
      link: {
        type: 'doc',
        id: 'AI with 🆙/index',
      },
      items: [
        'AI with 🆙/current-approaches',
        'AI with 🆙/universal-profiles',
      ],
    },
  ],

  // But you can create a sidebar manually
  /*
  tutorialSidebar: [
    'intro',
    'hello',
    {
      type: 'category',
      label: 'Tutorial',
      items: ['tutorial-basics/create-a-document'],
    },
  ],
   */
};

export default sidebars;
