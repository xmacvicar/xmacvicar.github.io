// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  docsSidebar: [
    'intro',
    {
      type: 'category',
      label: 'Event Scan App',
      collapsed: false,
      items: [
        'event-scan-app/intro',
        'event-scan-app/scanning-tickets',
        'event-scan-app/order-search',
        'event-scan-app/scan-stats',
        'event-scan-app/troubleshooting',
      ],
    },
    {
      type: 'category',
      label: 'Obsidian PKM Guide',
      collapsed: false,
      items: [
        'obsidian-pkm/overview',
        'obsidian-pkm/setup',
        'obsidian-pkm/para-structure',
      ],
    },
  ],
};

module.exports = sidebars;
