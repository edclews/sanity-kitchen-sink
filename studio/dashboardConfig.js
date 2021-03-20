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
                  buildHookId: '60566be526de52f0e952d587',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-i1g3xb39',
                  apiId: '46f457d4-264d-43a6-938c-f3677d97ecc3'
                },
                {
                  buildHookId: '60566be53e6336fa56bca45d',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-pty4r38t',
                  apiId: '234fcd9a-d991-48ed-8bed-2b6e2c87bce7'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/edclews/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-pty4r38t.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
