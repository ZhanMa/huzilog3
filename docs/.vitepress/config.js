export default {
  base: '/huzilog3/',
  title: 'HuziLog',
  description: 'Vite & Vue powered static site generator.',
  themeConfig: {
    nav: [
      { text: 'Guide', link: '/guide/' },
      { text: 'Config', link: '/config' },
      { text: 'Changelog', link: 'https://github.com/...' },
      {
        text: 'Dropdown Menu',
        items: [
          { text: 'Item A', link: '/item-1' },
          { text: 'Item B', link: '/item-2' },
          { text: 'Item C', link: '/item-3' }
        ]
      },
      {
        text: 'Dropdown Menu2',
        items: [
          {
            // Title for the section.
            text: 'Section A Title',
            items: [
              { text: 'Section A Item A', link: '...' },
              { text: 'Section B Item B', link: '...' }
            ]
          }
        ]
      },
      {
        text: 'Dropdown Menu1',
        items: [
          {
            // You may also omit the title.
            items: [
              { text: 'Section A Item A', link: '...' },
              { text: 'Section B Item B', link: '...' }
            ]
          }
        ]
      }
    ],
    sidebar: [
      {
        text: 'Section Title A',
        collapsed: false,
        items: [
           { text: '2023收藏文章', link: '/post/favorites-2023-z' },
            { text: '2023其他', link: '/post/other-2023' },
            { text: '2023搜索收藏', link: '/post/baidugoogle' }
        ]
      },
      
      {
        text: 'Section Title B',
        collapsed: true,
        items: [
           { text: 'Index', link: '/config1/' },
           
        ]
      },
      {
        text: '入门',
        collapsed: true,
        items: [
           { text: 'htmlcss', link: '/chuxue/html' },
           
        ]
      },
    ]
  }

}