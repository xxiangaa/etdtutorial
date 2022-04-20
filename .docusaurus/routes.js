
import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug','3d6'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config','914'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content','c28'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData','3cf'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata','31b'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry','0da'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes','244'),
    exact: true
  },
  {
    path: '/blog/archive',
    component: ComponentCreator('/blog/archive','f4c'),
    exact: true
  },
  {
    path: '/markdown-page',
    component: ComponentCreator('/markdown-page','be1'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs','fd7'),
    routes: [
      {
        path: '/docs/chain',
        component: ComponentCreator('/docs/chain','cd3'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/ETD/',
        component: ComponentCreator('/docs/ETD/','612'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/ETD/blockchain',
        component: ComponentCreator('/docs/ETD/blockchain','524'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/ETD/connect',
        component: ComponentCreator('/docs/ETD/connect','2e0'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/ETD/nft',
        component: ComponentCreator('/docs/ETD/nft','e2d'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/ETD/pk',
        component: ComponentCreator('/docs/ETD/pk','71a'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/ETD/wallet',
        component: ComponentCreator('/docs/ETD/wallet','e51'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/hash',
        component: ComponentCreator('/docs/hash','41b'),
        exact: true,
        'sidebar': "tutorialSidebar"
      }
    ]
  },
  {
    path: '/',
    component: ComponentCreator('/','deb'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*')
  }
];
