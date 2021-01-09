export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5ff4c0b66ee02501360aceb2',
                  title: 'Sanity Studio',
                  name: 'home-schooling-motivation-studio',
                  apiId: '64ed2c8c-5154-4b83-b3f8-ec0cb7ded86f'
                },
                {
                  buildHookId: '5ff4c0b63a0d4a01323f8d57',
                  title: 'Portfolio Website',
                  name: 'home-schooling-motivation',
                  apiId: '1e879b09-ef7d-4a1b-9937-72089acde1b2'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/mhaack/home-schooling-motivation',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://home-schooling-motivation.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent Cards', order: '_createdAt desc', types: ['card']},
      layout: {width: 'medium'}
    }
  ]
}
