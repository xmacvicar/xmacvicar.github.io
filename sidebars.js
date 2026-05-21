// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  docsSidebar: [
    'intro',
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
